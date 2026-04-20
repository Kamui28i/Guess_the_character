"use client";
import React, { useEffect, useState } from "react";
import { SketchHints } from "@/lib/characters";
import CharacterSilhouette from "./CharacterSilhouette";

interface Props {
  hints: SketchHints;
  bodyPartHint: string;
  characterName: string;
  characterSlug: string;
  series: string;
  size?: number;
}

function spotlightPosition(hint: string): { x: string; y: string } {
  const h = hint.toLowerCase();
  if (h.includes("hair") || h.includes("head") || h.includes("ear") || h.includes("horn")) return { x: "50%", y: "12%" };
  if (h.includes("eye") || h.includes("glasses") || h.includes("blindfold")) return { x: "50%", y: "22%" };
  if (h.includes("scar") || h.includes("face") || h.includes("cheek") || h.includes("forehead") || h.includes("whisker")) return { x: "50%", y: "26%" };
  if (h.includes("bowtie") || h.includes("mask") || h.includes("cravat") || h.includes("neck")) return { x: "50%", y: "34%" };
  if (h.includes("pendant") || h.includes("puzzle") || h.includes("necklace") || h.includes("scarf")) return { x: "50%", y: "40%" };
  if (h.includes("coat") || h.includes("jacket") || h.includes("cloak") || h.includes("robe") ||
      h.includes("suit") || h.includes("jumpsuit") || h.includes("uniform") || h.includes("shirt") ||
      h.includes("haori") || h.includes("gi") || h.includes("emblem") || h.includes("symbol")) return { x: "50%", y: "54%" };
  if (h.includes("sword") || h.includes("katana") || h.includes("weapon") || h.includes("grimoire")) return { x: "50%", y: "72%" };
  if (h.includes("arm") || h.includes("wrist") || h.includes("glove")) return { x: "50%", y: "62%" };
  return { x: "50%", y: "26%" };
}

export default function MagnifierCrop({ hints, bodyPartHint, characterName, characterSlug, series, size = 180 }: Props) {
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [status, setStatus] = useState<"loading" | "ready" | "error">("loading");

  useEffect(() => {
    setImageUrl(null);
    setStatus("loading");

    fetch(
      `/api/character-image?slug=${encodeURIComponent(characterSlug)}&name=${encodeURIComponent(characterName)}&series=${encodeURIComponent(series)}`
    )
      .then((r) => r.json())
      .then((data) => {
        if (data.imageUrl) { setImageUrl(data.imageUrl); setStatus("ready"); }
        else setStatus("error");
      })
      .catch(() => setStatus("error"));
  }, [characterSlug, characterName, series]);

  const pos = spotlightPosition(bodyPartHint);

  return (
    <div className="flex flex-col items-center gap-1.5">
      <div
        className="relative overflow-hidden rounded bg-[#111827] border-2 border-[#1e3a5f] shadow-lg"
        style={{ width: size, height: size * 1.4, maxHeight: "min(336px, 36vh)", maxWidth: "min(100%, calc(100vw - 80px))" }}
      >
        {status === "ready" && imageUrl ? (
          <>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={imageUrl}
              alt="character clue"
              className="w-full h-full object-cover object-top"
              onError={() => setStatus("error")}
            />
            {/* Darker spotlight — only a tiny window of light */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background: `radial-gradient(ellipse 28% 18% at ${pos.x} ${pos.y}, rgba(0,0,0,0.05) 0%, rgba(0,0,0,0.75) 55%, rgba(0,0,0,0.97) 100%)`,
              }}
            />
          </>
        ) : status === "loading" ? (
          <div className="w-full h-full flex items-center justify-center">
            <div className="w-10 h-10 border-4 border-[#d4a017] border-t-transparent rounded-full animate-spin" />
          </div>
        ) : (
          <CharacterSilhouette hints={hints} size={size} />
        )}
      </div>

      <div className="text-center space-y-1">
        <p className="text-xs uppercase tracking-widest text-[#8a9ab0]">Evidence — Spotlight on:</p>
        <p className="text-sm font-bold font-mono text-amber-300">{bodyPartHint}</p>
      </div>
    </div>
  );
}
