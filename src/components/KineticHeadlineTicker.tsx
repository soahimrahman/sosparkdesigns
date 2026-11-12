'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';

const KEYWORDS = [
  'Brand Systems',
  'Next.js Platforms',
  'Digital Ventures',
  'Enduring Experiences',
];

export default function KineticHeadlineTicker() {
  const [index, setIndex] = useState(0);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    if (shouldReduceMotion) return;

    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % KEYWORDS.length);
    }, 3200);

    return () => clearInterval(interval);
  }, [shouldReduceMotion]);

  return (
    <motion.span
      layout
      transition={{ type: 'spring', stiffness: 220, damping: 22 }}
      className="inline-flex items-center align-middle mx-1 sm:mx-2 overflow-hidden h-[1.35em] my-1"
    >
      <AnimatePresence mode="wait">
        <motion.span
          key={KEYWORDS[index]}
          initial={{ y: shouldReduceMotion ? 0 : 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: shouldReduceMotion ? 0 : -20, opacity: 0 }}
          transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex items-center px-3.5 sm:px-4 py-1 sm:py-1.5 rounded-2xl bg-blue-600 text-white shadow-sm font-extrabold tracking-tight text-[0.82em] select-none whitespace-nowrap"
        >
          {KEYWORDS[index]}
        </motion.span>
      </AnimatePresence>
    </motion.span>
  );
}
