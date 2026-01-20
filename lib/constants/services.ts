import {
  Code,
  Smartphone,
  Palette,
  Brain,
  Cloud,
  Zap,
  Users,
  Rocket,
  Shield,
  TrendingUp,
  LucideIcon,
} from "lucide-react";

// Type definitions
export interface Service {
  id: string;
  icon: LucideIcon;
  title: string;
  tagline: string;
  description: string;
  image: string;
  features: string[];
  technologies: string[];
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface Benefit {
  icon: LucideIcon;
  title: string;
  description: string;
}

// Services data
export const SERVICES: Service[] = [
  {
    id: "web-development",
    icon: Code,
    title: "AI & Machine Learning",
    tagline: "Build Intelligent AI Solutions",
    description:
      "Create intelligent systems that automate workflows, enhance decision-making, and deliver real business insights. We build AI solutions powered by modern LLMs, machine learning models, and data-driven pipelines.",
    image: "/images/services/web-dev.png",
    features: [
      "LLM Fine-Tuning",
      "RAG-Based AI Systems",
      "Custom Chatbots & Assistants",
      "Machine Learning Model Development",
      "Data Analytics & Pre-processing",
      "Agentic AI",
    ],
    technologies: [
      "LLMs",
      "LangChain",
      "Hugging Face",
      "TensorFlow",
      "PyTorch",
      "Groq",
      "FAISS",
      "Vector Databases",
      "Python",
    ],
  },
  {
    id: "mobile-development",
    icon: Smartphone,
    title: "Mobile Application Development",
    tagline: "Create World-Class Mobile Experiences",
    description:
      "Build fast, scalable, and user-friendly mobile apps for Android and iOS. We deliver cross-platform, high-performance apps using modern frameworks and native integrations.",
    image: "/images/services/mobile-dev.png",
    features: [
      "Flutter & React Native Development",
      "Cross-Platform Mobile Apps",
      "Native Android / iOS Integrations",
      "API & Backend Integration",
      "App Store & Play Store Deployment",
      "Post-Production Support",
    ],
    technologies: [
      "Flutter",
      "Dart",
      "React Native",
      "Kotlin",
      "Swift",
      "Firebase",
      "REST APIs",
      "GraphQL",
    ],
  },
  {
    id: "ui-ux-design",
    icon: Palette,
    title: "AI Red-Teaming & Evaluation",
    tagline: "Evaluate Before You Deploy",
    description:
      "We ensure your AI systems are safe, reliable, and production-ready. We evaluate models for accuracy, performance, bias, and vulnerabilities using industry-leading tools and structured test frameworks.",
    image: "/images/services/ui-ux.png",
    features: [
      "Adversarial Testing & Jailbreak Detection",
      "Safety, Bias & Risk Evaluation",
      "Automated Prompt Testing",
      "Model Quality & Response Scoring",
      "Latency, Cost & Performance Benchmarking",
      "Responsible AI & Compliance Checks",
    ],
    technologies: [
      "Garak",
      "Giskard",
      "PyRIT",
      "DeepEval",
      "PromptFoo",
      "DeepChecks",
      "Trulens",
      "OpenAI Evals",
    ],
  },
  {
    id: "ai-labs",
    icon: Brain,
    title: "Web Application Development",
    tagline: "Scalable Web Solutions",
    description:
      "Create scalable, high-performance web applications using modern frameworks and cloud-ready architectures. We deliver secure full-stack solutions tailored to your business needs.",
    image: "/images/services/ai-ml.png",
    features: [
      "React & Next.js Development",
      "Node.js & Go Backend Services",
      "RESTful & GraphQL API Development",
      "SaaS Platforms & Admin Dashboards",
      "E-commerce & Marketplace Systems",
      "Progressive Web Apps (PWA)",
    ],
    technologies: [
      "React",
      "Next.js",
      "Node.js",
      "Go",
      "TypeScript",
      "PostgreSQL",
      "MongoDB",
      "Redis",
    ],
  },
  {
    id: "cloud-solutions",
    icon: Cloud,
    title: "Cloud Engineering",
    tagline: "Secure. Scalable. Cloud-Ready.",
    description:
      "Design, deploy, and manage secure cloud infrastructure that scales with your business. We optimize performance, cost, and reliability across modern cloud platforms.",
    image: "/images/services/cloud.png",
    features: [
      "Cloud Architecture & Deployment",
      "DevOps Tools & CI/CD Pipelines",
      "Containerization (Docker / Kubernetes)",
      "Cloud Migration & Modernization",
      "Infrastructure as Code (IaC)",
      "Monitoring, Security & Cost Optimization",
    ],
    technologies: [
      "AWS",
      "Azure",
      "GCP",
      "Kubernetes",
      "Docker",
      "Terraform",
      "GitHub Actions",
      "CloudWatch",
    ],
  },
  {
    id: "data-solutions",
    icon: Cloud,
    title: "Data Engineering",
    tagline: "Build Reliable Data Pipelines",
    description:
      "Transform raw data into clean, high-quality pipelines and analytics-ready datasets. We build scalable data systems that power dashboards, ML models, and operational insights.",
    image: "/images/services/cloud.png",
    features: [
      "ETL / ELT Pipeline Development",
      "Data Warehousing & Modeling",
      "Batch & Real-Time Data Processing",
      "Cloud Data Pipelines (AWS / Azure / GCP)",
      "Data Quality & Observability",
      "Analytics & Reporting Enablement",
    ],
    technologies: [
      "Snowflake",
      "BigQuery",
      "Redshift",
      "Apache Spark",
      "Airflow",
      "dbt",
      "Kafka",
      "Python",
      "SQL",
    ],
  },
];

// Process steps data
export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: "01",
    title: "Discovery & Planning",
    description:
      "We analyze your requirements, define project scope, and create a strategic roadmap.",
    icon: Users,
  },
  {
    number: "02",
    title: "Design & Prototype",
    description:
      "Our designers create intuitive wireframes and interactive prototypes for your approval.",
    icon: Palette,
  },
  {
    number: "03",
    title: "Development & Testing",
    description:
      "Expert developers build your solution with rigorous testing at every stage.",
    icon: Code,
  },
  {
    number: "04",
    title: "Launch & Support",
    description:
      "We deploy your product and provide ongoing maintenance and support.",
    icon: Rocket,
  },
];

// Benefits data
export const BENEFITS: Benefit[] = [
  {
    icon: Shield,
    title: "Reliable Quality",
    description:
      "We follow strong engineering practices, code reviews, and testing to deliver stable, secure, and dependable solutions.",
  },
  {
    icon: Zap,
    title: "Fast Delivery",
    description:
      "Our workflows are built for speed and clarity helping you launch quickly without compromising on quality.",
  },
  {
    icon: Users,
    title: "Expert Team",
    description:
      "A team of experienced engineers who understand your goals and work closely with you at every step.",
  },
  {
    icon: TrendingUp,
    title: "Trusted Partner",
    description:
      "We stay accountable, communicate openly, and support you long-term—whether it’s a full project or dedicated resources.",
  },
];
