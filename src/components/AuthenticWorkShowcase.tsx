import React from 'react';
import Link from 'next/link';
import { ArrowUpRight, ArrowRight, ShieldCheck, Layers, Sparkles, ExternalLink } from 'lucide-react';
import SectionHeader from './ui/SectionHeader';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from './ui/Card';
import { Badge } from './ui/Badge';

export interface AuthenticProject {
  id: string;
  title: string;
  category: string;
  badge: string;
  description: string;
  role: string;
  deliverables: string[];
  externalUrl?: string;
  internalUrl: string;
  icon: React.ReactNode;
}

export const AUTHENTIC_PROJECTS: AuthenticProject[] = [
  {
    id: 'sparkforge',
    title: 'SparkForge Deliverability Engine',
    category: 'Full-Stack Next.js / SaaS Platform',
    badge: 'Proprietary Venture',
    description:
      'A high-throughput email verification engine built with strict RFC 5321 syntax validation, live DNS MX lookup, and SMTP handshake telemetry to protect sender reputation without message delivery.',
    role: 'Lead Next.js Architecture, UI/UX Design & Brand Identity',
    deliverables: ['Next.js App Router', 'RFC 5321 Syntax Validator', 'Direct DNS MX Telemetry', 'API Architecture'],
    externalUrl: 'https://sparkfroge.pro.bd',
    internalUrl: '/portfolio#sparkforge',
    icon: <ShieldCheck className="w-6 h-6 text-blue-600" />,
  },
  {
    id: 'subz-empire',
    title: 'Subz Empire Digital Asset Marketplace',
    category: 'Digital Commerce & Subscription Gateway',
    badge: 'Proprietary Venture',
    description:
      'Curated digital licensing and subscription management platform built to streamline software transactions, asset distribution, and access management for creators and modern agencies.',
    role: 'Product Strategy, UX System & Checkout Architecture',
    deliverables: ['User Flow Mapping', 'Multi-tier Licensing System', 'Responsive UI Kit', 'Conversion Funnel'],
    externalUrl: 'https://subzempire.com',
    internalUrl: '/portfolio#subz-empire',
    icon: <Layers className="w-6 h-6 text-blue-600" />,
  },
  {
    id: 'sospark-design-system',
    title: 'SoSpark Master Design Token System',
    category: 'Agency Identity & Design Engineering',
    badge: 'Studio Architecture',
    description:
      'A bespoke digital agency design system featuring strict WCAG 2.1 AA accessibility contrast, editorial typography hierarchies, Tailwind CSS tokens, and zero-bundle server components.',
    role: 'Brand Architecture, Design Tokens & Component Engineering',
    deliverables: ['Vector Logo Suite', 'Tailwind Token Mapping', 'Accessible Component Library', 'Performance Gates'],
    internalUrl: '/about',
    icon: <Sparkles className="w-6 h-6 text-blue-600" />,
  },
];

export function AuthenticWorkShowcase() {
  return (
    <section
      id="work"
      className="py-20 md:py-28 bg-white relative border-b border-slate-200/80"
      aria-labelledby="work-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 md:mb-20">
          <SectionHeader
            id="work-heading"
            eyebrow="Authentic Portfolio"
            title={
              <>
                Selected Work &amp; <span className="text-blue-600">Built Platforms</span>
              </>
            }
            description="Real platforms, design systems, and digital products engineered by our studio. We build and operate what we show."
            align="left"
            className="mb-0"
          />

          <Link
            href="/portfolio"
            className="mt-6 md:mt-0 inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-700 hover:underline"
          >
            <span>View Full Portfolio Directory</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {AUTHENTIC_PROJECTS.map((project) => (
            <Card
              key={project.id}
              className="flex flex-col justify-between hover:shadow-lg hover:shadow-slate-900/5 hover:-translate-y-1 transition-all duration-300"
            >
              <div>
                <CardHeader>
                  <div className="flex items-center justify-between gap-3 mb-3">
                    <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center">
                      {project.icon}
                    </div>
                    <Badge variant="brand">{project.badge}</Badge>
                  </div>
                  <div className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-1">
                    {project.category}
                  </div>
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                  <div className="text-xs font-medium text-blue-600 mt-2">
                    {project.role}
                  </div>
                </CardHeader>

                <CardContent>
                  <p className="text-sm text-slate-600 leading-relaxed mb-6">
                    {project.description}
                  </p>

                  <div className="space-y-2 pt-4 border-t border-slate-100">
                    <div className="text-xs font-bold uppercase tracking-wider text-slate-500">
                      Core Disciplines:
                    </div>
                    <ul className="grid grid-cols-1 gap-1.5 text-xs text-slate-700">
                      {project.deliverables.map((item, idx) => (
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
                {project.externalUrl ? (
                  <a
                    href={project.externalUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-600 hover:text-blue-700 hover:underline py-2"
                  >
                    <span>Visit Live Platform</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                ) : (
                  <Link
                    href={project.internalUrl}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-600 hover:text-blue-700 hover:underline py-2"
                  >
                    <span>Inspect System</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                )}
                <span className="text-[11px] text-slate-400 font-mono">
                  Verified Case
                </span>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AuthenticWorkShowcase;
