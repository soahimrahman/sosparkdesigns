'use client';

import React, { useState, useEffect } from 'react';

const KEYWORDS = [
  'Brand Systems',
  'Next.js Platforms',
  'Digital Ventures',
  'Enduring Experiences',
];

export default function KineticHeadlineTicker() {
  const [index, setIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const interval = setInterval(() => {
      setAnimating(true);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % KEYWORDS.length);
        setAnimating(false);
      }, 300);
    }, 3200);

    return () => clearInterval(interval);
  }, []);

  return (
    <span className="inline-block relative overflow-hidden align-middle my-1">
      <span
        style={{
          transform: animating ? 'translateY(-120%) scale(0.95)' : 'translateY(0) scale(1)',
          opacity: animating ? 0 : 1,
          transition: 'transform 300ms cubic-bezier(0.16, 1, 0.3, 1), opacity 300ms ease',
        }}
        className="inline-flex items-center px-3.5 sm:px-4 py-1 sm:py-1.5 rounded-2xl bg-blue-600 text-white shadow-sm font-extrabold tracking-tight text-[0.85em] mx-1 sm:mx-2 select-none"
      >
        {KEYWORDS[index]}
      </span>
    </span>
  );
}
