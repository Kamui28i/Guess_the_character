"use client";
import { create } from "zustand";
import { persist } from "zustand/middleware";

interface UserStore {
  userId: number | null;
  username: string | null;
  setUser: (id: number, name: string) => void;
  clearUser: () => void;
}

export const useUserStore = create<UserStore>()(
  persist(
    (set) => ({
      userId: null,
      username: null,
      setUser: (id, name) => set({ userId: id, username: name }),
      clearUser: () => set({ userId: null, username: null }),
    }),
    { name: "gtc_user" }
  )
);
