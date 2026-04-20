"use client";
import { create } from "zustand";
import { GameState, buildGame, ClueMode, calculateScore, calculateDetailsScore, streakBonus } from "@/lib/game-engine";
import { Tier } from "@/lib/characters";
import { MAX_DETAILS } from "@/config";

interface GameStore {
  game: GameState | null;
  hintRevealedIndex: number | null;
  detailsRevealed: number; // how many details are shown in "details" mode (min 1)
  startGame: (difficulty: Tier, clueMode: ClueMode) => void;
  useHint: () => void;
  revealNextDetail: () => void;
  submitAnswer: (slug: string | null, timeRemaining: number) => "correct" | "wrong" | "skip";
  nextRound: () => void;
  resetGame: () => void;
}

export const useGameStore = create<GameStore>((set, get) => ({
  game: null,
  hintRevealedIndex: null,
  detailsRevealed: 1,

  startGame: (difficulty, clueMode) => {
    const game = buildGame(difficulty, clueMode);
    const round = game.rounds[0];
    set({ game, hintRevealedIndex: round.descriptionIndex, detailsRevealed: 1 });
  },

  useHint: () => {
    const { game, hintRevealedIndex } = get();
    if (!game) return;
    const { currentRound } = game;
    if (game.hintsUsed[currentRound]) return;
    const round = game.rounds[currentRound];
    const next = Math.min((hintRevealedIndex ?? round.descriptionIndex) + 1, 2);
    const hintsUsed = [...game.hintsUsed];
    hintsUsed[currentRound] = true;
    set({ game: { ...game, hintsUsed }, hintRevealedIndex: next });
  },

  revealNextDetail: () => {
    const { detailsRevealed } = get();
    if (detailsRevealed < MAX_DETAILS) {
      set({ detailsRevealed: detailsRevealed + 1 });
    }
  },

  submitAnswer: (slug, timeRemaining) => {
    const { game, detailsRevealed } = get();
    if (!game) return "skip";
    const { currentRound, difficulty, hintsUsed } = game;
    const round = game.rounds[currentRound];

    let result: "correct" | "wrong" | "skip" = "skip";
    let addScore = 0;
    let newStreak = game.streak;

    if (slug === null) {
      result = "skip";
      newStreak = 0;
    } else if (slug === round.answerSlug) {
      result = "correct";
      const pts = round.clueMode === "details"
        ? calculateDetailsScore(difficulty, detailsRevealed)
        : calculateScore(difficulty, timeRemaining, hintsUsed[currentRound]);
      newStreak = game.streak + 1;
      addScore = pts + streakBonus(newStreak);
    } else {
      result = "wrong";
      newStreak = 0;
    }

    const results = [...game.results, result];
    const score = game.score + addScore;
    set({ game: { ...game, results, score, streak: newStreak } });
    return result;
  },

  nextRound: () => {
    const { game } = get();
    if (!game) return;
    const next = game.currentRound + 1;
    const round = game.rounds[next];
    set({
      game: { ...game, currentRound: next },
      hintRevealedIndex: round?.descriptionIndex ?? 2,
      detailsRevealed: 1,
    });
  },

  resetGame: () => set({ game: null, hintRevealedIndex: null, detailsRevealed: 1 }),
}));
