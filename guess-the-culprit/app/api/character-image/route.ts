import { NextRequest, NextResponse } from "next/server";

/**
 * Only IDs verified with high confidence.
 * Low-numbered IDs (early MAL entries) are very reliable.
 * Uncertain IDs are omitted — those characters will use search instead.
 */
const MAL_IDS: Record<string, number> = {
  "spike-spiegel":    1,
  "ichigo-kurosaki":  5,
  "edward-elric":     11,
  "sasuke-uchiha":    13,
  "naruto-uzumaki":   17,
  "gon-freecss":      30,
  "killua":           27,
  "luffy":            40,
  "light-yagami":     80,
  "kakashi-hatake":   85,
  "goku":             246,
  "lelouch":          417,
  "conan-edogawa":    1742,
  "vegeta":           913,
  "guts":             422,
  "natsu-dragneel":   5187,
  "zoro":             62,
  "eren-yeager":      40882,
  "mikasa-ackerman":  40881,
  "levi":             45627,
  "saitama":          73935,
  "deku":             117909,
  "all-might":        117921,
  "tanjiro-kamado":   146156,
  "gojo-satoru":      164471,
  "makima":           170734,
  "frieren":          184947,
  "asta":             124731,

  // new characters
  "nezuko-kamado":    146157,
  "zenitsu-agatsuma": 146158,
  "yuji-itadori":     163847,
  "zero-two":         155679,
  "hisoka":           31,
  "aizen-sosuke":     1086,
  "madara-uchiha":    53901,
  "shigaraki-tomura": 122103,
  "power":            170733,
  "denji":            170732,
  "megumi-fushiguro": 164470,
  "kirito":           36765,
  "vash-stampede":    162,
  "usagi-tsukino":    2030,
  "senku-ishigami":   148984,
  "griffith":         424,
  "dio-brando":       4004,
  "johan-liebert":    719,
  "meruem":           23277,
  "yusuke-urameshi":  729,
  "violet-evergarden":141354,
  "motoko-kusanagi":  1795,
  "ryuk":             75,
  "thorfinn":         10138,
};

interface JikanChar {
  name: string;
  images: { jpg: { image_url: string } };
  favorites: number;
}

async function fetchByMalId(id: number): Promise<string | null> {
  const res = await fetch(`https://api.jikan.moe/v4/characters/${id}`, {
    headers: { "User-Agent": "GuessTheCulprit/1.0" },
    next: { revalidate: 86400 },
  });
  if (!res.ok) return null;
  const data = await res.json();
  return data?.data?.images?.jpg?.image_url ?? null;
}

/** Score how well a MAL character name matches the expected display name. */
function nameScore(malName: string, expected: string): number {
  const mal = malName.toLowerCase().replace(/[^a-z ]/g, "");
  const exp = expected.toLowerCase().replace(/[^a-z ]/g, "");
  const expParts = exp.split(" ");
  // Count how many parts of the expected name appear in the MAL name
  return expParts.filter((p) => p.length > 1 && mal.includes(p)).length;
}

async function fetchBySearch(name: string): Promise<string | null> {
  // Try the full name, then just the first word (given name)
  const queries = [name, name.split(" ")[0]];

  for (const q of queries) {
    const res = await fetch(
      `https://api.jikan.moe/v4/characters?q=${encodeURIComponent(q)}&limit=10`,
      {
        headers: { "User-Agent": "GuessTheCulprit/1.0" },
        next: { revalidate: 86400 },
      }
    );
    if (!res.ok) continue;

    const data = await res.json();
    const items: JikanChar[] = data?.data ?? [];
    if (!items.length) continue;

    // Rank by: name-match score first, favorites as tiebreaker
    const ranked = [...items].sort((a, b) => {
      const scoreDiff = nameScore(b.name, name) - nameScore(a.name, name);
      return scoreDiff !== 0 ? scoreDiff : b.favorites - a.favorites;
    });

    const best = ranked[0];
    if (best?.images?.jpg?.image_url) {
      return best.images.jpg.image_url;
    }
  }
  return null;
}

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const slug = searchParams.get("slug") ?? "";
  const name = searchParams.get("name") ?? "";

  if (!name && !slug) return NextResponse.json({ imageUrl: null }, { status: 400 });

  try {
    let imageUrl: string | null = null;

    if (slug && MAL_IDS[slug] !== undefined) {
      imageUrl = await fetchByMalId(MAL_IDS[slug]);
    }

    if (!imageUrl && name) {
      imageUrl = await fetchBySearch(name);
    }

    return NextResponse.json({ imageUrl });
  } catch {
    return NextResponse.json({ imageUrl: null });
  }
}
