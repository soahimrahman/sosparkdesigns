# Sitemap & Navigation Architecture — SoSparkDesigns

## 1. Route Map

### Core Public Routes
- **`/` (Homepage)**: Flagship narrative introducing agency disciplines, parent-company ventures (Subz Empire, SparkForge), process overview, and inquiry call-to-actions.
- **`/about`**: Agency story, director philosophy, design ethos, and commitment to measurable standards.
- **`/services`**: Full breakdown of the 6 core disciplines (Branding, Web Design, Next.js Development, Graphic Design, Video & Motion, Page Management) with scope details and deliverables.
- **`/portfolio`**: Filterable showcase of selected creative projects, design systems, and case studies.
- **`/ventures` (or Homepage Ventures Section)**: Dedicated presentation of SoSparkDesigns' owned digital products:
  - **Subz Empire** (`https://subzempire.com`)
  - **SparkForge** (`https://sparkfroge.pro.bd`)
- **`/contact`**: Interactive project inquiry form with real client-side validation and server-side processing via `/api/contact`.
- **`/reviews`**: Client feedback repository, review submission portal, and satisfaction standards.
- **`/faq`**: Categorized searchable accordion answering questions on timelines, pricing, scope, and technical stacks.
- **`/team`**: Agency leadership and creative disciplines directory.
- **`/privacy` & `/terms`**: Essential privacy policy and terms of service.
- **`/_not-found` (`not-found.tsx`)**: Custom branded 404 recovery page.

### Administrative Routes (Internal)
- **`/admin`**: Master administrator authentication card.
- **`/admin/dashboard`**: Multi-module administrative command suite (messages, content management, analytics).

---

## 2. Navigation Hierarchy

### Primary Floating Navbar
- **Brand Identity**: Logo icon + `SoSpark.` typography leading to `/`.
- **Primary Links**:
  - `Home` (`/`)
  - `About` (`/about`)
  - `Services` (`/services`)
  - `Portfolio` (`/portfolio`)
  - `Ventures` (`/#ventures` or dedicated section)
  - `FAQ` (`/faq`)
- **Primary CTA Button**: `Start a Project →` (`/contact`).
- **Mobile Menu**: Fullscreen drawer with numbered links, keyboard tab trapping, and ARIA attributes.

### Footer Structure
- **Column 1 (Brand)**: Vector logo, agency mission statement, director attribution (Soahim Rahman Tasin).
- **Column 2 (Navigation)**: Home, About, Services, Portfolio, FAQ, Reviews, Contact.
- **Column 3 (Discipline Hub)**: Brand Identity, Web & UI/UX Design, Next.js Engineering, Graphic Collateral, Motion Graphics, Page Management.
- **Column 4 (Ventures & Direct Contact)**:
  - Subz Empire (`https://subzempire.com`)
  - SparkForge (`https://sparkfroge.pro.bd`)
  - Direct inquiry email (`hello@sosparkdesign.com`)
  - Internal Admin Portal (`/admin`)
- **Sub-Footer**: Copyright notice, legal privacy policy, terms of service.

---

## 3. Core User Journeys

### Journey 1: Prospective Client (Lead Generation)
```
Visitor Lands
   ↓
Hero Section (Value proposition + instant trust proof without fake claims)
   ↓
Explores 6 Disciplines or Interactive Showcase
   ↓
Reviews Working Process (Discovery → Design Sprint → Engineering → Launch)
   ↓
Clicks "Start a Project" / "Let's Talk" CTA
   ↓
Fills Inquiry Form (/contact: Name, Email, Service, Budget Tier, Scope)
   ↓
Server validation (/api/contact)
   ↓
Genuine Submission Confirmation with clear next steps & expected turnaround
```

### Journey 2: Venture Partner / Product Discoverer
```
Visitor Lands
   ↓
Discovers "Ventures & Ecosystem" Section
   ↓
Inspects Subz Empire & SparkForge summaries
   ↓
Follows direct verified links to external flagship platforms
```
