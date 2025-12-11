export interface ExperienceItem {
  company: string;
  location: string;
  title: string;
  duration: string;
  achievements: {
    title: string;
    description: string;
  }[];
}

export const experience: ExperienceItem[] = [
  {
    company: 'Alison.AI',
    location: 'Israel',
    title: 'Full Stack & Platform Engineer',
    duration: '2023 - 2025',
    achievements: [
      {
        title: 'High-Scale System Architecture',
        description: 'Spearheaded the design and deployment of an automated data aggregation engine integrating multiple third-party APIs. This initiative reduced client activation time from <strong>days to minutes</strong>, enabling the Customer Success team to onboard <strong>50+ enterprise clients monthly</strong> with zero engineering intervention.',
      },
      {
        title: 'DevOps Transformation & CI/CD Modernization',
        description: 'Architected enterprise-grade CI/CD pipelines for both existing and new microservices using <strong>GitHub Actions</strong> and <strong>Docker</strong>. Implemented industry best practices including automated testing, security scanning, artifact caching, and deployment strategies, resulting in a reduction in deployment time, and significantly enhanced developer velocity across the organization.',
      },
      {
        title: 'Security & Compliance Leadership',
        description: 'Directed a comprehensive security overhaul, identifying and remediating <strong>100+ critical CVE vulnerabilities</strong> across the codebase. Established automated security scanning protocols to ensure continuous compliance and system integrity.',
      },
      {
        title: 'Platform Engineering & UI Performance',
        description: 'Engineered a robust, pixel-perfect web platform using <strong>React, Node.js, Python, and TypeScript</strong>, delivering a responsive and intuitive UI/UX for a data-intensive AI application serving a global user base.',
      },
      {
        title: 'Cloud Infrastructure Optimization',
        description: 'Managed and optimized <strong>GCP cloud resources</strong>, implementing Infrastructure as Code (IaC) practices to facilitate seamless service migrations, dependency updates, and <strong>zero-downtime deployments</strong>.',
      },
    ],
  },
  {
    company: 'Datadog',
    location: 'Worldwide',
    title: 'Senior Software Engineer',
    duration: '2022 - 2023',
    achievements: [
      {
        title: 'Post-Acquisition Integration',
        description: 'Orchestrated the complex technical integration of Seekret\'s proprietary API observability technology into the Datadog ecosystem. Successfully migrated microservices and architected a unified, cohesive UI for <strong>enterprise-scale API monitoring</strong>.',
      },
      {
        title: 'High-Performance Frontend Engineering',
        description: 'Developed and optimized React-based data visualization interfaces capable of handling <strong>millions of daily API requests</strong>. Implemented virtualized lists and efficient state management to ensure real-time observability performance.',
      },
      {
        title: 'Cross-Product Collaboration',
        description: 'Collaborated extensively with RUM, Dashboard, and Session Replay teams to deliver seamless cross-product features. Standardized engineering best practices and authored comprehensive technical documentation, significantly accelerating new hire onboarding and reducing knowledge silos.',
      },
      {
        title: 'Distributed Systems Architecture',
        description: 'Contributed to high-level architectural decisions for distributed systems, ensuring high availability, fault tolerance, and scalability across Datadog\'s global infrastructure.',
      },
    ],
  },
  {
    company: 'Seekret (Acquired by Datadog)',
    location: 'Israel',
    title: 'Senior Full Stack Engineer',
    duration: '2021 - 2022',
    achievements: [
      {
        title: 'Founding Engineer Role',
        description: 'Played a pivotal role in building the core SaaS platform from the ground up, engineering a production-grade web application and services using <strong>Node.js, and Python</strong>. Built microservices using <strong>Go (Golang)</strong> and <strong>Rust</strong> to handle high-throughput data streams. Solved complex system design challenges to drive the company\'s acquisition.',
      },
      {
        title: 'Product Excellence',
        description: 'Collaborated closely with Product and Design teams to implement best-in-class web interfaces, achieving a <strong>95% user satisfaction score</strong> through meticulous attention to detail and user-centric design principles.',
      },
      {
        title: 'Reliability Engineering',
        description: 'Owned service reliability and performance optimization, implementing comprehensive monitoring and alerting solutions (using Datadog and Sentry) to maintain a <strong>99.9% uptime SLA</strong>.',
      },
      {
        title: 'Security Best Practices',
        description: 'Established foundational security practices, including automated dependency auditing, secure authentication flows (OAuth2/JWT), and role-based access control (RBAC).',
      },
    ],
  },
  {
    company: 'CoderZ',
    location: 'Israel',
    title: 'Full Stack Engineer',
    duration: '2019 - 2021',
    achievements: [
      {
        title: 'Post-Acquisition Integration & Game Engine',
        description: 'Led the technical migration and integration of the acquired Mindflow multiplayer game created in Unity, into the CoderZ platform. Configured real-time multiplayer infrastructure and engineered a runtime execution engine enabling <strong>Scratch block code</strong> to drive gameplay logic directly within the game environment.',
      },
      {
        title: 'Compiler Design & Implementation',
        description: 'Designed and implemented a custom cross-compiler translating Scratch-based visual programming blocks to Lego EV3/LeJOS Binary code. This innovation empowered <strong>100,000+ students globally</strong> to learn robotics and coding fundamentals.',
      },
      {
        title: 'Global CMS Architecture',
        description: 'Built a comprehensive, custom Content Management System (CMS) from scratch, enabling seamless product internationalization across <strong>5+ languages</strong>. This directly contributed to a <strong>40% expansion</strong> in market reach.',
      },
      {
        title: 'Test Automation Infrastructure',
        description: 'Established a robust end-to-end test automation framework using <strong>Cypress</strong>. Authored <strong>500+ automated test cases</strong>, reducing manual QA cycles by <strong>60%</strong> and significantly improving release confidence.',
      },
      {
        title: 'Scalable Backend Engineering',
        description: 'Architected and maintained scalable Node.js backend services supporting an educational platform serving thousands of concurrent users with sub-second response times.',
      },
    ],
  },
  {
    company: 'Mindflow (Acquired by CoderZ)',
    location: 'Israel',
    title: 'Software Engineer',
    duration: '2018 - 2019',
    achievements: [
      {
        title: 'Full Stack Dashboard Development',
        description: 'Developed enterprise-grade dashboards and data visualization systems, owning the full stack from React frontend to Node.js backend.',
      },
      {
        title: 'Game Development & Networking',
        description: 'Developed a multiplayer <strong>Unity</strong> game with real-time <strong>Rust</strong> networking, ensuring smooth synchronization for competitive gameplay.',
      },
      {
        title: 'Legacy Modernization',
        description: 'Modernized a legacy C++ desktop app to <strong>Electron</strong>, revitalizing the UI and enabling cross-platform support for Windows and macOS.',
      },
      {
        title: 'Search Engine Implementation',
        description: 'Engineered a search solution using <strong>Elasticsearch</strong>, enabling rapid data analytics for massive enterprise datasets.',
      },
    ],
  },
  {
    company: 'Early Career Experience',
    location: 'Worldwide',
    title: 'Full Stack Developer',
    duration: '2016 - 2018',
    achievements: [
      {
        title: 'Freelance Consultant',
        description: 'Delivered diverse software solutions for multiple clients, leveraging the modern JavaScript ecosystem (React, Angular, Vue.js, Node.js, GraphQL, React Native) to meet specific business needs.',
      },
      {
        title: 'Beatman',
        description: 'Contributed to the implementation of serverless architectures and engineered the high-performance <strong>myOfer</strong> Progressive Web Apps (PWA), ensuring offline capabilities and mobile-first experiences.',
      },
      {
        title: 'Comversion',
        description: 'Built core admin dashboards using <strong>AngularJS</strong> and contributed to Node.js backend infrastructure for a startup environment.',
      },
    ],
  },
];
