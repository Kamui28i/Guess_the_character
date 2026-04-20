"use client";
import { motion } from "framer-motion";
import { ReactNode } from "react";

interface Props {
  caseNumber: number;
  children: ReactNode;
  className?: string;
}

export default function CaseFileCard({ caseNumber, children, className = "" }: Props) {
  return (
    <motion.div
      initial={{ x: -80, opacity: 0, rotateY: -8 }}
      animate={{ x: 0, opacity: 1, rotateY: 0 }}
      exit={{ x: 80, opacity: 0, rotateY: 8 }}
      transition={{ type: "spring", stiffness: 240, damping: 24 }}
      className={`relative rounded-sm shadow-2xl border border-[#b8a880] overflow-hidden paper-texture ${className}`}
      style={{
        fontFamily: "'Courier Prime', 'Special Elite', monospace",
        boxShadow: "0 8px 40px rgba(0,0,0,0.6), 0 2px 0 rgba(255,255,255,0.04) inset, 4px 4px 0 rgba(0,0,0,0.3)",
      }}
    >
      {/* Top binding tape strip */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-[#d4a017]/60" />

      {/* Paperclip */}
      <div className="absolute top-0 left-10 w-4 h-9 rounded-b-full border-[3px] border-[#8a7850] bg-transparent -mt-0.5 z-10"
        style={{ boxShadow: "1px 1px 3px rgba(0,0,0,0.3)" }}
      />

      {/* Header bar */}
      <div className="bg-[#0a1429] text-[#d4a017] px-4 sm:px-6 pt-5 sm:pt-6 pb-3 flex justify-between items-center border-b-2 border-[#d4a017]/20">
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-[#d4a017]/60 animate-pulse" />
          <span className="text-[10px] uppercase tracking-[0.25em] opacity-60 font-mono">Classified Case File</span>
        </div>
        <span
          className="text-sm font-bold tracking-wider px-2 py-0.5 rounded border border-[#d4a017]/30 bg-[#d4a017]/8"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          CASE #{String(caseNumber).padStart(3, "0")}
        </span>
      </div>

      {/* Redacted suspect strip */}
      <div className="px-4 sm:px-6 py-2.5 bg-[#e0d8be] border-b border-[#b8a880] flex items-center gap-3">
        <span className="text-[10px] uppercase tracking-wider text-[#5a4a3a]/70 font-mono flex-shrink-0">Suspect:</span>
        <span className="inline-flex items-center bg-[#1a1a1a] text-transparent select-none px-5 py-0.5 rounded-sm text-sm tracking-[0.3em] font-mono">
          ██████████████
        </span>
        <span className="ml-auto text-[10px] text-[#8a6030]/50 font-mono tracking-widest">TOP SECRET</span>
      </div>

      {/* Aged edge effect */}
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-[#c8a060]/20 via-transparent to-[#c8a060]/20 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-1 bg-gradient-to-b from-[#c8a060]/20 via-transparent to-[#c8a060]/20 pointer-events-none" />

      {/* Fingerprint decoration */}
      <div
        className="absolute bottom-6 right-8 w-20 h-20 rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, #8a6030 30%, transparent 70%)", opacity: 0.04, filter: "blur(3px)" }}
      />

      {/* Content */}
      <div className="px-4 sm:px-6 py-4 sm:py-5">{children}</div>
    </motion.div>
  );
}
