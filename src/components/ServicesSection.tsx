import React from 'react';
import Link from 'next/link';
import {
  Palette,
  Layout,
  Code2,
  Sparkles,
  Video,
  Share2,
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
} from 'lucide-react';
import SectionHeader from './ui/SectionHeader';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from './ui/Card';
import Badge from './ui/Badge';

export interface AgencyService {
  number: string;
  id: string;
  title: string;
  icon: React.ReactNode;
  shortDesc: string;
  deliverables: string[];
  startingTier: string;
  link: string;
}

export const AGENCY_SERVICES: AgencyService[] = [
  {
    number: '01',
    id: 'brand-identity',
    title: 'Brand Identity & Systems',
    icon: <Palette className="w-5 h-5 text-blue-600" />,
    shortDesc:
      'Complete visual identity systems from logo to type, color theory to brand architecture—built to endure for decades.',
    deliverables: [
      'Mathematical vector logo suites',
      'Comprehensive brand guidelines',
      'Typography pairings & scales',
      'Color palettes & contrast matrices',
    ],
    startingTier: 'From $1,500',
    link: '/services#brand-identity',
  },
  {
    number: '02',
    id: 'web-design',
    title: 'UI/UX & Web Design',
    icon: <Layout className="w-5 h-5 text-blue-600" />,
    shortDesc:
      'Editorial-precision interfaces. Mobile-first, conversion-focused, and sculpted to convert visitors into loyal advocates.',
    deliverables: [
      'UX research & wireframing',
      'High-fidelity Figma components',
      'Responsive multi-device specs',
      'WCAG 2.1 AA accessibility audit',
    ],
    startingTier: 'From $2,200',
    link: '/services#web-design',
  },
  {
    number: '03',
    id: 'web-dev',
    title: 'Full-Stack Web Development',
    icon: <Code2 className="w-5 h-5 text-blue-600" />,
    shortDesc:
      'Clean, fast, accessible code. We turn great designs into high-performance production Next.js web applications.',
    deliverables: [
      'Next.js 14 App Router architecture',
      'Strict TypeScript implementation',
      'Serverless APIs & database logic',
      'Sub-second Lighthouse performance',
    ],
    startingTier: 'From $2,800',
    link: '/services#web-dev',
  },
  {
    number: '04',
    id: 'graphic-design',
    title: 'Graphic & Marketing Collateral',
    icon: <Sparkles className="w-5 h-5 text-blue-600" />,
    shortDesc:
      'Campaign visuals, print collateral, investor pitch decks, and digital assets crafted to stop the scroll and demand attention.',
    deliverables: [
      'Investor pitch decks & one-pagers',
      'Luxury packaging & print design',
      'Editorial catalogs & brochures',
      'Vector iconography & illustration',
    ],
    startingTier: 'From $900',
    link: '/services#graphic-design',
  },
  {
    number: '05',
    id: 'video-editing',
    title: 'Video & Motion Graphics',
    icon: <Video className="w-5 h-5 text-blue-600" />,
    shortDesc:
      'Commercial brand films, social reels, and product ads edited with cinematic pacing, precision color grading, and kinetic motion.',
    deliverables: [
      'Cinematic brand launch films',
      'Social reels (9:16 & 16:9)',
      'Kinetic typography & 3D motion',
      'Professional sound design & color',
    ],
    startingTier: 'From $1,200',
    link: '/services#video-editing',
  },
  {
    number: '06',
    id: 'page-management',
    title: 'Page & Growth Management',
    icon: <Share2 className="w-5 h-5 text-blue-600" />,
    shortDesc:
      'Your dedicated always-on creative team—delivering consistent, on-brand content across social and web every single week.',
    deliverables: [
      'Monthly editorial content calendars',
      'Bespoke social media graphics',
      'Caption copywriting & scheduling',
      'Monthly engagement & growth reports',
    ],
    startingTier: 'From $800/mo',
    link: '/services#page-management',
  },
];

export function ServicesSection() {
  return (
    <section
      id="services"
      className="py-20 md:py-28 bg-slate-50/60 relative border-b border-slate-200/80"
      aria-labelledby="services-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 md:mb-20">
          <SectionHeader
            id="services-heading"
            eyebrow="Core Disciplines"
            title={
              <>
                Comprehensive Creative &amp; <span className="text-blue-600">Technical Solutions</span>
              </>
            }
            description="Six specialized disciplines executed with editorial rigor. We handle the entire continuum from mathematical logo geometry to full-stack Next.js deployment."
            align="left"
            className="mb-0"
          />

          <Link
            href="/services"
            className="mt-6 md:mt-0 inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-700 hover:underline"
          >
            <span>Explore Scope &amp; Pricing</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="divide-y divide-slate-200/80 border-y border-slate-200/80 bg-white rounded-2xl overflow-hidden shadow-sm">
          {AGENCY_SERVICES.map((s) => (
            <Link
              key={s.id}
              href={s.link}
              className="group p-6 md:p-8 flex flex-col md:flex-row md:items-center justify-between gap-6 hover:bg-blue-50/40 transition-colors duration-200 relative block"
            >
              {/* Left Zone: Index + Icon + Title */}
              <div className="flex items-center gap-4 md:w-1/3">
                <span className="text-xl md:text-2xl font-mono font-extrabold text-slate-400 group-hover:text-blue-600 transition-colors">
                  {s.number}
                </span>
                <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 shrink-0 group-hover:scale-105 transition-transform">
                  {s.icon}
                </div>
                <h3 className="text-lg md:text-xl font-bold text-slate-900 tracking-tight group-hover:text-blue-600 transition-colors">
                  {s.title}
                </h3>
              </div>

              {/* Center Zone: Contextual Summary & Deliverables */}
              <div className="md:w-5/12 space-y-2">
                <p className="text-xs md:text-sm text-slate-600 leading-relaxed font-normal">
                  {s.shortDesc}
                </p>
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {s.deliverables.slice(0, 3).map((item, dIdx) => (
                    <span
                      key={dIdx}
                      className="inline-flex items-center gap-1 text-[11px] text-slate-600 bg-slate-100 px-2 py-0.5 rounded-md"
                    >
                      <span className="w-1 h-1 rounded-full bg-blue-600" />
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              {/* Right Zone: Starting Tier & Circular Action Button */}
              <div className="flex items-center justify-between md:justify-end gap-5 md:w-1/4">
                <span className="text-xs font-mono font-bold text-slate-500">
                  {s.startingTier}
                </span>
                <div className="w-11 h-11 rounded-full bg-blue-50 border border-blue-200 group-hover:bg-blue-600 group-hover:border-blue-600 flex items-center justify-center text-blue-600 group-hover:text-white transition-all shadow-sm">
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;
