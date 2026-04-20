export interface Background {
  id: string;
  name: string;
  anime: string;
  emoji: string;
  preview: string;
  bodyBg: string;
  patternColor: string;
  patternSize?: number;
  // Container / UI theming
  accentColor: string;
  accentLight: string;
  cardBg: string;
  cardBorder: string;
}

export const BACKGROUNDS: Background[] = [
  {
    id: "detective",
    name: "Detective's Den",
    anime: "Detective Conan",
    emoji: "🔍",
    preview: "linear-gradient(135deg, #0a1429 0%, #1e3a5f 100%)",
    bodyBg: "#0a1429",
    patternColor: "rgba(212, 160, 23, 0.06)",
    accentColor: "#d4a017",
    accentLight: "#e8c040",
    cardBg: "#0d1f38",
    cardBorder: "#1e3a5f",
  },
  {
    id: "soul-society",
    name: "Soul Society",
    anime: "Bleach",
    emoji: "⚔️",
    preview: "linear-gradient(135deg, #0a0020 0%, #200040 100%)",
    bodyBg: "linear-gradient(160deg, #0a0020 0%, #150030 50%, #0a0020 100%)",
    patternColor: "rgba(160, 80, 255, 0.07)",
    accentColor: "#a060e0",
    accentLight: "#c090ff",
    cardBg: "#12002a",
    cardBorder: "#2d0060",
  },
  {
    id: "hidden-leaf",
    name: "Hidden Leaf",
    anime: "Naruto",
    emoji: "🍃",
    preview: "linear-gradient(135deg, #020c04 0%, #0a2010 100%)",
    bodyBg: "linear-gradient(160deg, #020c04 0%, #071508 50%, #020c04 100%)",
    patternColor: "rgba(80, 200, 80, 0.06)",
    accentColor: "#f07000",
    accentLight: "#ffaa30",
    cardBg: "#071208",
    cardBorder: "#0d2210",
  },
  {
    id: "kira",
    name: "Kira's Realm",
    anime: "Death Note",
    emoji: "📓",
    preview: "linear-gradient(135deg, #060000 0%, #140006 100%)",
    bodyBg: "linear-gradient(160deg, #060000 0%, #100004 50%, #060000 100%)",
    patternColor: "rgba(180, 20, 30, 0.07)",
    accentColor: "#c41e3a",
    accentLight: "#e04060",
    cardBg: "#0f0004",
    cardBorder: "#280008",
  },
  {
    id: "cursed-domain",
    name: "Cursed Domain",
    anime: "Jujutsu Kaisen",
    emoji: "🟣",
    preview: "linear-gradient(135deg, #030010 0%, #0a0028 100%)",
    bodyBg: "linear-gradient(160deg, #030010 0%, #080020 50%, #030010 100%)",
    patternColor: "rgba(120, 40, 220, 0.08)",
    accentColor: "#8040ff",
    accentLight: "#a870ff",
    cardBg: "#080018",
    cardBorder: "#180038",
  },
  {
    id: "saiyan-power",
    name: "Saiyan Power",
    anime: "Dragon Ball",
    emoji: "⚡",
    preview: "linear-gradient(135deg, #0d0400 0%, #200a00 100%)",
    bodyBg: "linear-gradient(160deg, #0d0400 0%, #1a0700 50%, #0d0400 100%)",
    patternColor: "rgba(220, 100, 10, 0.08)",
    accentColor: "#f06020",
    accentLight: "#ffa040",
    cardBg: "#130600",
    cardBorder: "#2a0e00",
  },
  {
    id: "ghoul-ward",
    name: "Ghoul's Ward",
    anime: "Tokyo Ghoul",
    emoji: "👁️",
    preview: "linear-gradient(135deg, #0a0003 0%, #1a0008 100%)",
    bodyBg: "linear-gradient(160deg, #0a0003 0%, #160006 50%, #0a0003 100%)",
    patternColor: "rgba(180, 10, 30, 0.07)",
    patternSize: 24,
    accentColor: "#c41e3a",
    accentLight: "#e03050",
    cardBg: "#100004",
    cardBorder: "#250008",
  },
  {
    id: "survey-corps",
    name: "Survey Corps",
    anime: "Attack on Titan",
    emoji: "🦅",
    preview: "linear-gradient(135deg, #100d06 0%, #1e1608 100%)",
    bodyBg: "linear-gradient(160deg, #0e0c06 0%, #1a1408 50%, #0e0c06 100%)",
    patternColor: "rgba(160, 130, 60, 0.07)",
    accentColor: "#8b6914",
    accentLight: "#b89030",
    cardBg: "#131008",
    cardBorder: "#281d08",
  },
  {
    id: "ua-grounds",
    name: "U.A. Grounds",
    anime: "My Hero Academia",
    emoji: "💥",
    preview: "linear-gradient(135deg, #010a1a 0%, #030f22 100%)",
    bodyBg: "linear-gradient(160deg, #010a1a 0%, #040e20 50%, #010a1a 100%)",
    patternColor: "rgba(30, 140, 255, 0.07)",
    accentColor: "#2080ff",
    accentLight: "#60b0ff",
    cardBg: "#050e20",
    cardBorder: "#0a1e40",
  },
  {
    id: "return-by-death",
    name: "Return by Death",
    anime: "Re:Zero",
    emoji: "🔮",
    preview: "linear-gradient(135deg, #020015 0%, #080030 100%)",
    bodyBg: "linear-gradient(160deg, #020015 0%, #060025 50%, #020015 100%)",
    patternColor: "rgba(80, 60, 200, 0.08)",
    accentColor: "#6040c0",
    accentLight: "#9070f0",
    cardBg: "#060018",
    cardBorder: "#100030",
  },
];

export const DEFAULT_BACKGROUND_ID = "detective";
