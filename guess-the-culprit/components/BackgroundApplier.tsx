"use client";
import { useEffect } from "react";
import { useThemeStore } from "@/store/theme-store";
import { BACKGROUNDS, DEFAULT_BACKGROUND_ID } from "@/lib/backgrounds";
import ThemeOverlay from "./ThemeOverlay";

export default function BackgroundApplier() {
  const { backgroundId, setBackground } = useThemeStore();

  // Rehydrate from localStorage on first mount
  useEffect(() => {
    const saved = localStorage.getItem("bg-theme");
    if (saved && saved !== backgroundId) setBackground(saved);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const bg = BACKGROUNDS.find((b) => b.id === backgroundId) ??
               BACKGROUNDS.find((b) => b.id === DEFAULT_BACKGROUND_ID)!;
    const size = bg.patternSize ?? 28;

    let el = document.getElementById("bg-override") as HTMLStyleElement | null;
    if (!el) {
      el = document.createElement("style");
      el.id = "bg-override";
      document.head.appendChild(el);
    }

    el.textContent = `
      :root {
        --theme-accent:       ${bg.accentColor};
        --theme-accent-light: ${bg.accentLight};
        --theme-card:         ${bg.cardBg};
        --theme-border:       ${bg.cardBorder};
      }
      body {
        background: ${bg.bodyBg} !important;
      }
      body::before {
        background-image: radial-gradient(circle, ${bg.patternColor} 1px, transparent 1px) !important;
        background-size: ${size}px ${size}px !important;
      }
    `;
  }, [backgroundId]);

  return <ThemeOverlay backgroundId={backgroundId} />;
}
