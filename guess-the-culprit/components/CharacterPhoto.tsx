"use client";
import React, { useEffect, useRef, useState } from "react";
import CharacterSilhouette from "./CharacterSilhouette";
import { SketchHints } from "@/lib/characters";
import { imageFetchQueue } from "@/lib/fetch-queue";

interface Props {
  hints: SketchHints;
  characterName: string;
  characterSlug: string;
  series: string;
  size?: number;
  className?: string;
  pixelated?: boolean;
  silhouette?: boolean;
  plain?: boolean; // show original image, no filters
}

const BLOCK = 12; // pixel block size

export default function CharacterPhoto({
  hints,
  characterName,
  characterSlug,
  series,
  size = 180,
  className,
  pixelated,
  silhouette,
}: Props) {
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [status, setStatus] = useState<"loading" | "ready" | "error">("loading");
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Fetch the MAL image URL
  useEffect(() => {
    let isMounted = true;
    setImageUrl(null);
    setStatus("loading");

    imageFetchQueue.enqueue(async () => {
      if (!isMounted) return;
      try {
        const r = await fetch(
          `/api/character-image?slug=${encodeURIComponent(characterSlug)}&name=${encodeURIComponent(characterName)}&series=${encodeURIComponent(series)}`
        );
        const data = await r.json();
        if (!isMounted) return;

        if (data.imageUrl) {
          setImageUrl(data.imageUrl);
          setStatus("ready");
        } else {
          setStatus("error");
        }
      } catch {
        if (isMounted) setStatus("error");
      }
    });

    return () => {
      isMounted = false;
    };
  }, [characterSlug, characterName, series]);

  // Draw pixelated version on canvas via same-origin proxy (no CORS issue)
  useEffect(() => {
    if (!pixelated || !imageUrl || !canvasRef.current) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const W = canvas.width;
    const H = canvas.height;
    const sw = Math.ceil(W / BLOCK);
    const sh = Math.ceil(H / BLOCK);

    const img = new window.Image();
    // Fetch through our proxy so canvas isn't tainted by cross-origin
    img.src = `/api/proxy-image?url=${encodeURIComponent(imageUrl)}`;
    img.onload = () => {
      // Step 1: draw tiny
      const small = document.createElement("canvas");
      small.width = sw;
      small.height = sh;
      const sc = small.getContext("2d")!;
      sc.drawImage(img, 0, 0, sw, sh);

      // Step 2: scale back up without smoothing → pixel blocks
      ctx.imageSmoothingEnabled = false;
      ctx.drawImage(small, 0, 0, W, H);
    };
    img.onerror = () => setStatus("error");
  }, [pixelated, imageUrl]);

  const h = Math.round(size * 1.4);

  if (status === "loading") {
    return (
      <div className={`flex items-center justify-center bg-[#111827] rounded ${className ?? ""}`}
        style={{ width: size, height: h }}>
        <div className="w-10 h-10 border-4 border-[#d4a017] border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  if (status === "error" || !imageUrl) {
    return (
      <div className={`bg-[#f5eed5] rounded overflow-hidden ${className ?? ""}`}
        style={{ width: size, height: h }}>
        <CharacterSilhouette hints={hints} size={size} />
      </div>
    );
  }

  /* ── Pixelated: canvas drawn via proxy ── */
  if (pixelated) {
    return (
      <canvas
        ref={canvasRef}
        width={size}
        height={h}
        className={`rounded ${className ?? ""}`}
        style={{ imageRendering: "pixelated", display: "block" }}
      />
    );
  }

  /* ── Silhouette: solid black shape on cream background ── */
  if (silhouette) {
    return (
      <div
        className={`relative overflow-hidden rounded ${className ?? ""}`}
        style={{ width: size, height: h, background: "#e8dfc4" }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={imageUrl}
          alt="suspect silhouette"
          onError={() => setStatus("error")}
          className="w-full h-full object-cover object-top"
          style={{ filter: "brightness(0)" }}
        />
      </div>
    );
  }

  /* ── Sketch: dual-layer color-dodge pencil effect ── */
  return (
    <div
      className={`relative overflow-hidden rounded ${className ?? ""}`}
      style={{ width: size, height: h, background: "#f5eed5" }}
    >
      {/* Base layer */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={imageUrl}
        alt="suspect sketch"
        onError={() => setStatus("error")}
        className="absolute inset-0 w-full h-full object-cover object-top"
        style={{ filter: "grayscale(1) brightness(1.9) contrast(1.05)" }}
      />
      {/* Color-dodge layer: cancels midtones, leaves edge lines */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={imageUrl}
        alt=""
        aria-hidden
        className="absolute inset-0 w-full h-full object-cover object-top"
        style={{
          filter: "grayscale(1) invert(1) blur(5px) brightness(1.1)",
          mixBlendMode: "color-dodge",
        }}
      />
      {/* Paper texture */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(160,140,80,0.05) 3px, rgba(160,140,80,0.05) 4px)",
          mixBlendMode: "multiply",
        }}
      />
      <div
        className="absolute inset-0 pointer-events-none rounded"
        style={{ boxShadow: "inset 0 0 40px rgba(60,40,10,0.22)" }}
      />
    </div>
  );
}
