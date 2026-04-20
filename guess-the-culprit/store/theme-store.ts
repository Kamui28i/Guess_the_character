"use client";
import { create } from "zustand";
import { DEFAULT_BACKGROUND_ID } from "@/lib/backgrounds";

interface ThemeStore {
  backgroundId: string;
  setBackground: (id: string) => void;
}

export const useThemeStore = create<ThemeStore>((set) => ({
  backgroundId: DEFAULT_BACKGROUND_ID,
  setBackground: (id) => {
    if (typeof window !== "undefined") localStorage.setItem("bg-theme", id);
    set({ backgroundId: id });
  },
}));
