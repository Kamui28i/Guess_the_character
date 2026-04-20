"use client";
import { Character } from "@/lib/characters";
import { getCharacterDetails } from "@/lib/game-engine";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import CharacterPhoto from "./CharacterPhoto";
import MagnifierCrop from "./MagnifierCrop";

interface Props {
  character: Character;
  clueMode: "description" | "sketch" | "bodypart" | "pixelated" | "details";
  descriptionIndex: number;
  detailsRevealed?: number; // 1–10, for "details" mode
  revealed?: boolean; // true after player guesses
}

function sanitize(text: string, character: Character): string {
  let result = text;
  const terms = [character.displayName, character.series, ...character.aliases];
  for (const term of terms) {
    const escaped = term.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    result = result.replace(new RegExp(escaped, "gi"), "█████");
  }
  return result;
}

export default function ClueCard({ character, clueMode, descriptionIndex, detailsRevealed = 1, revealed = false }: Props) {

  if (clueMode === "details") {
    const allDetails = getCharacterDetails(character);
    const visible = allDetails.slice(0, detailsRevealed);
    const MAX = allDetails.length;

    return (
      <div className="space-y-2">
        {/* Header */}
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <span className="text-[10px] uppercase tracking-[0.2em] text-[#8a7a6a] font-mono">
              Clue Trail
            </span>
          </div>
          <div className="flex items-center gap-1.5">
            {Array.from({ length: MAX }).map((_, i) => (
              <span
                key={i}
                className="block w-1.5 h-1.5 rounded-full transition-all duration-300"
                style={{
                  background: i < detailsRevealed ? "#d4a017" : "#1e3a5f",
                  boxShadow: i === detailsRevealed - 1 ? "0 0 6px #d4a017" : "none",
                }}
              />
            ))}
          </div>
        </div>

        {/* Detail rows */}
        <div className="space-y-2">
          <AnimatePresence initial={false}>
            {visible.map((detail, i) => {
              const isNewest = i === visible.length - 1;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -16, height: 0 }}
                  animate={{ opacity: 1, x: 0, height: "auto" }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className={`flex gap-3 items-start p-3 rounded-lg border transition-colors ${
                    isNewest
                      ? "border-[#d4a017]/50 bg-[#d4a017]/8"
                      : "border-[#1e3a5f]/50 bg-[#0a1429]/30"
                  }`}
                >
                  {/* Index badge */}
                  <span
                    className="flex-shrink-0 w-5 h-5 rounded flex items-center justify-center text-[9px] font-bold font-mono mt-0.5"
                    style={
                      isNewest
                        ? { background: "rgba(212,160,23,0.2)", color: "#d4a017" }
                        : { background: "rgba(30,58,95,0.5)",   color: "#4a6a8a" }
                    }
                  >
                    {i + 1}
                  </span>

                  <p
                    className="text-sm leading-relaxed flex-1"
                    style={{
                      color: isNewest ? "#2a1a0a" : "#4a3a2a",
                      fontStyle: i >= 7 ? "italic" : "normal", // descriptions are italic
                    }}
                  >
                    {i >= 7 ? `"${detail}"` : detail}
                  </p>

                  {isNewest && (
                    <span className="flex-shrink-0 text-[#d4a017]/60 text-[10px] font-mono mt-0.5">
                      NEW
                    </span>
                  )}
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </div>
    );
  }

  if (clueMode === "description") {
    const rawText = character.descriptions[descriptionIndex];
    const text = sanitize(rawText, character);
    return (
      <div className="space-y-2">
        <p className="text-xs uppercase tracking-widest text-[#8a7a6a] mb-2">Witness Statement</p>
        <p className="text-[#2a1a0a] leading-relaxed text-base italic">"{text}"</p>
      </div>
    );
  }

  if (clueMode === "sketch" || clueMode === "pixelated") {
    const titleMap = {
      sketch: "Suspect Photo",
      pixelated: "Censored / Distorted Evidence",
    };
    return (
      <div className="flex flex-col items-center gap-2">
        <p className="text-xs uppercase tracking-widest text-[#8a7a6a]">{titleMap[clueMode]}</p>
        <div className="border-2 border-[#1e3a5f] rounded p-1 bg-black shadow-lg">
          <CharacterPhoto
            hints={character.sketchHints}
            characterName={character.displayName}
            characterSlug={character.slug}
            series={character.series}
            size={180}
            pixelated={clueMode === "pixelated"}
            silhouette={false}
          />
        </div>
        <p className="text-xs text-[#8a7a6a] italic">
          {clueMode === "pixelated"
            ? "The image was scrambled during transmission."
            : "Collected from security database."}
        </p>
      </div>
    );
  }

  // bodypart
  const hintIdx = Math.min(descriptionIndex, character.bodyPartHints.length - 1);
  const hint = character.bodyPartHints[hintIdx] ?? character.bodyPartHints[0];

  return <BodyPartClue character={character} hint={hint} revealed={revealed} />;
}

function BodyPartClue({
  character,
  hint,
  revealed,
}: {
  character: Character;
  hint: string;
  revealed: boolean;
}) {
  const [imageUrl, setImageUrl] = useState<string | null>(null);

  useEffect(() => {
    if (!revealed) return;
    fetch(
      `/api/character-image?slug=${encodeURIComponent(character.slug)}&name=${encodeURIComponent(character.displayName)}&series=${encodeURIComponent(character.series)}`
    )
      .then((r) => r.json())
      .then((d) => setImageUrl(d.imageUrl ?? null))
      .catch(() => {});
  }, [revealed, character.slug, character.displayName, character.series]);

  return (
    <div className="flex flex-col items-center gap-2">
      <p className="text-xs uppercase tracking-widest text-[#8a7a6a]">
        {revealed ? "Suspect Identified" : "Evidence Photo (Magnified)"}
      </p>

      <div className="relative">
        <AnimatePresence mode="wait">
          {!revealed ? (
            <motion.div
              key="crop"
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <MagnifierCrop
                hints={character.sketchHints}
                bodyPartHint={hint}
                characterName={character.displayName}
                characterSlug={character.slug}
                series={character.series}
                size={240}
              />
            </motion.div>
          ) : (
            <motion.div
              key="full"
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.45, ease: "easeOut" }}
              className="rounded overflow-hidden border border-[#1e3a5f]"
            >
              {imageUrl ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={imageUrl}
                  alt={character.displayName}
                  style={{ width: 200, height: 280, objectFit: "cover", objectPosition: "top", display: "block" }}
                />
              ) : (
                <div style={{ width: 200, height: 280 }} className="flex items-center justify-center bg-[#111827]">
                  <div className="w-8 h-8 border-4 border-[#d4a017] border-t-transparent rounded-full animate-spin" />
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
