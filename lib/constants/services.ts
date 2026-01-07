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
    title: "Web Development",
    tagline: "Build Powerful Web Applications",
    description:
      "Create scalable, high-performance web applications using modern frameworks and best practices. We deliver full-stack solutions tailored to your business needs.",
    image: "/images/services/web-dev.png",
    features: [
      "React & Next.js Development",
      "Node.js Backend Solutions",
      "RESTful & GraphQL APIs",
      "Progressive Web Apps (PWA)",
      "E-commerce Platforms",
      "Content Management Systems",
    ],
    technologies: [
      "React",
      "Next.js",
      "Node.js",
      "TypeScript",
      "PostgreSQL",
      "MongoDB",
    ],
  },
  {
    id: "mobile-development",
    icon: Smartphone,
    title: "Mobile App Development",
    tagline: "Native Performance, Cross-Platform Reach",
    description:
      "Cross-platform mobile applications with Flutter and React Native. Beautiful UI, seamless performance, and native experiences across iOS and Android.",
    image: "/images/services/mobile-dev.png",
    features: [
      "Flutter Development",
      "React Native Apps",
      "Native iOS & Android",
      "Cross-Platform Solutions",
      "App Store Optimization",
      "Mobile Backend Integration",
    ],
    technologies: [
      "Flutter",
      "React Native",
      "Dart",
      "Swift",
      "Kotlin",
      "Firebase",
    ],
  },
  {
    id: "ui-ux-design",
    icon: Palette,
    title: "UI/UX Design",
    tagline: "Design That Delights Users",
    description:
      "User-centric design combining aesthetics with functionality. Create intuitive interfaces that drive engagement, conversions, and brand loyalty.",
    image: "/images/services/ui-ux.png",
    features: [
      "User Research & Analysis",
      "Wireframing & Prototyping",
      "Visual Design Systems",
      "Usability Testing",
      "Responsive Design",
      "Brand Identity Design",
    ],
    technologies: [
      "Figma",
      "Adobe XD",
      "Sketch",
      "InVision",
      "Principle",
      "Framer",
    ],
  },
  {
    id: "ai-labs",
    icon: Brain,
    title: "AI & Machine Learning",
    tagline: "Intelligent Solutions for Complex Problems",
    description:
      "Harness the power of artificial intelligence and machine learning. From predictive analytics to natural language processing and computer vision.",
    image: "/images/services/ai-ml.png",
    features: [
      "Machine Learning Models",
      "Natural Language Processing",
      "Computer Vision",
      "Predictive Analytics",
      "AI Chatbots & Assistants",
      "Data Science Solutions",
    ],
    technologies: [
      "TensorFlow",
      "PyTorch",
      "scikit-learn",
      "OpenAI",
      "Hugging Face",
      "Python",
    ],
  },
  {
    id: "cloud-solutions",
    icon: Cloud,
    title: "Cloud Infrastructure",
    tagline: "Scalable, Secure Cloud Solutions",
    description:
      "Modern cloud infrastructure and deployment strategies. Optimize performance, security, and cost-efficiency with AWS, Azure, and GCP.",
    image: "/images/services/cloud.png",
    features: [
      "Cloud Architecture Design",
      "AWS & Azure Services",
      "DevOps & CI/CD Pipelines",
      "Kubernetes & Docker",
      "Cloud Migration Services",
      "Infrastructure as Code",
    ],
    technologies: ["AWS", "Azure", "GCP", "Docker", "Kubernetes", "Terraform"],
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
    title: "Quality Assurance",
    description:
      "Rigorous testing and code reviews ensure bug-free, secure solutions",
  },
  {
    icon: Zap,
    title: "Fast Delivery",
    description:
      "Agile methodology enables rapid development and quick iterations",
  },
  {
    icon: Users,
    title: "Expert Team",
    description:
      "50+ certified professionals with expertise across all technologies",
  },
  {
    icon: TrendingUp,
    title: "Scalable Solutions",
    description: "Built to grow with your business, from startup to enterprise",
  },
];
