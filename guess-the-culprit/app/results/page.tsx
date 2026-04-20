"use client";
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { useGameStore } from "@/store/game-store";
import { useUserStore } from "@/store/user-store";
import { ROUNDS_PER_GAME } from "@/lib/game-engine";
import Leaderboard from "@/components/Leaderboard";

export default function ResultsPage() {
  const router = useRouter();
  const { game, resetGame } = useGameStore();
  const { userId, username } = useUserStore();
  const [saveState, setSaveState] = useState<"idle" | "saving" | "saved" | "error">("idle");
  const savedRef = useRef(false);

  useEffect(() => {
    if (!game) router.replace("/");
  }, [game, router]);

  // Auto-save when we have a userId and a finished game
  useEffect(() => {
    if (!game || !userId || savedRef.current) return;
    savedRef.current = true;
    setSaveState("saving");

    fetch("/api/scores", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        user_id: userId,
        clue_mode: game.clueMode,
        difficulty: game.difficulty,
        score: game.score,
        streak: game.streak,
      }),
    })
      .then((r) => (r.ok ? setSaveState("saved") : setSaveState("error")))
      .catch(() => setSaveState("error"));
  }, [game, userId]);

  if (!game) return null;

  const correct  = game.results.filter((r) => r === "correct").length;
  const wrong    = game.results.filter((r) => r === "wrong").length;
  const skipped  = game.results.filter((r) => r === "skip").length;
  const accuracy = ROUNDS_PER_GAME > 0 ? Math.round((correct / ROUNDS_PER_GAME) * 100) : 0;

  const rank =
    accuracy >= 90 ? { label: "Master Detective", color: "#d4a017", icon: "🏆" } :
    accuracy >= 70 ? { label: "Senior Detective", color: "#4ade80", icon: "🔎" } :
    accuracy >= 50 ? { label: "Field Agent",       color: "#60a5fa", icon: "📁" } :
                    { label: "Rookie Officer",     color: "#8a9ab0", icon: "🪪" };

  function handleNew() {
    resetGame();
    router.push("/");
  }

  return (
    <main className="min-h-screen flex flex-col items-center px-4 py-10">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-xl"
      >
        {/* ── Header ── */}
        <div className="text-center mb-8">
          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1 }}
            className="text-4xl font-black text-glow-gold mb-1"
            style={{ fontFamily: "'Playfair Display', serif", color: "var(--theme-accent, #d4a017)" }}
          >
            Investigation Complete
          </motion.h1>
          <p className="text-[#8a9ab0] text-xs uppercase tracking-[0.25em] font-mono">
            Final Report — {game.difficulty.toUpperCase()} · {game.clueMode.toUpperCase()}
          </p>
          {username && (
            <p className="text-[#4a6a8a] text-[11px] font-mono mt-1">
              Detective: <span style={{ color: "var(--theme-accent, #d4a017)" }}>{username}</span>
            </p>
          )}
        </div>

        {/* ── Score card (paper) ── */}
        <div
          className="paper-texture rounded-sm border border-[#b8a880] mb-6 overflow-hidden"
          style={{ boxShadow: "0 8px 40px rgba(0,0,0,0.5), 4px 4px 0 rgba(0,0,0,0.25)" }}
        >
          {/* Binding strip */}
          <div className="h-1" style={{ background: "var(--theme-accent, #d4a017)", opacity: 0.6 }} />

          {/* Paper header */}
          <div className="px-6 py-3 flex justify-between items-center"
            style={{ background: "var(--theme-card, #0a1429)", borderBottom: "1px solid color-mix(in srgb, var(--theme-accent, #d4a017) 20%, transparent)" }}
          >
            <span className="text-[10px] uppercase tracking-[0.25em] font-mono" style={{ color: "color-mix(in srgb, var(--theme-accent, #d4a017) 60%, transparent)" }}>Official Report</span>
            <span className="text-[10px] font-mono" style={{ color: "color-mix(in srgb, var(--theme-accent, #d4a017) 40%, transparent)" }}>CASE CLOSED</span>
          </div>

          <div className="relative p-5 sm:p-8 font-mono text-[#1a0a00]">
            {/* CASE CLOSED stamp */}
            <motion.div
              initial={{ scale: 2.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.4, type: "spring", stiffness: 280, damping: 18 }}
              className="absolute top-3 right-3 sm:top-5 sm:right-5 border-[4px] sm:border-[6px] border-[#c41e3a] text-[#c41e3a] font-black text-sm sm:text-lg px-3 sm:px-4 py-1 sm:py-1.5 rounded-sm pointer-events-none"
              style={{ fontFamily: "'Playfair Display', serif", rotate: "-12deg", opacity: 0.85 }}
            >
              CASE CLOSED
            </motion.div>

            {/* Score & rank */}
            <div className="text-center mb-5">
              <motion.p
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                className="text-6xl font-black text-[#0a1429] leading-none"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                {game.score}
              </motion.p>
              <p className="text-xs uppercase tracking-widest text-[#5a4a3a] mt-1">Total Score</p>

              {/* Rank badge */}
              <div
                className="inline-flex items-center gap-2 mt-3 px-4 py-1.5 rounded-full border text-sm font-bold"
                style={{ borderColor: rank.color, color: rank.color, background: `${rank.color}18` }}
              >
                <span>{rank.icon}</span>
                <span style={{ fontFamily: "'Playfair Display', serif" }}>{rank.label}</span>
              </div>
            </div>

            {/* Stats row */}
            <div className="border-t border-[#c8b89a] pt-4 grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
              {[
                { label: "Solved",   value: correct,       color: "#16a34a" },
                { label: "Wrong",    value: wrong,         color: "#b91c1c" },
                { label: "Skipped",  value: skipped,       color: "#6b7280" },
                { label: "Accuracy", value: `${accuracy}%`, color: "#1e3a8a" },
              ].map((s) => (
                <div key={s.label}>
                  <p className="text-2xl font-black" style={{ color: s.color }}>{s.value}</p>
                  <p className="text-[10px] uppercase text-[#5a4a3a] tracking-wider">{s.label}</p>
                </div>
              ))}
            </div>

            {/* Streak */}
            <div className="border-t border-[#c8b89a] pt-3 pb-1 text-center">
              <p className="text-xs text-[#5a4a3a]">
                Best streak: <span className="font-bold">{game.streak > 0 ? `🔥 ${game.streak}` : game.streak}</span>
              </p>
            </div>

            {/* Round breakdown */}
            <div className="border-t border-[#c8b89a] pt-3 space-y-1.5">
              {game.rounds.map((round, i) => (
                <div key={i} className="flex items-center justify-between text-xs gap-2">
                  <span className="text-[#8a6030] font-mono text-[10px] flex-shrink-0">#{String(i + 1).padStart(2, "0")}</span>
                  <span className="text-[#3a2a1a] flex-1 truncate">{round.character.displayName}</span>
                  <span
                    className="text-[10px] font-mono flex-shrink-0 flex items-center gap-1"
                    style={{
                      color: game.results[i] === "correct" ? "#16a34a" :
                             game.results[i] === "wrong"   ? "#b91c1c" : "#9ca3af"
                    }}
                  >
                    {game.results[i] === "correct" ? "✓ SOLVED" :
                     game.results[i] === "wrong"   ? "✗ WRONG"  : "— SKIP"}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── Save status ── */}
        {userId ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-center text-xs font-mono mb-5 py-3 rounded-xl border"
            style={
              saveState === "saved"
                ? { color: "#4ade80", borderColor: "#4ade8030", background: "#4ade8008" }
                : saveState === "saving"
                ? { color: "#8a9ab0", borderColor: "var(--theme-border, #1e3a5f)", background: "var(--theme-card, #0d1f38)" }
                : saveState === "error"
                ? { color: "#c41e3a", borderColor: "#c41e3a30", background: "#c41e3a08" }
                : { color: "#4a5a6a", borderColor: "var(--theme-border, #1e3a5f)", background: "var(--theme-card, #0d1f38)" }
            }
          >
            {saveState === "saving" && "Saving score to registry…"}
            {saveState === "saved"  && "✓ Score saved to the registry!"}
            {saveState === "error"  && "⚠ Could not save score — check connection"}
            {saveState === "idle"   && ""}
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center text-[#4a5a6a] text-xs font-mono mb-5 py-3 rounded-xl border border-dashed"
          style={{ borderColor: "var(--theme-border, #1e3a5f)" }}
          >
            Register a detective alias to save your scores
          </motion.div>
        )}

        {/* ── New game ── */}
        <button
          onClick={handleNew}
          className="w-full py-4 rounded-xl font-black text-lg tracking-[0.15em] uppercase transition-all active:scale-[0.97] hover:brightness-110 mb-10 relative overflow-hidden group"
          style={{
            background: "linear-gradient(135deg, var(--theme-accent, #d4a017) 0%, var(--theme-accent-light, #e8c040) 50%, var(--theme-accent, #d4a017) 100%)",
            color: "var(--theme-card, #0a1429)",
            fontFamily: "'Playfair Display', serif",
            boxShadow: "0 4px 24px color-mix(in srgb, var(--theme-accent, #d4a017) 30%, transparent)",
          }}
        >
          <span className="relative z-10">Start New Investigation</span>
          <span className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
        </button>

        {/* ── Leaderboard ── */}
        <div className="flex items-center gap-3 mb-5">
          <div className="flex-1 h-px" style={{ background: "var(--theme-border, #1e3a5f)" }} />
          <h2 className="text-[11px] font-bold tracking-[0.2em] uppercase font-mono" style={{ color: "color-mix(in srgb, var(--theme-accent, #d4a017) 60%, transparent)" }}>
            Closed Cases Registry
          </h2>
          <div className="flex-1 h-px" style={{ background: "var(--theme-border, #1e3a5f)" }} />
        </div>
        <Leaderboard />
      </motion.div>
    </main>
  );
}
