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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {AGENCY_SERVICES.map((s) => (
            <Card
              key={s.id}
              className="flex flex-col justify-between hover:shadow-lg hover:shadow-slate-900/5 hover:-translate-y-1 transition-all duration-300"
            >
              <div>
                <CardHeader>
                  <div className="flex items-center justify-between gap-3 mb-3">
                    <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center">
                      {s.icon}
                    </div>
                    <span className="text-xs font-mono font-bold text-slate-400">
                      {s.number}
                    </span>
                  </div>
                  <CardTitle className="text-xl">{s.title}</CardTitle>
                  <CardDescription className="text-sm mt-2">
                    {s.shortDesc}
                  </CardDescription>
                </CardHeader>

                <CardContent>
                  <div className="space-y-2 pt-3 border-t border-slate-100">
                    <div className="text-[11px] font-bold uppercase tracking-wider text-slate-500">
                      Included Deliverables:
                    </div>
                    <ul className="space-y-1.5 text-xs text-slate-700">
                      {s.deliverables.map((item, idx) => (
                        <li key={idx} className="flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-blue-600 shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </div>

              <CardFooter>
                <span className="text-xs font-mono font-semibold text-slate-600">
                  {s.startingTier}
                </span>
                <Link
                  href={s.link}
                  className="inline-flex items-center gap-1 text-xs font-semibold text-blue-600 hover:text-blue-700 hover:underline"
                >
                  <span>Discipline Scope</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;
