"use client";
import { useEffect, useState } from "react";
import { useUserStore } from "@/store/user-store";

interface LeaderboardRow {
  rank: number;
  user_id: number;
  username: string;
  total_score: number;
  modes_completed: number;
}

const MEDAL_ICONS  = ["🥇", "🥈", "🥉"];
const MEDAL_COLORS = ["#d4a017", "#9ca3af", "#cd7f32"];

export default function Leaderboard() {
  const { userId } = useUserStore();
  const [rows, setRows] = useState<LeaderboardRow[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/scores")
      .then((r) => r.json())
      .then((data) => setRows(Array.isArray(data) ? data : []))
      .catch(() => setRows([]))
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <div className="text-[#8a9ab0] text-xs font-mono text-center py-6 tracking-widest animate-pulse">
        Loading registry…
      </div>
    );
  }

  if (rows.length === 0) {
    return (
      <div className="text-[#4a5a6a] text-xs font-mono text-center py-6 border border-dashed border-[#1e3a5f] rounded-xl">
        No closed cases yet. Be the first detective.
      </div>
    );
  }

  return (
    <div className="space-y-2">
      {rows.map((row) => {
        const rankIdx = row.rank - 1; // 0-based for top 3 styling
        const isTop3 = row.rank <= 3;
        const medalColor = MEDAL_COLORS[rankIdx] ?? "#4a5a6a";
        const isMe = row.user_id === userId;

        return (
          <div
            key={`${row.rank}-${row.username}`}
            className="flex items-center gap-3 px-4 py-2.5 rounded-xl border font-mono text-sm transition-all"
            style={{
              background: isMe
                ? "rgba(212,160,23,0.06)"
                : isTop3
                ? `${medalColor}08`
                : "#0d1f38",
              borderColor: isMe
                ? "rgba(212,160,23,0.4)"
                : isTop3
                ? `${medalColor}40`
                : "#1e3a5f",
              boxShadow: isMe ? "0 0 0 1px rgba(212,160,23,0.15)" : undefined,
            }}
          >
            {/* Rank */}
            <span className="w-6 text-center flex-shrink-0">
              {isTop3 ? (
                <span className="text-base">{MEDAL_ICONS[rankIdx]}</span>
              ) : (
                <span className="text-[#4a5a6a] text-xs">{row.rank}</span>
              )}
            </span>

            {/* Username */}
            <span
              className="flex-1 truncate"
              style={{ color: isMe ? "#d4a017" : isTop3 ? "#d4c090" : "#8a9ab0" }}
            >
              {row.username}
              {isMe && (
                <span className="ml-1.5 text-[9px] text-[#d4a017]/60 uppercase tracking-wider">(you)</span>
              )}
            </span>

            {/* Modes completed */}
            <span className="text-[10px] text-[#4a5a6a] hidden sm:block flex-shrink-0">
              {row.modes_completed} {row.modes_completed === 1 ? "mode" : "modes"}
            </span>

            {/* Total score */}
            <span
              className="font-bold text-sm flex-shrink-0"
              style={{ color: isMe ? "#d4a017" : medalColor }}
            >
              {row.total_score}
            </span>
          </div>
        );
      })}
    </div>
  );
}
