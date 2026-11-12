'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowDown, ArrowUpRight, Sparkles, Layers, ShieldCheck } from 'lucide-react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import Button from '@/components/ui/Button';
import Badge from '@/components/ui/Badge';

const SERVICE_KEYWORDS = [
  'Brand Systems',
  'Next.js Platforms',
  'UI/UX Interfaces',
  'Digital Ventures',
  'Motion & Video',
];

export function ServicesHero() {
  const [index, setIndex] = useState(0);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    if (shouldReduceMotion) return;
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % SERVICE_KEYWORDS.length);
    }, 3200);
    return () => clearInterval(interval);
  }, [shouldReduceMotion]);

  const scrollToDisciplines = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const target = document.getElementById('disciplines');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      className="pt-28 pb-16 md:pt-36 md:pb-24 relative overflow-hidden bg-white border-b border-slate-200/80"
      aria-labelledby="services-hero-title"
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
            Comprehensive Agency Disciplines
          </Badge>
        </div>

        {/* Oversized Editorial Headline */}
        <h1
          id="services-hero-title"
          className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-slate-900 tracking-tight leading-[1.15] max-w-5xl mx-auto"
        >
          Digital services designed to <br className="hidden md:inline" />
          <span className="text-slate-900">move your</span>{' '}
          <span className="inline-flex items-center align-middle mx-1 sm:mx-2 overflow-hidden h-[1.35em] my-1">
            <AnimatePresence mode="wait">
              <motion.span
                key={SERVICE_KEYWORDS[index]}
                initial={{ y: shouldReduceMotion ? 0 : 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: shouldReduceMotion ? 0 : -20, opacity: 0 }}
                transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
                className="inline-flex items-center px-3.5 sm:px-4 py-1 sm:py-1.5 rounded-2xl bg-blue-600 text-white shadow-sm font-extrabold tracking-tight text-[0.82em] select-none whitespace-nowrap"
              >
                {SERVICE_KEYWORDS[index]}
              </motion.span>
            </AnimatePresence>
          </span>{' '}
          <span className="text-blue-600">forward.</span>
        </h1>

        {/* Value Proposition Description */}
        <p className="mt-6 text-base sm:text-lg md:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed font-normal">
          We combine brand architecture, high-performance Next.js engineering, and strategic design systems to create
          enduring digital platforms. Every discipline is executed with meticulous craft, strict accessibility standards,
          and zero template compromises.
        </p>

        {/* Action CTAs */}
        <div className="mt-8 md:mt-10 flex flex-wrap items-center justify-center gap-4">
          <a href="#disciplines" onClick={scrollToDisciplines}>
            <Button
              size="lg"
              variant="outline"
              rightIcon={<ArrowDown className="w-4 h-4 animate-bounce" />}
              className="bg-white hover:bg-slate-50 text-slate-800 border-slate-300 shadow-sm"
            >
              Explore Our Services
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

        {/* Quick Discipline Anchors Bar */}
        <div className="mt-14 pt-8 border-t border-slate-100 flex items-center justify-start sm:justify-center gap-2 sm:gap-3 text-xs overflow-x-auto pb-2 sm:pb-0 scrollbar-none">
          <span className="text-slate-600 font-mono font-bold uppercase tracking-wider text-[11px] mr-1 shrink-0">
            Quick Jump:
          </span>
          {[
            { id: 'brand-identity', label: '01 Identity' },
            { id: 'web-design', label: '02 Web Design' },
            { id: 'web-dev', label: '03 Web Dev' },
            { id: 'graphic-design', label: '04 Graphics' },
            { id: 'video-editing', label: '05 Video & Motion' },
            { id: 'page-management', label: '06 Growth & Retainer' },
          ].map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="px-3 py-1 rounded-full bg-slate-50 hover:bg-blue-50 text-slate-700 hover:text-blue-600 border border-slate-200/80 hover:border-blue-200 font-mono text-[11px] font-semibold transition-colors shrink-0"
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ServicesHero;
