# Technical Architecture & Deployment Blueprint — SoSparkDesigns

## 1. Core Framework & Rendering Strategy
- **Framework**: Next.js 14.2 (App Router) with React 18 and TypeScript.
- **Rendering Architecture**:
  - **Server Components (Default)**: All marketing pages (`/`, `/about`, `/services`, `/portfolio`, `/faq`) leverage Server Components for zero-bundle HTML rendering, immediate First Contentful Paint (FCP), and optimal SEO crawling.
  - **Client Components (`'use client'`)**: Isolated to interactive islands (mobile navigation drawer, project inquiry form, filter tabs, interactive accordions).
  - **Dynamic Route Handlers**: `/api/contact` handles inquiry submissions securely on the server with runtime schema validation.

---

## 2. API Boundaries & Runtime Validation
- **Input Validation**: All external input at boundaries is strictly validated using **Zod** (`z.object({ name: z.string().min(2), email: z.string().email(), ... })`).
- **Sanitization & Escaping**: Request payloads are stripped of malicious script tags and HTML injection vectors before storage or forwarding.
- **Fail-Safe Response Format**:
  - Success: `{ success: true, message: string, inquiryId?: string }`
  - Error: `{ success: false, error: string, fields?: Record<string, string> }`
- **Spam Mitigation**: Honeypot input fields and request timestamp checks ensure bot resistance without frustrating human users with CAPTCHAs.

---

## 3. Infrastructure & Deployment Evaluation

### A. Vercel Free / Hobby Tier Analysis
- **Terms Review**: Vercel's Hobby plan terms state it is designated for personal, non-commercial use. Running a commercial agency offering paid branding, web development, and client retainers on Vercel Hobby poses compliance risks and possible service suspension.
- **Recommendation**: Do not bind production commercial operations exclusively to Vercel Hobby.

### B. Cloudflare Pages & OpenNext
- **Compatibility**: The user domain is managed via Cloudflare. Cloudflare Pages (via `@cloudflare/next-on-pages` or OpenNext) provides globally distributed edge caching, free SSL, DDoS mitigation, and robust bandwidth allowances.
- **Recommendation**: Prime candidate for production static and edge deployment.

### C. Render Free Tier / Static Services
- **Compatibility**: Render supports static sites and web services with automated GitHub deployment hooks.
- **Recommendation**: Suitable as a fallback container or secondary host.

---

## 4. Directory & Code Organization
```
sosparkdesign-nextjs/
├── docs/                      # Architectural blueprints, briefs, and status logs
├── public/                    # Static vector marks, robots.txt, sitemaps
│   └── assets/
│       ├── logo-dark.svg      # Primary dark logo
│       └── logo-white.svg     # Contrast white logo
├── src/
│   ├── app/                   # Next.js App Router routes
│   │   ├── layout.tsx         # Global root layout with typography and metadata
│   │   ├── page.tsx           # Rebuilt agency homepage
│   │   ├── loading.tsx        # Global fallback skeleton
│   │   ├── error.tsx          # Resilient error boundary
│   │   ├── not-found.tsx      # Branded 404 recovery
│   │   ├── contact/           # Validated inquiry flow
│   │   ├── services/          # Service catalog
│   │   ├── portfolio/         # Showcase and case studies
│   │   ├── about/             # Agency mission and story
│   │   └── api/               # Serverless route handlers
│   ├── components/            # Reusable UI components
│   │   ├── ui/                # Core primitives (Button, Card, Input)
│   │   ├── Navbar.tsx         # Responsive accessible header
│   │   ├── Footer.tsx         # Universal footer
│   │   └── VenturesSection.tsx# Dedicated showcase for Subz Empire & SparkForge
│   ├── lib/                   # Utilities, validations, and content models
│   │   ├── validations.ts     # Zod schemas for forms and API requests
│   │   └── siteData.ts        # Truthful content models and venture details
│   └── styles/
│       └── globals.css        # Tailwind directives + scoped design tokens
├── tailwind.config.js         # Design token mapping
├── postcss.config.js          # PostCSS processing
├── tsconfig.json              # Strict TypeScript configuration
└── vitest.config.ts           # Unit and integration test runner
```
