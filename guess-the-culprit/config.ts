// Tunable game constants

export const IMAGE_MODE = (process.env.NEXT_PUBLIC_IMAGE_MODE ?? "placeholder") as
  | "placeholder"
  | "userAssets"
  | "externalLink";

export const ROUNDS_PER_GAME = 10;
export const TIMER_SECONDS = 30; // default / easy
export const TIMER_SECONDS_BY_DIFFICULTY: Record<"easy" | "medium" | "hard", number> = {
  easy:   30,
  medium: 15,
  hard:   5,
};

// Overrides for specific clue modes (description + clue trail need more thinking time)
export const TIMER_SECONDS_BY_MODE_DIFFICULTY: Partial<
  Record<string, Record<"easy" | "medium" | "hard", number>>
> = {
  description: { easy: 30, medium: 20, hard: 10 },
  details:     { easy: 30, medium: 20, hard: 10 },
};
export const TIMER_WARN_AMBER = 10; // seconds remaining when timer turns amber
export const TIMER_WARN_RED = 5;    // seconds remaining when timer turns red

export const BASE_CORRECT_POINTS = 100;
export const TIME_BONUS_PER_SECOND = 1;
export const STREAK_BONUS_EVERY = 3;   // every N consecutive correct answers
export const STREAK_BONUS_POINTS = 50;
export const HINT_PENALTY_PERCENT = 20; // % points deducted when hint used

export const MAX_DETAILS = 10;            // total clues in "details" mode
export const DETAIL_PENALTY_PER_REVEAL = 8; // pts lost per extra detail revealed

export const DIFFICULTY_MULTIPLIERS: Record<"easy" | "medium" | "hard", number> = {
  easy: 1,
  medium: 1.5,
  hard: 2,
};

export const FUZZY_MATCH_THRESHOLD = 0.35; // Fuse.js threshold (lower = stricter)

export const DISTRACTOR_COUNT = 3; // wrong answers shown
