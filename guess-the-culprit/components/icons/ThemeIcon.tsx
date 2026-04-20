import React from "react";
import type { CSSProperties } from "react";

interface Props {
  theme: string;
  size?: number;
  className?: string;
  style?: CSSProperties;
}

export default function ThemeIcon({ theme, size = 20, className = "", style }: Props) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      style={style}
      aria-hidden="true"
    >
      {ICONS[theme] ?? null}
    </svg>
  );
}

const ICONS: Record<string, React.ReactNode> = {
  detective: (
    <>
      {/* Deerstalker hat — crown */}
      <path
        d="M6 14 Q7 8 12 7 Q17 8 18 14Z"
        stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"
      />
      {/* Hat brim */}
      <path d="M3 14h18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      {/* Front peak */}
      <path d="M8 14 Q12 18 16 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      {/* Rear flap left */}
      <path d="M7 10 Q5 7 7 5 Q9 8 8 10" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" fill="none" opacity="0.7"/>
      {/* Rear flap right */}
      <path d="M17 10 Q19 7 17 5 Q15 8 16 10" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" fill="none" opacity="0.7"/>
      {/* Hat band */}
      <line x1="8" y1="11.5" x2="16" y2="11.5" stroke="currentColor" strokeWidth="0.8" opacity="0.5"/>
      {/* Magnifier (tiny, corner) */}
      <circle cx="19" cy="19" r="2.5" stroke="currentColor" strokeWidth="1.2" opacity="0.6"/>
      <line x1="21" y1="21" x2="23" y2="23" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.6"/>
    </>
  ),

  "soul-society": (
    <>
      {/* Zanpakuto blade */}
      <path
        d="M12 2 L13 14"
        stroke="currentColor" strokeWidth="2" strokeLinecap="round"
      />
      {/* Blade edge */}
      <path d="M12 2 L11 14" stroke="currentColor" strokeWidth="0.8" strokeLinecap="round" opacity="0.5"/>
      {/* Tsuba (guard) */}
      <ellipse cx="12" cy="15" rx="5.5" ry="1.8" stroke="currentColor" strokeWidth="1.5"/>
      {/* Guard detail */}
      <line x1="7" y1="15" x2="6" y2="15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <line x1="17" y1="15" x2="18" y2="15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      {/* Tsuka (handle) with wrapping */}
      <path d="M12 16.8 L12 22" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round"/>
      <line x1="10.2" y1="18" x2="13.8" y2="18.8" stroke="currentColor" strokeWidth="0.8" strokeLinecap="round" opacity="0.5"/>
      <line x1="10.2" y1="20" x2="13.8" y2="20.8" stroke="currentColor" strokeWidth="0.8" strokeLinecap="round" opacity="0.5"/>
      {/* Hollow mask fragment (subtle) */}
      <path d="M4 7 Q2 9 3 12" stroke="currentColor" strokeWidth="1" strokeLinecap="round" opacity="0.35"/>
    </>
  ),

  "hidden-leaf": (
    <>
      {/* Konoha leaf outline */}
      <path
        d="M12 2 Q21 7 20 16 Q17 22 12 22 Q7 22 4 16 Q3 7 12 2Z"
        stroke="currentColor" strokeWidth="1.5"
      />
      {/* Central vein */}
      <line x1="12" y1="3" x2="12" y2="20" stroke="currentColor" strokeWidth="0.8" strokeLinecap="round" opacity="0.5"/>
      {/* Side veins */}
      <path d="M12 8 Q9 9 7 12" stroke="currentColor" strokeWidth="0.8" strokeLinecap="round" opacity="0.4"/>
      <path d="M12 8 Q15 9 17 12" stroke="currentColor" strokeWidth="0.8" strokeLinecap="round" opacity="0.4"/>
      {/* Konoha swirl */}
      <circle cx="12" cy="14" r="3.5" stroke="currentColor" strokeWidth="1.2"/>
      <path
        d="M12 11 Q14.5 11.5 14 14 Q13.5 16.5 11 16 Q8.5 15 9 12.5"
        stroke="currentColor" strokeWidth="1" strokeLinecap="round" fill="none"
      />
    </>
  ),

  kira: (
    <>
      {/* Death Note book cover */}
      <rect x="4" y="2" width="15" height="20" rx="1.5" stroke="currentColor" strokeWidth="1.5"/>
      {/* Spine shadow */}
      <line x1="7" y1="2" x2="7" y2="22" stroke="currentColor" strokeWidth="1" opacity="0.4"/>
      {/* Title banner */}
      <rect x="7" y="4" width="10" height="4" rx="0.5" stroke="currentColor" strokeWidth="1"/>
      <line x1="9" y1="6" x2="15" y2="6" stroke="currentColor" strokeWidth="1" strokeLinecap="round" opacity="0.6"/>
      {/* Shinigami eye on cover */}
      <path d="M8 14 Q11.5 10.5 15 14 Q11.5 17.5 8 14Z" stroke="currentColor" strokeWidth="1.5" fill="none"/>
      <circle cx="11.5" cy="14" r="1.8" stroke="currentColor" strokeWidth="1.2"/>
      <circle cx="11.5" cy="14" r="0.8" fill="currentColor"/>
      {/* Feather */}
      <path d="M17 16 Q19 13 21 11 Q20 14 18 16 L17 19" stroke="currentColor" strokeWidth="1" strokeLinecap="round" fill="none" opacity="0.6"/>
    </>
  ),

  "cursed-domain": (
    <>
      {/* Domain boundary */}
      <circle cx="12" cy="12" r="9.5" stroke="currentColor" strokeWidth="0.8" strokeDasharray="3 2.5"/>
      {/* Eye whites */}
      <path d="M3 12 Q12 4 21 12 Q12 20 3 12Z" stroke="currentColor" strokeWidth="1.5" fill="none"/>
      {/* Iris ring */}
      <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.5"/>
      {/* Slit pupil */}
      <line x1="12" y1="9" x2="12" y2="15" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
      {/* Sukuna tattoo marks */}
      <path d="M6 8 L4.5 6" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
      <path d="M18 8 L19.5 6" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
      <path d="M5 14 L3.5 15" stroke="currentColor" strokeWidth="1" strokeLinecap="round" opacity="0.5"/>
      <path d="M19 14 L20.5 15" stroke="currentColor" strokeWidth="1" strokeLinecap="round" opacity="0.5"/>
    </>
  ),

  "saiyan-power": (
    <>
      {/* Dragon ball sphere */}
      <circle cx="12" cy="13" r="8" stroke="currentColor" strokeWidth="1.5"/>
      {/* Sphere sheen */}
      <path d="M8 9 Q10 8 12 9" stroke="currentColor" strokeWidth="1" strokeLinecap="round" opacity="0.4"/>
      {/* 4-pointed star */}
      <path
        d="M12 7 L13.2 11.8 L18 13 L13.2 14.2 L12 19 L10.8 14.2 L6 13 L10.8 11.8Z"
        stroke="currentColor" strokeWidth="1" strokeLinejoin="round" fill="currentColor" opacity="0.75"
      />
      {/* Ki aura spikes */}
      <line x1="12" y1="2"  x2="12" y2="4"  stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      <line x1="19.5" y1="5.5" x2="21" y2="4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <line x1="4.5"  y1="5.5" x2="3"  y2="4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </>
  ),

  "ghoul-ward": (
    <>
      {/* Eye whites — wide ghoul eye */}
      <path d="M2 12 Q12 2 22 12 Q12 22 2 12Z" stroke="currentColor" strokeWidth="1.5" fill="none"/>
      {/* Iris */}
      <circle cx="12" cy="12" r="4.5" stroke="currentColor" strokeWidth="1.5"/>
      {/* Sclera detail */}
      <circle cx="12" cy="12" r="2.2" stroke="currentColor" strokeWidth="1"/>
      {/* Pupil */}
      <circle cx="12" cy="12" r="1" fill="currentColor"/>
      {/* Kagune droplets */}
      <path d="M10 17 Q9 19 10 21 Q11.5 19 10 17Z" fill="currentColor" opacity="0.6"/>
      <path d="M14 17 Q15 19 14 21 Q12.5 19 14 17Z" fill="currentColor" opacity="0.4"/>
    </>
  ),

  "survey-corps": (
    <>
      {/* Wings of Freedom — left wing */}
      <path d="M12 9 Q9 7 6 9 Q4 11 5 14 Q7.5 12 12 14" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
      <path d="M12 12.5 Q9 10.5 6 13 Q4.5 15 6 17 Q8.5 15 12 16.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
      <path d="M12 16 Q9 14 7 17 Q6 19 8 20 Q10 18 12 19" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" fill="none" opacity="0.7"/>
      {/* Wings of Freedom — right wing (mirror) */}
      <path d="M12 9 Q15 7 18 9 Q20 11 19 14 Q16.5 12 12 14" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
      <path d="M12 12.5 Q15 10.5 18 13 Q19.5 15 18 17 Q15.5 15 12 16.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
      <path d="M12 16 Q15 14 17 17 Q18 19 16 20 Q14 18 12 19" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" fill="none" opacity="0.7"/>
      {/* Central spine */}
      <line x1="12" y1="7" x2="12" y2="21" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      {/* Nape */}
      <circle cx="12" cy="6" r="1.5" stroke="currentColor" strokeWidth="1.2"/>
    </>
  ),

  "ua-grounds": (
    <>
      {/* U.A. Shield outline */}
      <path
        d="M12 2 L21 6 V13 C21 17.5 17 21 12 23 C7 21 3 17.5 3 13 V6 L12 2Z"
        stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"
      />
      {/* Lightning bolt */}
      <path
        d="M14 5 L9 13 H14 L10 20"
        stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
      />
    </>
  ),

  "return-by-death": (
    <>
      {/* Hourglass frame */}
      <line x1="5" y1="2"  x2="19" y2="2"  stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <line x1="5" y1="22" x2="19" y2="22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      {/* Hourglass sides top */}
      <path d="M6 2 Q12 12 18 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
      {/* Hourglass sides bottom */}
      <path d="M6 22 Q12 12 18 22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
      {/* Sand grain at center */}
      <circle cx="12" cy="12" r="1.5" fill="currentColor"/>
      {/* Crystal sparkles left */}
      <line x1="2"  y1="7" x2="4"  y2="9" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
      <line x1="2"  y1="9" x2="4"  y2="9" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
      <line x1="2"  y1="9" x2="4"  y2="11" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
      {/* Crystal sparkles right */}
      <line x1="22" y1="7" x2="20" y2="9" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
      <line x1="22" y1="9" x2="20" y2="9" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
      <line x1="22" y1="9" x2="20" y2="11" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
    </>
  ),
};
