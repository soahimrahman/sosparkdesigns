'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowDown, ArrowUpRight, Sparkles, ShieldCheck, Layers } from 'lucide-react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import Button from '@/components/ui/Button';
import Badge from '@/components/ui/Badge';

const PORTFOLIO_KEYWORDS = [
  'Proprietary Platforms',
  'Venture Architecture',
  'Next.js Engineering',
  'Design Systems',
];

export function PortfolioHero() {
  const [index, setIndex] = useState(0);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    if (shouldReduceMotion) return;
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % PORTFOLIO_KEYWORDS.length);
    }, 3200);
    return () => clearInterval(interval);
  }, [shouldReduceMotion]);

  const scrollToVentures = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const target = document.getElementById('featured-ventures');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      className="pt-28 pb-16 md:pt-36 md:pb-24 relative overflow-hidden bg-white border-b border-slate-200/80"
      aria-labelledby="portfolio-hero-title"
    >
      {/* Ambient Blue Radial Glow */}
      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] md:w-[850px] h-[350px] bg-gradient-to-tr from-blue-600/10 via-blue-500/5 to-transparent rounded-full blur-3xl pointer-events-none -z-10"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        {/* Eyebrow Trust Badge */}
        <div className="inline-flex items-center gap-2 mb-6">
          <Badge variant="brand" dot className="text-[11px] sm:text-xs">
            Authentic Studio Work &amp; Ventures
          </Badge>
        </div>

        {/* Oversized Editorial Headline */}
        <h1
          id="portfolio-hero-title"
          className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-slate-900 tracking-tight leading-[1.15] max-w-5xl mx-auto"
        >
          Selected work. <br className="hidden sm:inline" />
          <span className="text-slate-900">Real engineering.</span>{' '}
          <span className="inline-flex items-center align-middle mx-1 sm:mx-2 overflow-hidden h-[1.35em] my-1">
            <AnimatePresence mode="wait">
              <motion.span
                key={PORTFOLIO_KEYWORDS[index]}
                initial={{ y: shouldReduceMotion ? 0 : 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: shouldReduceMotion ? 0 : -20, opacity: 0 }}
                transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
                className="inline-flex items-center px-3.5 sm:px-4 py-1 sm:py-1.5 rounded-2xl bg-blue-600 text-white shadow-sm font-extrabold tracking-tight text-[0.82em] select-none whitespace-nowrap"
              >
                {PORTFOLIO_KEYWORDS[index]}
              </motion.span>
            </AnimatePresence>
          </span>
        </h1>

        {/* Value Proposition Description */}
        <p className="mt-6 text-base sm:text-lg md:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed font-normal">
          We build, launch, and operate proprietary digital platforms alongside client solutions. Explore our flagship
          ventures—SparkForge and Subz Empire—as well as verified design architectures and transparent conceptual studies.
        </p>

        {/* Action CTAs */}
        <div className="mt-8 md:mt-10 flex flex-wrap items-center justify-center gap-4">
          <a href="#featured-ventures" onClick={scrollToVentures}>
            <Button
              size="lg"
              variant="outline"
              rightIcon={<ArrowDown className="w-4 h-4 animate-bounce" />}
              className="bg-white hover:bg-slate-50 text-slate-800 border-slate-300 shadow-sm"
            >
              Explore Built Platforms
            </Button>
          </a>

          <Link href="/contact">
            <Button
              size="lg"
              variant="primary"
              rightIcon={<ArrowUpRight className="w-4 h-4" />}
              className="shadow-md shadow-blue-600/25"
            >
              Start a Project
            </Button>
          </Link>
        </div>

        {/* Trust & Transparency Metric Bar */}
        <div className="mt-14 pt-8 border-t border-slate-100 flex flex-wrap items-center justify-center gap-8 md:gap-14 text-xs text-slate-600">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-blue-600" />
            <span>Strict Zero-Fabrication Transparency</span>
          </div>
          <div className="flex items-center gap-2">
            <Layers className="w-4 h-4 text-blue-600" />
            <span>Operational Proprietary Platforms</span>
          </div>
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-blue-600" />
            <span>Production Next.js &amp; Design Tokens</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PortfolioHero;
