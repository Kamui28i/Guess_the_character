"use client";
import { useEffect, useState, useCallback } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { useGameStore } from "@/store/game-store";
import CaseFileCard from "@/components/CaseFileCard";
import ClueCard from "@/components/ClueCard";
import AnswerOptions from "@/components/AnswerOptions";
import AnswerInput from "@/components/AnswerInput";
import Timer from "@/components/Timer";
import ScoreDisplay from "@/components/ScoreDisplay";
import { ROUNDS_PER_GAME, ActiveClueMode, calculateDetailsScore } from "@/lib/game-engine";
import { MAX_DETAILS, TIMER_SECONDS_BY_DIFFICULTY, TIMER_SECONDS_BY_MODE_DIFFICULTY } from "@/config";
import { fuzzyMatch } from "@/lib/fuzzy-match";

type Phase = "playing" | "revealed";

export default function GamePage() {
  const router = useRouter();
  const { game, hintRevealedIndex, detailsRevealed, submitAnswer, nextRound, useHint, revealNextDetail } =
    useGameStore();
  const [phase, setPhase] = useState<Phase>("playing");
  const [lastResult, setLastResult] = useState<"correct" | "wrong" | "skip" | null>(null);
  const [selectedSlug, setSelectedSlug] = useState<string | null>(null);
  const [timeLeft, setTimeLeft] = useState(30);
  const [timerRunning, setTimerRunning] = useState(true);
  const [resetKey, setResetKey] = useState(0);
  const [wrongFlash, setWrongFlash] = useState(false);

  useEffect(() => {
    if (!game) router.replace("/");
  }, [game, router]);

  const handleReveal = useCallback(
    (slug: string | null, tLeft: number) => {
      setTimerRunning(false);
      const result = submitAnswer(slug, tLeft);
      setLastResult(result);
      setSelectedSlug(slug);
      setPhase("revealed");
    },
    [submitAnswer]
  );

  // Advance to next clue in details mode and reset timer (called on wrong/timeout)
  const advanceDetail = useCallback(() => {
    revealNextDetail();
    setWrongFlash(true);
    setTimeout(() => setWrongFlash(false), 700);
    setResetKey((k) => k + 1);
  }, [revealNextDetail]);

  // Manual "Next Clue" button — resets timer without wrong flash
  const nextClueManual = useCallback(() => {
    revealNextDetail();
    setResetKey((k) => k + 1);
  }, [revealNextDetail]);

  function handleMultiChoice(slug: string) {
    if (phase !== "playing") return;
    handleReveal(slug, timeLeft);
  }

  function handleTextSubmit(correct: boolean, _input: string) {
    if (phase !== "playing") return;
    if (correct) {
      handleReveal(fuzzyMatch(_input)?.slug ?? null, timeLeft);
      return;
    }
    const { game: g, detailsRevealed: dr } = useGameStore.getState();
    if (!g) return;
    const round = g.rounds[g.currentRound];
    const isDetails = round.clueMode === "details";
    if (isDetails && dr < MAX_DETAILS) {
      advanceDetail();
    } else {
      // wrong and out of clues (or not details mode) → end round as wrong
      handleReveal(null, timeLeft);
    }
  }

  function handleTimeout() {
    if (phase !== "playing") return;
    const { game: g, detailsRevealed: dr } = useGameStore.getState();
    if (!g) return;
    const round = g.rounds[g.currentRound];
    const isDetails = round.clueMode === "details";
    if (isDetails && dr < MAX_DETAILS) {
      advanceDetail();
    } else {
      handleReveal(null, 0);
    }
  }

  function handleNext() {
    const { game } = useGameStore.getState();
    if (!game) return;
    if (game.currentRound + 1 >= ROUNDS_PER_GAME) {
      router.push("/results");
      return;
    }
    nextRound();
    setPhase("playing");
    setLastResult(null);
    setSelectedSlug(null);
    setTimerRunning(true);
    setResetKey((k) => k + 1);
  }

  function handleSkip() {
    if (phase !== "playing") return;
    handleReveal(null, timeLeft);
  }

  function handleHint() {
    useHint();
  }

  if (!game) return null;

  const round = game.rounds[game.currentRound];
  // Each round uses its own clueMode's timer rules (mixed mode inherits per-round mode)
  const timerSeconds =
    TIMER_SECONDS_BY_MODE_DIFFICULTY[round.clueMode]?.[game.difficulty] ??
    TIMER_SECONDS_BY_DIFFICULTY[game.difficulty];

  const character = round.character;
  const descIdx = hintRevealedIndex ?? round.descriptionIndex;
  const hintUsed = game.hintsUsed[game.currentRound];
  const isDetailsMode = round.clueMode === "details";

  return (
    <main className="min-h-screen flex flex-col items-center px-4 py-4 sm:py-8">
      {/* Top bar */}
      <div className="w-full max-w-xl flex items-center justify-between mb-3 sm:mb-6">
        <ScoreDisplay
          score={game.score}
          streak={game.streak}
          round={game.currentRound + 1}
          total={ROUNDS_PER_GAME}
        />
        <Timer
          running={timerRunning}
          onTimeout={handleTimeout}
          onTick={setTimeLeft}
          resetKey={resetKey}
          duration={timerSeconds}
        />
      </div>

      <div className="w-full max-w-xl">
        <AnimatePresence mode="wait">
          <CaseFileCard key={game.currentRound} caseNumber={game.currentRound + 1}>
            {/* Clue */}
            <ClueCard
              character={character}
              clueMode={round.clueMode as Exclude<ActiveClueMode, never>}
              descriptionIndex={descIdx}
              detailsRevealed={detailsRevealed}
              revealed={phase === "revealed"}
            />

            {/* Reveal stamp overlay */}
            <AnimatePresence>
              {phase === "revealed" && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.6, rotate: -15 }}
                  animate={{ opacity: 1, scale: 1, rotate: lastResult === "correct" ? -6 : 6 }}
                  className="absolute inset-0 flex items-center justify-center pointer-events-none"
                  style={{ zIndex: 20 }}
                >
                  <div
                    className={`text-5xl font-black tracking-widest border-8 px-8 py-4 rounded ${
                      lastResult === "correct"
                        ? "text-[#c41e3a] border-[#c41e3a]"
                        : "text-[#2a5f9a] border-[#2a5f9a]"
                    }`}
                    style={{
                      fontFamily: "'Playfair Display', serif",
                      textShadow: "2px 2px 8px rgba(0,0,0,0.5)",
                    }}
                  >
                    {lastResult === "correct" ? "CASE CLOSED" : "COLD CASE"}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Reveal panel */}
            {phase === "revealed" && (
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.25 }}
                className="mt-4 p-4 rounded-xl border"
                style={{
                  background: lastResult === "correct" ? "rgba(74,222,128,0.06)" : "rgba(239,68,68,0.06)",
                  borderColor: lastResult === "correct" ? "rgba(74,222,128,0.25)" : "rgba(239,68,68,0.2)",
                }}
              >
                <div className="flex items-start justify-between mb-2 gap-3">
                  <div>
                    <p
                      className="font-bold text-base leading-tight"
                      style={{ fontFamily: "'Playfair Display', serif", color: "var(--theme-accent, #d4a017)" }}
                    >
                      {character.displayName}
                    </p>
                    <p className="text-[#8a9ab0] text-xs mt-0.5">
                      {character.series} · {character.tier}
                    </p>
                    {isDetailsMode && (
                      <p className="text-[#8a9ab0] text-[10px] mt-1 font-mono">
                        {detailsRevealed} / {MAX_DETAILS} clues revealed
                      </p>
                    )}
                  </div>
                  <a
                    href={character.wikiUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[10px] text-[#4a9af0] border border-[#4a9af033] rounded px-2 py-1 hover:bg-[#4a9af011] transition-colors flex-shrink-0 font-mono"
                  >
                    Wiki →
                  </a>
                </div>
                <ul className="space-y-1">
                  {character.funFacts.map((f, i) => (
                    <li key={i} className="text-[#c8b89a] text-xs flex gap-2">
                      <span className="flex-shrink-0" style={{ color: "color-mix(in srgb, var(--theme-accent, #d4a017) 50%, transparent)" }}>◆</span>
                      {f}
                    </li>
                  ))}
                </ul>
              </motion.div>
            )}

            {/* Answer area */}
            <div className="mt-5 space-y-4">
              {phase === "playing" ? (
                <>
                  {!isDetailsMode && (
                    <AnswerOptions
                      choices={round.choices}
                      onSelect={handleMultiChoice}
                      disabled={false}
                    />
                  )}

                  {/* Wrong flash for details mode */}
                  <AnimatePresence>
                    {wrongFlash && (
                      <motion.p
                        key="wrongflash"
                        initial={{ opacity: 0, y: -4 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                        className="text-[#c41e3a] text-xs font-mono text-center"
                      >
                        ✗ Wrong — next clue revealed
                      </motion.p>
                    )}
                  </AnimatePresence>

                  <AnswerInput answerSlug={round.answerSlug} onSubmit={handleTextSubmit} />

                  <div className="flex gap-2.5">
                    {/* Details mode: Next Detail button */}
                    {isDetailsMode ? (
                      <button
                        onClick={nextClueManual}
                        disabled={detailsRevealed >= MAX_DETAILS}
                        className="flex-1 py-2.5 text-xs border rounded-lg disabled:opacity-30 transition-all font-mono tracking-wider uppercase active:scale-[0.97] flex items-center justify-center gap-2"
                        style={{ borderColor: "color-mix(in srgb, var(--theme-accent, #d4a017) 40%, transparent)", color: "var(--theme-accent, #d4a017)" }}
                      >
                        {detailsRevealed >= MAX_DETAILS ? (
                          "All clues revealed"
                        ) : (
                          <>
                            Next Clue
                            <span className="opacity-60 text-[9px]">
                              (clue {detailsRevealed + 1} = {calculateDetailsScore(game.difficulty, detailsRevealed + 1)}pts)
                            </span>
                          </>
                        )}
                      </button>
                    ) : (
                      /* Normal modes: Hint button */
                      <button
                        onClick={handleHint}
                        disabled={hintUsed || descIdx >= 2}
                        className="flex-1 py-2.5 text-xs border rounded-lg disabled:opacity-30 transition-all font-mono tracking-wider uppercase active:scale-[0.97]"
                        style={{ borderColor: "color-mix(in srgb, var(--theme-accent, #d4a017) 40%, transparent)", color: "var(--theme-accent, #d4a017)" }}
                      >
                        💡 Hint <span className="opacity-60">(−20%)</span>
                      </button>
                    )}

                    <button
                      onClick={handleSkip}
                      className="flex-1 py-2.5 text-xs text-[#4a5a6a] rounded-lg hover:text-[#8a9ab0] transition-all font-mono tracking-wider uppercase active:scale-[0.97]"
                      style={{ border: "1px solid var(--theme-border, #1e3a5f)" }}
                    >
                      ⏭ Skip
                    </button>
                  </div>
                </>
              ) : (
                <>
                  {!isDetailsMode && (
                    <AnswerOptions
                      choices={round.choices}
                      onSelect={() => {}}
                      disabled
                      correctSlug={round.answerSlug}
                      selectedSlug={selectedSlug ?? undefined}
                    />
                  )}
                  <button
                    onClick={handleNext}
                    className="w-full py-3 rounded-xl font-black tracking-[0.12em] uppercase transition-all active:scale-[0.97] hover:brightness-110 relative overflow-hidden group"
                    style={{
                      background: "linear-gradient(135deg, var(--theme-accent, #d4a017) 0%, var(--theme-accent-light, #e8c040) 50%, var(--theme-accent, #d4a017) 100%)",
                      color: "var(--theme-card, #0a1429)",
                      fontFamily: "'Playfair Display', serif",
                      boxShadow: "0 4px 20px color-mix(in srgb, var(--theme-accent, #d4a017) 30%, transparent)",
                    }}
                  >
                    <span className="relative z-10">
                      {game.currentRound + 1 >= ROUNDS_PER_GAME ? "View Final Report" : "Next Case →"}
                    </span>
                    <span className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </button>
                </>
              )}
            </div>
          </CaseFileCard>
        </AnimatePresence>
      </div>
    </main>
  );
}
