import { CHARACTERS, Character, Tier } from "./characters";
import {
  ROUNDS_PER_GAME,
  TIMER_SECONDS,
  BASE_CORRECT_POINTS,
  TIME_BONUS_PER_SECOND,
  STREAK_BONUS_EVERY,
  STREAK_BONUS_POINTS,
  HINT_PENALTY_PERCENT,
  DETAIL_PENALTY_PER_REVEAL,
  DIFFICULTY_MULTIPLIERS,
  DISTRACTOR_COUNT,
  MAX_DETAILS,
} from "@/config";

export type ClueMode = "description" | "sketch" | "bodypart" | "mixed" | "pixelated" | "details";

export type ActiveClueMode = "description" | "sketch" | "bodypart" | "pixelated" | "details";

export interface Round {
  character: Character;
  clueMode: ActiveClueMode;
  descriptionIndex: number; // 0=hardest, 2=easiest
  choices: Character[]; // 4 items; answer is included
  answerSlug: string;
}

export interface GameState {
  difficulty: Tier;
  clueMode: ClueMode;
  rounds: Round[];
  currentRound: number;
  score: number;
  streak: number;
  hintsUsed: boolean[];
  results: ("correct" | "wrong" | "skip")[];
}

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function pickDistractors(answer: Character, pool: Character[], count: number): Character[] {
  let same = pool.filter(
    (c) => c.slug !== answer.slug && c.tier === answer.tier && c.series !== answer.series
  );
  let fallback = pool.filter(
    (c) => c.slug !== answer.slug && !same.includes(c)
  );

  const distractors: Character[] = [];
  const shuffledSame = shuffle(same);
  const shuffledFallback = shuffle(fallback);

  for (const c of [...shuffledSame, ...shuffledFallback]) {
    if (distractors.length >= count) break;
    distractors.push(c);
  }
  return distractors;
}

function clueIndexForDifficulty(tier: Tier): number {
  if (tier === "easy") return 2;
  if (tier === "medium") return 1;
  return 0;
}

function pickClueMode(mode: ClueMode): ActiveClueMode {
  if (mode === "mixed") {
    const options: ActiveClueMode[] = ["description", "sketch", "bodypart", "pixelated", "details"];
    return options[Math.floor(Math.random() * options.length)];
  }
  return mode as ActiveClueMode;
}

/** Sanitize a string by redacting the character's name, series, and aliases. */
function sanitize(text: string, character: Character): string {
  let result = text;
  const terms = [character.displayName, character.series, ...character.aliases];
  for (const term of terms) {
    const escaped = term.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    result = result.replace(new RegExp(escaped, "gi"), "█████");
  }
  return result;
}

/** Generate up to 10 progressive clues for the details mode, from vague to obvious. */
export function getCharacterDetails(character: Character): string[] {
  const { tier, sketchHints, bodyPartHints, funFacts, descriptions } = character;

  // Clue 1: difficulty tier hint
  const tierHint =
    tier === "easy"
      ? "This is a very iconic character — recognisable across all of anime fandom."
      : tier === "medium"
      ? "This character is well-known within dedicated anime circles."
      : "This is a deep-cut character — a true fan would know them.";

  // Clue 2: gender/body archetype from sketchHints.headShape
  const hs = sketchHints.headShape.toLowerCase();
  let bodyHint: string;
  if (hs.includes("feminine")) {
    bodyHint = "This character presents as female.";
  } else if (hs.includes("monster") || hs.includes("shinigami")) {
    bodyHint = "This character has an inhuman or monstrous appearance.";
  } else if (hs.includes("child")) {
    bodyHint = "This character appears young — child-sized or youthful.";
  } else if (hs.includes("buff") || hs.includes("huge")) {
    bodyHint = "This character has an extraordinarily large, muscular build.";
  } else if (hs.includes("tall") || hs.includes("lanky")) {
    bodyHint = "This character is notably tall and lean.";
  } else {
    bodyHint = "This character is male.";
  }

  // Clues 3–5: visual body part hints
  const v1 = bodyPartHints[0] ?? "";
  const v2 = bodyPartHints[1] ?? bodyPartHints[0] ?? "";
  const v3 = bodyPartHints[2] ?? bodyPartHints[1] ?? bodyPartHints[0] ?? "";

  // Clues 6–7: fun facts (sanitized)
  const f1 = sanitize(funFacts[0] ?? "", character);
  const f2 = sanitize(funFacts[1] ?? funFacts[0] ?? "", character);

  // Clues 8–10: descriptions from hardest → easiest (sanitized)
  const d0 = sanitize(descriptions[0], character);
  const d1 = sanitize(descriptions[1], character);
  const d2 = sanitize(descriptions[2], character);

  return [tierHint, bodyHint, v1, v2, v3, f1, f2, d0, d1, d2];
}

export function buildGame(difficulty: Tier, clueMode: ClueMode): GameState {
  const pool = CHARACTERS.filter((c) => c.tier === difficulty);
  const source = pool.length >= ROUNDS_PER_GAME ? pool : CHARACTERS;
  const shuffled = shuffle(source);
  const selected = shuffled.slice(0, ROUNDS_PER_GAME);

  const rounds: Round[] = selected.map((character) => {
    const distractors = pickDistractors(character, CHARACTERS, DISTRACTOR_COUNT);
    const choices = shuffle([character, ...distractors]);
    return {
      character,
      clueMode: pickClueMode(clueMode),
      descriptionIndex: clueIndexForDifficulty(difficulty),
      choices,
      answerSlug: character.slug,
    };
  });

  return {
    difficulty,
    clueMode,
    rounds,
    currentRound: 0,
    score: 0,
    streak: 0,
    hintsUsed: Array(ROUNDS_PER_GAME).fill(false),
    results: [],
  };
}

export function calculateScore(
  difficulty: Tier,
  timeRemaining: number,
  hintUsed: boolean,
  detailsRevealed: number = 1
): number {
  const multiplier = DIFFICULTY_MULTIPLIERS[difficulty];
  let pts = BASE_CORRECT_POINTS * multiplier;
  pts += timeRemaining * TIME_BONUS_PER_SECOND;
  if (hintUsed) pts *= (100 - HINT_PENALTY_PERCENT) / 100;
  if (detailsRevealed > 1) pts -= (detailsRevealed - 1) * DETAIL_PENALTY_PER_REVEAL;
  return Math.max(0, Math.round(pts));
}

// Clue Trail scoring: purely clue-based, no time bonus.
// Clue 1 = full score, clue 10 = 10% of base.
export function calculateDetailsScore(
  difficulty: Tier,
  clueNumber: number
): number {
  const multiplier = DIFFICULTY_MULTIPLIERS[difficulty];
  const base = BASE_CORRECT_POINTS * multiplier;
  const fraction = (MAX_DETAILS - clueNumber + 1) / MAX_DETAILS; // clue1=1.0, clue10=0.1
  return Math.max(0, Math.round(base * fraction));
}

export function streakBonus(streak: number): number {
  if (streak > 0 && streak % STREAK_BONUS_EVERY === 0) {
    return STREAK_BONUS_POINTS;
  }
  return 0;
}

export { ROUNDS_PER_GAME, TIMER_SECONDS };
