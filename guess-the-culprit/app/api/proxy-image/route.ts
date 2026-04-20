import { NextRequest, NextResponse } from "next/server";

/**
 * Same-origin image proxy — lets the canvas draw MAL images without CORS issues.
 * GET /api/proxy-image?url=https://...
 */
export async function GET(req: NextRequest) {
  const url = req.nextUrl.searchParams.get("url");
  if (!url) return new NextResponse(null, { status: 400 });

  try {
    const res = await fetch(url, {
      headers: { "User-Agent": "GuessTheCulprit/1.0" },
      next: { revalidate: 86400 },
    });
    if (!res.ok) return new NextResponse(null, { status: 502 });

    const buffer = await res.arrayBuffer();
    return new NextResponse(buffer, {
      headers: {
        "Content-Type": res.headers.get("Content-Type") ?? "image/jpeg",
        "Cache-Control": "public, max-age=86400",
      },
    });
  } catch {
    return new NextResponse(null, { status: 502 });
  }
}
