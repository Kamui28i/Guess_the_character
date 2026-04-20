import React from "react";

interface Props {
  mode: string;
  size?: number;
  className?: string;
}

export default function ModeIcon({ mode, size = 20, className = "" }: Props) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      {ICONS[mode] ?? null}
    </svg>
  );
}

const ICONS: Record<string, React.ReactNode> = {

  // ── Description: Dossier with all-seeing eyewitness eye ────────────────────
  description: (
    <>
      {/* Case file / manila folder */}
      <path
        d="M5 3h10l5 4v14a1 1 0 01-1 1H5a1 1 0 01-1-1V4a1 1 0 011-1z"
        stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"
      />
      <path d="M15 3v4h5" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
      {/* Eyewitness eye stamped on dossier */}
      <path
        d="M7 13.5 Q12 9.5 17 13.5 Q12 17.5 7 13.5Z"
        stroke="currentColor" strokeWidth="1.3" fill="none"
      />
      <circle cx="12" cy="13.5" r="2.2" stroke="currentColor" strokeWidth="1.3"/>
      <circle cx="12" cy="13.5" r="0.9" fill="currentColor"/>
      {/* Eyelashes top */}
      <line x1="9"  y1="11" x2="9.5"  y2="10" stroke="currentColor" strokeWidth="0.8" strokeLinecap="round" opacity="0.5"/>
      <line x1="12" y1="10" x2="12"   y2="9"  stroke="currentColor" strokeWidth="0.8" strokeLinecap="round" opacity="0.5"/>
      <line x1="15" y1="11" x2="14.5" y2="10" stroke="currentColor" strokeWidth="0.8" strokeLinecap="round" opacity="0.5"/>
      {/* Report lines above eye */}
      <line x1="7" y1="7" x2="12" y2="7" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" opacity="0.45"/>
    </>
  ),

  // ── Sketch: Pinned polaroid with shadowy suspect + question mark ───────────
  sketch: (
    <>
      {/* Polaroid frame */}
      <rect x="4" y="3" width="16" height="18" rx="1.5" stroke="currentColor" strokeWidth="1.5"/>
      {/* Thick bottom strip */}
      <line x1="4.8" y1="17" x2="19.2" y2="17" stroke="currentColor" strokeWidth="0.8" opacity="0.35"/>
      {/* Pushpin */}
      <circle cx="12" cy="3.8" r="1.4" fill="currentColor" opacity="0.55"/>
      <line x1="12" y1="5.2" x2="12" y2="7" stroke="currentColor" strokeWidth="1" strokeLinecap="round" opacity="0.4"/>
      {/* Shadowy suspect head */}
      <circle
        cx="12" cy="10" r="3.2"
        stroke="currentColor" strokeWidth="1.2"
        fill="currentColor" fillOpacity="0.18"
      />
      {/* Shoulders */}
      <path
        d="M7 16 Q8.5 13 12 13 Q15.5 13 17 16"
        stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" fill="none"
        fillOpacity="0.18"
      />
      {/* Question mark arc */}
      <path
        d="M10.5 8.5 Q10.5 6.8 12 6.8 Q13.5 6.8 13.5 8.5 Q13.5 10 12 10.2"
        stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" fill="none"
      />
      {/* Question mark dot */}
      <circle cx="12" cy="11.5" r="0.65" fill="currentColor"/>
    </>
  ),

  // ── Body Part: Eye peering through a keyhole ──────────────────────────────
  bodypart: (
    <>
      {/* Keyhole circle */}
      <circle cx="12" cy="9" r="5.5" stroke="currentColor" strokeWidth="1.5"/>
      {/* Keyhole slot */}
      <path
        d="M10 13.5 L10 20 Q10 21.5 12 21.5 Q14 21.5 14 20 L14 13.5"
        stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
      />
      {/* Eye whites */}
      <path
        d="M7.2 9 Q12 5 16.8 9 Q12 13 7.2 9Z"
        stroke="currentColor" strokeWidth="1.3" fill="none"
      />
      {/* Iris */}
      <circle cx="12" cy="9" r="2" stroke="currentColor" strokeWidth="1.2"/>
      {/* Pupil */}
      <circle cx="12" cy="9" r="0.8" fill="currentColor"/>
      {/* Eyelid crease hints */}
      <path d="M8.5 8 Q12 6 15.5 8" stroke="currentColor" strokeWidth="0.8" strokeLinecap="round" opacity="0.4"/>
    </>
  ),

  // ── Pixelated: CRT monitor with static and pixel face ────────────────────
  pixelated: (
    <>
      {/* CRT monitor body */}
      <rect x="2" y="2" width="20" height="15" rx="2" stroke="currentColor" strokeWidth="1.5"/>
      {/* Monitor neck */}
      <line x1="10" y1="17" x2="10" y2="20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <line x1="14" y1="17" x2="14" y2="20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      {/* Monitor base */}
      <line x1="7" y1="20" x2="17" y2="20" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
      {/* Pixelated face — eye blocks */}
      <rect x="5.5" y="6"  width="4" height="3.5" rx="0.4" fill="currentColor" opacity="0.88"/>
      <rect x="14.5" y="6"  width="4" height="3.5" rx="0.4" fill="currentColor" opacity="0.88"/>
      {/* Nose pixel */}
      <rect x="11" y="10.5" width="2" height="2" rx="0.3" fill="currentColor" opacity="0.45"/>
      {/* Mouth pixels */}
      <rect x="7"  y="13.5" width="3" height="1.5" rx="0.3" fill="currentColor" opacity="0.65"/>
      <rect x="11" y="13.5" width="2" height="1.5" rx="0.3" fill="currentColor" opacity="0.55"/>
      <rect x="14" y="13.5" width="3" height="1.5" rx="0.3" fill="currentColor" opacity="0.45"/>
      {/* Horizontal scan lines */}
      <line x1="2.8" y1="5"    x2="21.2" y2="5"    stroke="currentColor" strokeWidth="0.35" opacity="0.2"/>
      <line x1="2.8" y1="10.2" x2="21.2" y2="10.2" stroke="currentColor" strokeWidth="0.35" opacity="0.2"/>
      <line x1="2.8" y1="15.5" x2="21.2" y2="15.5" stroke="currentColor" strokeWidth="0.35" opacity="0.15"/>
    </>
  ),

  // ── Details: Detective footprint trail, fading into mystery ───────────────
  details: (
    <>
      {/* === Pair 1: bottom-left, bright === */}
      {/* Left foot */}
      <ellipse cx="4.5" cy="20.5" rx="1.6" ry="2.2" transform="rotate(-20 4.5 20.5)"
        stroke="currentColor" strokeWidth="1.3"/>
      <circle cx="3.5" cy="18.8" r="0.5" fill="currentColor" opacity="0.7"/>
      <circle cx="4.5" cy="18.4" r="0.5" fill="currentColor" opacity="0.7"/>
      <circle cx="5.5" cy="18.6" r="0.5" fill="currentColor" opacity="0.7"/>
      {/* Right foot */}
      <ellipse cx="8.5" cy="17" rx="1.6" ry="2.2" transform="rotate(-20 8.5 17)"
        stroke="currentColor" strokeWidth="1.3"/>
      <circle cx="7.5" cy="15.3" r="0.5" fill="currentColor" opacity="0.7"/>
      <circle cx="8.5" cy="14.9" r="0.5" fill="currentColor" opacity="0.7"/>
      <circle cx="9.5" cy="15.1" r="0.5" fill="currentColor" opacity="0.7"/>

      {/* === Pair 2: mid, dimmer === */}
      <ellipse cx="12" cy="13" rx="1.4" ry="2" transform="rotate(-20 12 13)"
        stroke="currentColor" strokeWidth="1.1" opacity="0.55"/>
      <circle cx="11.2" cy="11.5" r="0.45" fill="currentColor" opacity="0.4"/>
      <circle cx="12"   cy="11.1" r="0.45" fill="currentColor" opacity="0.4"/>
      <circle cx="12.8" cy="11.3" r="0.45" fill="currentColor" opacity="0.4"/>
      <ellipse cx="16" cy="9.5" rx="1.4" ry="2" transform="rotate(-20 16 9.5)"
        stroke="currentColor" strokeWidth="1.1" opacity="0.55"/>
      <circle cx="15.2" cy="8"  r="0.45" fill="currentColor" opacity="0.4"/>
      <circle cx="16"   cy="7.6" r="0.45" fill="currentColor" opacity="0.4"/>
      <circle cx="16.8" cy="7.8" r="0.45" fill="currentColor" opacity="0.4"/>

      {/* === Destination: question mark === */}
      <path d="M19 4.5 Q19 2.8 20.5 2.8 Q22 2.8 22 4.5 Q22 6 20.5 6.3"
        stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" fill="none" opacity="0.35"/>
      <circle cx="20.5" cy="7.5" r="0.6" fill="currentColor" opacity="0.35"/>
    </>
  ),

  // ── Mixed: Magnifying glass revealing a ??? question mark ─────────────────
  mixed: (
    <>
      {/* Lens */}
      <circle cx="10" cy="10" r="7.5" stroke="currentColor" strokeWidth="1.5"/>
      {/* Handle */}
      <line x1="16" y1="16" x2="22.5" y2="22.5" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round"/>
      {/* Question mark arc inside */}
      <path
        d="M7.5 8.5 Q7.5 5.5 10 5.5 Q12.5 5.5 12.5 8.5 Q12.5 10.5 10 11.2 L10 12.5"
        stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" fill="none"
      />
      {/* Question mark dot */}
      <circle cx="10" cy="14.5" r="1.2" fill="currentColor"/>
      {/* Sparkle orbiting the lens rim — hints at randomness */}
      <line x1="10" y1="1"  x2="10" y2="2.5"  stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" opacity="0.5"/>
      <line x1="17.5" y1="3.5" x2="16.5" y2="4.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" opacity="0.4"/>
      <line x1="2.5"  y1="3.5" x2="3.5"  y2="4.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" opacity="0.4"/>
      <line x1="1"    y1="10"  x2="2.5"  y2="10"   stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" opacity="0.3"/>
    </>
  ),
};
