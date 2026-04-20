"use client";
import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useUserStore } from "@/store/user-store";

export default function UserRegistration() {
  const { userId, setUser } = useUserStore();
  const [visible, setVisible] = useState(false);
  const [username, setUsername] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [welcomed, setWelcomed] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Show after splash (5.5s) only if no user registered yet
  useEffect(() => {
    if (userId) return;
    const t = setTimeout(() => {
      setVisible(true);
      setTimeout(() => inputRef.current?.focus(), 50);
    }, 5500);
    return () => clearTimeout(t);
  }, [userId]);

  async function handleSubmit() {
    const clean = username.trim();
    if (!clean) return;
    setError("");
    setLoading(true);
    try {
      const res = await fetch("/api/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username: clean }),
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data.error ?? "Something went wrong");
        return;
      }
      setUser(data.id, data.username);
      setWelcomed(data.created ? `Welcome, ${data.username}!` : `Welcome back, ${data.username}!`);
      setTimeout(() => setVisible(false), 1800);
    } catch {
      setError("Connection error, try again");
    } finally {
      setLoading(false);
    }
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="reg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="fixed inset-0 z-[9000] flex items-center justify-center"
          style={{ background: "rgba(0,0,0,0.88)", backdropFilter: "blur(6px)" }}
        >
          <motion.div
            initial={{ scale: 0.88, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.92, opacity: 0 }}
            transition={{ type: "spring", stiffness: 260, damping: 22 }}
            className="w-full max-w-sm mx-4"
          >
            {/* Card */}
            <div
              className="rounded-sm border border-[#d4a017]/30 overflow-hidden"
              style={{ background: "#07111f", boxShadow: "0 0 60px rgba(212,160,23,0.15), 0 20px 60px rgba(0,0,0,0.8)" }}
            >
              {/* Gold top bar */}
              <div className="h-1" style={{ background: "linear-gradient(90deg, #d4a017, #e8c040, #d4a017)" }} />

              <div className="px-8 py-8">
                {/* Logo/title */}
                <div className="text-center mb-8">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.15, type: "spring", stiffness: 300, damping: 18 }}
                    className="text-4xl mb-3"
                  >
                    🔎
                  </motion.div>
                  <h1
                    className="text-2xl font-black text-[#d4a017] tracking-wider mb-1"
                    style={{ fontFamily: "'Playfair Display', serif", textShadow: "0 0 20px rgba(212,160,23,0.4)" }}
                  >
                    Guess the Culprit
                  </h1>
                  <p className="text-[#4a6a8a] text-[11px] font-mono uppercase tracking-[0.25em]">
                    Detective Registry
                  </p>
                </div>

                {welcomed ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-4"
                  >
                    <div className="text-3xl mb-3">✓</div>
                    <p
                      className="text-[#4ade80] font-bold text-lg"
                      style={{ fontFamily: "'Playfair Display', serif" }}
                    >
                      {welcomed}
                    </p>
                    <p className="text-[#4a6a8a] text-xs font-mono mt-1 uppercase tracking-widest">
                      Your case file is ready
                    </p>
                  </motion.div>
                ) : (
                  <>
                    <p className="text-[#8a9ab0] text-sm text-center mb-6 leading-relaxed">
                      Enter your detective alias to track scores across all case modes.
                    </p>

                    {/* Input */}
                    <div className="mb-4">
                      <label className="block text-[10px] text-[#d4a017]/60 font-mono uppercase tracking-[0.2em] mb-2">
                        Detective Alias
                      </label>
                      <input
                        ref={inputRef}
                        type="text"
                        value={username}
                        onChange={(e) => { setUsername(e.target.value); setError(""); }}
                        onKeyDown={(e) => e.key === "Enter" && !loading && handleSubmit()}
                        placeholder="e.g. ConanEdogawa"
                        maxLength={20}
                        className="w-full px-4 py-3 rounded font-mono text-sm text-[#d4c090] placeholder-[#3a4a5a] border focus:outline-none transition-colors"
                        style={{
                          background: "#0a1429",
                          borderColor: error ? "#c41e3a" : "#1e3a5f",
                          boxShadow: error ? "0 0 0 1px #c41e3a44" : undefined,
                        }}
                        onFocus={(e) => { if (!error) e.target.style.borderColor = "#d4a017"; }}
                        onBlur={(e) => { if (!error) e.target.style.borderColor = "#1e3a5f"; }}
                      />
                      <AnimatePresence>
                        {error && (
                          <motion.p
                            initial={{ opacity: 0, y: -4 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0 }}
                            className="text-[#c41e3a] text-[11px] font-mono mt-1.5"
                          >
                            {error}
                          </motion.p>
                        )}
                      </AnimatePresence>
                      <p className="text-[#3a4a5a] text-[10px] font-mono mt-1.5">
                        3–20 chars · letters, numbers, underscore
                      </p>
                    </div>

                    {/* Submit */}
                    <button
                      onClick={handleSubmit}
                      disabled={!username.trim() || loading}
                      className="w-full py-3.5 font-black text-sm tracking-[0.15em] uppercase rounded transition-all active:scale-[0.97] disabled:opacity-40"
                      style={{
                        background: "linear-gradient(135deg, #d4a017, #e8c040)",
                        color: "#0a1429",
                        fontFamily: "'Playfair Display', serif",
                        boxShadow: "0 4px 20px rgba(212,160,23,0.25)",
                      }}
                    >
                      {loading ? "Registering…" : "Enter the Investigation"}
                    </button>
                  </>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
