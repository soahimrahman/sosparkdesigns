# Milestone 4: Secondary Pages & Production Readiness Implementation Plan
**Project:** SoSparkDesigns (2026–2027 Rebuild)  
**Author:** Lead Full-Stack Architect  
**Status:** Approved for Implementation  

---

## 1. Executive Summary

With the successful completion and verification of the animated **Luminous SoSpark** homepage and core inquiry infrastructure (Milestone 3.5), Milestone 4 focuses on bringing the secondary pages into full visual and architectural alignment with the new light-only design system, authentic content standards, and deployment requirements.

---

## 2. Work Breakdown Structure

### Phase 4.2 — Services Page Re-architecture (`src/app/services/page.tsx`)
- **Objective**: Replace legacy inline CSS and dark variables with the clean, light-only design system matching homepage service definitions.
- **Tasks**:
  1. Synchronize the 6 core disciplines with exact anchor IDs (`#brand-identity`, `#web-design`, `#web-dev`, `#graphic-design`, `#video-editing`, `#page-management`).
  2. Implement an interactive pricing and scope calculator or breakdown grid.
  3. Include deliverable itemizations, timeline expectations, and direct inquiry deep-links.
  4. Ensure full WCAG 2.1 AA/AAA contrast and responsive reflow down to 320px.

### Phase 4.3 — Authentic Portfolio Showcase (`src/app/portfolio/page.tsx`)
- **Objective**: Restructure the portfolio archive to prioritize authentic proprietary platforms and clearly label conceptual work.
- **Tasks**:
  1. Highlight **SparkForge Engine** and **Subz Empire** as featured platforms with live destination links and deep-dive technical specs.
  2. Reclassify exploratory seed projects ("Nova", "Pulse", "Aethel") transparently as "Studio Explorations & Concepts" to strictly obey the anti-fabrication mandate.
  3. Implement responsive category filtering (All, Platforms, Branding, Web Design, Next.js Apps, Graphic Design).
  4. Add interactive modal or expandable drawer for case study exploration.

### Phase 4.4 — Editorial About & Leadership Page (`src/app/about/page.tsx`)
- **Objective**: Purge all legacy dark cards and replace with an editorial studio monograph.
- **Tasks**:
  1. Feature authentic studio leadership: **Soahim Rahman Tasin** (Founder & Creative Director).
  2. Document the factual 2021–2027 agency timeline (Inception in 2021, venture expansions, Next.js focus in 2024–2026).
  3. Detail core operating principles: craftsmanship, direct leadership involvement, uncompromising performance, and zero dark-patterns.
  4. Integrate light-theme visual layout with high-contrast slate cards and blue accents.

### Phase 4.5 — Knowledge Base & FAQ Page (`src/app/faq/page.tsx`)
- **Objective**: Provide a transparent, interactive knowledge base for prospective clients.
- **Tasks**:
  1. Rebuild accordion component with accessible keyboard navigation (Enter/Space toggles, ARIA expanded state).
  2. Categorize queries into General, Engagement Process, Technical Next.js Architecture, and Billing.
  3. Ensure seamless light-mode styling with subtle hover highlights.

### Phase 4.6 — Contact Page Polish (`src/app/contact/page.tsx`)
- **Objective**: Perfect the inquiry funnel on mobile and desktop.
- **Tasks**:
  1. Ensure all 6 disciplines match the updated taxonomy in the service dropdown.
  2. Validate real-time field error clearance upon user keystroke.
  3. Maintain honeypot bot trap and structured reference confirmation.

### Phase 4.7 — Technical SEO, Accessibility & Production Deployment
- **Objective**: Validate performance, metadata, and hosting compatibility.
- **Tasks**:
  1. Add Open Graph images and metadata configurations across all secondary routes.
  2. Generate dynamic `sitemap.xml` and `robots.txt` conforming to the new route structure.
  3. Run keyboard navigation audit across all pages.
  4. Validate Cloudflare Pages edge build adapter compatibility and document decoupling of MongoDB API if needed.

---

## 3. Quality Gates for Milestone 4

Every step of Milestone 4 must satisfy the following criteria:
1. `npx tsc --noEmit` exits with `0` (Zero TypeScript errors).
2. `npm run lint` exits with `0` (Zero ESLint warnings or errors).
3. `npm test` runs cleanly and all unit tests pass.
4. `npm run build` succeeds with all routes pre-rendered or properly dynamic.
5. Strict adherence to **Light Theme Only** (`#FFFFFF` / `#F8FAFC` backgrounds, `#0069EA` official blue, `#000000`/`#09090B` typography).
6. Zero fabricated client logos, fake metrics, or invented testimonials.

---

## 4. Execution Schedule

- **Step 1 (Milestone 4.1)**: Audit, baseline reproduction, content inventory, and plan formulation [COMPLETE].
- **Step 2 (Milestone 4.2)**: Services Page Re-architecture.
- **Step 3 (Milestone 4.3)**: Portfolio & Case Studies Rebuild.
- **Step 4 (Milestone 4.4 & 4.5)**: About & FAQ Pages Rebuild.
- **Step 5 (Milestone 4.6 & 4.7)**: Contact Polish, Cross-device QA, and Cloudflare Staging.
