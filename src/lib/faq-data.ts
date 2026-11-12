export interface FaqItem {
  id: string;
  category: 'General & Studio' | 'Services & Scope' | 'Process & Workflow' | 'Design & Engineering' | 'Pricing & Terms' | 'Proprietary Ventures';
  question: string;
  answer: string;
  keywords?: string[];
  referenceLink?: {
    label: string;
    href: string;
  };
}

export const FAQ_CATEGORIES = [
  'All Questions',
  'General & Studio',
  'Services & Scope',
  'Process & Workflow',
  'Design & Engineering',
  'Pricing & Terms',
  'Proprietary Ventures',
] as const;

export type FaqCategory = (typeof FAQ_CATEGORIES)[number];

export const FAQ_ITEMS: FaqItem[] = [
  // ── General & Studio ──
  {
    id: 'studio-identity',
    category: 'General & Studio',
    question: 'What is SoSparkDesigns and who leads the studio?',
    answer:
      'SoSparkDesigns is an independent creative technology studio and digital venture lab founded in 2021 by Soahim Rahman Tasin, who serves as Lead Architect & Creative Director. We unite brand identity design, editorial UI/UX systems, and production Next.js engineering under one disciplined practice.',
    keywords: ['founder', 'soahim', 'tasin', 'about', 'leadership', 'agency', 'who'],
    referenceLink: {
      label: 'Read Founder Monograph',
      href: '/about#leadership',
    },
  },
  {
    id: 'studio-difference',
    category: 'General & Studio',
    question: 'How does SoSparkDesigns differ from traditional digital agencies?',
    answer:
      'We operate under a practitioner-led model with zero account-manager layers. Clients collaborate directly with the founder and architect who designs the systems and writes the code. Furthermore, we actively build and operate our own software platforms (SparkForge and Subz Empire), proving our engineering principles under real commercial traffic.',
    keywords: ['agency', 'difference', 'model', 'practitioner', 'direct', 'account manager'],
    referenceLink: {
      label: 'Explore Our Story',
      href: '/about#studio-story',
    },
  },
  {
    id: 'international-clients',
    category: 'General & Studio',
    question: 'Where is the studio based, and do you work with international clients?',
    answer:
      'The studio is headquartered in Bangladesh and operates globally. Over 70% of our engagements are with clients across North America, Europe, the Middle East, and Asia. We manage international engagements through structured asynchronous documentation, Figma prototypes, Loom walk-throughs, and flexible video checkpoints.',
    keywords: ['location', 'remote', 'international', 'timezone', 'global', 'bangladesh'],
  },

  // ── Services & Scope ──
  {
    id: 'core-disciplines',
    category: 'Services & Scope',
    question: 'What core disciplines does SoSparkDesigns engineer for clients?',
    answer:
      'We specialize in six integrated disciplines: (01) Brand Identity & Systems, (02) UI/UX & Web Design, (03) Full-Stack Web Development, (04) Graphic & Marketing Collateral, (05) Video & Motion Graphics, and (06) Page & Growth Management.',
    keywords: ['services', 'disciplines', 'capabilities', 'what we do', 'branding', 'web development'],
    referenceLink: {
      label: 'Explore All 6 Disciplines',
      href: '/services#disciplines',
    },
  },
  {
    id: 'engagement-flexibility',
    category: 'Services & Scope',
    question: 'Can we hire the studio for a single discipline, or do you only take full rebrands?',
    answer:
      'We support both focused sprint engagements and full-scale rebrands. You can engage us for an isolated project—such as a Next.js 14 web application rebuild, a mathematical vector logo suite, or an investor pitch deck—or partner with us across our full-stack service spectrum.',
    keywords: ['single service', 'full rebrand', 'scope', 'sprint', 'flexibility'],
    referenceLink: {
      label: 'View Commercial Models',
      href: '/services#models',
    },
  },
  {
    id: 'brand-identity-scope',
    category: 'Services & Scope',
    question: 'What is included in a Brand Identity & Systems deliverable?',
    answer:
      'Our brand systems include mathematical vector logo suites (SVG, EPS, PDF), complete brand guideline manuals, modular typographic scales, high-contrast color matrices optimized for digital legibility, business stationery, and social launch collateral.',
    keywords: ['logo', 'brand identity', 'guidelines', 'typography', 'vector', 'svg'],
    referenceLink: {
      label: 'Brand Identity Scope Specs',
      href: '/services#brand-identity',
    },
  },

  // ── Process & Workflow ──
  {
    id: 'methodology-stages',
    category: 'Process & Workflow',
    question: 'What is your 5-stage project execution methodology?',
    answer:
      'Every project follows a proven sequence: (01) Discovery & Audit to understand the commercial bottleneck, (02) Visual Blueprint to establish wireframes and type scales, (03) Design Sprint to produce high-fidelity Figma components, (04) Next.js Engineering to write type-safe production code, and (05) Launch & Scale for empirical QA, lighthouse optimization, and verified deployment.',
    keywords: ['process', 'methodology', 'stages', 'timeline', 'workflow', 'discovery'],
    referenceLink: {
      label: 'Inspect 5-Stage Process',
      href: '/services#process',
    },
  },
  {
    id: 'revisions-feedback',
    category: 'Process & Workflow',
    question: 'How do client feedback and revision cycles work during a project?',
    answer:
      'Revision rounds, feedback milestones, and review checkpoints are agreed directly in each project proposal. Feedback is gathered visually through interactive Figma prototypes and staging links to ensure revisions are actionable and resolved before production code freeze.',
    keywords: ['revisions', 'feedback', 'milestone', 'figma', 'rounds'],
  },
  {
    id: 'project-kickoff',
    category: 'Process & Workflow',
    question: 'How quickly can we initiate a new project engagement?',
    answer:
      'Following your project inquiry, we review requirements and provide an initial scope assessment. Once the proposal and deliverables are agreed upon, project kickoff and sprint dates are scheduled based on studio capacity and mutual agreement.',
    keywords: ['kickoff', 'start', 'onboarding', 'how soon', 'timeline'],
    referenceLink: {
      label: 'Start a Project Inquiry',
      href: '/contact',
    },
  },

  // ── Design & Engineering ──
  {
    id: 'technical-stack',
    category: 'Design & Engineering',
    question: 'What technical stack does SoSparkDesigns use for web development?',
    answer:
      'We build exclusively with modern, edge-ready frameworks: Next.js 14 App Router, strict TypeScript 5, React 18, and Tailwind CSS. For serverless backend logic and data validation, we utilize Zod runtime schemas, Node.js DNS/network primitives, and MongoDB Atlas persistence.',
    keywords: ['stack', 'technologies', 'nextjs', 'typescript', 'tailwind', 'mongodb', 'zod'],
    referenceLink: {
      label: 'Review Technical Stack Matrix',
      href: '/portfolio#capabilities',
    },
  },
  {
    id: 'performance-accessibility',
    category: 'Design & Engineering',
    question: 'How do you guarantee web performance and accessibility?',
    answer:
      'We engineer Next.js Server Components with minimal client-side JavaScript to prioritize fast loading speeds and prevent layout shifts. Accessibility is integrated from the start with high contrast, semantic HTML landmarks, keyboard navigation, visible focus indicators, and full support for reduced-motion preferences.',
    keywords: ['performance', 'lighthouse', 'speed', 'accessibility', 'wcag', 'seo', 'reduced motion'],
  },
  {
    id: 'legacy-integrations',
    category: 'Design & Engineering',
    question: 'Can you work with our existing database, API, or legacy codebase?',
    answer:
      'Yes. During Discovery & Audit, we evaluate existing data schemas, REST/GraphQL APIs, and third-party integrations. We either cleanly decouple legacy backends using Next.js serverless route handlers or architect a zero-downtime migration pipeline to modern infrastructure.',
    keywords: ['legacy', 'database', 'api', 'migration', 'backend', 'integration'],
  },

  // ── Pricing & Terms ──
  {
    id: 'commercial-models',
    category: 'Pricing & Terms',
    question: 'What commercial partnership models does the studio offer?',
    answer:
      'We structure agreements under three transparent frameworks: (1) Fixed-Scope Sprints with guaranteed deliverables and set milestones, (2) Dedicated Studio Retainers providing ongoing design and Next.js capacity billed monthly, and (3) Venture Co-Build Partnerships for strategic software co-founding.',
    keywords: ['pricing', 'models', 'retainer', 'sprint', 'commercial', 'contract'],
    referenceLink: {
      label: 'Compare Partnership Models',
      href: '/services#models',
    },
  },
  {
    id: 'payment-terms',
    category: 'Pricing & Terms',
    question: 'How are project payments structured?',
    answer:
      'Commercial terms, invoicing schedules, and milestone allocations are defined directly in the project agreement based on scope and engagement model. Fixed-scope projects typically utilize structured milestone invoicing tied to verifiable deliverables, while dedicated retainers are billed on agreed monthly cycles.',
    keywords: ['payment', 'deposit', 'terms', 'invoice', 'milestones', '50/50'],
  },
  {
    id: 'ip-ownership',
    category: 'Pricing & Terms',
    question: 'Do we own 100% of the intellectual property and source code?',
    answer:
      'Yes. Upon final invoice settlement, full intellectual property rights, vector design source files (Figma, Illustrator), and the production code repository are transferred directly to you as specified in the project agreement. We do not lock clients into proprietary platforms.',
    keywords: ['ip', 'ownership', 'copyright', 'code', 'repository', 'rights'],
  },

  // ── Proprietary Ventures ──
  {
    id: 'venture-relationship',
    category: 'Proprietary Ventures',
    question: 'What is the relationship between SoSparkDesigns, SparkForge, and Subz Empire?',
    answer:
      'SoSparkDesigns is the parent studio and venture lab that conceives, architects, and operates SparkForge and Subz Empire. Rather than being third-party client projects, these are proprietary digital products built and scaled internally, providing us with direct real-world experience in high-traffic product engineering.',
    keywords: ['ventures', 'sparkforge', 'subz empire', 'parent company', 'ecosystem', 'products'],
    referenceLink: {
      label: 'Inspect Featured Ventures',
      href: '/portfolio#featured-ventures',
    },
  },
  {
    id: 'what-is-sparkforge',
    category: 'Proprietary Ventures',
    question: 'What is SparkForge and what problem does it solve?',
    answer:
      'SparkForge is our high-throughput email verification and deliverability engine operating at https://sparkfroge.pro.bd. It protects sender reputation by verifying email syntax against RFC 5321/5322 specifications, performing live DNS MX record resolution, and inspecting mail exchange socket handshakes without sending invasive test emails.',
    keywords: ['sparkforge', 'email', 'deliverability', 'rfc 5321', 'dns', 'mx'],
    referenceLink: {
      label: 'Read SparkForge Case Study',
      href: '/portfolio/sparkforge',
    },
  },
  {
    id: 'what-is-subz-empire',
    category: 'Proprietary Ventures',
    question: 'What is Subz Empire and how does it function?',
    answer:
      'Subz Empire is our digital creator subscription gateway and software licensing marketplace operating at https://subzempire.com. It streamlines digital asset distribution, multi-tier software licensing, and automated webhook-driven license key fulfillment for digital creators and agencies.',
    keywords: ['subz empire', 'subscriptions', 'licensing', 'marketplace', 'creator'],
    referenceLink: {
      label: 'Read Subz Empire Case Study',
      href: '/portfolio/subz-empire',
    },
  },
];
