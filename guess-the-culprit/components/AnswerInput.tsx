"use client";
import { useState, FormEvent } from "react";
import { isCorrectAnswer } from "@/lib/fuzzy-match";

interface Props {
  answerSlug: string;
  onSubmit: (correct: boolean, input: string) => void;
  disabled?: boolean;
}

export default function AnswerInput({ answerSlug, onSubmit, disabled }: Props) {
  const [value, setValue] = useState("");

  function handle(e: FormEvent) {
    e.preventDefault();
    if (!value.trim()) return;
    const correct = isCorrectAnswer(value.trim(), answerSlug);
    onSubmit(correct, value.trim());
    setValue("");
  }

  return (
    <form onSubmit={handle} className="flex gap-2">
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        disabled={disabled}
        placeholder="Or type the suspect's name…"
        className="flex-1 bg-[#0a1429] border border-[#1e3a5f] text-[#d4c090] placeholder-[#3a4a5a] px-4 py-2.5 rounded-lg font-mono text-sm focus:outline-none focus:border-[#d4a017] transition-colors"
        autoComplete="off"
        spellCheck={false}
      />
      <button
        type="submit"
        disabled={disabled || !value.trim()}
        className="px-5 py-2.5 font-bold rounded-lg text-sm disabled:opacity-40 transition-all hover:brightness-110 active:scale-95"
        style={{ background: "linear-gradient(135deg, #d4a017, #c8940f)", color: "#0a1429" }}
      >
        ↵
      </button>
    </form>
  );
}
