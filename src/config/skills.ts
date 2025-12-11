interface Skill {
  label: string;
  skills: string[];
}

const TECHNICAL_SKILLS: Skill[] = [
  {
    label: 'Languages & Core Stack',
    skills: [
      'TypeScript',
      'JavaScript (ES6+)',
      'Go (Golang)',
      'Rust',
      'Node.js / Bun',
      'Python',
      'C# (.NET)',
      'SQL / NoSQL',
    ],
  },
  {
    label: 'Frontend, Graphics & Visualization',
    skills: [
      'React.js / Next.js / Svelte',
      'Redux Toolkit / Zustand',
      'Electron / React Native',
      'Astro / Starlight',
      'Tailwind CSS',
      'Shadcn UI / MUI / Ant Design',
      'Unity (C#)',
      'WebGL / HTML5 Canvas / Shaders (GLSL)',
    ],
  },
  {
    label: 'Cloud, DevOps & Observability',
    skills: [
      'AWS',
      'Google Cloud (GCP)',
      'Cloudflare',
      'Kubernetes (K8s) / Helm',
      'Docker / Podman',
      'Terraform / OpenTofu (IaC)',
      'GitHub Actions / CI/CD',
      'Prometheus / Grafana',
      'OpenTelemetry',
      'Linux / Bash',
    ],
  },
  {
    label: 'Backend & Data Infrastructure',
    skills: [
      'PostgreSQL / MySQL',
      'MongoDB / DynamoDB',
      'Redis / Valkey (Caching)',
      'Elasticsearch (ELK)',
      'Kafka / RabbitMQ',
      'GraphQL (Apollo)',
      'gRPC / Protobuf',
      'WebSockets',
    ],
  },
  {
    label: 'Architecture, AI & Quality',
    skills: [
      'System Design (High Scalability)',
      'Microservices & Distributed Systems',
      'Event-Driven Architecture (EDA)',
      'LLM Integration & RAG',
      'DevSecOps (OAuth2 / JWT)',
      'TDD / Vitest / Jest / Playwright / Cypress',
      'Clean Architecture / SOLID',
      'Performance Optimization',
      'Agile Leadership / Mentoring',
    ],
  },
];

export { TECHNICAL_SKILLS };
