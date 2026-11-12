'use client';

import React from 'react';
import SectionHeader from '@/components/ui/SectionHeader';

export function AboutWorkingPrinciples() {
  const principles = [
    {
      num: '01',
      title: 'Absolute Commercial Transparency',
      desc: 'We operate with defined scopes and fixed milestones. No surprise invoices, no hidden licensing retainers, and 100% intellectual property and repository ownership transferred upon completion.',
    },
    {
      num: '02',
      title: 'Direct Leadership Collaboration',
      desc: 'Our clients communicate directly with Founder & Architect Soahim Rahman Tasin. We eliminate account management layers so technical and aesthetic decisions happen without friction or dilution.',
    },
    {
      num: '03',
      title: 'Zero-Template Standard',
      desc: 'We refuse generic marketplace themes. Every brand identity, vector suite, and Next.js interface is authored from first principles in Figma and implemented in strict TypeScript to elevate market positioning.',
    },
    {
      num: '04',
      title: 'Rigorous Quality Gates',
      desc: 'We do not claim code works merely because it compiles. Every release passes automated unit test suites, ESLint zero-warning checks, and strict WCAG 2.1 AA accessibility audits before deployment.',
    },
  ];

  return (
    <section
      id="principles"
      className="py-20 md:py-28 bg-slate-50/70 relative border-b border-slate-200/80 scroll-mt-20"
      aria-labelledby="principles-heading"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          id="principles-heading"
          eyebrow="Working Principles"
          title={
            <>
              How we work together: <br className="hidden sm:inline" />
              <span className="text-blue-600">agile, direct, and accountable.</span>
            </>
          }
          description="Clear expectations and engineering discipline create enduring client partnerships."
          align="center"
        />

        <div className="divide-y divide-slate-200/90 border-y border-slate-200/90 bg-white rounded-2xl overflow-hidden shadow-sm">
          {principles.map((p) => (
            <div
              key={p.num}
              className="p-6 sm:p-8 flex flex-col md:flex-row md:items-start gap-4 md:gap-8 hover:bg-blue-50/30 transition-colors"
            >
              <div className="flex items-center gap-3 md:w-1/4 shrink-0">
                <span className="text-2xl sm:text-3xl font-mono font-extrabold text-blue-600">
                  {p.num}
                </span>
                <h3 className="text-base sm:text-lg font-bold text-slate-900 tracking-tight">
                  {p.title}
                </h3>
              </div>

              <div className="md:w-3/4">
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  {p.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AboutWorkingPrinciples;
