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

### B. Cloudflare Pages & Runtime Compatibility
- **Static Pages & Edge Caching**: The user domain is already on Cloudflare. Cloudflare Pages provides edge caching, free SSL, DDoS mitigation, and generous bandwidth.
- **Node.js / Mongoose Compatibility Warning**: Mongoose (`mongoose@8.x`) relies on Node.js TCP socket primitives (`net`, `tls`), which cannot run in standard V8 Cloudflare Workers without Cloudflare Hyperdrive or Node.js compatibility flags (`nodejs_compat`).
- **Recommended Production Architecture**:
  - Deploy frontend assets as a static/edge build on **Cloudflare Pages**.
  - Route dynamic `/api/contact` submissions to a native Node.js container (e.g. Render Web Service or serverless Node) or forward inquiries via HTTP webhooks / Resend SMTP, decoupling edge delivery from heavy persistent MongoDB connections.

### C. Render Free Tier / Static Services
- **Compatibility**: Render supports native Node.js runtimes (full compatibility with Mongoose, bcryptjs, and Next.js server components) as well as free static site hosting.
- **Recommendation**: Deploy backend/API service or full-stack Node container on Render as the primary serverless backend, using Cloudflare DNS and CDN caching in front.

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
