import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { ShieldCheck, FileText, ArrowLeft, ArrowRight } from 'lucide-react';
import Badge from '@/components/ui/Badge';

export const metadata: Metadata = {
  title: 'Terms of Service — SoSpark Design',
  description:
    'Commercial terms, intellectual property ownership, deliverables, and service engagement standards for SoSparkDesigns.',
  alternates: {
    canonical: 'https://sosparkdesigns.com/terms',
  },
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* ── Breadcrumb ── */}
      <div className="pt-28 pb-4 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs font-mono font-semibold text-slate-500 hover:text-blue-600 transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Home</span>
        </Link>
      </div>

      <section className="pt-4 pb-20 md:pb-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div>
            <Badge variant="brand" dot className="mb-4">
              Commercial Agreement
            </Badge>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
              Terms of Service
            </h1>
            <p className="mt-2 text-xs font-mono text-slate-400">
              Effective Date: November 12, 2026 &bull; Directed by Soahim Rahman Tasin
            </p>
          </div>

          <div className="prose prose-slate max-w-none space-y-8 text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
            <div className="p-5 rounded-2xl bg-blue-50/50 border border-blue-200/80 text-xs sm:text-sm text-slate-700 space-y-2">
              <span className="font-bold text-blue-900 flex items-center gap-1.5 font-mono uppercase tracking-wider text-xs">
                <ShieldCheck className="w-4 h-4 text-blue-600" />
                Key Commercial Principle
              </span>
              <p>
                SoSparkDesigns operates with defined scopes and milestone-based deliverables. We guarantee 100% intellectual
                property and production source code transfer to the client upon final invoice settlement.
              </p>
            </div>

            <div className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                1. Engagement &amp; Proposals
              </h2>
              <p>
                All creative and technical services provided by SoSparkDesigns are governed by a formal written project proposal
                or statement of work (SOW). Proposals specify deliverables, milestone schedules, revision rounds, and
                commercial terms agreed upon before project initiation.
              </p>
            </div>

            <div className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                2. Intellectual Property &amp; Ownership
              </h2>
              <p>
                Upon receipt of full payment according to the agreed milestone schedule:
              </p>
              <ul className="list-disc pl-5 space-y-1 text-slate-700 text-xs sm:text-sm">
                <li>
                  <strong>Client Ownership:</strong> You own 100% of final vector design source files (Figma, Illustrator, SVG),
                  brand guidelines, custom typography mappings, and production code repositories created for your project.
                </li>
                <li>
                  <strong>Studio Portfolio Rights:</strong> Unless otherwise agreed under a formal Non-Disclosure Agreement (NDA),
                  SoSparkDesigns reserves the right to display completed project deliverables in its portfolio and case studies.
                </li>
              </ul>
            </div>

            <div className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                3. Revisions &amp; Scope Integrity
              </h2>
              <p>
                Milestones incorporate review checkpoints and feedback cycles as specified in the project agreement. Requests
                falling outside the agreed project scope will be evaluated under an amendment or separate sprint quote to protect
                project timelines and delivery quality.
              </p>
            </div>

            <div className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                4. Client Responsibilities
              </h2>
              <p>
                Timely project delivery requires active client collaboration, including supplying brand assets, timely feedback
                during revision checkpoints, and domain or third-party service credentials required for deployment.
              </p>
            </div>

            <div className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                5. Limitation of Liability
              </h2>
              <p>
                SoSparkDesigns engineers software and brand assets to professional industry standards. The studio shall not be
                liable for indirect, incidental, or consequential damages resulting from third-party hosting outages, DNS propagation
                delays, or client-initiated modifications to production code.
              </p>
            </div>

            <div className="pt-6 border-t border-slate-200 text-xs text-slate-500 font-mono">
              Commercial inquiries: soahimrahman2024@gmail.com &bull; SoSparkDesigns &bull; Dhaka, Bangladesh
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
