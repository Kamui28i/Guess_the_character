"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function SplashScreen() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setVisible(false), 5000);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-black"
        >
          {/* Magnifier logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.7, ease: "easeOut" }}
          >
            <svg width="72" height="72" viewBox="0 0 72 72" fill="none">
              <circle cx="30" cy="30" r="22" stroke="#d4a017" strokeWidth="1.5" opacity="0.25" />
              <circle cx="30" cy="30" r="17" stroke="#d4a017" strokeWidth="4" />
              <circle cx="30" cy="30" r="9"  fill="black" />
              <ellipse cx="23" cy="23" rx="4" ry="2.5" fill="white" opacity="0.12" transform="rotate(-30 23 23)" />
              <line x1="43" y1="43" x2="63" y2="63" stroke="#d4a017" strokeWidth="6" strokeLinecap="round" />
            </svg>
          </motion.div>

          {/* Game title */}
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="mt-5 text-3xl font-black tracking-tight text-[#d4a017]"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Guess the Culprit
          </motion.h1>

          {/* Divider */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 1.1, duration: 0.5 }}
            className="mt-4 w-32 h-px bg-[#d4a017]/40 origin-center"
          />

          {/* Credits */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4, duration: 0.6 }}
            className="mt-4 text-sm tracking-[0.3em] uppercase text-[#8a9ab0] font-mono"
          >
            by Kamui &amp; Touka
          </motion.p>

          {/* Progress bar */}
          <motion.div
            className="absolute bottom-10 left-1/2 -translate-x-1/2 h-px bg-[#d4a017]/20 rounded-full overflow-hidden"
            style={{ width: 120 }}
          >
            <motion.div
              className="h-full bg-[#d4a017]/60 rounded-full"
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ delay: 0.5, duration: 4.2, ease: "linear" }}
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
