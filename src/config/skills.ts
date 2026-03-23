interface Skill {
  label: string;
  skills: string[];
}

const TECHNICAL_SKILLS: Skill[] = [
  {
    label: 'Languages & Runtime',
    skills: [
      'TypeScript / JavaScript',
      'Go',
      'Python',
      'Rust',
      'C++',
      'C# / .NET',
      'Node.js / Bun',
      'SQL / NoSQL',
    ],
  },
  {
    label: 'AI & LLM Engineering',
    skills: [
      'RAG Pipeline Architecture',
      'LLM Integration & AI Agents',
      'Vector Search & Embeddings',
      'Prompt Engineering & Evaluation',
    ],
  },
  {
    label: 'Platform & Observability',
    skills: [
      'Prometheus / Grafana / OpenTelemetry',
      'Distributed Tracing',
      'Sentry / PagerDuty',
      'SLO / SLI / Incident Response',
      'Performance Engineering',
    ],
  },
  {
    label: 'Cloud & Infrastructure',
    skills: [
      'AWS',
      'GCP (Cloud Run, Cloud SQL, Pub/Sub)',
      'Kubernetes / Docker',
      'Terraform / OpenTofu (IaC)',
      'GitHub Actions / CI/CD',
      'eBPF',
    ],
  },
  {
    label: 'Backend & Data Systems',
    skills: [
      'PostgreSQL / ClickHouse / Redis',
      'Elasticsearch',
      'Kafka / RabbitMQ',
      'GraphQL / gRPC',
      'WebSockets / REST',
      'Microservices & Distributed Systems',
      'Event-Driven Architecture',
      'API Design',
    ],
  },
  {
    label: 'Frontend',
    skills: [
      'React / Next.js',
      'Tailwind CSS',
      'Electron / React Native',
      'WebGL / Unity (C#)',
    ],
  },
  {
    label: 'Engineering Practices & Leadership',
    skills: [
      'System Design (High Scalability)',
      'Compiler & Language Design',
      'Technical Design Docs / RFCs',
      'DevSecOps (OAuth2 / JWT / RBAC)',
      'TDD / Playwright / Cypress',
      'Cross-Team Technical Leadership',
    ],
  },
];

export { TECHNICAL_SKILLS };
