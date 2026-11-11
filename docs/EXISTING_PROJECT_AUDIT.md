# Existing Project Audit — SoSparkDesigns Next.js

## 1. Project Origins & Current State
The project `sosparkdesign-nextjs` is an existing Next.js 14 (App Router + TypeScript) codebase. According to repository commit history and `README.md`, it was originally migrated from an Express & vanilla HTML site into Next.js 14.2.

- **Framework**: Next.js 14.2.35 (React 18.3.1, React DOM 18.3.1)
- **Language**: TypeScript 5.6.3 (`tsconfig.json` with `@/*` path mapping)
- **Version Control**: Git was uninitialized at start. An initial Git repository was initialized and a baseline commit (`4beacfb`) was recorded to preserve 100% of existing work prior to edits.
- **Styling Architecture**: A massive monolithic CSS stylesheet (`src/styles/globals.css`, 2,286 lines, ~71 KB) with raw class definitions and custom properties. Tailwind CSS was listed in `IDEA.md` as required but was not actually installed in `package.json` nor configured with PostCSS.
- **Backend / Database**: MongoDB connection utility (`src/lib/mongodb.ts`) and Mongoose models (`src/lib/models/index.ts`) for Portfolio, Services, Team, Testimonials, FAQ, Offers, Contact Messages, Admin RBAC, Site Settings, Analytics, and Error Logs.

## 2. Capability Matrix

| Feature / Domain | Status | Observations & Technical Details |
|---|---|---|
| **Next.js App Router** | **Working** | App Router compiles with Next.js 14.2.35. Generates 34 static and dynamic routes. |
| **Git Version Control** | **Working** | Newly initialized, baseline snapshot committed, `.gitignore` protects secrets/cache. |
| **Tailwind CSS Token System** | **Working** | Installed (`tailwindcss@3.4.17`, `postcss`, `autoprefixer`). Configured in `tailwind.config.js`. |
| **Linting & Code Quality** | **Working** | Installed `eslint@8.57.1`, `eslint-config-next@14.2.15`, `.eslintrc.json`. Real unescaped entity bugs detected and queued for fix. |
| **Unit & Integration Testing** | **Working** | Installed `vitest@1.6.1` and `@vitejs/plugin-react`. Configured via `vitest.config.ts`. |
| **Brand Color Compliance** | **Needs redesign** | Existing code contained forbidden neon-lime/chartreuse tokens (`--neon-lime: #bef264`) from template references. Must be replaced with pure royal blue and slate neutrals. |
| **Parent Company Ventures** | **Needs redesign** | Subz Empire (`subzempire.com`) and SparkForge (`sparkfroge.pro.bd`) were absent from the primary homepage hero and navigation structure. |
| **Honest Content & Claims** | **Needs redesign** | Existing homepage rendered fabricated big-tech client logos (Google, Stripe, Airbnb) and synthetic reviews. Must be restructured with authentic agency positioning. |
| **Contact / Inquiry Journey** | **Working** | `/contact` connects to `/api/contact` with form state, validation, and loading indicators. |
| **Navigation & Header** | **Working** | Responsive floating navbar in `src/components/Navbar.tsx` with mobile drawer and active route indicator. |
| **Footer & Direct Contact** | **Working** | Comprehensive footer with quick links, legal links, admin access point, and direct contact details. |
| **SEO & Sitemap** | **Working** | `src/app/sitemap.ts` generates `/sitemap.xml`, baseline metadata defined in `layout.tsx`. |
| **Error Handling & 404** | **Working** | `src/app/not-found.tsx` exists; custom `error.tsx` and `loading.tsx` needed for robust route boundaries. |
| **Admin Panel & RBAC** | **Unverified / Heavy** | Admin login at `/admin` and dashboard at `/admin/dashboard`. Depends on live MongoDB connection. Excluded from initial customer-facing release milestone. |
| **3D Three.js Visuals** | **Existing** | Three.js (`three: 0.186.0`) components (`HeroCanvas.tsx`, `HeroScene.tsx`). Heavy First Load JS (160 KB). Needs optimization for low-end mobile devices. |

## 3. Existing Assets & Public Files
- `public/assets/logo-dark.svg`: Official dark vector mark for light backgrounds.
- `public/assets/logo-white.svg`: Official light vector mark for dark backgrounds.
- `public/assets/loader-mark.svg`: Compact geometric loader SVG.
- `public/robots.txt`: Disallows `/admin` and references `/sitemap.xml`.

## 4. Key Risks & Action Items
1. **Remove Neon Lime**: Eliminate all instances of `--neon-lime` and green accents across CSS and JSX to conform with strict brand guidelines.
2. **Eliminate Fabricated Proof**: Remove mock corporate logos (Google, Airbnb, Coinbase) and fake founder quotes; replace with authentic positioning, service guarantees, and venture showcases (Subz Empire & SparkForge).
3. **Establish Design Tokens**: Leverage Tailwind utility classes mapped directly to CSS variables for maintainable styling.
4. **Resilient Boundaries**: Add `loading.tsx` and `error.tsx` to handle route transitions gracefully without blank screens.
5. **Lint & Build Cleanliness**: Fix all ESLint warnings and ensure clean `npm run lint` and `npm run build` exits.
