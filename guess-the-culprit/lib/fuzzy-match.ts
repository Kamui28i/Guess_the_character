import Fuse from "fuse.js";
import { CHARACTERS, Character } from "./characters";
import { FUZZY_MATCH_THRESHOLD } from "@/config";

interface SearchItem {
  slug: string;
  displayName: string;
  series: string;
  aliases: readonly string[];
}

const searchItems: SearchItem[] = CHARACTERS.map((c) => ({
  slug: c.slug,
  displayName: c.displayName,
  series: c.series,
  aliases: c.aliases,
}));

const fuse = new Fuse(searchItems, {
  keys: ["displayName", "aliases", "series"],
  threshold: FUZZY_MATCH_THRESHOLD,
  includeScore: true,
});

/**
 * Returns the best-matching character slug for a free-text input,
 * or null if no match is confident enough.
 */
export function fuzzyMatch(input: string): Character | null {
  const results = fuse.search(input.trim());
  if (results.length === 0) return null;
  const best = results[0];
  const found = CHARACTERS.find((c) => c.slug === best.item.slug);
  return found ?? null;
}

/**
 * Returns true if the input fuzzy-matches the given character's slug.
 */
export function isCorrectAnswer(input: string, answerSlug: string): boolean {
  const match = fuzzyMatch(input);
  return match?.slug === answerSlug;
}
