import {
  Code,
  Smartphone,
  Palette,
  Brain,
  Cloud,
  Globe,
  Zap,
  Linkedin,
  Twitter,
  ArrowRight,
  Facebook,
  Youtube,
} from "lucide-react";
import FlutterLogo from "@/components/icons/flutter.svg";
import ReactLogo from "@/components/icons/react.svg";
import NodeLogo from "@/components/icons/nodejs.svg";
import TensorflowLogo from "@/components/icons/tensorflow.svg";
import LangchainLogo from "@/components/icons/langchain.svg";
import HuggingFaceLogo from "@/components/icons/huggingface.svg";
import BedrockLogo from "@/components/icons/bedrock.svg";
import VertexAILogo from "@/components/icons/vertexai.svg";
import AzureAILogo from "@/components/icons/azureai.svg";
import OllamaLogo from "@/components/icons/ollama.svg";
import PytorchLogo from "@/components/icons/pytorch.svg";

/**
 * Company Information
 */
export const COMPANY = {
  name: "NOVIZCO INFOTECH",
  logo: "/images/novizco-logo.png",
  tagline: "Technology Solutions & Innovation",
  description:
    "Novizco is an AI-driven full-stack technology company offering AI development, evaluation, red-teaming, web and mobile app development, data engineering, cloud services, and production support. We work with clients across many industries to deliver reliable, scalable technology built for real-world use.",
  year: new Date().getFullYear(),
} as const;

/**
 * Navigation Links
 */
export const NAVIGATION = {
  main: [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/ai-labs", label: "AI Labs" },
    { href: "/about", label: "About us" },
    { href: "/blog", label: "Blogs" },
    { href: "/careers", label: "Careers" },
    { href: "/contact", label: "Contact" },
  ],
  cta: {
    href: "/contact",
    label: "Get Started",
  },
} as const;

// Type definition
export interface TechStackItem {
  name: string;
  icon: string;
}

// Tech stack for marquee
export const TECH_STACK: TechStackItem[] = [
  { name: "Flutter", icon: FlutterLogo },
  { name: "React", icon: ReactLogo },
  { name: "Node", icon: NodeLogo },
  { name: "TensorFlow", icon: TensorflowLogo },
  { name: "LangChain", icon: LangchainLogo },
  { name: "Hugging Face", icon: HuggingFaceLogo },
  { name: "Amazon Bedrock", icon: BedrockLogo },
  { name: "Google Vertex AI", icon: VertexAILogo },
  { name: "Microsoft AI Foundry", icon: AzureAILogo },
  { name: "Ollama", icon: OllamaLogo },
  { name: "PyTorch", icon: PytorchLogo },
];

/**
 * Social Media Links
 */
export const SOCIAL_LINKS = {
  facebook: {
    href: "https://www.facebook.com/novizco/",
    icon: Facebook,
    label: "Facebook",
  },
  linkedin: {
    href: "https://www.linkedin.com/company/novizco/",
    icon: Linkedin,
    label: "LinkedIn",
  },
  twitter: { href: "https://twitter.com", icon: Twitter, label: "Twitter" },
  youtube: {
    href: "https://www.youtube.com/c/Novizcoinfo",
    icon: Youtube,
    label: "YouTube",
  },
} as const;

/**
 * Footer Links
 */
export const FOOTER = {
  quickLinks: [
    { label: "Services", href: "/services" },
    {label: "AI Labs", href:"/ai-labs"},
    { label: "About Us", href: "/about" },
    { label: "Careers", href: "/careers" },
    { label: "Contact", href: "/contact" },
  ],
  services: [
    "Artificial Intelligence (AI) Development",
    "AI Evaluation & Red-Teaming",
    "Web and Mobile Application Development",
    "Full-Stack Engineering",
    "Data Engineering & Analytics",
    "Cloud Platform Consulting",
    "Resource Augmentation",
  ],
} as const;

/**
 * Hero Section Content
 */
export const HERO = {
  badge: {
    text: "Web and Mobile Application Development Experts in India",
    icon: "pulse",
  },
  title: {
    prefix: "Your Perfect Partner for",
    highlight: "Technology Solutions",
  },
  description:
    "Novizco is an AI-driven full-stack technology company. We help our clients build, test, and evaluate AI-enabled web and mobile applications. We also provide data engineering and cloud solutions on Azure, AWS, and GCP. At Novizco, we deliver end-to-end projects or fully managed resources based on customer needs.",
  ctas: [
    {
      label: "Contact us",
      icon: ArrowRight,
      variant: "primary" as const,
      href: "/contact",
    },
    {
      label: "Hire a Resource",
      variant: "outline" as const,
      href: "/hire-resource",
      icon: undefined,
    },
  ],
  features: [
    { icon: Code, label: "Web Development" },
    { icon: Smartphone, label: "Mobile Apps" },
    { icon: Palette, label: "UI/UX Design" },
    { icon: Brain, label: "AI Labs" },
    { icon: Cloud, label: "Cloud Solutions" },
  ],
} as const;

/**
 * Scroll Reveal Text Content
 */
//
export const SCROLL_REVEAL = {
  sections: [
    {
      text: "Trusted by global partners for ",
      speed: 1.7, // normal speed
    },
    {
      text: "high-quality software solutions.",
      speed: 3.2, // faster speed
    },
    {
      text: "We help teams innovate at the right pace.",
      speed: 1.7, // normal speed
    },
  ],
  scrollHeight: "120vh",
  revealOpacity: {
    revealed: 1,
    hidden: 0.2,
  },
  transitionDuration: 100, // ms
} as const;

/**
 * Services Data
 */
export const SERVICES = {
  sectionTitle: "Our Services",
  sectionDescription:
    "Comprehensive technology solutions designed to accelerate your digital transformation journey",
  items: [
    {
      icon: Code,
      title: "AI and Machine Learning",
      description:
        "We help our clients design and build practical AI solutions that automate workflows, and solve real business problems.",
      features: [
        "LLM Fine-tuning",
        "Hybrid RAG Development",
        "Custom AI Chatbots",
        "Data Analysis and Pre-processing",
        "AI enabled Web & Mobile Apps",
      ],
    },
    {
      icon: Smartphone,
      title: "Mobile Application Development",
      description:
        "Your trusted partner for building scalable, future-ready mobile apps with Flutter and other modern frameworks.",
      features: [
        "Flutter Apps (Android, iOS, Web)",
        "React Native Apps",
        "Native Android & iOS (Kotlin, Swift)",
        "API & Backend Integration",
        "DevOps & Deployment",
        "Post-Production Support",
      ],
    },
    {
      icon: Globe,
      title: "Web Application Development",
      description:
        "​​Web applications built with clean architecture and strong performance. From frontend to backend, our solutions are reliable, robust and scalable.",
      features: [
        "Frontend Development (React, Next, Angular, Flutter)",
        "Backend Development (Node.js, Python, Java)",
        "REST & GraphQL API Development",
        "Cloud-Native Deployment (AWS, Azure, GCP)",
        "Progressive Web Apps (PWA)",
      ],
    },
    {
      icon: Brain,
      title: "AI Evaluation & Red-Teaming",
      description:
        "We test and evaluate AI systems before they go live. With evaluation and red-teaming, we uncover risks and make sure the AI is safe and reliable.",
      features: [
        "AI Model Evaluation",
        "Prompt & Response Testing",
        "Bias & Safety Assessment",
        "Red-Teaming",
        "Latency & Performance",
      ],
    },
    {
      icon: Cloud,
      title: "Cloud Engineering",
      description:
        "We manage cloud setups that help your apps run reliably. We ensure strong performance, good security, and efficient cloud spending.",
      features: [
        "AWS, Azure & GCP",
        "Cloud Architecture",
        "DevOps & CI/CD",
        "Containerization",
        "Cloud Migration",
        "Monitoring & Cost Optimization",
      ],
    },
    {
      icon: Zap,
      title: "Data Engineering",
      description:
        "Novizco builds reliable data pipelines that turn raw data into clear insights, with a focus on accuracy, performance, and scalability for analytics and AI.",
      features: [
        "Data Pipeline Development",
        "ETL / ELT Workflows",
        "Data Warehousing & Modeling",
        "Azure Data Engineering",
        "GCP Data flow and AWS Glue",
      ],
    },
  ],
} as const;

/**
 * Configuration values
 */
export const CONFIG = {
  scrollBehavior: "smooth" as const,
} as const;
