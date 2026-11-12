'use client';

import React from 'react';
import Link from 'next/link';
import { Mail, ShieldCheck, Code2, Palette, ArrowUpRight } from 'lucide-react';
import SectionHeader from '@/components/ui/SectionHeader';
import Button from '@/components/ui/Button';

export function FounderMonograph() {
  return (
    <section
      id="leadership"
      className="py-20 md:py-28 bg-white relative border-b border-slate-200/80 scroll-mt-20"
      aria-labelledby="founder-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          id="founder-heading"
          eyebrow="Studio Leadership"
          title={
            <>
              Behind the work: <br className="hidden sm:inline" />
              <span className="text-blue-600">Architect &amp; Creative Director</span>
            </>
          }
          description="SoSparkDesigns operates under focused, hands-on leadership. Every system, brand identity, and platform is directed and reviewed by its founder."
          align="center"
        />

        <div className="bg-slate-50/70 rounded-3xl border border-slate-200/90 p-8 md:p-14 shadow-[0_12px_40px_rgba(0,0,0,0.03)]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Column: Typographic Emblem Composition */}
            <div className="lg:col-span-5 flex flex-col items-center justify-center">
              <div className="w-full max-w-[340px] aspect-square rounded-3xl bg-white border border-slate-200/90 shadow-sm p-8 flex flex-col justify-between relative overflow-hidden group hover:border-blue-300 transition-colors">
                {/* Background Blueprint Grid Lines */}
                <div
                  className="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:24px_24px] opacity-60 pointer-events-none"
                  aria-hidden="true"
                />

                {/* Top Coordinates Header */}
                <div className="flex items-center justify-between text-[10px] font-mono text-slate-400 z-10">
                  <span>FOUNDER / ARCHITECT</span>
                  <span className="text-blue-600 font-bold">EST. 2021</span>
                </div>

                {/* Center Geometry & Official Mark */}
                <div className="my-auto flex flex-col items-center text-center z-10">
                  <div className="w-20 h-20 rounded-2xl bg-blue-50 border border-blue-200/80 flex items-center justify-center text-blue-600 mb-4 shadow-sm group-hover:scale-105 transition-transform">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="/assets/logo-dark.svg"
                      alt="SoSpark Design Official Emblem"
                      className="w-12 h-12"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 tracking-tight">
                    Soahim Rahman Tasin
                  </h3>
                  <span className="text-xs font-mono font-semibold text-blue-600 tracking-wide mt-0.5">
                    Creative Director &amp; Lead Architect
                  </span>
                </div>

                {/* Bottom Spec Sheet */}
                <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] font-mono text-slate-500 z-10">
                  <span>#0069EA SYSTEM</span>
                  <span className="text-slate-900 font-bold">BANGLADESH &bull; GLOBAL</span>
                </div>
              </div>
            </div>

            {/* Right Column: Founder Monograph & Narrative */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <div className="space-y-2">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-blue-600 block">
                  Editorial Monograph
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight leading-tight">
                  Soahim Rahman Tasin
                </h3>
                <p className="text-sm font-mono text-slate-500">
                  Founder &amp; Principal Technologist &bull; Active 2021–Present
                </p>
              </div>

              {/* Architectural Quote */}
              <blockquote className="p-4 sm:p-5 rounded-2xl bg-white border-l-4 border-l-blue-600 border border-slate-200/80 text-sm sm:text-base text-slate-800 font-medium leading-relaxed italic">
                &ldquo;True digital craft is not superficial ornamentation. It is the seamless convergence of
                mathematical typography, intentional whitespace, and resilient production code that performs under real-world
                pressure.&rdquo;
              </blockquote>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                Founded SoSparkDesigns in 2021 with the belief that ambitious founders deserve direct collaboration with
                the practitioners who actually architect and write the code. Rather than acting as a traditional layered agency
                with account managers and subcontracted work, SoSpark operates as an agile creative technology studio and
                venture lab.
              </p>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                Beyond client visual identity and web architecture, Tasin has engineered and launched proprietary ventures
                including the <strong className="text-slate-900 font-semibold">SparkForge Deliverability Engine</strong> and
                the <strong className="text-slate-900 font-semibold">Subz Empire Creator Marketplace</strong>, proving design
                and technical principles in live, high-traffic commercial environments.
              </p>

              {/* Direct Leadership Reassurances */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs">
                <div className="flex items-center gap-2 text-slate-700">
                  <ShieldCheck className="w-4 h-4 text-blue-600 shrink-0" />
                  <span>Direct founder oversight on all client sprints</span>
                </div>
                <div className="flex items-center gap-2 text-slate-700">
                  <Code2 className="w-4 h-4 text-blue-600 shrink-0" />
                  <span>TypeScript &amp; Next.js 14 production code</span>
                </div>
                <div className="flex items-center gap-2 text-slate-700">
                  <Palette className="w-4 h-4 text-blue-600 shrink-0" />
                  <span>Mathematical vector brand geometry</span>
                </div>
                <div className="flex items-center gap-2 text-slate-700">
                  <Mail className="w-4 h-4 text-blue-600 shrink-0" />
                  <span className="font-mono">soahimrahman2024@gmail.com</span>
                </div>
              </div>

              {/* Action Link */}
              <div className="pt-4 flex flex-wrap items-center gap-4">
                <Link href="/contact">
                  <Button size="md" variant="primary" rightIcon={<ArrowUpRight className="w-4 h-4" />}>
                    Direct Project Inquiry
                  </Button>
                </Link>
                <Link href="/portfolio">
                  <Button size="md" variant="outline">
                    Explore Built Platforms
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FounderMonograph;
