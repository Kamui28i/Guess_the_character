import { NextResponse } from "next/server";
import { createClient } from "@libsql/client/web";

export async function GET() {
  const url = process.env.TURSO_DATABASE_URL;
  const authToken = process.env.TURSO_AUTH_TOKEN;

  if (!url) return NextResponse.json({ error: "TURSO_DATABASE_URL not set" }, { status: 500 });

  try {
    const client = createClient({ url, authToken });
    const result = await client.execute("SELECT 1 AS ok");
    const tables = await client.execute("SELECT name FROM sqlite_master WHERE type='table'");
    return NextResponse.json({
      status: "connected",
      url: url.replace(/\/\/.*@/, "//***@"),
      rows: result.rows,
      tables: tables.rows.map((r) => r.name),
    });
  } catch (err) {
    return NextResponse.json({ error: String(err) }, { status: 500 });
  }
}
