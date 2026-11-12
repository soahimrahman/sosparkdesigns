import React from 'react';
import Link from 'next/link';
import { ArrowRight, ArrowUpRight, ShieldCheck, Clock, CheckCircle2 } from 'lucide-react';
import Button from './ui/Button';

export function ConversionCtaSection() {
  return (
    <section
      id="contact-cta"
      className="py-24 md:py-32 bg-gradient-to-b from-white via-blue-50/40 to-white text-slate-900 relative overflow-hidden border-b border-slate-200/80"
      aria-labelledby="cta-heading"
    >
      {/* Subtle Radial Blue Ambient Glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-blue-500/10 rounded-full blur-[100px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200/80 text-blue-700 text-xs font-semibold uppercase tracking-wider mb-6">
          <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
          Direct Collaboration • 2026–2027 Inquiries
        </div>

        <h2
          id="cta-heading"
          className="text-3xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.15] text-slate-900 max-w-4xl mx-auto"
        >
          Ready to build a digital presence that <span className="text-blue-600">refuses to fade?</span>
        </h2>

        <p className="mt-6 text-base md:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
          Let&apos;s discuss your brand vision, define your design system, and engineer an unforgettable digital experience built with craft and precision.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Link href="/contact">
            <Button
              size="lg"
              variant="primary"
              rightIcon={<ArrowRight className="w-4 h-4" />}
              className="shadow-md shadow-blue-600/25 font-semibold"
            >
              Start a Project
            </Button>
          </Link>

          <Link href="/portfolio">
            <Button
              size="lg"
              variant="outline"
              rightIcon={<ArrowUpRight className="w-4 h-4" />}
              className="bg-white hover:bg-slate-50 text-slate-800 border-slate-300 hover:border-slate-400 font-semibold"
            >
              Explore Built Platforms
            </Button>
          </Link>
        </div>

        <div className="mt-14 pt-10 border-t border-slate-200/80 flex flex-wrap items-center justify-center gap-8 text-xs text-slate-600">
          <span className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-blue-600" />
            Direct communication with studio leadership
          </span>
          <span className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-blue-600" />
            24–48 business hour response guaranteed
          </span>
          <span className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-blue-600" />
            Production-grade Next.js &amp; TypeScript
          </span>
        </div>
      </div>
    </section>
  );
}

export default ConversionCtaSection;
