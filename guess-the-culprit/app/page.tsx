"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { useGameStore } from "@/store/game-store";
import { Tier } from "@/lib/characters";
import { ClueMode } from "@/lib/game-engine";
import Leaderboard from "@/components/Leaderboard";

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
              {/* outer glow ring */}
              <circle cx="26" cy="26" r="22" stroke="#d4a017" strokeWidth="1" opacity="0.2" />
              {/* magnifier circle */}
              <circle cx="26" cy="26" r="18" stroke="#d4a017" strokeWidth="4.5" />
              {/* inner dark */}
              <circle cx="26" cy="26" r="11" fill="#0a1429" />
              {/* glare */}
              <ellipse cx="20" cy="20" rx="4.5" ry="2.8" fill="white" opacity="0.14" transform="rotate(-30 20 20)" />
              {/* handle */}
              <line x1="39" y1="39" x2="57" y2="57" stroke="#d4a017" strokeWidth="6" strokeLinecap="round" />
            </svg>
          </div>
          <div>
            <h1
              className="text-5xl md:text-6xl font-black text-glow-gold leading-none"
              style={{ fontFamily: "'Playfair Display', serif", color: "#d4a017", letterSpacing: "-0.5px" }}
            >
              Guess the Culprit
            </h1>
          </div>
        </div>

        {/* Subtitle strip */}
        <div className="inline-flex flex-wrap justify-center items-center gap-2 mt-2 px-4 py-1.5 border border-[#d4a017]/30 rounded-full bg-[#d4a017]/5 max-w-full">
          <span className="w-1.5 h-1.5 rounded-full bg-[#d4a017] animate-pulse" />
          <p className="text-[#8a9ab0] text-xs tracking-[0.25em] uppercase font-mono">
            Detective Conan × Anime — Who is the suspect?
          </p>
          <span className="w-1.5 h-1.5 rounded-full bg-[#d4a017] animate-pulse" />
        </div>
      </motion.div>

      {/* ── Setup card ── */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.15 }}
        className="w-full max-w-lg"
      >
        <div className="bg-[#0d1f38]/90 border border-[#1e3a5f] rounded-xl p-8 shadow-2xl space-y-7 backdrop-blur-sm"
          style={{ boxShadow: "0 0 0 1px rgba(212,160,23,0.07), 0 24px 60px rgba(0,0,0,0.5)" }}
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
                      active
                        ? "bg-[#0a1429]"
                        : "border-[#1e3a5f] text-[#8a9ab0] hover:border-[#2a4a6a] hover:bg-[#0a1f35]"
                    }`}
                    style={active ? { borderColor: d.color, boxShadow: `0 0 14px ${d.color}33` } : {}}
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
                      active
                        ? "border-[#d4a017] bg-[#1a2e4a] text-[#d4a017]"
                        : "border-[#1e3a5f] text-[#8a9ab0] hover:border-[#2a4a6a] hover:bg-[#0a1f35]"
                    }`}
                    style={active ? { boxShadow: "0 0 12px rgba(212,160,23,0.25)" } : {}}
                  >
                    <span className="text-lg leading-none">{m.icon}</span>
                    <div>
                      <div className="font-bold text-xs">{m.label}</div>
                      <div className="text-[10px] opacity-50 mt-0.5">{m.desc}</div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Divider */}
          <div className="flex items-center gap-3">
            <div className="flex-1 h-px bg-[#1e3a5f]" />
            <span className="text-[#d4a017]/40 text-xs font-mono tracking-widest">◆</span>
            <div className="flex-1 h-px bg-[#1e3a5f]" />
          </div>

          {/* Start */}
          <button
            onClick={handleStart}
            className="w-full py-4 rounded-lg font-black text-lg tracking-[0.15em] uppercase transition-all duration-200 active:scale-[0.97] relative overflow-hidden group"
            style={{
              background: "linear-gradient(135deg, #d4a017 0%, #e8c040 50%, #d4a017 100%)",
              color: "#0a1429",
              fontFamily: "'Playfair Display', serif",
              boxShadow: "0 4px 24px rgba(212,160,23,0.35), 0 1px 0 rgba(255,255,255,0.15) inset",
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
          <div className="flex-1 h-px bg-[#1e3a5f]" />
          <h2
            className="text-sm font-bold text-[#d4a017] tracking-[0.2em] uppercase"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Closed Cases Registry
          </h2>
          <div className="flex-1 h-px bg-[#1e3a5f]" />
        </div>
        <Leaderboard />
      </motion.div>
    </main>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-2 mb-3">
      <span className="w-1 h-3 rounded-full bg-[#d4a017]" />
      <h2 className="text-[11px] uppercase tracking-[0.2em] text-[#8a9ab0] font-mono">{children}</h2>
    </div>
  );
}
