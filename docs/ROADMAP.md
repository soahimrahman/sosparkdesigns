# Implementation Roadmap — SoSparkDesigns (2026–2027)

## Milestone 1: Foundations, Tooling & Quality Gates (Current Execution)
- [x] Audit workspace, dependencies, routes, and styles.
- [x] Initialize Git repository, configure `.gitignore`, and record clean baseline commit.
- [x] Configure Tailwind CSS and PostCSS pipeline with royal blue design tokens.
- [x] Set up ESLint (`.eslintrc.json`) and resolve configuration errors.
- [x] Set up Vitest testing suite (`vitest.config.ts`, test scripts in `package.json`).
- [x] Author comprehensive blueprint documentation (`docs/*`).
- [x] Implement reusable UI primitives (`Button`, `Card`, `SectionHeader`, `Badge`).
- [x] Implement route error boundaries (`error.tsx`, `loading.tsx`).
- [x] Purge unapproved neon-lime/green accents from global styles and component classes.
- [x] Build and test initial homepage structure integrating authentic positioning and dedicated ventures section.

## Milestone 2: Authentic Content & Venture Showcase
- [x] Connect Subz Empire (`subzempire.com`) and SparkForge (`sparkfroge.pro.bd`) flagship features on homepage.
- [x] Replace all mock client logos (Google, Airbnb, Coinbase) and fake reviews with authentic agency capability statements.
- [x] Ensure full keyboard accessibility on interactive components (Tab, Enter/Space, Escape closes mobile menu).

## Milestone 3: Verified Client Inquiry & Lead Generation
- [x] Implement Zod schema validation for project inquiries (`src/lib/validations.ts`).
- [x] Connect `/contact` form to `/api/contact` with error and success states, field-specific validation errors, and inquiry reference IDs.
- [x] Implement honeypot bot mitigation in form and API handler.
- [x] Write Vitest unit tests verifying schema validation rejection of invalid emails, short messages, and honeypot handling (6 tests passing).

## Milestone 3.5: Visual Reference Integration & Motion Engineering (Master Prompt #3)
- [x] Unpack and inspect all reference materials (`SoSparkDesigns_Visual_Motion_Reference_Pack.zip`): 3 screenshots, 14 videos, 2 contact sheets, official logo.
- [x] Author comprehensive reference analysis (`docs/REFERENCE_ANALYSIS.md`).
- [x] Author practical homepage motion storyboard (`docs/HOMEPAGE_MOTION_STORYBOARD.md`).
- [x] Establish strict **Light Theme Only** design system with official sampled brand blue (`#0069EA`).
- [x] Implement Signature Hero with kinetic keyword ticker (`We imagine. We design. We build [ Brand Systems ]`).
- [x] Implement Spatial Fanned Deck (`SpatialFannedDeck.tsx`) inspired by Pallet Ross reference.
- [x] Implement Numbered Horizontal Service Rows (`ServicesSection.tsx`) inspired by Cydrix reference.
- [x] Refactor conversion CTA (`ConversionCtaSection.tsx`) to 100% light theme.
- [x] Implement centralized motion tokens (`src/lib/motion-tokens.ts`) and Framer Motion primitives (`Reveal.tsx`, `StaggerGroup.tsx`, `AnimatedHeadline.tsx`).
- [x] Connect `AnimatePresence` and spring transition physics to `KineticHeadlineTicker.tsx`.
- [x] Test and verify mobile responsiveness at 375px and desktop viewports via browser automation and vision analysis.

## Milestone 4: Secondary Pages & Narrative Expansion
- [x] Refactor `/services` with premium Luminous light theme, Cydrix-inspired numbered horizontal overview, deep-dive alternating service breakdowns, 5-stage methodology timeline, transparent engagement models, accessible FAQ accordion, and schema markup (Milestone 4.2).
- [x] Rebuild `/portfolio` with authentic venture showcases (SparkForge, Subz Empire), transparent Studio Concept Study classifications, interactive category filtering, and dedicated case study routes `/portfolio/sparkforge` and `/portfolio/subz-empire` (Milestone 4.3).
- [ ] Update `/about` and `/faq` with factual company background.

## Milestone 5: Performance, SEO & Cloudflare Staging
- [ ] Run cross-browser and mobile responsive audits (320px, 768px, 1024px, 1440px).
- [ ] Verify Lighthouse performance (LCP < 1.8s, CLS < 0.05, FID/INP good).
- [ ] Generate production build and verify Cloudflare Pages deployment readiness.
