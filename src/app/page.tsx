import React from 'react';
import Link from 'next/link';
import { ArrowUpRight, ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';
import HeroSystemVisual from '@/components/HeroSystemVisual';
import KineticHeadlineTicker from '@/components/KineticHeadlineTicker';
import SpatialFannedDeck from '@/components/SpatialFannedDeck';
import AgencyEditorialIntro from '@/components/AgencyEditorialIntro';
import ServicesSection from '@/components/ServicesSection';
import AuthenticWorkShowcase from '@/components/AuthenticWorkShowcase';
import VenturesSection from '@/components/VenturesSection';
import ProcessSection from '@/components/ProcessSection';
import ConversionCtaSection from '@/components/ConversionCtaSection';
import Button from '@/components/ui/Button';
import Badge from '@/components/ui/Badge';

export const metadata = {
  title: 'SoSpark Design — Creative Agency & Digital Lab',
  description:
    'Multidisciplinary creative agency and venture lab. Brand identity, UI/UX systems, production Next.js development, and proprietary digital platforms. Led by Soahim Rahman Tasin.',
};

export default function HomePage() {
  const techStackMarks = [
    'NEXT.JS 14',
    'TYPESCRIPT',
    'TAILWIND CSS',
    'REACT 18',
    'FIGMA',
    'CLOUDFLARE',
    'VITEST',
    'ZOD VALIDATION',
    'LUCIDE ICONS',
  ];

  return (
    <>
      {/* ── Section B: Hero Experience ── */}
      <section
        id="hero"
        className="pt-28 pb-16 md:pt-36 md:pb-24 relative overflow-hidden bg-white border-b border-slate-200/80"
        aria-labelledby="hero-headline"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          {/* Eyebrow Trust Badge */}
          <div className="inline-flex items-center gap-2 mb-6">
            <Badge variant="brand" dot className="text-[11px] sm:text-xs">
              Creative Studio &amp; Venture Lab
            </Badge>
          </div>

          {/* Main Headline (Phase 3 Core Message with Kinetic Keyword Ticker) */}
          <h1
            id="hero-headline"
            className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-slate-900 tracking-tight leading-[1.15] max-w-4xl mx-auto"
          >
            We imagine. We design. <br className="hidden sm:inline" />
            <span className="text-slate-900">We build</span> <KineticHeadlineTicker />
          </h1>

          {/* Value Proposition Description */}
          <p className="mt-6 text-base sm:text-lg md:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
            SoSparkDesigns is a multidisciplinary creative studio led by{' '}
            <strong className="text-slate-900 font-semibold">Soahim Rahman Tasin</strong>. We combine brand
            architecture, high-performance Next.js engineering, and strategic design systems to create digital
            experiences and operate proprietary software platforms.
          </p>

          {/* Action CTAs */}
          <div className="mt-8 md:mt-10 flex flex-wrap items-center justify-center gap-4">
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
            <a href="#ventures">
              <Button size="lg" variant="outline" rightIcon={<ArrowRight className="w-4 h-4" />}>
                Explore Built Platforms
              </Button>
            </a>
          </div>

          {/* Centerpiece Artwork: Spatial Fanned Deck (Pallet Ross Reference B) */}
          <SpatialFannedDeck />
        </div>
      </section>

      {/* ── Production Technology Stack Strip ── */}
      <section className="py-6 bg-slate-50/80 border-b border-slate-200/80 overflow-hidden" aria-labelledby="stack-title">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-3">
          <p id="stack-title" className="text-xs uppercase font-mono font-semibold text-slate-600 tracking-widest">
            Engineered with modern technologies &amp; verified design systems
          </p>
        </div>
        <div className="flex items-center justify-center gap-6 md:gap-10 flex-wrap px-4 py-2">
          {techStackMarks.map((mark) => (
            <span
              key={mark}
              className="text-xs font-mono font-bold text-slate-600 tracking-wider hover:text-blue-600 transition-colors"
            >
              {mark}
            </span>
          ))}
        </div>
      </section>

      {/* ── Section C: Agency Introduction (Editorial Layout) ── */}
      <AgencyEditorialIntro />

      {/* Interactive System Capability Terminal */}
      <section className="py-16 md:py-20 bg-slate-50/50 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-mono font-semibold text-blue-600 uppercase tracking-widest block mb-2">
              Architecture Matrix
            </span>
            <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight">
              Interactive System Telemetry
            </h2>
          </div>
          <HeroSystemVisual />
        </div>
      </section>

      {/* ── Section D: Services (The 6 Core Disciplines) ── */}
      <ServicesSection />

      {/* ── Section E: Authentic Work Showcase ── */}
      <AuthenticWorkShowcase />

      {/* ── Section F: Our Ventures (Subz Empire & SparkForge) ── */}
      <VenturesSection />

      {/* ── Section G: 5-Step Process Timeline ── */}
      <ProcessSection />

      {/* ── Section H: Conversion Section ── */}
      <ConversionCtaSection />
    </>
  );
}
