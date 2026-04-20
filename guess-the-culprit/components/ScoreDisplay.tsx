"use client";

interface Props {
  score: number;
  streak: number;
  round: number;
  total: number;
}

export default function ScoreDisplay({ score, streak, round, total }: Props) {
  return (
    <div className="flex items-center gap-1 font-mono">
      <StatPill label="Score" value={score} color="#d4a017" />
      <div className="w-px h-8 bg-[#1e3a5f] mx-1" />
      <StatPill label="Streak" value={streak > 0 ? `🔥 ${streak}` : streak} color="#4ade80" />
      <div className="w-px h-8 bg-[#1e3a5f] mx-1" />
      <StatPill label="Case" value={`${round}/${total}`} color="#8a9ab0" />
    </div>
  );
}

function StatPill({ label, value, color }: { label: string; value: string | number; color: string }) {
  return (
    <div className="text-center px-2 sm:px-3 py-1 rounded-lg" style={{ background: `${color}0d` }}>
      <p className="text-[8px] sm:text-[9px] uppercase tracking-[0.15em] mb-0.5" style={{ color: `${color}99` }}>{label}</p>
      <p className="text-sm sm:text-base font-bold leading-none" style={{ color }}>{value}</p>
    </div>
  );
}
