"use client";
import { Character } from "@/lib/characters";
import { motion } from "framer-motion";

interface Props {
  choices: Character[];
  onSelect: (slug: string) => void;
  disabled?: boolean;
  correctSlug?: string;
  selectedSlug?: string;
}

export default function AnswerOptions({ choices, onSelect, disabled, correctSlug, selectedSlug }: Props) {
  return (
    <div className="grid grid-cols-2 gap-2.5">
      {choices.map((c, i) => {
        const isCorrect = correctSlug && c.slug === correctSlug;
        const isWrong   = correctSlug && selectedSlug && c.slug === selectedSlug && c.slug !== correctSlug;
        const isNeutral = disabled && !isCorrect && !isWrong;

        return (
          <motion.button
            key={c.slug}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.06, duration: 0.2 }}
            onClick={() => !disabled && onSelect(c.slug)}
            disabled={disabled}
            className={`relative px-4 py-3 rounded-lg border-2 text-left text-sm font-mono transition-all duration-200 overflow-hidden group ${
              disabled ? "cursor-not-allowed" : "cursor-pointer hover:scale-[1.02] active:scale-[0.98]"
            }`}
            style={
              isCorrect
                ? { borderColor: "#4ade80", background: "rgba(74,222,128,0.1)", boxShadow: "0 0 16px rgba(74,222,128,0.25)" }
                : isWrong
                ? { borderColor: "#ef4444", background: "rgba(239,68,68,0.1)", boxShadow: "0 0 16px rgba(239,68,68,0.2)" }
                : isNeutral
                ? { borderColor: "var(--theme-border, #1e3a5f)", background: "color-mix(in srgb, var(--theme-card, #0a1a2e) 50%, transparent)", opacity: 0.45 }
                : { borderColor: "var(--theme-border, #1e3a5f)", background: "color-mix(in srgb, var(--theme-card, #0a1a2e) 80%, transparent)" }
            }
          >
            {/* Hover shimmer for active buttons */}
            {!disabled && (
              <span className="absolute inset-0 bg-gradient-to-r from-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                style={{ backgroundImage: "linear-gradient(to right, transparent, color-mix(in srgb, var(--theme-accent, #d4a017) 5%, transparent), transparent)" }}
              />
            )}

            <div className="flex items-start gap-2.5">
              {/* Letter badge */}
              <span
                className="flex-shrink-0 w-5 h-5 rounded flex items-center justify-center text-[10px] font-bold mt-0.5"
                style={
                  isCorrect ? { background: "#4ade8033", color: "#4ade80" } :
                  isWrong   ? { background: "#ef444433", color: "#ef4444" } :
                              { background: "color-mix(in srgb, var(--theme-border, #1e3a5f) 40%, transparent)", color: "#8a9ab0" }
                }
              >
                {String.fromCharCode(65 + i)}
              </span>

              <div className="min-w-0">
                <span
                  className="font-bold text-sm block leading-tight"
                  style={
                    isCorrect ? { color: "#4ade80" } :
                    isWrong   ? { color: "#ef4444" } :
                                { color: "#d4c090" }
                  }
                >
                  {c.displayName}
                </span>
                <span
                  className="text-[10px] block mt-0.5 truncate"
                  style={
                    isCorrect ? { color: "#4ade8099" } :
                    isWrong   ? { color: "#ef444499" } :
                                { color: "#4a5a6a" }
                  }
                >
                  {c.series}
                </span>
              </div>

              {/* Result icon */}
              {isCorrect && <span className="ml-auto text-[#4ade80] text-base flex-shrink-0">✓</span>}
              {isWrong   && <span className="ml-auto text-[#ef4444] text-base flex-shrink-0">✗</span>}
            </div>
          </motion.button>
        );
      })}
    </div>
  );
}
