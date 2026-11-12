'use client';

import React from 'react';
import { Code2, Cpu, Palette, Film, CheckCircle2 } from 'lucide-react';
import SectionHeader from '@/components/ui/SectionHeader';

export function PortfolioTechMatrix() {
  const capabilityGroups = [
    {
      title: 'Next.js & Frontend Engineering',
      icon: <Code2 className="w-5 h-5 text-blue-600" />,
      skills: [
        'Next.js 14 App Router',
        'Strict TypeScript 5',
        'React 18 Server Components',
        'Tailwind CSS Token System',
        'Framer Motion Easing Curves',
        'Sub-second Lighthouse Scores',
      ],
    },
    {
      title: 'Backend, Network & Security',
      icon: <Cpu className="w-5 h-5 text-blue-600" />,
      skills: [
        'Zod Runtime Schema Validation',
        'DNS MX Socket Telemetry',
        'RFC 5321 / 5322 Parsing',
        'MongoDB Atlas & Mongoose',
        'Automated Honeypot Bot Traps',
        'Cloudflare Edge & Serverless APIs',
      ],
    },
    {
      title: 'Brand Systems & UI/UX Craft',
      icon: <Palette className="w-5 h-5 text-blue-600" />,
      skills: [
        'Mathematical Vector Logo Suites',
        'Figma Autolayout Design Systems',
        'WCAG 2.1 AA Contrast Compliance',
        'Modular Typographic Scales',
        'Responsive Multi-Device Layouts',
        'Zero-Template Custom Components',
      ],
    },
    {
      title: 'Motion & Multimedia Engineering',
      icon: <Film className="w-5 h-5 text-blue-600" />,
      skills: [
        'Kinetic Typography Bumpers',
        'Broadcast 4K Color Grading',
        '3D Blender Asset Modeling',
        'Spatial Sound Design & Mixing',
        'Social Format Cutdowns (9:16 & 16:9)',
        'Lottie & SVG Path Animations',
      ],
    },
  ];

  return (
    <section
      id="capabilities"
      className="py-20 md:py-28 bg-white relative border-b border-slate-200/80 scroll-mt-20"
      aria-labelledby="tech-matrix-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          id="tech-matrix-heading"
          eyebrow="Technical Stack Matrix"
          title={
            <>
              Verified production tools &amp; <br className="hidden sm:inline" />
              <span className="text-blue-600">engineering standards.</span>
            </>
          }
          description="We avoid speculative buzzwords. Every tool, framework, and standard listed below is actively maintained, tested, and utilized in our production applications."
          align="center"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {capabilityGroups.map((group, idx) => (
            <div
              key={idx}
              className="bg-slate-50/70 rounded-2xl border border-slate-200/90 p-6 shadow-sm hover:border-blue-200 transition-colors"
            >
              <div className="w-10 h-10 rounded-xl bg-white border border-slate-200/80 flex items-center justify-center shadow-sm mb-4">
                {group.icon}
              </div>
              <h3 className="text-base font-bold text-slate-900 tracking-tight mb-3">
                {group.title}
              </h3>
              <ul className="space-y-2">
                {group.skills.map((skill, sIdx) => (
                  <li key={sIdx} className="flex items-center gap-2 text-xs text-slate-600">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-600 shrink-0" />
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default PortfolioTechMatrix;
