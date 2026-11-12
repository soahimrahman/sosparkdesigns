import React from 'react';
import Link from 'next/link';
import { ArrowUpRight, Palette, Terminal, Sparkles, Building2 } from 'lucide-react';
import Badge from './ui/Badge';

export function AgencyEditorialIntro() {
  return (
    <section
      id="about"
      className="py-24 md:py-32 bg-white relative border-b border-slate-200/80"
      aria-labelledby="intro-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-16 md:mb-20">
          <Badge variant="brand" dot className="mb-4">
            Studio Philosophy &amp; Dual Mission
          </Badge>
          <h2
            id="intro-heading"
            className="text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.15]"
          >
            We merge high-craft design with <span className="text-blue-600">production engineering</span>.
          </h2>
          <p className="mt-6 text-lg md:text-xl text-slate-600 leading-relaxed font-normal">
            SoSparkDesigns operates at the intersection of creative studio and venture lab. Founded and directed by{' '}
            <strong className="text-slate-900 font-semibold">Soahim Rahman Tasin</strong>, we bridge the gap
            between visual distinctiveness and reliable software architecture.
          </p>
        </div>

        {/* Editorial Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12 pt-8 border-t border-slate-200/80">
          <div className="space-y-4">
            <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600">
              <Palette className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 tracking-tight">
              01. Identity That Endures
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              We design comprehensive brand systems—from mathematical logo geometry to typographic hierarchy and
              motion rules. Every asset is built to maintain prestige across decades, avoiding short-lived design fads.
            </p>
          </div>

          <div className="space-y-4">
            <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600">
              <Terminal className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 tracking-tight">
              02. Next.js Engineering
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Design is only as powerful as its execution. We write strict TypeScript, utilize Next.js App Router
              server components for immediate First Contentful Paint, and enforce rigorous automated quality gates.
            </p>
          </div>

          <div className="space-y-4">
            <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600">
              <Building2 className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 tracking-tight">
              03. Operational Reality
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              We are not just a client agency; we build and operate real software platforms like SparkForge and Subz Empire.
              Every recommendation we make is grounded in the reality of scaling real digital businesses.
            </p>
          </div>
        </div>

        {/* Studio Quote & Link */}
        <div className="mt-16 pt-8 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="text-sm text-slate-500 italic">
            &ldquo;Design is not superficial decoration. It is the clearest, most direct expression of what a company actually is.&rdquo;
          </div>
          <Link
            href="/about"
            className="text-sm font-semibold text-blue-600 hover:text-blue-700 hover:underline inline-flex items-center gap-1.5 shrink-0"
          >
            <span>Learn More About Our Team &amp; Story</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default AgencyEditorialIntro;
