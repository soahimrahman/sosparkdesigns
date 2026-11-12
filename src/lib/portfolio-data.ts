export type ProjectClassification = 'venture' | 'studio-system' | 'concept';

export interface PortfolioItem {
  id: string;
  slug: string;
  title: string;
  tagline: string;
  category: 'Digital Products' | 'Web Development' | 'Brand Identity' | 'Graphic Design' | 'Video & Motion';
  classification: ProjectClassification;
  classificationBadge: string;
  shortDescription: string;
  featured: boolean;
  heroMetric: { value: string; label: string };
  year: number;
  clientOrEntity: string;
  deliverables: string[];
  technologies: string[];
  externalUrl?: string;
  internalCaseStudyUrl?: string;
  iconName: 'ShieldCheck' | 'Layers' | 'Sparkles' | 'Layout' | 'Code2' | 'Palette';
}

export const PORTFOLIO_PROJECTS: PortfolioItem[] = [
  // ── Authentic Proprietary Ventures ──
  {
    id: 'sparkforge',
    slug: 'sparkforge',
    title: 'SparkForge Deliverability Engine',
    tagline: 'High-throughput RFC-compliant email verification engine protecting sender reputation.',
    category: 'Digital Products',
    classification: 'venture',
    classificationBadge: 'PROPRIETARY VENTURE',
    shortDescription:
      'High-throughput SaaS platform engineered to clean marketing and transactional lists with strict RFC 5321 syntax validation, live DNS MX lookup, disposable provider detection, and SMTP handshake telemetry without message delivery.',
    featured: true,
    heroMetric: { value: 'RFC 5321', label: 'Syntax Standards' },
    year: 2026,
    clientOrEntity: 'SoSpark Digital Ventures',
    deliverables: [
      'Next.js 14 App Router Architecture',
      'RFC 5321 & RFC 5322 Syntax Engine',
      'Direct DNS MX Handshake Telemetry',
      'Disposable & Catch-All Filtering',
      'Batch Verification REST API',
    ],
    technologies: ['Next.js 14', 'TypeScript 5', 'Tailwind CSS', 'Node.js DNS', 'Zod', 'Vitest'],
    externalUrl: 'https://sparkfroge.pro.bd',
    internalCaseStudyUrl: '/portfolio/sparkforge',
    iconName: 'ShieldCheck',
  },
  {
    id: 'subz-empire',
    slug: 'subz-empire',
    title: 'Subz Empire Creator Marketplace',
    tagline: 'Curated digital licensing, subscription gateway, and automated creative asset marketplace.',
    category: 'Digital Products',
    classification: 'venture',
    classificationBadge: 'PROPRIETARY VENTURE',
    shortDescription:
      'Digital licensing and subscription management platform built to streamline software transactions, asset distribution, and access management for creators and modern creative agencies.',
    featured: true,
    heroMetric: { value: 'Instant', label: 'License Delivery' },
    year: 2025,
    clientOrEntity: 'SoSpark Digital Ventures',
    deliverables: [
      'Product Information Architecture',
      'Multi-tier Digital Licensing System',
      'Conversion-Optimized Checkout Flow',
      'Creator Asset Distribution Engine',
      'Responsive Multi-Device UI Kit',
    ],
    technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Stripe / Commerce Gateway'],
    externalUrl: 'https://subzempire.com',
    internalCaseStudyUrl: '/portfolio/subz-empire',
    iconName: 'Layers',
  },
  {
    id: 'sospark-tokens',
    slug: 'sospark-tokens',
    title: 'SoSpark Master Design Token System',
    tagline: 'Bespoke editorial agency design tokens, mathematical grid layout, and #0069EA identity.',
    category: 'Brand Identity',
    classification: 'studio-system',
    classificationBadge: 'STUDIO ARCHITECTURE',
    shortDescription:
      'A bespoke digital agency design system featuring strict WCAG 2.1 AA/AAA accessibility contrast, editorial typography scales, centralized motion tokens, and zero-bundle Next.js Server Components.',
    featured: true,
    heroMetric: { value: '16.5:1', label: 'Display Contrast' },
    year: 2026,
    clientOrEntity: 'SoSpark Studio Lab',
    deliverables: [
      'Mathematical Vector Logo Suite (SVG)',
      'Tailwind CSS Design Token Mapping',
      'Accessible UI Component Primitives',
      'Centralized Motion Easing Architecture',
    ],
    technologies: ['Figma', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'WCAG 2.1 AA'],
    internalCaseStudyUrl: '/about',
    iconName: 'Sparkles',
  },

  // ── Studio Concept Studies (Transparently Classified) ──
  {
    id: 'nova-identity',
    slug: 'nova-identity',
    title: 'Nova Financial Ecosystem',
    tagline: 'Futuristic brand identity and digital design system for an institutional crypto treasury.',
    category: 'Brand Identity',
    classification: 'concept',
    classificationBadge: 'STUDIO CONCEPT STUDY',
    shortDescription:
      'An exploratory design concept examining how brutalist geometric typography, 3D asset rendering, and high-contrast dark-mode surfaces can elevate institutional trust in sovereign crypto treasury products.',
    featured: false,
    heroMetric: { value: 'Concept', label: 'Visual Exploration' },
    year: 2025,
    clientOrEntity: 'Studio Exploratory Concept',
    deliverables: [
      'Geometric Wordmark & Emblem Architecture',
      '3D Holographic Token Assets',
      'Modular Monospace Type System',
      'Terminal-Inspired Web Prototype',
    ],
    technologies: ['Figma', 'Adobe Illustrator', 'Blender 3D', 'WebGL Shader Prototype'],
    iconName: 'Palette',
  },
  {
    id: 'pulse-app',
    slug: 'pulse-app',
    title: 'Pulse Healthcare Intelligence',
    tagline: 'Medical analytics web interface with real-time patient metric visualizations.',
    category: 'Web Development',
    classification: 'concept',
    classificationBadge: 'STUDIO CONCEPT STUDY',
    shortDescription:
      'A prototype medical telemetry dashboard exploring ergonomic data visualization, low-fatigue light-theme palettes, and strict keyboard navigation for clinical telemetry environments.',
    featured: false,
    heroMetric: { value: 'Prototype', label: 'Interface Architecture' },
    year: 2025,
    clientOrEntity: 'Studio Exploratory Concept',
    deliverables: [
      'Clinical Ergonomics & Wireframe Specs',
      'High-Density Telemetry Charting UI',
      'Keyboard Accessible Data Tables',
      'HIPAA-Compliant UX Workflow Design',
    ],
    technologies: ['Next.js App Router', 'TypeScript', 'Recharts', 'Tailwind CSS'],
    iconName: 'Code2',
  },
  {
    id: 'aethel-luxury',
    slug: 'aethel-luxury',
    title: 'Aethel Botanic Fragrance',
    tagline: 'Minimalist sustainable packaging, custom embossed bottle labels, and print monograph.',
    category: 'Graphic Design',
    classification: 'concept',
    classificationBadge: 'STUDIO CONCEPT STUDY',
    shortDescription:
      'An editorial packaging exploration investigating blind-emboss printing techniques, sustainable unbleached paper stocks, and restrained serif typography for niche sustainable luxury fragrances.',
    featured: false,
    heroMetric: { value: 'Editorial', label: 'Packaging Direction' },
    year: 2024,
    clientOrEntity: 'Studio Exploratory Concept',
    deliverables: [
      'Custom Bottle Label Die-Line Specs',
      'Debossed Packaging Unboxing Experience',
      'Print Monograph & Brand Book',
      'High-Resolution Studio Mockups',
    ],
    technologies: ['Adobe InDesign', 'Adobe Illustrator', 'Photoshop CMYK', '3D Packaging Render'],
    iconName: 'Sparkles',
  },
  {
    id: 'lumina-film',
    slug: 'lumina-film',
    title: 'Lumina Brand Launch Reel',
    tagline: 'Kinetic 3D motion graphics and cinematic launch trailer for next-gen electric mobility.',
    category: 'Video & Motion',
    classification: 'concept',
    classificationBadge: 'STUDIO CONCEPT STUDY',
    shortDescription:
      'A speculative cinematic motion reel examining dynamic camera choreography, kinetic typography reveals, and spatial sound design for electric vehicle product announcements.',
    featured: false,
    heroMetric: { value: '4K Motion', label: 'Speculative Reel' },
    year: 2025,
    clientOrEntity: 'Studio Exploratory Concept',
    deliverables: [
      '3D Camera Animation & Chassis Renders',
      'Kinetic Lower-Thirds & Logo Stings',
      'Spatial Sound Design & Mixing',
      'Multi-Format Cutdowns (16:9 & 9:16)',
    ],
    technologies: ['After Effects', 'Blender', 'Cinema 4D', 'Premiere Pro'],
    iconName: 'Layout',
  },
];

export interface CaseStudyFullContent {
  slug: string;
  title: string;
  tagline?: string;
  subtitle: string;
  category: string;
  classificationBadge: string;
  clientOrOwner: string;
  role: string;
  timeline: string;
  liveUrl: string;
  heroHeadline: string;
  overview: string;
  challenge: string;
  solutionArchitecture: {
    summary: string;
    pillars: {
      title: string;
      desc: string;
      icon: 'ShieldCheck' | 'Code2' | 'Layers' | 'Zap';
    }[];
  };
  technicalHighlights: {
    title: string;
    desc: string;
    tag: string;
  }[];
  deliverables: string[];
  outcomes: string[];
  nextCaseStudy: { title: string; slug: string };
}

export const CASE_STUDIES: Record<string, CaseStudyFullContent> = {
  sparkforge: {
    slug: 'sparkforge',
    title: 'SparkForge Engine',
    subtitle: 'High-Throughput RFC-Compliant Email Deliverability Platform',
    category: 'Full-Stack Next.js SaaS / Infrastructure',
    classificationBadge: 'PROPRIETARY VENTURE',
    clientOrOwner: 'SoSpark Digital Ventures (Owned Platform)',
    role: 'Lead Next.js Architecture, UI/UX Design & Brand Identity',
    timeline: '2025–2026 (Operational & Live)',
    liveUrl: 'https://sparkfroge.pro.bd',
    heroHeadline:
      'Validating email syntax, DNS MX records, and mail exchange handshake telemetry at scale.',
    overview:
      'SparkForge is a proprietary digital platform built and operated by SoSparkDesigns. It addresses the critical challenge of sender reputation degradation caused by hard bounces, spam-traps, and malformed email addresses. Unlike traditional blackbox checkers that risk blacklisting by firing test emails, SparkForge verifies deliverability using non-intrusive DNS MX telemetry, RFC-strict grammar parsing, and server handshake inspection.',
    challenge:
      'Building an email verification engine requires balancing extreme algorithmic precision with low-latency network performance. Traditional regex approaches fail to capture full RFC 5321 and RFC 5322 compliance, while naive SMTP testing can trigger greylisting, IP rate-limits, and spam traps. The system needed an edge-compatible Next.js architecture capable of verifying domain mail exchange records in sub-second intervals while presenting an intuitive, accessible dashboard for non-technical marketers.',
    solutionArchitecture: {
      summary:
        'SoSparkDesigns engineered SparkForge from first principles using Next.js 14 App Router, strict TypeScript, and modular verification pipelines:',
      pillars: [
        {
          title: 'RFC 5321/5322 Syntax Engine',
          desc: 'Grammar-based parser verifying local-part characters, quoted strings, domain labels, and internationalized domain formats without lossy approximations.',
          icon: 'ShieldCheck',
        },
        {
          title: 'Direct DNS MX Telemetry',
          desc: 'High-speed DNS resolution resolving primary and backup mail exchange records with priority scoring and fallback handling.',
          icon: 'Zap',
        },
        {
          title: 'Disposable & Catch-All Heuristics',
          desc: 'Continuously updated database cross-referencing temporary mailbox providers, role accounts (admin@, sales@), and wildcard MX catch-all responses.',
          icon: 'Code2',
        },
        {
          title: 'Type-Safe App Router Architecture',
          desc: 'Server-rendered Next.js dashboard with zero hydration shifts, real-time list progress telemetry, and secure API key authentication.',
          icon: 'Layers',
        },
      ],
    },
    technicalHighlights: [
      {
        title: 'Non-Intrusive Handshake Inspection',
        desc: 'Terminates SMTP sessions immediately after the RCPT TO command response, guaranteeing sender reputation protection without delivering unwanted messages.',
        tag: 'RFC 5321 Mail Exchange Protocol',
      },
      {
        title: 'Server-Side Zod Validation Gates',
        desc: 'Strict runtime validation on all API endpoints with automated honeypot bot trap interception and rate-limiting.',
        tag: 'Zod & Next.js Server Actions',
      },
      {
        title: 'Sub-Second Lighthouse Performance',
        desc: 'Light-theme editorial design system compiled to zero-overhead client bundles, achieving 95+ Lighthouse performance scores.',
        tag: 'Next.js 14 & Tailwind CSS',
      },
    ],
    deliverables: [
      'Complete brand identity, wordmark, and vector emblem',
      'Next.js 14 App Router full-stack web application',
      'Strict TypeScript API endpoints with batch verification support',
      'Responsive, accessible web dashboard (320px to 1440px+)',
      'RFC 5321 / RFC 5322 compliant syntax validation engine',
      'Production deployment on Cloudflare and live edge infrastructure',
    ],
    outcomes: [
      'Fully operational live platform at https://sparkfroge.pro.bd',
      'RFC 5321 compliance with comprehensive MX DNS handshake telemetry',
      'Zero synthetic bot spam reaching production database via active honeypot traps',
      'Proven test coverage with automated unit suites passing in Vitest',
    ],
    nextCaseStudy: {
      title: 'Subz Empire Creator Marketplace',
      slug: 'subz-empire',
    },
  },
  'subz-empire': {
    slug: 'subz-empire',
    title: 'Subz Empire Marketplace',
    tagline: 'Curated Digital Licensing, Subscription Gateway & Asset Platform',
    subtitle: 'Creator Subscription Gateway & Digital Asset Marketplace',
    category: 'Digital Commerce & Ecosystem Platform',
    classificationBadge: 'PROPRIETARY VENTURE',
    clientOrOwner: 'SoSpark Digital Ventures (Owned Platform)',
    role: 'Product Strategy, UX System & Checkout Architecture',
    timeline: '2025–2026 (Operational & Live)',
    liveUrl: 'https://subzempire.com',
    heroHeadline:
      'Streamlining software licensing, subscription management, and automated creative asset distribution.',
    overview:
      'Subz Empire is an online commerce and digital subscription gateway operated by SoSparkDesigns. It bridges the gap between software developers, digital creators, and agencies requiring verified commercial licenses for digital tools and creative assets. The platform provides automated license key fulfillment, subscription management, and multi-currency checkout.',
    challenge:
      'Digital licensing marketplaces frequently suffer from confusing pricing structures, friction-heavy checkout funnels, and delayed license key delivery. The platform required a conversion-focused user experience that communicates trust instantly, handles diverse digital product categories seamlessly, and automates asset delivery within milliseconds of payment confirmation.',
    solutionArchitecture: {
      summary:
        'SoSparkDesigns architected an editorial commerce experience combining responsive checkout flows, structured category taxonomies, and automated license distribution:',
      pillars: [
        {
          title: 'Frictionless Checkout UX',
          desc: 'Streamlined 2-step purchase funnel eliminating extraneous form fields, reducing abandonment, and ensuring transparent pricing.',
          icon: 'Zap',
        },
        {
          title: 'Automated License Fulfillment',
          desc: 'Instant cryptographic token and license key distribution triggered automatically upon payment webhook verification.',
          icon: 'ShieldCheck',
        },
        {
          title: 'Scalable Product Taxonomy',
          desc: 'Structured catalog categorization allowing creators and agencies to filter across software licenses, subscriptions, and creative bundles.',
          icon: 'Layers',
        },
        {
          title: 'High-Trust Editorial Identity',
          desc: 'High-contrast typography, clear deliverable itemizations, and verified customer support protocols built into every view.',
          icon: 'Code2',
        },
      ],
    },
    technicalHighlights: [
      {
        title: 'Instant Webhook-Driven Delivery',
        desc: 'Asynchronous event listeners handle payment settlement and dispatch verified digital license keys instantly via email and user dashboard.',
        tag: 'Webhook Automation',
      },
      {
        title: 'Mobile-First Responsive Checkout',
        desc: 'Touch-optimized interactive inputs with 44px+ tap targets, clear field error states, and zero horizontal viewport overflow.',
        tag: 'Accessible UX / WCAG AA',
      },
      {
        title: 'High-Conversion Architecture',
        desc: 'Editorial design system eliminating distracting template elements and focusing user attention on verified product features and instant delivery.',
        tag: 'Next.js & Design Tokens',
      },
    ],
    deliverables: [
      'End-to-end user journey mapping and checkout wireframes',
      'High-fidelity Figma component library and device specifications',
      'Front-of-house storefront with dynamic product category filtering',
      'Automated license key generation and webhook delivery system',
      'Responsive customer inquiry and order tracking dashboard',
    ],
    outcomes: [
      'Fully operational live marketplace at https://subzempire.com',
      'Automated instant delivery pipeline handling digital asset distribution',
      'Unified brand architecture aligning with parent company SoSparkDesigns',
      'Optimized conversion checkout funnel tested across all device viewports',
    ],
    nextCaseStudy: {
      title: 'SparkForge Deliverability Engine',
      slug: 'sparkforge',
    },
  },
};
