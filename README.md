# SoSpark Design — Full-Stack Next.js 14 Rebuild

The entire project has been rebuilt from Express & vanilla HTML into a unified, modern **Next.js (App Router + TypeScript)** application.

## Quick Start

```bash
# 1. Install dependencies
npm install --legacy-peer-deps

# 2. Run the Next.js development server
npm run dev

# 3. Production build (optional)
npm run build
npm run start
```

Visit:
- Main Website: `http://localhost:3000`
- Admin Portal: `http://localhost:3000/admin`
- Admin Dashboard: `http://localhost:3000/admin/dashboard`

---

## Admin Panel Default Credentials

On initial boot, the master admin is automatically seeded into MongoDB:

```
Username: admin
Password: soaspark2024
```

The login page includes an **"Autofill credentials"** button for fast access.

---

## Architecture & Features

### 1. Unified Next.js App Router Structure (`src/app/`)
- `/`: Home page featuring persistent 3D perspective hero scene, stats counter, services, selected case studies, reviews, and FAQ preview.
- `/about`: Split-panel hero reveal, values cards with visual badges, alternating center-line timeline, and founder quote.
- `/services`: 6 full service offerings with feature breakdowns, deliverables, starting prices, and 5-step process.
- `/portfolio`: Interactive category filtering ("All", "Branding", "Web Design", etc.) and case study detail popup.
- `/team`: Multidisciplinary leadership directory with member roles, biographies, and social links.
- `/reviews`: Client feedback grid with star ratings, badges, and interactive review submission modal.
- `/faq`: Searchable/categorized interactive accordion FAQ.
- `/contact`: Interactive quote and inquiry form connected to `/api/contact`.
- `/admin`: Glassmorphism admin login card with token authentication.
- `/admin/dashboard`: 12-module control dashboard (Overview, Messages, Portfolio, Services, Team, Testimonials, FAQ, Offers, Analytics, Admins RBAC, API Keys, Site Settings).

### 2. Next.js API Route Handlers (`src/app/api/`)
- `/api/health`: Database connectivity check and system telemetry.
- `/api/auth/login`, `/api/auth/me`, `/api/auth/setup`: JWT authentication, bcrypt validation, and bootstrap.
- `/api/admins`: Super admin RBAC management.
- `/api/chat`: Groq & multi-provider AI assistant with automatic key pool rotation, failover, and agency system prompt.
- `/api/contact`: Public inquiry submissions and admin message inbox.
- `/api/portfolio`, `/api/services`, `/api/team`, `/api/testimonials`, `/api/faq`, `/api/offers`, `/api/blog`, `/api/videos`: REST endpoints with admin authentication.
- `/api/analytics`: Server-side visitor analytics logger and dashboard metrics.
- `/api/apikeys`: AES-256-GCM encrypted API key pool management.

### 3. Design System & Interactivity
- **Brand Aesthetic**: Electric blue (`#2563EB`) on brutalist dark canvas with glassmorphism overlays and micro-animations.
- **Ambient Blobs**: Persistent drifting gradient blurred orbs (`<AmbientBlobs />`).
- **Custom Cursor**: Interactive mouse-following lerp dot and ring (`<CustomCursor />`).
- **Floating AI Assistant**: On-demand chat drawer with instant suggestions (`<AiChatWidget />`).
- **Hero 3D Scene**: Mouse-reactive perspective tilt with rotating rings and floating glass plane (`<HeroScene />`).
