"use client";
import { useEffect, useState } from "react";
import { CHARACTERS } from "@/lib/characters";

interface ImageStatus {
  slug: string;
  name: string;
  series: string;
  imageUrl: string | null;
  source: "mal-id" | "search" | null;
  malId: number | null;
  status: "pending" | "loading" | "ok" | "error";
  errorDetail?: string;
  errorStatus?: number;
}

const STAGGER_MS = 700; // Jikan allows 3/sec but bursts trip 429; 700ms ≈ 1.4/sec is safe

export default function DebugImagesPage() {
  const [statuses, setStatuses] = useState<ImageStatus[]>(
    CHARACTERS.map((c) => ({
      slug: c.slug,
      name: c.displayName,
      series: c.series,
      imageUrl: null,
      source: null,
      malId: null,
      status: "pending",
    }))
  );
  const [filter, setFilter] = useState<"all" | "ok" | "error" | "search" | "mal-id" | "pending">("all");

  useEffect(() => {
    CHARACTERS.forEach((char, i) => {
      // Mark as loading when request is about to fire
      setTimeout(() => {
        setStatuses((prev) => {
          const next = [...prev];
          next[i] = { ...next[i], status: "loading" };
          return next;
        });

        fetch(
          `/api/character-image?slug=${encodeURIComponent(char.slug)}&name=${encodeURIComponent(char.displayName)}&series=${encodeURIComponent(char.series)}`
        )
          .then(async (r) => {
            const data = await r.json();
            setStatuses((prev) => {
              const next = [...prev];
              next[i] = {
                ...next[i],
                imageUrl: data.imageUrl ?? null,
                source: data.source ?? null,
                malId: data.malId ?? null,
                status: data.imageUrl ? "ok" : "error",
                errorDetail: data.imageUrl
                  ? undefined
                  : data.errorStatus
                  ? `HTTP ${data.errorStatus}${data.errorStatus === 429 ? " (rate limited)" : ""}`
                  : "no image returned",
                errorStatus: data.errorStatus,
              };
              return next;
            });
          })
          .catch((err) => {
            setStatuses((prev) => {
              const next = [...prev];
              next[i] = { ...next[i], status: "error", errorDetail: String(err) };
              return next;
            });
          });
      }, i * STAGGER_MS);
    });
  }, []);

  const filtered = statuses.filter((s) => {
    if (filter === "all") return true;
    if (filter === "pending") return s.status === "pending" || s.status === "loading";
    if (filter === "ok") return s.status === "ok";
    if (filter === "error") return s.status === "error";
    if (filter === "search") return s.source === "search";
    if (filter === "mal-id") return s.source === "mal-id";
    return true;
  });

  const pending = statuses.filter((s) => s.status === "pending" || s.status === "loading").length;
  const ok = statuses.filter((s) => s.status === "ok").length;
  const errors = statuses.filter((s) => s.status === "error").length;
  const fromMal = statuses.filter((s) => s.source === "mal-id").length;
  const fromSearch = statuses.filter((s) => s.source === "search").length;
  const etaSeconds = Math.ceil((pending * STAGGER_MS) / 1000);

  return (
    <main className="min-h-screen p-6 font-mono text-sm" style={{ background: "#0a1429", color: "#c8b89a" }}>
      <h1 className="text-2xl font-bold mb-1" style={{ color: "#d4a017" }}>Image Debug</h1>
      <p className="text-xs text-[#8a9ab0] mb-1">
        {ok} OK · {errors} errors · {pending} pending · {fromMal} via MAL ID · {fromSearch} via search
      </p>
      {pending > 0 && (
        <p className="text-xs text-[#d4a017] mb-4">
          Staggering requests at {1000 / STAGGER_MS}/sec to avoid Jikan rate limit — ~{etaSeconds}s remaining
        </p>
      )}

      {/* Filter buttons */}
      <div className="flex gap-2 mb-6 flex-wrap">
        {(["all", "ok", "error", "mal-id", "search", "pending"] as const).map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className="px-3 py-1 rounded border text-xs uppercase tracking-wider transition-colors"
            style={{
              borderColor: filter === f ? "#d4a017" : "#1e3a5f",
              color: filter === f ? "#d4a017" : "#4a6a8a",
              background: filter === f ? "rgba(212,160,23,0.1)" : "transparent",
            }}
          >
            {f}
          </button>
        ))}
      </div>

      <div className="grid gap-3" style={{ gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))" }}>
        {filtered.map((s) => (
          <div
            key={s.slug}
            className="rounded-lg border p-3 flex flex-col gap-2"
            style={{
              borderColor:
                s.status === "ok" ? "rgba(74,222,128,0.25)" :
                s.status === "error" ? "rgba(239,68,68,0.25)" : "#1e3a5f",
              background: "#0d1829",
            }}
          >
            {/* Image */}
            <div className="relative overflow-hidden rounded bg-[#111827]" style={{ height: 140 }}>
              {(s.status === "loading" || s.status === "pending") && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className={`w-6 h-6 border-2 border-t-transparent rounded-full ${s.status === "loading" ? "animate-spin border-[#d4a017]" : "border-[#1e3a5f]"}`} />
                </div>
              )}
              {s.status === "ok" && s.imageUrl && (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={s.imageUrl} alt={s.name} className="w-full h-full object-cover object-top" />
              )}
              {s.status === "error" && (
                <div className="absolute inset-0 flex items-center justify-center text-center px-2">
                  <span className="text-[#c41e3a] text-[10px]">✗ {s.errorDetail ?? "No image"}</span>
                </div>
              )}
            </div>

            {/* Info */}
            <div>
              <p className="font-bold text-xs truncate" style={{ color: "#d4a017" }}>{s.name}</p>
              <p className="text-[10px] text-[#4a6a8a] truncate">{s.series}</p>
              <p className="text-[10px] text-[#4a6a8a] truncate">slug: {s.slug}</p>
            </div>

            {/* Badges */}
            <div className="flex gap-1 flex-wrap">
              {s.malId != null && (
                <span className="text-[9px] px-1.5 py-0.5 rounded bg-[#1e3a5f] text-[#4a9af0]">
                  MAL #{s.malId}
                </span>
              )}
              {s.source && (
                <span
                  className="text-[9px] px-1.5 py-0.5 rounded"
                  style={{
                    background: s.source === "mal-id" ? "rgba(74,222,128,0.15)" : "rgba(212,160,23,0.15)",
                    color: s.source === "mal-id" ? "#4ade80" : "#d4a017",
                  }}
                >
                  {s.source}
                </span>
              )}
              {s.status === "error" && (
                <span className="text-[9px] px-1.5 py-0.5 rounded bg-[#c41e3a]/15 text-[#c41e3a]">error</span>
              )}
            </div>

            {/* URL */}
            {s.imageUrl && (
              <a
                href={s.imageUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[9px] text-[#4a9af0] truncate hover:underline"
              >
                {s.imageUrl}
              </a>
            )}
          </div>
        ))}
      </div>
    </main>
  );
}
