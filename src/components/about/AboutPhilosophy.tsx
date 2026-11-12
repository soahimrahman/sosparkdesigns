'use client';

import React from 'react';
import { Compass, Code2, ShieldCheck, Zap, Layers, Sparkles } from 'lucide-react';
import SectionHeader from '@/components/ui/SectionHeader';

export function AboutPhilosophy() {
  const pillars = [
    {
      number: '01',
      title: 'Clarity Before Complexity',
      icon: <Compass className="w-5 h-5 text-blue-600" />,
      desc: 'We solve underlying commercial and technical problems before adding visual or architectural layers. Simple, readable systems outperform bloated solutions every time.',
    },
    {
      number: '02',
      title: 'Design with Purpose',
      icon: <Sparkles className="w-5 h-5 text-blue-600" />,
      desc: 'We reject template trends and ornamental filler. Every typography choice, spacing unit, and interaction exists to serve visual hierarchy, ergonomics, and conversion.',
    },
    {
      number: '03',
      title: 'Engineering with Discipline',
      icon: <Code2 className="w-5 h-5 text-blue-600" />,
      desc: 'Design and code are one continuous discipline. We write clean, accessible, type-safe Next.js App Router code with strict Zod runtime verification and zero unhandled errors.',
    },
    {
      number: '04',
      title: 'Build for Real-World Use',
      icon: <Zap className="w-5 h-5 text-blue-600" />,
      desc: 'True digital quality is measured under real production conditions. We build software that performs under high throughput, passes rigorous RFC standards, and prioritizes fast load times.',
    },
    {
      number: '05',
      title: 'Treat Details as Part of the Product',
      icon: <Layers className="w-5 h-5 text-blue-600" />,
      desc: 'Micro-animations, keyboard accessibility, active states, and field-level validation errors are not optional polish—they define the actual caliber of the user experience.',
    },
  ];

  return (
    <section
      id="philosophy"
      className="py-20 md:py-28 bg-white relative border-b border-slate-200/80 scroll-mt-20"
      aria-labelledby="philosophy-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          id="philosophy-heading"
          eyebrow="Foundational Philosophy"
          title={
            <>
              Working principles that <br className="hidden sm:inline" />
              <span className="text-blue-600">guide our studio practice.</span>
            </>
          }
          description="We hold ourselves to a strict standard of aesthetic restraint, architectural rigor, and commercial honesty."
          align="center"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {pillars.map((pillar) => (
            <div
              key={pillar.number}
              className="bg-slate-50/70 rounded-2xl border border-slate-200/90 p-7 shadow-sm hover:border-blue-300 transition-colors flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-10 h-10 rounded-xl bg-white border border-slate-200/80 flex items-center justify-center shadow-sm">
                    {pillar.icon}
                  </div>
                  <span className="text-xs font-mono font-extrabold text-blue-600">
                    {pillar.number}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-slate-900 tracking-tight mb-2.5">
                  {pillar.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  {pillar.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AboutPhilosophy;
