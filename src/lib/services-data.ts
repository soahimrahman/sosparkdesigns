export interface ServiceDiscipline {
  id: string;
  altId?: string;
  number: string;
  title: string;
  eyebrow: string;
  tagline: string;
  shortDesc: string;
  longDesc: string;
  businessProblems: string[];
  deliverables: string[];
  technologies: string[];
  startingTier: string;
  turnaround: string;
  engagementType: string;
  iconName: 'Palette' | 'Layout' | 'Code2' | 'Sparkles' | 'Video' | 'Share2';
  caseStudyRef?: {
    name: string;
    url: string;
    badge: string;
    desc: string;
  };
}

export const SERVICES_DISCIPLINES: ServiceDiscipline[] = [
  {
    number: '01',
    id: 'brand-identity',
    title: 'Brand Identity & Systems',
    eyebrow: 'Visual Architecture',
    tagline: 'Distinctive visual systems and brand strategy that refuse to fade.',
    shortDesc:
      'Complete visual identity systems from logo to type, color theory to brand architecture—built to endure for decades.',
    longDesc:
      'We craft comprehensive brand systems that position your company as an unmistakable market leader. From initial archetype exploration to vector logo architecture, mathematical geometry, typography curation, and bespoke guidelines, we engineer identities that communicate credibility before a single word is read.',
    businessProblems: [
      'Visual inconsistency across marketing touchpoints eroding market trust',
      'Generic or dated logo marks that blend into competitor landscape',
      'Absence of strict brand guidelines causing fragmentation across internal teams',
    ],
    deliverables: [
      'Mathematical vector logo suites (SVG, PDF, EPS)',
      'Comprehensive brand guidelines manual (PDF & Figma)',
      'Editorial typography pairings & modular type scale',
      'Color palette & WCAG 2.1 AA/AAA contrast matrix',
      'Business collateral, stationery & digital social assets',
    ],
    technologies: ['Figma', 'Adobe Illustrator', 'Glyphs', 'Vector Math', 'WCAG Tokens'],
    startingTier: 'From $1,500',
    turnaround: '2–3 weeks',
    engagementType: 'Fixed-Scope Sprint',
    iconName: 'Palette',
    caseStudyRef: {
      name: 'SoSpark Token Architecture',
      url: '/about',
      badge: 'Design System',
      desc: 'Bespoke editorial agency tokens, mathematical grid layout, and official #0069EA identity.',
    },
  },
  {
    number: '02',
    id: 'web-design',
    title: 'UI/UX & Web Design',
    eyebrow: 'Digital Craft',
    tagline: 'Luxury digital experiences with intentional whitespace and micro-animations.',
    shortDesc:
      'Editorial-precision interfaces. Mobile-first, conversion-focused, and sculpted to convert visitors into loyal advocates.',
    longDesc:
      'Design that looks like an editorial monograph and performs like software. Every interaction, hover state, and page transition is sculpted to eliminate friction and convert casual visitors into qualified inquiries. We construct scalable Figma design tokens that translate 1:1 into production code.',
    businessProblems: [
      'High visitor drop-off and bounce rates caused by confusing information architecture',
      'Mobile experiences that feel like broken desktop compromises',
      'Cluttered, template-heavy layouts lacking hierarchy and brand memorability',
    ],
    deliverables: [
      'User journey mapping & information architecture blueprint',
      'Interactive low-fidelity and high-fidelity wireframes',
      'Comprehensive Figma component libraries & autolayout tokens',
      'Responsive multi-device viewport specs (320px to 1440px+)',
      'Micro-interaction choreography & developer handoff specs',
    ],
    technologies: ['Figma', 'FigJam', 'Tokens Studio', 'Framer Motion', 'Tailwind CSS'],
    startingTier: 'From $2,200',
    turnaround: '3–4 weeks',
    engagementType: 'Fixed-Scope Sprint',
    iconName: 'Layout',
  },
  {
    number: '03',
    id: 'web-dev',
    altId: 'web-development',
    title: 'Full-Stack Web Development',
    eyebrow: 'Engineering Precision',
    tagline: 'Ultra-fast Next.js engineering with serverless reliability and dynamic APIs.',
    shortDesc:
      'Clean, fast, accessible code. We turn great designs into high-performance production Next.js web applications.',
    longDesc:
      'We build exclusively with modern frameworks: Next.js 14 App Router, strict TypeScript, and edge-ready serverless architecture. We write resilient server actions, type-safe API handlers with Zod validation, and optimize assets to guarantee sub-second First Contentful Paint and 95+ Lighthouse performance scores.',
    businessProblems: [
      'Bloated WordPress/template sites with slow load times and vulnerable plugins',
      'Fragile codebases causing regression whenever new features are added',
      'Inadequate SEO foundations preventing indexing of high-value landing pages',
    ],
    deliverables: [
      'Next.js 14 App Router full-stack web application',
      'Strict TypeScript implementation with zero unhandled types',
      'Server-side Zod validation & automated honeypot bot mitigation',
      'Database integration (MongoDB, PostgreSQL, or edge key-value)',
      'Sub-second Lighthouse performance & automated CI/CD pipeline',
    ],
    technologies: ['Next.js 14', 'TypeScript 5', 'React 18', 'Tailwind CSS', 'MongoDB', 'Cloudflare', 'Vitest'],
    startingTier: 'From $2,800',
    turnaround: '4–6 weeks',
    engagementType: 'Fixed-Scope or Retainer',
    iconName: 'Code2',
    caseStudyRef: {
      name: 'SparkForge Engine',
      url: 'https://sparkfroge.pro.bd',
      badge: 'Flagship Platform',
      desc: 'RFC-compliant email verification engine with direct MX DNS handshake telemetry.',
    },
  },
  {
    number: '04',
    id: 'graphic-design',
    title: 'Graphic & Marketing Collateral',
    eyebrow: 'Editorial Print & Digital',
    tagline: 'Compelling print, digital, and social collateral tailored for conversion.',
    shortDesc:
      'Campaign visuals, print collateral, investor pitch decks, and digital assets crafted to stop the scroll and demand attention.',
    longDesc:
      'High-impact design collateral across all commercial touchpoints: investor fundraising decks that secure capital, packaging design that commands retail shelf presence, marketing campaign key visuals, billboard artwork, and vector iconography tailored to your brand identity.',
    businessProblems: [
      'Amateur investor decks that fail to articulate commercial value to venture funds',
      'Commoditized packaging design that disappears among retail competitors',
      'Lack of consistent visual assets for omnichannel product launches',
    ],
    deliverables: [
      'Investor pitch decks & one-pagers (Keynote, PDF, Figma)',
      'Physical packaging design & print-ready die-line specifications',
      'Marketing campaign key visuals (9:16, 1:1, 16:9)',
      'Custom vector iconography suites & infographic diagrams',
      'Print production coordination & CMYK color profiling',
    ],
    technologies: ['Adobe Illustrator', 'Adobe Photoshop', 'Adobe InDesign', 'Figma', 'Keynote'],
    startingTier: 'From $900',
    turnaround: '1–2 weeks',
    engagementType: 'Fixed-Scope Sprint',
    iconName: 'Sparkles',
  },
  {
    number: '05',
    id: 'video-editing',
    title: 'Video & Motion Graphics',
    eyebrow: 'Cinematic Storytelling',
    tagline: 'Cinematic brand films, commercial reels, and 3D kinetic motion.',
    shortDesc:
      'Commercial brand films, social reels, and product ads edited with cinematic pacing, precision color grading, and kinetic motion.',
    longDesc:
      'Captivate audiences in the first three seconds. We direct, edit, color-grade, and animate broadcast-ready brand films, product launch trailers, kinetic typography bumpers, and conversion ads. Every cut, audio cue, and motion easing curve is calculated for maximum retention.',
    businessProblems: [
      'Static social posts with plummeting organic reach and low user engagement',
      'Uninspired product demonstrations that fail to communicate software craft',
      'Lack of polished video collateral for marketing ad campaigns',
    ],
    deliverables: [
      'Cinematic brand launch films (4K master delivery)',
      'High-conversion short-form video ads (9:16 & 1:1)',
      'Kinetic typography intros, logo stings & lower-thirds',
      'Custom spatial sound design & commercial audio mixing',
      'Professional color grading & dynamic aspect ratio cutdowns',
    ],
    technologies: ['After Effects', 'Premiere Pro', 'DaVinci Resolve', 'Blender', 'Logic Pro'],
    startingTier: 'From $1,200',
    turnaround: '1–3 weeks',
    engagementType: 'Fixed-Scope Sprint',
    iconName: 'Video',
  },
  {
    number: '06',
    id: 'page-management',
    title: 'Page & Growth Management',
    eyebrow: 'Always-On Creative Retainer',
    tagline: 'Full-service social media curation, content scheduling, and community scaling.',
    shortDesc:
      'Your dedicated always-on creative team—delivering consistent, on-brand content across social and web every single week.',
    longDesc:
      'Hands-off peace of mind for founders and marketing directors. We manage your social media channels and digital publishing schedule, craft weekly editorial calendars, analyze audience metrics, and elevate your daily digital presence with custom-designed visual assets.',
    businessProblems: [
      'Inconsistent posting schedules caused by internal resource bottlenecks',
      'Diluted brand voice resulting from ad-hoc, rushed content creation',
      'Zero structured performance feedback loop to optimize what converts',
    ],
    deliverables: [
      'Monthly editorial content calendar & strategic narrative planning',
      '16–24 bespoke high-resolution visual assets per month',
      'Platform-specific copywriting, hashtag curation & scheduled publishing',
      'Community moderation & inquiry notification routing',
      'Comprehensive monthly growth, reach & engagement telemetry report',
    ],
    technologies: ['Buffer', 'Meta Business Suite', 'Figma', 'Notion', 'Google Analytics 4'],
    startingTier: 'From $800/mo',
    turnaround: 'Ongoing Retainer',
    engagementType: 'Monthly Retainer',
    iconName: 'Share2',
    caseStudyRef: {
      name: 'Subz Empire Ecosystem',
      url: 'https://subzempire.com',
      badge: 'Commerce Venture',
      desc: 'Digital subscription gateway, creator licensing, and automated asset delivery platform.',
    },
  },
];

export interface ProcessStage {
  step: string;
  title: string;
  eyebrow: string;
  summary: string;
  clientContributes: string[];
  agencyDelivers: string[];
  nextMilestone: string;
}

export const SERVICES_PROCESS_STAGES: ProcessStage[] = [
  {
    step: '01',
    title: 'Discovery & Audit',
    eyebrow: 'Clarity First',
    summary:
      'We deconstruct your business model, target customer profiles, competitive positioning, and technical constraints before writing a single line of code or designing a single asset.',
    clientContributes: [
      'Existing brand assets & codebase access',
      'Target customer personas & commercial goals',
      'Technical requirements & deployment constraints',
    ],
    agencyDelivers: [
      'Competitive landscape analysis & audit report',
      'Clear project brief with defined scope boundaries',
      'Milestone timeline & formal technical specification',
    ],
    nextMilestone: 'Visual Blueprint & Information Architecture',
  },
  {
    step: '02',
    title: 'Visual Blueprint',
    eyebrow: 'Design Architecture',
    summary:
      'We establish the foundational aesthetic and structural blueprint through moodboards, typography pairing, token scales, and low-fidelity user flow wireframes.',
    clientContributes: [
      'Feedback on aesthetic directions & visual moodboards',
      'Priority content outlines & key user journey approvals',
    ],
    agencyDelivers: [
      'Curated typography scales & contrast matrices',
      'Wireframe architecture for all priority page templates',
      'Component token system definition in Figma',
    ],
    nextMilestone: 'High-Fidelity Design Sprint',
  },
  {
    step: '03',
    title: 'Design Sprint',
    eyebrow: 'Pixel Precision',
    summary:
      'We produce production-grade Figma components, responsive multi-device specifications, micro-animations, and interactive prototypes for desktop, tablet, and mobile viewports.',
    clientContributes: [
      'Structured feedback during dedicated revision checkpoints',
      'Finalized copy, photography, and legal disclaimers',
    ],
    agencyDelivers: [
      '100% complete Figma UI kit and responsive screens',
      'Interactive prototype demonstrating hover states & flow',
      'Developer handoff tokens and WCAG 2.1 AA audit report',
    ],
    nextMilestone: 'Next.js Engineering & Build',
  },
  {
    step: '04',
    title: 'Next.js Engineering',
    eyebrow: 'Strict Implementation',
    summary:
      'We build clean, accessible, type-safe Next.js App Router code. Every component is tested, Zod-validated, and optimized for sub-second page loads and zero hydration shifts.',
    clientContributes: [
      'Domain DNS access & third-party service credentials',
      'Staging environment testing & feedback on real devices',
    ],
    agencyDelivers: [
      'Full TypeScript codebase with zero compiler warnings',
      'Sub-second Lighthouse scores and verified accessibility',
      'End-to-end form validation & database persistence logic',
    ],
    nextMilestone: 'Empirical QA & Production Launch',
  },
  {
    step: '05',
    title: 'Launch & Scale',
    eyebrow: 'Verified Handover',
    summary:
      'We execute comprehensive cross-browser validation, verify production DNS, establish SSL, submit sitemaps to search engines, and provide full documentation and source code.',
    clientContributes: [
      'Final sign-off on production staging URL',
      'Launch date alignment and go-live announcement coordination',
    ],
    agencyDelivers: [
      'Zero-downtime production deployment (Cloudflare/Vercel)',
      '100% IP & source code ownership transfer',
      'Comprehensive maintenance guide & post-launch warranty',
    ],
    nextMilestone: 'Ongoing Growth or Dedicated Retainer',
  },
];

export interface EngagementTier {
  id: string;
  name: string;
  badge: string;
  description: string;
  idealFor: string;
  pricingModel: string;
  terms: string;
  deliverablesSummary: string[];
  isPopular?: boolean;
}

export const ENGAGEMENT_MODELS: EngagementTier[] = [
  {
    id: 'fixed-sprint',
    name: 'Fixed-Scope Sprint',
    badge: 'Defined Outcome',
    description:
      'Structured milestone delivery with clear scope boundaries, guaranteed timeline, and fixed transparent quotation.',
    idealFor: 'Brand identity systems, new company website rebuilds, or single-feature web applications.',
    pricingModel: 'Fixed Project Quotation',
    terms: '50% deposit / 50% upon verified production handover',
    deliverablesSummary: [
      'Fixed deliverables with zero surprise invoice additions',
      'Dedicated 2–4 week turnaround with structured checkpoints',
      'Two full rounds of iterative revision included',
      'Complete IP and source code ownership on completion',
    ],
  },
  {
    id: 'monthly-retainer',
    name: 'Dedicated Studio Retainer',
    badge: 'Most Popular',
    description:
      'Your embedded senior creative & Next.js engineering team—delivering ongoing design sprints and code updates weekly.',
    idealFor: 'Funded startups, growing businesses, and digital brands scaling their online products.',
    pricingModel: 'Monthly Retainer (From $800/mo)',
    terms: 'Billed monthly with 30-day flexible cancellation notice',
    deliverablesSummary: [
      'Dedicated weekly design & engineering capacity',
      'Direct async communication via private Slack/WhatsApp',
      'Continuous deployment, feature updates & performance tuning',
      'Bi-weekly roadmap planning & strategy consultations',
    ],
    isPopular: true,
  },
  {
    id: 'venture-partner',
    name: 'Venture Co-Build Partnership',
    badge: 'Strategic Lab',
    description:
      'End-to-end technical and design co-founding for ambitious digital products, creator ecosystems, and SaaS platforms.',
    idealFor: 'Founders building proprietary software, creator commerce, and SaaS platforms (e.g. SparkForge & Subz Empire).',
    pricingModel: 'Hybrid Retainer + Equity / Performance',
    terms: 'Long-term commercial agreement subject to leadership review',
    deliverablesSummary: [
      'Full technical architecture, database modeling & frontend',
      'Strategic brand positioning, naming & visual identity',
      'Infrastructure setup, security hardening & scale management',
      'Direct partnership with Founder & Architect Soahim Rahman Tasin',
    ],
  },
];

export interface ServiceFaqItem {
  question: string;
  answer: string;
  category: 'Engagement' | 'Process' | 'Technical' | 'Pricing';
}

export const SERVICES_FAQS: ServiceFaqItem[] = [
  {
    category: 'Engagement',
    question: 'How quickly can we kick off a new project?',
    answer:
      'Following your initial inquiry via our contact form, we reply within 24–48 business hours with an initial scope assessment. Once the project brief and scope contract are agreed and the kickoff deposit is processed, work begins within 3 to 5 business days.',
  },
  {
    category: 'Process',
    question: 'How do revisions and client feedback work?',
    answer:
      'Every milestone includes two dedicated rounds of detailed revisions. We collaborate via interactive Figma prototypes and live staging links so feedback is precise, visual, and fast. This ensures complete clarity and eliminates miscommunication before production code is written.',
  },
  {
    category: 'Technical',
    question: 'What technologies do you use for web development?',
    answer:
      'We specialize in modern, high-performance architecture: Next.js 14 App Router, TypeScript, React 18, and Tailwind CSS. For backend logic, we build type-safe serverless APIs with Zod validation, and integrate with MongoDB, PostgreSQL, or edge key-value stores. This guarantees sub-second load times, excellent SEO, and rock-solid maintainability.',
  },
  {
    category: 'Engagement',
    question: 'Do we own the full intellectual property and source code?',
    answer:
      'Yes, 100%. Upon completion of the project and settlement of the final invoice, complete intellectual property rights, vector design source files (Figma, Illustrator), and the production code repository are transferred directly to you. We do not lock clients into proprietary hosting or closed platforms.',
  },
  {
    category: 'Pricing',
    question: 'How are project payments structured?',
    answer:
      'For Fixed-Scope Sprints, engagements follow a transparent 50/50 model: 50% kickoff deposit to secure dedicated studio scheduling, and 50% upon final milestone approval before production domain launch. Dedicated Retainers are billed at the beginning of each monthly cycle with flexible terms.',
  },
  {
    category: 'Technical',
    question: 'Can you work with our existing database, API, or legacy codebase?',
    answer:
      'Yes. During Discovery & Audit (Step 01), we review your existing data schemas, API contracts, and infrastructure. We can either cleanly decouple legacy backends via Next.js API routes or engineer a modern migration path without downtime.',
  },
  {
    category: 'Process',
    question: 'Do you work with international clients across different time zones?',
    answer:
      'Yes. Over 70% of our clients operate across North America, Europe, the Middle East, and Asia. We structure our communication around clear asynchronous documentation, Figma comments, Loom walk-throughs, and flexible video checkpoints to keep momentum moving across all time zones.',
  },
];
