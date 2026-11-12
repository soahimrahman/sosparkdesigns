import React from 'react';
import { Compass, Lightbulb, PenTool, Terminal, Rocket, CheckCircle2 } from 'lucide-react';
import SectionHeader from './ui/SectionHeader';

export interface ProcessStep {
  number: string;
  name: string;
  headline: string;
  description: string;
  icon: React.ReactNode;
  deliverables: string[];
}

export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: '01',
    name: 'Discover',
    headline: 'Understanding the problem before writing code',
    description:
      'We conduct an honest deep-dive into your existing assets, brand positioning, audience needs, and technical constraints to identify real leverage points.',
    icon: <Compass className="w-5 h-5 text-blue-600" />,
    deliverables: ['Project brief & goals', 'Competitor & asset audit', 'Audience journey map'],
  },
  {
    number: '02',
    name: 'Strategize',
    headline: 'Architecting the blueprint and design contract',
    description:
      'We structure the sitemap, determine component hierarchy, establish design tokens, and select the right technology stack without premature complexity.',
    icon: <Lightbulb className="w-5 h-5 text-blue-600" />,
    deliverables: ['Information architecture', 'Design token matrix', 'Technical roadmap'],
  },
  {
    number: '03',
    name: 'Design',
    headline: 'High-fidelity Figma systems and editorial craft',
    description:
      'Every surface is sculpted with intentional typography, consistent spacing, and purposeful motion. We test responsive layouts across all device breakpoints.',
    icon: <PenTool className="w-5 h-5 text-blue-600" />,
    deliverables: ['Figma design system', 'Interactive prototype', 'WCAG AA contrast validation'],
  },
  {
    number: '04',
    name: 'Build',
    headline: 'Clean Next.js engineering with strict quality gates',
    description:
      'We write production TypeScript, server components for instant First Contentful Paint, isolated interactive islands, and runtime validation with Zod.',
    icon: <Terminal className="w-5 h-5 text-blue-600" />,
    deliverables: ['Next.js App Router codebase', 'Automated test suite', 'Runtime schema validation'],
  },
  {
    number: '05',
    name: 'Launch',
    headline: 'Empirical verification and reliable deployment',
    description:
      'Comprehensive verification across real browsers, mobile viewports, automated CI/CD checks, and search engine metadata before pushing to production.',
    icon: <Rocket className="w-5 h-5 text-blue-600" />,
    deliverables: ['Production build verification', 'Open Graph & SEO schema', 'Post-launch monitoring'],
  },
];

export function ProcessSection() {
  return (
    <section
      id="process"
      className="py-20 md:py-28 bg-white relative border-b border-slate-200/80"
      aria-labelledby="process-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          id="process-heading"
          eyebrow="Working Methodology"
          title={
            <>
              How We Turn Ideas Into <span className="text-blue-600">Enduring Products</span>
            </>
          }
          description="A disciplined, transparent five-stage process designed to eliminate guesswork, prevent scope creep, and deliver verified production quality."
          align="center"
        />

        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 relative">
          {PROCESS_STEPS.map((step, idx) => (
            <div
              key={step.number}
              className="relative p-6 rounded-2xl bg-slate-50/70 border border-slate-200/80 hover:bg-white hover:border-slate-300 hover:shadow-md transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center">
                    {step.icon}
                  </div>
                  <span className="text-xs font-mono font-bold text-slate-400">
                    {step.number}
                  </span>
                </div>

                <div className="text-xs font-bold uppercase tracking-wider text-blue-600 mb-1">
                  {step.name}
                </div>
                <h3 className="text-base font-bold text-slate-900 tracking-tight leading-snug mb-2">
                  {step.headline}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  {step.description}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-200/60">
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 block mb-2">
                  Deliverables:
                </span>
                <ul className="space-y-1.5 text-[11px] text-slate-700">
                  {step.deliverables.map((item, dIdx) => (
                    <li key={dIdx} className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-600 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProcessSection;
