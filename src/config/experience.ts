export interface ExperienceItem {
  company: string;
  location: string;
  title: string;
  duration: string;
  tagline?: string;
  achievements: {
    title: string;
    description: string;
  }[];
}

export const experience: ExperienceItem[] = [
  {
    company: 'Alison.AI',
    location: 'Israel',
    title: 'Senior Software Engineer, Platform & AI',
    tagline: 'AI ad-tech startup · Drum "Technical Innovation of the Year" · Senior-most platform hire',
    duration: '2023 - 2025',
    achievements: [
      {
        title: 'Built the RAG and agentic AI system from scratch',
        description: '- designed the full pipeline end-to-end: embedding, vector search, chunking, and autonomous LLM agents that extract creative insights from <strong>10K+ ad creatives/week</strong> across Meta, Google, and TikTok. Saved roughly 6 hours of manual work per client per day. Made all build-vs-buy calls on the AI stack.',
      },
      {
        title: 'Scaled client onboarding from 5 to 50+/month',
        description: '- wrote an automated ingestion pipeline (TypeScript, Node.js) that connects <strong>10+ ad-platform APIs</strong> with auto-discovered schemas. Also owned the core React/TypeScript web app end-to-end.',
      },
      {
        title: 'Infrastructure and security',
        description: '- moved everything to <strong>Terraform</strong> on GCP (Cloud Run, Cloud SQL, Pub/Sub), tightened CI/CD with GitHub Actions and SAST, fixed <strong>100+ CVEs</strong>, cut cloud spend by 30%, and helped get us through <strong>SOC 2</strong>.',
      },
      {
        title: 'Technical leadership',
        description: '- partnered with the CTO on roadmap and architecture. Set up code review and testing standards, mentored junior engineers, and pushed adoption of TypeScript, structured logging, and observability across the org.',
      },
    ],
  },
  {
    company: 'Datadog',
    location: 'Worldwide',
    title: 'Senior Software Engineer, Integration Lead',
    tagline: 'Joined via Seekret acquisition to ship the integrated product as Universal Service Monitoring',
    duration: '2022 - 2023',
    achievements: [
      {
        title: 'Shipped the post-acquisition integration to GA in under 3 months',
        description: '- took <strong>12+ microservices</strong> from the acquired stack and integrated them into Datadog\'s platform (Kubernetes, Kafka pipelines, eBPF). Made the keep-vs-rewrite calls, re-architected what needed it, and shipped it as <strong>Universal Service Monitoring</strong>.',
      },
      {
        title: 'Made dashboards 50% faster',
        description: '- rebuilt the React/TypeScript visualization layer with virtualized rendering and smart prefetching for <strong>millions of data points/day</strong>. The performance patterns we defined got adopted across the Dashboard and RUM teams.',
      },
      {
        title: 'Knowledge transfer across 3 orgs',
        description: '- ran sessions for 50+ engineers on how the acquired platform worked - eBPF internals, API design, the works. Wrote onboarding docs that <strong>cut ramp-up time from weeks to days</strong>. Owned on-call for the integrated services.',
      },
    ],
  },
  {
    company: 'Seekret (Acquired by Datadog)',
    location: 'Israel',
    title: 'Senior Full Stack Engineer',
    tagline: 'eBPF-powered API observability startup · ~20 people · Acquired by Datadog in 2022',
    duration: '2021 - 2022',
    achievements: [
      {
        title: 'Early engineer in a team of fewer than 10',
        description: '- joined a small team building an API observability product. Became the <strong>primary technical contact during Datadog\'s due diligence</strong>, screened 50+ candidates, and helped set the hiring bar as the company scaled.',
      },
      {
        title: 'Reshaped the distributed architecture',
        description: '- inherited the early system and reworked key parts: introduced ClickHouse for analytics alongside PostgreSQL, moved to event-driven microservices, pushed for API-first contracts. Ran <strong>12+ services on Kubernetes</strong> with a polyglot stack — Node.js gateway, Go ingestion, Rust eBPF traffic capture, Python data pipelines.',
      },
      {
        title: 'Lead frontend engineer',
        description: '- built data-dense <strong>React dashboards</strong> (API traffic visualization, dependency graphs, behavioral diffs) that directly helped close enterprise deals. 95% customer satisfaction.',
      },
      {
        title: 'Owned reliability and CI/CD',
        description: '- ran the full infra stack: Kubernetes deployments, CI/CD (went from weekly to <strong>multiple daily deploys</strong>), distributed tracing, alerting, p99 latency tuning through 10x traffic growth, and OAuth2/JWT auth.',
      },
    ],
  },
  {
    company: 'CoderZ (by Intelitek)',
    location: 'Israel',
    title: 'Full Stack Engineer',
    tagline: 'CODiE Award-winning virtual robotics platform · 150K+ students in 30+ countries',
    duration: '2019 - 2021',
    achievements: [
      {
        title: 'Built a Scratch-to-EV3 compiler used by 150K+ students across 30+ countries',
        description: '- designed a block-to-bytecode compiler (AST extraction, type resolution, EV3 code gen) that translates visual programs into robot-executable code. Adopted in <strong>Brazil\'s national SESI program</strong> and <strong>Singapore\'s National Robotics Competition</strong>.',
      },
      {
        title: 'Scratch-to-Unity runtime engine',
        description: '- stayed on after the Mindflow acquisition as primary technical owner. Built a runtime that interprets block-code ASTs inside Unity\'s game loop, powering <strong>real-time multiplayer classroom sessions</strong> with a Node.js WebSocket backend.',
      },
      {
        title: 'Opened new markets with i18n and testing',
        description: '- built a CMS with full i18n and RTL/LTR support for 5+ languages, which opened MENA and European markets. Set up E2E testing with <strong>500+ Cypress tests</strong> that became the team\'s quality baseline.',
      },
    ],
  },
  {
    company: 'Mindflow (Acquired by CoderZ, 2019)',
    location: 'Israel',
    title: 'Engineering Lead (Full Stack)',
    tagline: 'Product engineering studio · Acquired by CoderZ on the strength of its game engine',
    duration: '2018 - 2019',
    achievements: [
      {
        title: 'Built the product that led to the acquisition',
        description: '- architected a real-time multiplayer engine in Unity with a custom <strong>Rust networking layer</strong> (picked for memory safety and low latency). This was the flagship deliverable that led CoderZ to acquire the entire studio.',
      },
      {
        title: 'Promoted to Engineering Lead within months',
        description: '- led a 4-person team. Owned technical direction, architecture reviews, sprint planning, and client-facing scoping across concurrent engagements.',
      },
      {
        title: 'Shipped across 5+ technology domains',
        description: '- <strong>React + Node.js</strong> enterprise dashboards with real-time visualization, Elasticsearch analytics with sub-second queries over millions of records, and a C++-to-Electron desktop migration.',
      },
    ],
  },
  {
    company: 'Independent Software Consulting',
    location: 'Israel & Remote',
    title: 'Full Stack Developer',
    tagline: '10+ client engagements for startups and enterprise',
    duration: '2016 - 2018',
    achievements: [
      {
        title: 'Ran an independent practice for 2 years',
        description: '- scoped, designed, and shipped production systems end-to-end for startup and enterprise clients (React, Node.js, GraphQL, React Native). 10+ engagements total.',
      },
      {
        title: 'myOfer PWA for Israel\'s largest mall operator',
        description: '- architected a serverless Progressive Web App for <strong>Israel\'s largest mall group</strong> (18 malls, TA-35 listed) with offline-first caching and push notifications. Delivered through Beatman agency.',
      },
    ],
  },
];
