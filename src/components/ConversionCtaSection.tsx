import React from 'react';
import Link from 'next/link';
import { ArrowRight, ArrowUpRight, ShieldCheck, Clock, CheckCircle2 } from 'lucide-react';
import Button from './ui/Button';

export function ConversionCtaSection() {
  return (
    <section
      id="contact-cta"
      className="py-24 md:py-32 bg-slate-900 text-white relative overflow-hidden"
      aria-labelledby="cta-heading"
    >
      {/* Subtle Radial Blue Ambient Glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-blue-600/15 rounded-full blur-[100px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-950/80 border border-blue-800 text-blue-300 text-xs font-semibold uppercase tracking-wider mb-6">
          <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
          Direct Collaboration • 2026–2027 Inquiries
        </div>

        <h2
          id="cta-heading"
          className="text-3xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.15] text-white max-w-4xl mx-auto"
        >
          Ready to build a digital presence that <span className="text-blue-400">refuses to fade?</span>
        </h2>

        <p className="mt-6 text-base md:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
          Let&apos;s discuss your vision, review technical requirements, and engineer an unforgettable digital experience built with craft and precision.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Link href="/contact">
            <Button
              size="lg"
              variant="primary"
              rightIcon={<ArrowRight className="w-4 h-4" />}
              className="bg-blue-600 hover:bg-blue-500 text-white shadow-lg shadow-blue-600/30 font-semibold"
            >
              Start a Project
            </Button>
          </Link>

          <Link href="/portfolio">
            <Button
              size="lg"
              variant="outline"
              rightIcon={<ArrowUpRight className="w-4 h-4" />}
              className="bg-slate-800/80 hover:bg-slate-800 text-slate-200 border-slate-700 hover:border-slate-600"
            >
              Explore Built Platforms
            </Button>
          </Link>
        </div>

        <div className="mt-14 pt-10 border-t border-slate-800/80 flex flex-wrap items-center justify-center gap-8 text-xs text-slate-400">
          <span className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-blue-400" />
            Direct communication with studio leadership
          </span>
          <span className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-blue-400" />
            24–48 business hour response guaranteed
          </span>
          <span className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-blue-400" />
            Production-grade Next.js &amp; TypeScript
          </span>
        </div>
      </div>
    </section>
  );
}

export default ConversionCtaSection;
