import { NextRequest, NextResponse } from "next/server";

/**
 * Only IDs verified with high confidence.
 * Low-numbered IDs (early MAL entries) are very reliable.
 * Uncertain IDs are omitted — those characters will use search instead.
 */
const MAL_IDS: Record<string, number> = {
  "spike-spiegel": 1,
  "ichigo-kurosaki": 5,
  "edward-elric": 11,
  "sasuke-uchiha": 13,
  "naruto-uzumaki": 17,
  "gon-freecss": 30,
  "killua": 27,
  "luffy": 40,
  "light-yagami": 80,
  "kakashi-hatake": 85,
  "goku": 246,
  "lelouch": 417,
  "conan-edogawa": 1742,
  "vegeta": 913,
  "guts": 422,
  "natsu-dragneel": 5187,
  "zoro": 62,
  "eren-yeager": 40882,
  "mikasa-ackerman": 40881,
  "levi": 45627,
  "saitama": 73935,
  "deku": 117909,
  "all-might": 117921,
  "tanjiro-kamado": 146156,
  "gojo-satoru": 164471,
  "makima": 170734,
  "frieren": 184947,
  "asta": 124731,

  // new characters
  "nezuko-kamado": 146157,
  "zenitsu-agatsuma": 146158,
  "yuji-itadori": 163847,
  "zero-two": 155679,
  "hisoka": 31,
  "aizen-sosuke": 1086,
  "madara-uchiha": 53901,
  "shigaraki-tomura": 122103,
  "power": 170733,
  "denji": 170732,
  "megumi-fushiguro": 164470,
  "kirito": 36765,
  "vash-stampede": 162,
  "usagi-tsukino": 2030,
  "senku-ishigami": 148984,
  "griffith": 424,
  "dio-brando": 4004,
  "johan-liebert": 719,
  "meruem": 23277,
  "yusuke-urameshi": 729,
  "violet-evergarden": 141354,
  "motoko-kusanagi": 1795,
  "ryuk": 75,
  "thorfinn": 10138,

  // Gintama
  "gintoki-sakata": 672,
  "kagura-gintama": 674,
  "toshiro-hijikata": 2650,
  "kotaro-katsura": 1533,
  "shinsuke-takasugi": 2948,

  // Haikyuu!!
  "shoyo-hinata": 64769,

  // Fate/stay night
  "saber": 497,
  "rin-tohsaka": 498,
  "archer-emiya": 2087,
  "gilgamesh-fate": 2514,

  // JoJo's Bizarre Adventure
  "jotaro-kujo": 4003,

  // Re:Zero
  "emilia-rezero": 118737,
  "subaru-natsuki": 118735,
};

interface JikanChar {
  name: string;
  images: { jpg: { image_url: string } };
  favorites: number;
}

async function fetchByMalId(id: number): Promise<{ url: string | null; status?: number }> {
  const res = await fetch(`https://api.jikan.moe/v4/characters/${id}`, {
    headers: { "User-Agent": "GuessTheCulprit/1.0" },
    next: { revalidate: 86400 },
  });
  if (!res.ok) return { url: null, status: res.status };
  const data = await res.json();
  return { url: data?.data?.images?.jpg?.image_url ?? null };
}

/** Score how well a MAL character name matches the expected display name. */
function nameScore(malName: string, expected: string): number {
  const mal = malName.toLowerCase().replace(/[^a-z ]/g, "");
  const exp = expected.toLowerCase().replace(/[^a-z ]/g, "");
  const expParts = exp.split(" ");
  // Count how many parts of the expected name appear in the MAL name
  return expParts.filter((p) => p.length > 1 && mal.includes(p)).length;
}

interface JikanCharWithAnime extends JikanChar {
  anime?: { title: string }[];
}

/** Score how well a result's anime list contains the expected series name. */
function seriesScore(item: JikanCharWithAnime, series: string): number {
  if (!series || !item.anime?.length) return 0;
  const s = series.toLowerCase();
  return item.anime.some((a) => a.title.toLowerCase().includes(s.split(":")[0].trim())) ? 1 : 0;
}

async function fetchBySearch(name: string, series?: string): Promise<{ url: string | null; status?: number }> {
  // Queries to try: full name, name+series hint, first word
  const queries: string[] = [name];
  if (series) queries.push(`${name.split(" ")[0]} ${series.split(":")[0].split(" ").slice(0, 2).join(" ")}`);
  queries.push(name.split(" ")[0]);

  for (const q of queries) {
    const res = await fetch(
      `https://api.jikan.moe/v4/characters?q=${encodeURIComponent(q)}&limit=10`,
      {
        headers: { "User-Agent": "GuessTheCulprit/1.0" },
        next: { revalidate: 86400 },
      }
    );
    if (!res.ok) return { url: null, status: res.status };

    const data = await res.json();
    const items: JikanCharWithAnime[] = data?.data ?? [];
    if (!items.length) continue;

    // Rank by: series match first, then name match, then favorites
    const ranked = [...items].sort((a, b) => {
      const seriesDiff = seriesScore(b, series ?? "") - seriesScore(a, series ?? "");
      if (seriesDiff !== 0) return seriesDiff;
      const nameDiff = nameScore(b.name, name) - nameScore(a.name, name);
      return nameDiff !== 0 ? nameDiff : b.favorites - a.favorites;
    });

    const best = ranked[0];
    if (best?.images?.jpg?.image_url) {
      return { url: best.images.jpg.image_url };
    }
  }
  return { url: null };
}

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const slug = searchParams.get("slug") ?? "";
  const name = searchParams.get("name") ?? "";
  const series = searchParams.get("series") ?? "";

  if (!name && !slug) return NextResponse.json({ imageUrl: null, source: null }, { status: 400 });

  try {
    let imageUrl: string | null = null;
    let source: "mal-id" | "search" | null = null;
    let errorStatus: number | undefined;

    if (slug && MAL_IDS[slug] !== undefined) {
      const r = await fetchByMalId(MAL_IDS[slug]);
      imageUrl = r.url;
      if (imageUrl) source = "mal-id";
      else errorStatus = r.status;
    }

    if (!imageUrl && name) {
      const r = await fetchBySearch(name, series || undefined);
      imageUrl = r.url;
      if (imageUrl) source = "search";
      else errorStatus = errorStatus ?? r.status;
    }

    return NextResponse.json({
      imageUrl,
      source,
      malId: slug ? MAL_IDS[slug] ?? null : null,
      errorStatus: imageUrl ? undefined : errorStatus,
    });
  } catch (err) {
    return NextResponse.json({ imageUrl: null, source: null, malId: null, errorStatus: 500, errorMsg: String(err) });
  }
}
