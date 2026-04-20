"use client";
import React from "react";
import { SketchHints } from "@/lib/characters";

// ── Head shape paths ──────────────────────────────────────────────────────────
const HEAD_SHAPES: Record<string, React.ReactNode> = {
  "adult-male-spiky": (
    <>
      <ellipse cx="100" cy="95" rx="42" ry="48" fill="currentColor" opacity="0.15" stroke="currentColor" strokeWidth="2" />
      {/* spiky hair */}
      <polygon points="80,55 75,25 90,50" fill="currentColor" opacity="0.35" />
      <polygon points="95,50 90,18 105,48" fill="currentColor" opacity="0.35" />
      <polygon points="110,52 108,22 120,50" fill="currentColor" opacity="0.35" />
      <polygon points="120,58 122,35 130,58" fill="currentColor" opacity="0.30" />
    </>
  ),
  "teen-male-spiky": (
    <>
      <ellipse cx="100" cy="98" rx="38" ry="44" fill="currentColor" opacity="0.15" stroke="currentColor" strokeWidth="2" />
      <polygon points="82,62 78,32 92,56" fill="currentColor" opacity="0.35" />
      <polygon points="96,54 93,24 108,52" fill="currentColor" opacity="0.35" />
      <polygon points="112,58 112,30 122,56" fill="currentColor" opacity="0.32" />
    </>
  ),
  "teen-male-round": (
    <ellipse cx="100" cy="100" rx="40" ry="46" fill="currentColor" opacity="0.15" stroke="currentColor" strokeWidth="2" />
  ),
  "teen-male": (
    <>
      <ellipse cx="100" cy="98" rx="38" ry="45" fill="currentColor" opacity="0.15" stroke="currentColor" strokeWidth="2" />
      <path d="M68,85 Q70,55 100,54 Q130,55 132,85" fill="currentColor" opacity="0.25" />
    </>
  ),
  "teen-male-neat": (
    <>
      <ellipse cx="100" cy="98" rx="37" ry="45" fill="currentColor" opacity="0.15" stroke="currentColor" strokeWidth="2" />
      <path d="M70,78 Q72,52 100,52 Q128,52 130,78" fill="currentColor" opacity="0.22" stroke="currentColor" strokeWidth="1.5" />
    </>
  ),
  "teen-male-curly": (
    <>
      <ellipse cx="100" cy="100" rx="38" ry="46" fill="currentColor" opacity="0.15" stroke="currentColor" strokeWidth="2" />
      {/* curly hair blobs */}
      <circle cx="78" cy="72" r="10" fill="currentColor" opacity="0.28" />
      <circle cx="90" cy="60" r="12" fill="currentColor" opacity="0.28" />
      <circle cx="105" cy="57" r="11" fill="currentColor" opacity="0.28" />
      <circle cx="118" cy="65" r="9" fill="currentColor" opacity="0.25" />
    </>
  ),
  "adult-male": (
    <>
      <ellipse cx="100" cy="96" rx="40" ry="47" fill="currentColor" opacity="0.15" stroke="currentColor" strokeWidth="2" />
      <path d="M70,80 Q72,52 100,52 Q128,52 130,80" fill="currentColor" opacity="0.22" />
    </>
  ),
  "adult-male-short": (
    <>
      <ellipse cx="100" cy="100" rx="36" ry="44" fill="currentColor" opacity="0.15" stroke="currentColor" strokeWidth="2" />
      <path d="M72,82 Q74,55 100,55 Q126,55 128,82" fill="currentColor" opacity="0.25" />
    </>
  ),
  "adult-male-tall": (
    <>
      <ellipse cx="100" cy="94" rx="40" ry="50" fill="currentColor" opacity="0.15" stroke="currentColor" strokeWidth="2" />
      <path d="M68,76 Q70,46 100,46 Q130,46 132,76" fill="currentColor" opacity="0.22" />
    </>
  ),
  "adult-male-tall-thin": (
    <>
      <ellipse cx="100" cy="95" rx="36" ry="50" fill="currentColor" opacity="0.15" stroke="currentColor" strokeWidth="2" />
      <path d="M72,76 Q74,46 100,46 Q126,46 128,76" fill="currentColor" opacity="0.25" />
    </>
  ),
  "adult-male-bald": (
    <ellipse cx="100" cy="100" rx="42" ry="50" fill="currentColor" opacity="0.15" stroke="currentColor" strokeWidth="2" />
  ),
  "adult-male-flame-hair": (
    <>
      <ellipse cx="100" cy="98" rx="38" ry="46" fill="currentColor" opacity="0.15" stroke="currentColor" strokeWidth="2" />
      {/* flame hair */}
      <path d="M82,66 Q75,40 90,30 Q88,52 98,54 Q92,32 105,20 Q104,48 115,54 Q122,36 128,60 L128,66 Z" fill="currentColor" opacity="0.35" />
    </>
  ),
  "adult-male-scarred": (
    <>
      <ellipse cx="100" cy="96" rx="40" ry="48" fill="currentColor" opacity="0.15" stroke="currentColor" strokeWidth="2" />
      {/* scar */}
      <line x1="95" y1="60" x2="100" y2="95" stroke="currentColor" strokeWidth="2.5" opacity="0.6" />
      <path d="M70,80 Q72,54 100,54 Q128,54 130,80" fill="currentColor" opacity="0.22" />
    </>
  ),
  "adult-male-buff-huge": (
    <>
      <ellipse cx="100" cy="92" rx="48" ry="52" fill="currentColor" opacity="0.15" stroke="currentColor" strokeWidth="2.5" />
      {/* V horns */}
      <polygon points="82,48 76,20 90,45" fill="currentColor" opacity="0.38" />
      <polygon points="118,48 124,20 110,45" fill="currentColor" opacity="0.38" />
    </>
  ),
  "teen-feminine": (
    <>
      <ellipse cx="100" cy="100" rx="36" ry="44" fill="currentColor" opacity="0.15" stroke="currentColor" strokeWidth="1.5" />
      <path d="M72,82 Q68,52 100,50 Q132,52 128,82" fill="currentColor" opacity="0.20" />
    </>
  ),
  "adult-feminine": (
    <>
      <ellipse cx="100" cy="98" rx="36" ry="46" fill="currentColor" opacity="0.15" stroke="currentColor" strokeWidth="1.5" />
      <path d="M70,80 Q72,52 100,52 Q128,52 130,80" fill="currentColor" opacity="0.20" />
    </>
  ),
  "adult-feminine-elfin": (
    <>
      <ellipse cx="100" cy="100" rx="34" ry="46" fill="currentColor" opacity="0.15" stroke="currentColor" strokeWidth="1.5" />
      {/* pointed ears */}
      <polygon points="66,88 60,70 70,90" fill="currentColor" opacity="0.30" />
      <polygon points="134,88 140,70 130,90" fill="currentColor" opacity="0.30" />
    </>
  ),
  "child-round": (
    <ellipse cx="100" cy="104" rx="34" ry="40" fill="currentColor" opacity="0.15" stroke="currentColor" strokeWidth="1.5" />
  ),
  "child-male-spiky": (
    <>
      <ellipse cx="100" cy="104" rx="32" ry="40" fill="currentColor" opacity="0.15" stroke="currentColor" strokeWidth="1.5" />
      <polygon points="84,72 80,48 92,68" fill="currentColor" opacity="0.35" />
      <polygon points="98,66 95,40 108,64" fill="currentColor" opacity="0.35" />
      <polygon points="112,70 113,46 120,68" fill="currentColor" opacity="0.30" />
    </>
  ),
  "teen-male-short-spiky": (
    <>
      <ellipse cx="100" cy="100" rx="36" ry="44" fill="currentColor" opacity="0.15" stroke="currentColor" strokeWidth="2" />
      <polygon points="82,66 78,42 90,62" fill="currentColor" opacity="0.35" />
      <polygon points="97,60 94,34 106,58" fill="currentColor" opacity="0.35" />
      <polygon points="112,65 113,42 120,63" fill="currentColor" opacity="0.32" />
      {/* star shape sides */}
      <polygon points="72,72 64,62 74,76" fill="currentColor" opacity="0.22" />
      <polygon points="128,72 136,62 126,76" fill="currentColor" opacity="0.22" />
    </>
  ),
};

// ── Accent / extra icons ───────────────────────────────────────────────────────
function renderExtra(key: string, palette: string[]): React.ReactNode {
  const c = palette[0] ?? "#888";
  const c2 = palette[1] ?? "#444";

  switch (key) {
    // Accessories
    case "round-glasses":
      return (
        <g key={key} opacity="0.7">
          <circle cx="88" cy="105" r="10" fill="none" stroke={c} strokeWidth="2" />
          <circle cx="112" cy="105" r="10" fill="none" stroke={c} strokeWidth="2" />
          <line x1="98" y1="105" x2="102" y2="105" stroke={c} strokeWidth="1.5" />
        </g>
      );
    case "red-bowtie":
      return (
        <g key={key}>
          <polygon points="88,125 100,118 112,125 100,132" fill={c} opacity="0.8" />
        </g>
      );
    case "wristwatch":
      return (
        <g key={key}>
          <rect x="58" y="148" width="14" height="8" rx="2" fill={c2} opacity="0.7" stroke={c} strokeWidth="1" />
        </g>
      );
    case "leaf-headband":
      return (
        <g key={key}>
          <rect x="68" y="70" width="64" height="10" rx="2" fill={c2} opacity="0.6" />
          <rect x="90" y="70" width="20" height="10" rx="2" fill={c} opacity="0.7" />
          {/* leaf engraving */}
          <circle cx="100" cy="75" r="5" fill="none" stroke="white" strokeWidth="1" opacity="0.7" />
        </g>
      );
    case "whisker-cheeks":
      return (
        <g key={key} stroke={c2} strokeWidth="1.5" opacity="0.6">
          <line x1="66" y1="108" x2="80" y2="112" />
          <line x1="66" y1="114" x2="80" y2="114" />
          <line x1="66" y1="120" x2="80" y2="116" />
          <line x1="120" y1="108" x2="134" y2="112" />
          <line x1="120" y1="114" x2="134" y2="114" />
          <line x1="120" y1="120" x2="134" y2="116" />
        </g>
      );
    case "straw-hat":
      return (
        <g key={key}>
          <ellipse cx="100" cy="58" rx="52" ry="10" fill={c} opacity="0.7" />
          <ellipse cx="100" cy="52" rx="28" ry="14" fill={c} opacity="0.8" />
          <ellipse cx="100" cy="58" rx="52" ry="10" fill="none" stroke={c2} strokeWidth="1.5" />
        </g>
      );
    case "scar-under-eye":
      return (
        <line key={key} x1="108" y1="112" x2="114" y2="128" stroke={c2} strokeWidth="2" opacity="0.7" />
      );
    case "orange-jumpsuit":
      return (
        <rect key={key} x="70" y="145" width="60" height="30" rx="4" fill={c} opacity="0.5" />
      );
    case "orange-spiky-hair":
      return (
        <g key={key}>
          <polygon points="78,68 72,38 88,62" fill={c} opacity="0.55" />
          <polygon points="95,60 90,28 108,58" fill={c} opacity="0.55" />
          <polygon points="112,64 114,36 124,62" fill={c} opacity="0.50" />
        </g>
      );
    case "black-shihakusho":
      return (
        <rect key={key} x="68" y="144" width="64" height="32" rx="3" fill={c2} opacity="0.55" />
      );
    case "giant-cleaver-sword":
      return (
        <g key={key} opacity="0.6">
          <rect x="130" y="60" width="16" height="110" rx="2" fill={c2} />
          <line x1="138" y1="60" x2="138" y2="170" stroke="white" strokeWidth="1" opacity="0.4" />
        </g>
      );
    case "wing-emblem":
      return (
        <g key={key} opacity="0.6">
          {/* simple wings of freedom */}
          <path d="M78,160 Q65,148 70,135 Q80,145 90,150 Z" fill={c} />
          <path d="M122,160 Q135,148 130,135 Q120,145 110,150 Z" fill={c} />
        </g>
      );
    case "odm-gear-straps":
      return (
        <g key={key} stroke={c2} strokeWidth="2" opacity="0.5">
          <line x1="80" y1="145" x2="100" y2="170" />
          <line x1="120" y1="145" x2="100" y2="170" />
          <line x1="90" y1="150" x2="110" y2="150" />
        </g>
      );
    case "green-cloak":
      return (
        <path key={key} d="M62,148 Q70,130 100,130 Q130,130 138,148 L142,180 Q100,175 58,180 Z" fill={c} opacity="0.45" />
      );
    case "yellow-jumpsuit":
      return (
        <rect key={key} x="68" y="144" width="64" height="32" rx="4" fill={c} opacity="0.55" />
      );
    case "white-cape":
      return (
        <path key={key} d="M62,148 Q72,135 100,135 Q128,135 138,148 L140,180 Q100,178 60,180 Z" fill="white" opacity="0.55" />
      );
    case "red-belt":
      return (
        <rect key={key} x="75" y="158" width="50" height="7" rx="2" fill={c} opacity="0.7" />
      );
    case "black-notebook":
      return (
        <rect key={key} x="80" y="148" width="22" height="30" rx="2" fill={c2} opacity="0.75" />
      );
    case "school-uniform":
      return (
        <g key={key}>
          <rect x="70" y="144" width="60" height="32" rx="3" fill={c2} opacity="0.45" />
          <rect x="96" y="144" width="8" height="32" fill="white" opacity="0.3" />
        </g>
      );
    case "wristbands":
      return (
        <g key={key}>
          <rect x="56" y="150" width="12" height="8" rx="2" fill={c} opacity="0.65" />
          <rect x="132" y="150" width="12" height="8" rx="2" fill={c} opacity="0.65" />
        </g>
      );
    case "blue-belt":
      return (
        <rect key={key} x="76" y="158" width="48" height="6" rx="2" fill={c} opacity="0.65" />
      );
    // Sword/weapon
    case "three-katana":
      return (
        <g key={key} opacity="0.6">
          <rect x="128" y="90" width="5" height="70" rx="1" fill={c2} />
          <rect x="134" y="95" width="5" height="68" rx="1" fill={c2} />
          <rect x="140" y="100" width="5" height="66" rx="1" fill={c2} />
        </g>
      );
    case "eye-scar":
      return (
        <line key={key} x1="92" y1="95" x2="98" y2="118" stroke={c} strokeWidth="2.5" opacity="0.7" />
      );
    case "green-haramaki":
      return (
        <rect key={key} x="72" y="155" width="56" height="12" rx="3" fill={c} opacity="0.55" />
      );
    case "face-mask":
      return (
        <rect key={key} x="74" y="110" width="52" height="28" rx="6" fill={c2} opacity="0.55" />
      );
    case "leaf-headband-over-eye":
      return (
        <g key={key}>
          <rect x="66" y="78" width="68" height="10" rx="2" fill={c2} opacity="0.6" />
          {/* covers one eye */}
          <rect x="66" y="80" width="32" height="18" rx="3" fill={c2} opacity="0.4" />
        </g>
      );
    case "silver-spiky-tilted":
      return (
        <g key={key}>
          <polygon points="80,64 70,36 94,58" fill="#c0c0c0" opacity="0.5" />
          <polygon points="96,58 90,28 108,56" fill="#c0c0c0" opacity="0.5" />
          {/* tilted toward one side */}
          <polygon points="108,62 112,38 120,60" fill="#c0c0c0" opacity="0.45" />
        </g>
      );
    case "cravat":
      return (
        <g key={key}>
          <path d="M88,130 Q100,122 112,130 L108,148 Q100,142 92,148 Z" fill="white" opacity="0.7" />
        </g>
      );
    case "black-undercut":
      return (
        <g key={key}>
          <path d="M68,88 Q70,56 100,56 Q130,56 132,88 L128,80 Q100,68 72,80 Z" fill={c2} opacity="0.4" />
        </g>
      );
    case "long-blond-braid":
      return (
        <g key={key}>
          <path d="M128,62 Q138,90 132,140 Q128,150 124,140 Q130,90 120,62 Z" fill={c} opacity="0.55" />
        </g>
      );
    case "red-coat":
      return (
        <path key={key} d="M62,148 Q68,138 100,138 Q132,138 138,148 L140,180 Q100,176 60,180 Z" fill={c} opacity="0.5" />
      );
    case "automail-arm":
      return (
        <g key={key} opacity="0.7">
          <rect x="55" y="148" width="12" height="32" rx="3" fill="#808080" />
          <rect x="55" y="172" width="20" height="6" rx="2" fill="#606060" />
        </g>
      );
    case "flamel-cross":
      return (
        <g key={key} opacity="0.6">
          <line x1="100" y1="145" x2="100" y2="175" stroke={c} strokeWidth="3" />
          <line x1="88" y1="155" x2="112" y2="155" stroke={c} strokeWidth="3" />
          <ellipse cx="100" cy="162" rx="6" ry="8" fill="none" stroke={c} strokeWidth="1.5" />
        </g>
      );
    case "blue-jumpsuit":
      return (
        <rect key={key} x="68" y="144" width="64" height="32" rx="4" fill="#2a4a8a" opacity="0.5" />
      );
    case "white-gloves":
      return (
        <g key={key}>
          <ellipse cx="62" cy="165" rx="9" ry="7" fill="white" opacity="0.6" />
          <ellipse cx="138" cy="165" rx="9" ry="7" fill="white" opacity="0.6" />
        </g>
      );
    case "duck-butt-hair":
      return (
        <g key={key}>
          <path d="M128,72 Q140,90 136,110 Q130,100 128,88 Z" fill={c2} opacity="0.45" />
          <path d="M72,72 Q60,90 64,110 Q70,100 72,88 Z" fill={c2} opacity="0.45" />
        </g>
      );
    case "sharingan-eye":
      return (
        <g key={key} opacity="0.75">
          <circle cx="90" cy="108" r="9" fill={c} />
          <circle cx="90" cy="108" r="4" fill="#1a1a1a" />
        </g>
      );
    case "uchiha-fan-symbol":
      return (
        <g key={key} opacity="0.55">
          <circle cx="100" cy="163" r="10" fill="none" stroke={c} strokeWidth="2" />
          <path d="M95,153 Q100,165 105,153" fill={c} />
        </g>
      );
    case "high-collar":
      return (
        <path key={key} d="M80,130 Q100,118 120,130 L122,145 Q100,138 78,145 Z" fill={c2} opacity="0.45" />
      );
    case "red-scarf":
      return (
        <path key={key} d="M72,128 Q100,118 128,128 L132,148 Q100,138 68,148 Z" fill={c} opacity="0.65" />
      );
    case "short-black-hair":
      return (
        <path key={key} d="M66,86 Q68,58 100,56 Q132,58 134,86 Q128,76 100,72 Q72,76 66,86 Z" fill={c2} opacity="0.4" />
      );
    case "checkered-haori":
      return (
        <g key={key} opacity="0.55">
          <path d="M62,148 Q70,138 100,138 Q130,138 138,148 L140,180 Q100,176 60,180 Z" fill={c} />
          {/* checkered pattern lines */}
          <line x1="70" y1="148" x2="70" y2="180" stroke="#1a1a1a" strokeWidth="6" />
          <line x1="82" y1="148" x2="82" y2="180" stroke={c} strokeWidth="6" />
          <line x1="94" y1="148" x2="94" y2="180" stroke="#1a1a1a" strokeWidth="6" />
          <line x1="106" y1="148" x2="106" y2="180" stroke={c} strokeWidth="6" />
          <line x1="118" y1="148" x2="118" y2="180" stroke="#1a1a1a" strokeWidth="6" />
          <line x1="130" y1="148" x2="130" y2="180" stroke={c} strokeWidth="6" />
          <rect x="62" y="148" width="78" height="32" fill="none" />
        </g>
      );
    case "hanafuda-earrings":
      return (
        <g key={key} opacity="0.7">
          <ellipse cx="66" cy="110" rx="5" ry="8" fill={c} stroke="white" strokeWidth="1" />
          <ellipse cx="134" cy="110" rx="5" ry="8" fill={c} stroke="white" strokeWidth="1" />
        </g>
      );
    case "katana":
      return (
        <g key={key} opacity="0.6">
          <rect x="130" y="100" width="5" height="72" rx="1" fill={c2} />
          <rect x="126" y="138" width="13" height="6" rx="2" fill={c} />
        </g>
      );
    case "upward-spiky-green-hair":
      return (
        <g key={key}>
          <polygon points="88,78 84,46 96,72" fill={c} opacity="0.5" />
          <polygon points="100,72 98,40 112,70" fill={c} opacity="0.5" />
          <polygon points="114,78 116,50 124,76" fill={c} opacity="0.45" />
        </g>
      );
    case "green-jacket":
      return (
        <path key={key} d="M68,148 Q72,138 100,138 Q128,138 132,148 L134,180 Q100,176 66,180 Z" fill={c} opacity="0.45" />
      );
    case "fishing-rod":
      return (
        <g key={key} opacity="0.55">
          <line x1="136" y1="80" x2="160" y2="145" stroke={c2} strokeWidth="2" />
          <line x1="160" y1="145" x2="158" y2="180" stroke={c2} strokeWidth="1" />
        </g>
      );
    case "green-curly-hair":
      return (
        <g key={key}>
          <circle cx="80" cy="72" r="11" fill={c} opacity="0.45" />
          <circle cx="92" cy="60" r="13" fill={c} opacity="0.45" />
          <circle cx="107" cy="57" r="12" fill={c} opacity="0.45" />
          <circle cx="120" cy="66" r="10" fill={c} opacity="0.40" />
        </g>
      );
    case "freckles":
      return (
        <g key={key} fill={c2} opacity="0.5">
          <circle cx="84" cy="112" r="2" />
          <circle cx="88" cy="118" r="2" />
          <circle cx="80" cy="118" r="2" />
          <circle cx="116" cy="112" r="2" />
          <circle cx="112" cy="118" r="2" />
          <circle cx="120" cy="118" r="2" />
        </g>
      );
    case "hero-costume-mask":
      return (
        <g key={key} opacity="0.55">
          <rect x="68" y="144" width="64" height="32" rx="4" fill={c} />
          <path d="M80,138 Q100,128 120,138 L118,148 Q100,140 82,148 Z" fill={c} opacity="0.8" />
        </g>
      );
    case "white-messy-hair":
      return (
        <g key={key}>
          <polygon points="78,64 72,34 88,58" fill="white" opacity="0.6" stroke="#ccc" strokeWidth="1" />
          <polygon points="95,56 90,24 108,54" fill="white" opacity="0.6" />
          <polygon points="112,60 114,32 124,58" fill="white" opacity="0.55" />
        </g>
      );
    case "blindfold":
      return (
        <rect key={key} x="68" y="98" width="64" height="16" rx="4" fill={c2} opacity="0.75" />
      );
    case "black-uniform":
      return (
        <rect key={key} x="68" y="144" width="64" height="32" rx="4" fill={c2} opacity="0.55" />
      );
    case "blue-eyes":
      return (
        <g key={key} opacity="0.7">
          <ellipse cx="88" cy="108" rx="8" ry="6" fill="#4090e0" />
          <ellipse cx="112" cy="108" rx="8" ry="6" fill="#4090e0" />
        </g>
      );
    case "pink-spiky-hair":
      return (
        <g key={key}>
          <polygon points="80,64 74,36 90,58" fill={c} opacity="0.55" />
          <polygon points="96,56 92,26 108,54" fill={c} opacity="0.55" />
          <polygon points="112,60 114,34 122,58" fill={c} opacity="0.50" />
        </g>
      );
    case "white-scaly-scarf":
      return (
        <g key={key}>
          <path d="M70,126 Q100,112 130,126 L134,148 Q100,135 66,148 Z" fill="white" opacity="0.65" />
          {/* scale texture hints */}
          <path d="M80,130 Q90,124 100,130 Q110,124 120,130" stroke="#ccc" strokeWidth="1" fill="none" opacity="0.7" />
        </g>
      );
    case "guild-mark":
      return (
        <g key={key} opacity="0.65">
          <circle cx="115" cy="115" r="8" fill={c} />
          <text x="111" y="119" fill="white" fontSize="9" fontWeight="bold">F</text>
        </g>
      );
    case "vest-open":
      return (
        <g key={key} opacity="0.5">
          <path d="M72,148 Q78,138 100,140 L100,178 Q80,178 68,178 Z" fill={c2} />
          <path d="M128,148 Q122,138 100,140 L100,178 Q120,178 132,178 Z" fill={c2} />
        </g>
      );
    case "tri-color-star-hair":
      return (
        <g key={key}>
          <polygon points="80,66 74,38 88,60" fill="#d0b020" opacity="0.55" />
          <polygon points="96,58 92,26 106,56" fill="#c080c0" opacity="0.55" />
          <polygon points="112,64 115,38 122,62" fill="#1a1a4a" opacity="0.55" />
          <polygon points="68,74 58,64 70,78" fill="#d0b020" opacity="0.45" />
          <polygon points="132,74 142,64 130,78" fill="#c080c0" opacity="0.45" />
        </g>
      );
    case "millennium-puzzle":
      return (
        <g key={key} opacity="0.65">
          {/* upside-down pyramid */}
          <polygon points="100,140 88,125 112,125" fill="#d0b020" stroke="#a08010" strokeWidth="1" />
          <line x1="100" y1="125" x2="100" y2="110" stroke="#a08010" strokeWidth="2" />
        </g>
      );
    case "ash-grey-spiky":
      return (
        <g key={key}>
          <polygon points="82,66 78,40 92,62" fill="#c0c0c0" opacity="0.5" />
          <polygon points="98,60 94,30 108,58" fill="#c0c0c0" opacity="0.5" />
          <polygon points="114,64 116,38 124,62" fill="#c0c0c0" opacity="0.45" />
        </g>
      );
    case "grimoire-book":
      return (
        <g key={key} opacity="0.7">
          <rect x="78" y="148" width="20" height="28" rx="2" fill={c2} />
          <line x1="88" y1="148" x2="88" y2="176" stroke="#555" strokeWidth="2" />
          {/* five leaf clover hint */}
          <circle cx="88" cy="158" r="3" fill="#2a5a2a" />
          <circle cx="84" cy="154" r="2.5" fill="#2a5a2a" />
          <circle cx="92" cy="154" r="2.5" fill="#2a5a2a" />
          <circle cx="84" cy="162" r="2.5" fill="#2a5a2a" />
          <circle cx="92" cy="162" r="2.5" fill="#2a5a2a" />
        </g>
      );
    case "oversized-sword":
      return (
        <g key={key} opacity="0.55">
          <rect x="134" y="55" width="20" height="115" rx="2" fill={c2} />
        </g>
      );
    // Hard tier extras
    case "hat-merged-hair":
      return (
        <g key={key}>
          <path d="M68,74 Q70,48 100,48 Q130,48 132,74 L130,70 Q100,58 70,70 Z" fill={c2} opacity="0.55" />
          {/* hat brim */}
          <ellipse cx="100" cy="68" rx="46" ry="8" fill={c2} opacity="0.6" />
          <ellipse cx="100" cy="60" rx="34" ry="16" fill={c2} opacity="0.55" />
        </g>
      );
    case "black-gakuran":
      return (
        <g key={key} opacity="0.55">
          <rect x="66" y="144" width="68" height="34" rx="3" fill={c2} />
          <rect x="96" y="144" width="8" height="34" fill="#222" opacity="0.5" />
        </g>
      );
    case "chain":
      return (
        <g key={key} stroke="#a0a060" strokeWidth="2" opacity="0.5">
          <path d="M68,148 Q60,160 65,175" />
          {/* chain links */}
          <circle cx="63" cy="163" r="3" fill="none" />
          <circle cx="63" cy="170" r="3" fill="none" />
        </g>
      );
    case "huge-sword":
      return (
        <g key={key} opacity="0.55">
          <rect x="132" y="50" width="24" height="128" rx="2" fill={c2} />
        </g>
      );
    case "mechanical-arm":
      return (
        <g key={key} opacity="0.65">
          <rect x="54" y="144" width="14" height="36" rx="3" fill="#606060" />
          <line x1="61" y1="152" x2="61" y2="172" stroke="#808080" strokeWidth="2" />
          <ellipse cx="61" cy="180" rx="8" ry="5" fill="#505050" />
        </g>
      );
    case "brand-neck":
      return (
        <g key={key} opacity="0.6">
          <path d="M90,136 Q100,128 110,136" stroke={c} strokeWidth="2" fill="none" />
          <circle cx="100" cy="130" r="4" fill={c} opacity="0.7" />
        </g>
      );
    case "black-hair-scar-over-eye":
      return (
        <g key={key}>
          <path d="M68,88 Q70,56 100,56 Q130,56 132,88 Q120,74 100,70 Q80,74 68,88 Z" fill={c2} opacity="0.45" />
          <line x1="95" y1="62" x2="100" y2="96" stroke="white" strokeWidth="2.5" opacity="0.5" />
        </g>
      );
    case "green-messy-hair":
      return (
        <g key={key}>
          <path d="M68,78 Q70,50 100,50 Q130,50 132,78 Q128,66 116,60 Q105,56 95,58 Q78,60 72,68 Z" fill={c} opacity="0.4" />
          <polygon points="82,64 78,36 90,58" fill={c} opacity="0.42" />
          <polygon points="98,56 96,30 108,54" fill={c} opacity="0.40" />
        </g>
      );
    case "loose-suit":
      return (
        <g key={key} opacity="0.5">
          <rect x="66" y="144" width="68" height="34" rx="4" fill={c2} />
          <rect x="96" y="144" width="8" height="34" fill="#d0c040" opacity="0.5" />
        </g>
      );
    case "yellow-shirt":
      return (
        <rect key={key} x="86" y="144" width="28" height="24" rx="2" fill="#d0c040" opacity="0.55" />
      );
    case "pale-blue-bob":
      return (
        <path key={key} d="M68,88 Q70,56 100,54 Q130,56 132,88 Q122,74 100,70 Q78,74 68,88 Z" fill={c} opacity="0.42" />
      );
    case "plugsuit":
      return (
        <g key={key} opacity="0.55">
          <rect x="70" y="144" width="60" height="34" rx="4" fill="white" />
          <path d="M86,144 L86,178 M114,144 L114,178" stroke="#1a1a2a" strokeWidth="4" />
        </g>
      );
    case "red-eyes":
      return (
        <g key={key} opacity="0.7">
          <ellipse cx="88" cy="108" rx="8" ry="6" fill={c} />
          <ellipse cx="112" cy="108" rx="8" ry="6" fill={c} />
          <ellipse cx="88" cy="108" rx="4" ry="3" fill="#1a0a0a" />
          <ellipse cx="112" cy="108" rx="4" ry="3" fill="#1a0a0a" />
        </g>
      );
    case "bandages":
      return (
        <g key={key} stroke="white" strokeWidth="3" opacity="0.45">
          <line x1="66" y1="144" x2="78" y2="162" />
          <line x1="62" y1="155" x2="76" y2="155" />
        </g>
      );
    case "black-hair-swept":
      return (
        <path key={key} d="M68,86 Q70,56 100,54 Q128,56 132,86 Q124,72 100,68 Q76,70 68,86 Z" fill={c2} opacity="0.45" />
      );
    case "purple-eye-with-sigil":
      return (
        <g key={key} opacity="0.7">
          <ellipse cx="88" cy="108" rx="9" ry="7" fill="#6a3a8a" />
          <ellipse cx="88" cy="108" rx="4" ry="4" fill="#1a1a1a" />
          <circle cx="88" cy="108" r="9" fill="none" stroke="#d0b020" strokeWidth="1" />
        </g>
      );
    case "mask-helmet":
      return (
        <g key={key} opacity="0.6">
          <path d="M74,92 Q100,78 126,92 L130,120 Q100,130 70,120 Z" fill={c2} stroke="#d0b020" strokeWidth="1.5" />
          <line x1="100" y1="78" x2="100" y2="130" stroke="#d0b020" strokeWidth="1.5" />
        </g>
      );
    case "black-cape":
      return (
        <path key={key} d="M60,148 Q70,135 100,135 Q130,135 140,148 L145,182 Q100,179 55,182 Z" fill={c2} opacity="0.5" />
      );
    case "white-spiky-hair":
      return (
        <g key={key}>
          <polygon points="82,70 78,44 92,64" fill="white" opacity="0.65" stroke="#ccc" strokeWidth="1" />
          <polygon points="98,62 94,34 108,60" fill="white" opacity="0.65" />
          <polygon points="114,68 116,42 124,66" fill="white" opacity="0.60" />
        </g>
      );
    case "blue-shirt":
      return (
        <rect key={key} x="72" y="144" width="56" height="30" rx="4" fill={c} opacity="0.5" />
      );
    case "skateboard":
      return (
        <g key={key} opacity="0.55">
          <rect x="60" y="180" width="40" height="7" rx="3" fill={c2} />
          <circle cx="68" cy="188" r="4" fill="#444" />
          <circle cx="92" cy="188" r="4" fill="#444" />
        </g>
      );
    case "lightning-sparks":
      return (
        <g key={key} stroke="#ffe040" strokeWidth="1.5" opacity="0.6">
          <path d="M56,148 L62,138 L58,142 L64,132" fill="none" />
          <path d="M144,148 L138,138 L142,142 L136,132" fill="none" />
        </g>
      );
    case "long-black-low-ponytail":
      return (
        <g key={key}>
          <path d="M130,64 Q136,88 132,140 Q128,150 124,140 Q128,90 122,66 Z" fill={c2} opacity="0.5" />
        </g>
      );
    case "akatsuki-cloak":
      return (
        <g key={key} opacity="0.55">
          <path d="M60,148 Q68,138 100,138 Q132,138 140,148 L144,182 Q100,178 56,182 Z" fill={c2} />
          {/* red cloud patterns */}
          <ellipse cx="78" cy="162" rx="8" ry="5" fill="#c41e3a" opacity="0.7" />
          <ellipse cx="100" cy="168" rx="8" ry="5" fill="#c41e3a" opacity="0.7" />
          <ellipse cx="122" cy="162" rx="8" ry="5" fill="#c41e3a" opacity="0.7" />
        </g>
      );
    case "mangekyo-sharingan":
      return (
        <g key={key} opacity="0.7">
          <circle cx="90" cy="108" r="10" fill={c} />
          <circle cx="90" cy="108" r="5" fill="#1a1a1a" />
          <polygon points="90,98 94,106 90,118 86,106" fill={c} opacity="0.7" />
        </g>
      );
    case "tired-lines":
      return (
        <g key={key} stroke={c2} strokeWidth="1.5" opacity="0.5">
          <line x1="74" y1="115" x2="88" y2="117" />
          <line x1="112" y1="115" x2="126" y2="117" />
          <line x1="76" y1="120" x2="88" y2="121" />
          <line x1="112" y1="120" x2="124" y2="121" />
        </g>
      );
    case "ring-pattern-eyes":
      return (
        <g key={key} opacity="0.75">
          <circle cx="88" cy="108" r="9" fill="#d0a040" />
          <circle cx="88" cy="108" r="7" fill="none" stroke="#808040" strokeWidth="1.5" />
          <circle cx="88" cy="108" r="4" fill="none" stroke="#808040" strokeWidth="1" />
          <circle cx="112" cy="108" r="9" fill="#d0a040" />
          <circle cx="112" cy="108" r="7" fill="none" stroke="#808040" strokeWidth="1.5" />
          <circle cx="112" cy="108" r="4" fill="none" stroke="#808040" strokeWidth="1" />
        </g>
      );
    case "red-orange-braided-low":
      return (
        <g key={key}>
          <path d="M128,68 Q136,92 130,148 Q124,158 120,148 Q128,94 120,70 Z" fill={c} opacity="0.5" />
          <path d="M72,68 Q64,92 70,148 Q76,158 80,148 Q72,94 80,70 Z" fill={c} opacity="0.5" />
        </g>
      );
    case "white-shirt-tie":
      return (
        <g key={key} opacity="0.6">
          <rect x="72" y="144" width="56" height="34" rx="3" fill="white" />
          <path d="M96,144 L96,172 L100,178 L104,172 L104,144 Z" fill="#1a1a1a" />
        </g>
      );
    case "white-twin-braids":
      return (
        <g key={key}>
          <path d="M68,88 Q60,110 64,160 Q70,170 74,160 Q68,112 74,90 Z" fill="white" opacity="0.65" stroke="#ddd" strokeWidth="1" />
          <path d="M132,88 Q140,110 136,160 Q130,170 126,160 Q132,112 126,90 Z" fill="white" opacity="0.65" />
        </g>
      );
    case "pointed-ears":
      return (
        <g key={key} opacity="0.6">
          <polygon points="63,90 56,68 68,92" fill={c} />
          <polygon points="137,90 144,68 132,92" fill={c} />
        </g>
      );
    case "green-eyes":
      return (
        <g key={key} opacity="0.7">
          <ellipse cx="88" cy="108" rx="8" ry="6" fill="#2a8a4a" />
          <ellipse cx="112" cy="108" rx="8" ry="6" fill="#2a8a4a" />
        </g>
      );
    case "gold-white-robe":
      return (
        <g key={key} opacity="0.5">
          <path d="M64,148 Q72,138 100,138 Q128,138 136,148 L138,182 Q100,178 62,182 Z" fill="white" />
          <path d="M64,148 Q72,138 76,148 L76,182 Q66,182 62,182 Z" fill="#d0b020" opacity="0.7" />
          <path d="M136,148 Q128,138 124,148 L124,182 Q134,182 138,182 Z" fill="#d0b020" opacity="0.7" />
        </g>
      );
    case "v-shaped-blond-horns":
      return (
        <g key={key}>
          <polygon points="82,48 76,20 90,45" fill="#d0a020" opacity="0.5" />
          <polygon points="118,48 124,20 110,45" fill="#d0a020" opacity="0.5" />
        </g>
      );
    case "hero-costume-red-blue":
      return (
        <g key={key} opacity="0.5">
          <rect x="68" y="144" width="64" height="34" rx="4" fill="#4060a0" />
          <path d="M80,144 Q100,136 120,144 L118,152 Q100,144 82,152 Z" fill="#c41e3a" />
        </g>
      );
    case "shadowed-eyes":
      return (
        <g key={key} opacity="0.6">
          <ellipse cx="88" cy="106" rx="11" ry="8" fill="#1a1a2a" />
          <ellipse cx="112" cy="106" rx="11" ry="8" fill="#1a1a2a" />
        </g>
      );
    case "widow-peak":
      return (
        <path key={key} d="M95,72 Q100,80 105,72" fill={c2} opacity="0.6" />
      );
    case "long-hair-late":
      return (
        <path key={key} d="M130,62 Q140,90 136,148 Q130,158 126,148 Q132,92 124,64 Z" fill={c2} opacity="0.4" />
      );
    case "flame-upswept-black-hair":
    case "black-spiky-hair":
      return (
        <g key={key}>
          <polygon points="80,64 74,36 88,58" fill={c2} opacity="0.5" />
          <polygon points="96,56 90,24 108,54" fill={c2} opacity="0.5" />
          <polygon points="114,60 116,30 124,58" fill={c2} opacity="0.45" />
        </g>
      );
    default:
      return null;
  }
}

// ── Main component ─────────────────────────────────────────────────────────────
interface Props {
  hints: SketchHints;
  size?: number;
  className?: string;
}

export default function CharacterSilhouette({ hints, size = 200, className = "" }: Props) {
  const { headShape, palette, extras } = hints;
  const headColor = palette[0] ?? "#4a4a4a";

  const headPath = HEAD_SHAPES[headShape] ?? HEAD_SHAPES["adult-male"];

  return (
    <svg
      viewBox="0 0 200 200"
      width={size}
      height={size}
      className={className}
      style={{ color: headColor }}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* sketchpad paper lines */}
      {[140, 155, 170, 185].map((y) => (
        <line key={y} x1="10" y1={y} x2="190" y2={y} stroke="#c8b89a" strokeWidth="0.8" opacity="0.4" />
      ))}
      {/* body silhouette */}
      <ellipse cx="100" cy="185" rx="45" ry="20" fill={headColor} opacity="0.12" />
      <rect x="72" y="144" width="56" height="44" rx="8" fill={headColor} opacity="0.12" />
      {/* neck */}
      <rect x="93" y="138" width="14" height="12" rx="4" fill={headColor} opacity="0.12" />
      {/* head */}
      {headPath}
      {/* extras */}
      {extras.map((key) => renderExtra(key, palette))}
      {/* eyes — two generic dots */}
      <ellipse cx="88" cy="108" rx="5" ry="4" fill={headColor} opacity="0.35" />
      <ellipse cx="112" cy="108" rx="5" ry="4" fill={headColor} opacity="0.35" />
      {/* nose hint */}
      <path d="M98,115 Q100,120 102,115" stroke={headColor} strokeWidth="1.2" fill="none" opacity="0.3" />
    </svg>
  );
}
