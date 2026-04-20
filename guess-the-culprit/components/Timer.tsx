"use client";
import { useEffect, useRef, useState } from "react";
import { TIMER_SECONDS, TIMER_WARN_AMBER, TIMER_WARN_RED } from "@/config";

interface Props {
  running: boolean;
  onTimeout: (remaining: number) => void;
  onTick?: (remaining: number) => void;
  resetKey?: number;
  duration?: number; // total seconds, defaults to TIMER_SECONDS
}

export default function Timer({ running, onTimeout, onTick, resetKey, duration = TIMER_SECONDS }: Props) {
  const [remaining, setRemaining] = useState(duration);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const remainingRef = useRef(duration);
  const firedRef = useRef(false);

  useEffect(() => {
    setRemaining(duration);
    remainingRef.current = duration;
    firedRef.current = false;
  }, [resetKey, duration]);

  useEffect(() => {
    if (!running) {
      if (intervalRef.current) clearInterval(intervalRef.current);
      return;
    }
    intervalRef.current = setInterval(() => {
      remainingRef.current -= 1;
      setRemaining(remainingRef.current);
      onTick?.(remainingRef.current);
      if (remainingRef.current <= 0 && !firedRef.current) {
        firedRef.current = true;
        clearInterval(intervalRef.current!);
        onTimeout(0);
      }
    }, 1000);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [running, resetKey]); // eslint-disable-line react-hooks/exhaustive-deps

  const pct = remaining / duration;
  const r = 42;
  const circ = 2 * Math.PI * r;
  const dash = circ * pct;

  const color =
    remaining <= TIMER_WARN_RED
      ? "#c41e3a"
      : remaining <= TIMER_WARN_AMBER
      ? "#d4a017"
      : "#4ade80";

  return (
    <div className="relative flex items-center justify-center w-[80px] h-[80px] sm:w-[100px] sm:h-[100px]">
      <svg width="100%" height="100%" viewBox="0 0 100 100">
        {/* Magnifier handle */}
        <line x1="72" y1="72" x2="90" y2="92" stroke="#d4a017" strokeWidth="6" strokeLinecap="round" />
        {/* Background ring */}
        <circle cx="50" cy="50" r={r} fill="#0a1429" stroke="#1e3a5f" strokeWidth="6" />
        {/* Progress ring */}
        <circle
          cx="50"
          cy="50"
          r={r}
          fill="none"
          stroke={color}
          strokeWidth="6"
          strokeDasharray={`${dash} ${circ}`}
          strokeLinecap="round"
          transform="rotate(-90 50 50)"
          style={{ transition: "stroke-dasharray 0.8s linear, stroke 0.3s" }}
        />
        {/* Lens glare */}
        <ellipse cx="35" cy="35" rx="8" ry="5" fill="white" opacity="0.08" transform="rotate(-25,35,35)" />
      </svg>
      <span
        className="absolute text-lg font-bold font-mono tabular-nums"
        style={{ color }}
      >
        {remaining}
      </span>
    </div>
  );
}
