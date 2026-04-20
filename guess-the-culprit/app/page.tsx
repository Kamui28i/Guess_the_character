"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { useGameStore } from "@/store/game-store";
import { Tier } from "@/lib/characters";
import { ClueMode } from "@/lib/game-engine";
import Leaderboard from "@/components/Leaderboard";
import { BACKGROUNDS } from "@/lib/backgrounds";
import { useThemeStore } from "@/store/theme-store";
import ModeIcon from "@/components/icons/ModeIcon";
import ThemeIcon from "@/components/icons/ThemeIcon";

const DIFFICULTIES: { value: Tier; label: string; desc: string; color: string; badge: string }[] = [
  { value: "easy",   label: "Easy",   desc: "Iconic across fandom",        color: "#4ade80", badge: "★" },
  { value: "medium", label: "Medium", desc: "Well-known within fandom",    color: "#d4a017", badge: "★★" },
  { value: "hard",   label: "Hard",   desc: "Deep cuts for true fans",     color: "#c41e3a", badge: "★★★" },
];

const CLUE_MODES: { value: ClueMode; label: string; icon: string; desc: string }[] = [
  { value: "description", label: "Description", icon: "📋", desc: "Witness statement" },
  { value: "sketch",      label: "Photo",        icon: "🖼️", desc: "Security image"   },
  { value: "bodypart",    label: "Body Part",    icon: "🔍", desc: "Magnified detail"  },
  { value: "pixelated",   label: "Pixelated",    icon: "👾", desc: "Censored photo"   },
  { value: "details",     label: "Clue Trail",   icon: "🕵️", desc: "10 progressive clues" },
  { value: "mixed",       label: "Mixed",        icon: "🎲", desc: "Random each case" },
];

export default function HomePage() {
  const router = useRouter();
  const startGame = useGameStore((s) => s.startGame);
  const [difficulty, setDifficulty] = useState<Tier>("easy");
  const [clueMode, setClueMode] = useState<ClueMode>("description");
  const { backgroundId, setBackground } = useThemeStore();

  function handleStart() {
    startGame(difficulty, clueMode);
    router.push("/game");
  }

  return (
    <main className="min-h-screen flex flex-col items-center px-4 py-10">

      {/* ── Hero ── */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-10"
      >
        {/* Logo mark */}
        <div className="flex items-center justify-center gap-4 mb-3">
          <div className="relative">
            <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
              <circle cx="26" cy="26" r="22" stroke="var(--theme-accent, #d4a017)" strokeWidth="1" opacity="0.2" />
              <circle cx="26" cy="26" r="18" stroke="var(--theme-accent, #d4a017)" strokeWidth="4.5" />
              <circle cx="26" cy="26" r="11" fill="var(--theme-card, #0a1429)" />
              <ellipse cx="20" cy="20" rx="4.5" ry="2.8" fill="white" opacity="0.14" transform="rotate(-30 20 20)" />
              <line x1="39" y1="39" x2="57" y2="57" stroke="var(--theme-accent, #d4a017)" strokeWidth="6" strokeLinecap="round" />
            </svg>
          </div>
          <div>
            <h1
              className="text-5xl md:text-6xl font-black text-glow-gold leading-none"
              style={{ fontFamily: "'Playfair Display', serif", color: "var(--theme-accent, #d4a017)", letterSpacing: "-0.5px" }}
            >
              Guess the Culprit
            </h1>
          </div>
        </div>

        {/* Subtitle strip */}
        <div className="inline-flex flex-wrap justify-center items-center gap-2 mt-2 px-4 py-1.5 rounded-full max-w-full"
          style={{ border: "1px solid color-mix(in srgb, var(--theme-accent, #d4a017) 30%, transparent)", background: "color-mix(in srgb, var(--theme-accent, #d4a017) 5%, transparent)" }}
        >
          <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: "var(--theme-accent, #d4a017)" }} />
          <p className="text-[#8a9ab0] text-xs tracking-[0.25em] uppercase font-mono">
            Detective Conan × Anime — Who is the suspect?
          </p>
          <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: "var(--theme-accent, #d4a017)" }} />
        </div>
      </motion.div>

      {/* ── Setup card ── */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.15 }}
        className="w-full max-w-lg"
      >
        <div className="rounded-xl p-8 shadow-2xl space-y-7 backdrop-blur-sm"
          style={{
            background: "color-mix(in srgb, var(--theme-card, #0d1f38) 90%, transparent)",
            border: "1px solid var(--theme-border, #1e3a5f)",
            boxShadow: "0 0 0 1px color-mix(in srgb, var(--theme-accent, #d4a017) 7%, transparent), 0 24px 60px rgba(0,0,0,0.5)"
          }}
        >

          {/* Difficulty */}
          <div>
            <SectionLabel>Difficulty</SectionLabel>
            <div className="grid grid-cols-3 gap-3">
              {DIFFICULTIES.map((d) => {
                const active = difficulty === d.value;
                return (
                  <button
                    key={d.value}
                    onClick={() => setDifficulty(d.value)}
                    className={`relative p-3 rounded-lg border-2 text-center transition-all duration-200 ${
                      active ? "" : "text-[#8a9ab0]"
                    }`}
                    style={active
                      ? { background: "var(--theme-card, #0a1429)", borderColor: d.color, boxShadow: `0 0 14px ${d.color}33` }
                      : { borderColor: "var(--theme-border, #1e3a5f)" }}
                  >
                    <div className="text-base mb-0.5" style={{ color: active ? d.color : "#8a9ab0" }}>
                      {d.badge}
                    </div>
                    <div className="font-bold text-sm" style={{ color: active ? d.color : "#8a9ab0", fontFamily: "'Playfair Display', serif" }}>
                      {d.label}
                    </div>
                    <div className="text-[10px] opacity-60 mt-0.5 leading-tight">{d.desc}</div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Clue mode */}
          <div>
            <SectionLabel>Clue Mode</SectionLabel>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2.5">
              {CLUE_MODES.map((m) => {
                const active = clueMode === m.value;
                return (
                  <button
                    key={m.value}
                    onClick={() => setClueMode(m.value)}
                    className={`p-3 rounded-lg border-2 text-left flex items-center gap-2.5 transition-all duration-200 ${
                      active ? "" : "text-[#8a9ab0]"
                    }`}
                    style={active
                      ? { borderColor: "var(--theme-accent, #d4a017)", background: "var(--theme-card, #1a2e4a)", color: "var(--theme-accent, #d4a017)", boxShadow: "0 0 12px color-mix(in srgb, var(--theme-accent, #d4a017) 25%, transparent)" }
                      : { borderColor: "var(--theme-border, #1e3a5f)" }}
                  >
                    <ModeIcon mode={m.value} size={18} className="flex-shrink-0 opacity-90" />
                    <div>
                      <div className="font-bold text-xs">{m.label}</div>
                      <div className="text-[10px] opacity-50 mt-0.5">{m.desc}</div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Background */}
          <div>
            <SectionLabel>Background</SectionLabel>
            <div className="grid grid-cols-5 gap-2">
              {BACKGROUNDS.map((bg) => {
                const active = backgroundId === bg.id;
                return (
                  <button
                    key={bg.id}
                    onClick={() => setBackground(bg.id)}
                    title={`${bg.name} — ${bg.anime}`}
                    className="flex flex-col items-center gap-1.5 group"
                  >
                    {/* Swatch */}
                    <div
                      className="w-full rounded-lg transition-all duration-200 flex items-center justify-center"
                      style={{
                        height: 40,
                        background: bg.preview,
                        outline: active ? "2px solid var(--theme-accent, #d4a017)" : "2px solid transparent",
                        outlineOffset: 2,
                        boxShadow: active
                          ? "0 0 10px color-mix(in srgb, var(--theme-accent, #d4a017) 40%, transparent)"
                          : "none",
                      }}
                    >
                      <ThemeIcon
                        theme={bg.id}
                        size={22}
                        className="opacity-80 transition-opacity group-hover:opacity-100"
                        style={{ color: active ? bg.accentLight : bg.accentColor } as React.CSSProperties}
                      />
                    </div>
                    {/* Label */}
                    <span
                      className="text-[9px] font-mono text-center leading-tight truncate w-full"
                      style={{ color: active ? "var(--theme-accent, #d4a017)" : "#4a6a8a" }}
                    >
                      {bg.name}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Divider */}
          <div className="flex items-center gap-3">
            <div className="flex-1 h-px" style={{ background: "var(--theme-border, #1e3a5f)" }} />
            <span className="text-xs font-mono tracking-widest" style={{ color: "color-mix(in srgb, var(--theme-accent, #d4a017) 40%, transparent)" }}>◆</span>
            <div className="flex-1 h-px" style={{ background: "var(--theme-border, #1e3a5f)" }} />
          </div>

          {/* Start */}
          <button
            onClick={handleStart}
            className="w-full py-4 rounded-lg font-black text-lg tracking-[0.15em] uppercase transition-all duration-200 active:scale-[0.97] relative overflow-hidden group"
            style={{
              background: "linear-gradient(135deg, var(--theme-accent, #d4a017) 0%, var(--theme-accent-light, #e8c040) 50%, var(--theme-accent, #d4a017) 100%)",
              color: "var(--theme-card, #0a1429)",
              fontFamily: "'Playfair Display', serif",
              boxShadow: "0 4px 24px color-mix(in srgb, var(--theme-accent, #d4a017) 35%, transparent), 0 1px 0 rgba(255,255,255,0.15) inset",
            }}
          >
            <span className="relative z-10">Open New Case</span>
            <span className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
          </button>
        </div>
      </motion.div>

      {/* ── Leaderboard ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="w-full max-w-lg mt-10"
      >
        <div className="flex items-center gap-3 mb-5">
          <div className="flex-1 h-px" style={{ background: "var(--theme-border, #1e3a5f)" }} />
          <h2
            className="text-sm font-bold tracking-[0.2em] uppercase"
            style={{ fontFamily: "'Playfair Display', serif", color: "var(--theme-accent, #d4a017)" }}
          >
            Closed Cases Registry
          </h2>
          <div className="flex-1 h-px" style={{ background: "var(--theme-border, #1e3a5f)" }} />
        </div>
        <Leaderboard />
      </motion.div>
    </main>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-2 mb-3">
      <span className="w-1 h-3 rounded-full" style={{ background: "var(--theme-accent, #d4a017)" }} />
      <h2 className="text-[11px] uppercase tracking-[0.2em] text-[#8a9ab0] font-mono">{children}</h2>
    </div>
  );
}
