'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowDown, ArrowUpRight, Sparkles, ShieldCheck, Compass } from 'lucide-react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import Button from '@/components/ui/Button';
import Badge from '@/components/ui/Badge';

const ABOUT_KEYWORDS = [
  'Creative Studio',
  'Venture Lab',
  'Engineering Practice',
  'Digital Architecture',
];

export function AboutHero() {
  const [index, setIndex] = useState(0);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    if (shouldReduceMotion) return;
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % ABOUT_KEYWORDS.length);
    }, 3200);
    return () => clearInterval(interval);
  }, [shouldReduceMotion]);

  const scrollToStory = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const target = document.getElementById('studio-story');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      className="pt-28 pb-16 md:pt-36 md:pb-24 relative overflow-hidden bg-white border-b border-slate-200/80"
      aria-labelledby="about-hero-title"
    >
      {/* Ambient Blue Radial Glow */}
      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] md:w-[850px] h-[350px] bg-gradient-to-tr from-blue-600/10 via-blue-500/5 to-transparent rounded-full blur-3xl pointer-events-none -z-10"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        {/* Eyebrow Badge */}
        <div className="inline-flex items-center gap-2 mb-6">
          <Badge variant="brand" dot className="text-[11px] sm:text-xs">
            Independent Studio &amp; Venture Lab
          </Badge>
        </div>

        {/* Oversized Editorial Headline */}
        <h1
          id="about-hero-title"
          className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-slate-900 tracking-tight leading-[1.15] max-w-5xl mx-auto"
        >
          We build what we believe <br className="hidden sm:inline" />
          <span className="text-slate-900">should</span>{' '}
          <span className="inline-flex items-center align-middle mx-1 sm:mx-2 overflow-hidden h-[1.35em] my-1">
            <AnimatePresence mode="wait">
              <motion.span
                key={ABOUT_KEYWORDS[index]}
                initial={{ y: shouldReduceMotion ? 0 : 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: shouldReduceMotion ? 0 : -20, opacity: 0 }}
                transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
                className="inline-flex items-center px-3.5 sm:px-4 py-1 sm:py-1.5 rounded-2xl bg-blue-600 text-white shadow-sm font-extrabold tracking-tight text-[0.82em] select-none whitespace-nowrap"
              >
                {ABOUT_KEYWORDS[index]}
              </motion.span>
            </AnimatePresence>
          </span>{' '}
          <span className="text-blue-600">exist.</span>
        </h1>

        {/* Supporting Narrative */}
        <p className="mt-6 text-base sm:text-lg md:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed font-normal">
          SoSparkDesigns is an independent creative technology studio bringing together brand architecture,
          production Next.js engineering, and digital entrepreneurship. Led by{' '}
          <strong className="text-slate-900 font-semibold">Soahim Rahman Tasin</strong>, we craft enduring digital
          identities and build high-throughput proprietary platforms.
        </p>

        {/* Action CTAs */}
        <div className="mt-8 md:mt-10 flex flex-wrap items-center justify-center gap-4">
          <a href="#studio-story" onClick={scrollToStory}>
            <Button
              size="lg"
              variant="outline"
              rightIcon={<ArrowDown className="w-4 h-4 animate-bounce" />}
              className="bg-white hover:bg-slate-50 text-slate-800 border-slate-300 shadow-sm"
            >
              Our Story &amp; Origins
            </Button>
          </a>

          <Link href="/portfolio">
            <Button
              size="lg"
              variant="primary"
              rightIcon={<ArrowUpRight className="w-4 h-4" />}
              className="shadow-md shadow-blue-600/25"
            >
              Explore Our Work
            </Button>
          </Link>
        </div>

        {/* Quick Highlights Strip */}
        <div className="mt-14 pt-8 border-t border-slate-100 flex flex-wrap items-center justify-center gap-8 md:gap-14 text-xs text-slate-600">
          <div className="flex items-center gap-2">
            <Compass className="w-4 h-4 text-blue-600" />
            <span>Founded in 2021 &bull; Active 2021–Present</span>
          </div>
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-blue-600" />
            <span>Single Studio Leadership &bull; Zero Fluff</span>
          </div>
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-blue-600" />
            <span>Proprietary Ventures &bull; Client Sprints</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutHero;
