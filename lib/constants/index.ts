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
  Github,
  Linkedin,
  Twitter,
  ArrowRight,
  Facebook,
  Youtube,
} from "lucide-react";
import ReactLogo from "@/components/icons/react.svg";
import NextLogo from "@/components/icons/nextjs2.svg";
import NodeLogo from "@/components/icons/nodejs.svg";
import TypescriptLogo from "@/components/icons/typescript.svg";
import TailwindLogo from "@/components/icons/tailwindcss.svg";
import FlutterLogo from "@/components/icons/flutter.svg";
import AWSLogo from "@/components/icons/aws.svg";
import FigmaLogo from "@/components/icons/figma.svg";

/**
 * Company Information
 */
export const COMPANY = {
  name: "NOVIZCO INFOTECH",
  logo: "/images/novizco-logo.png",
  tagline: "Technology Solutions & Innovation",
  description:
    "We are a reliable, fast delivering and high performance technology partner for our valuable customers across multiple verticals like Healthcare, Petroleum, Finance, Construction, Retail, Travel and Tourism, Logistics etc.",
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
    { href: "/about", label: "About" },
    { href: "/blog", label: "Blog" },
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
  { name: "React", icon: ReactLogo },
  { name: "Next.js", icon: NextLogo },
  { name: "Node.js", icon: NodeLogo },
  { name: "Typescript", icon: TypescriptLogo },
  { name: "Tailwind", icon: TailwindLogo },
  { name: "Flutter", icon: FlutterLogo },
  { name: "AWS", icon: AWSLogo },
  { name: "Figma", icon: FigmaLogo },
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
    { label: "About Us", href: "/about" },
    { label: "Contact", href: "/contact" },
  ],
  services: [
    "Web Application Development",
    "Mobile App Development",
    "UI/UX Designing",
    "Cloud Platform Consulting",
    "Digital Content Designing",
    "Artificial Intelligence",
  ],
  legal: [
    { href: "#", label: "Privacy Policy" },
    { href: "#", label: "Terms of Service" },
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
    "NOVIZCO is a technology services company focused on Web Applications, Mobile Applications, UI UX and Cloud Platform Services. We are full stack development experts on technologies like Flutter, React Native, ReactJS, Go, NodeJS, Amazon AWS and Google Cloud Platform.",
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
export const SCROLL_REVEAL = {
  sections: [
    {
      text: "We are a reliable, fast delivering and high performance ",
      speed: 1.7, // normal speed
    },
    {
      text: "technology partner for our valuable customers. ",
      speed: 3.2, // faster speed
    },
    {
      text: "Adopt the latest technologies into your business.",
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
      title: "Web Application Development",
      description:
        "We are a full-stack web application development company strongly striving to create extra smart and reliable web applications that are well-tailored to your business needs.",
      features: [
        "React & Next.js",
        "Node.js Backend",
        "API Development",
        "Progressive Web Apps",
      ],
    },
    {
      icon: Smartphone,
      title: "Mobile Application Development",
      description:
        "Your Perfect Technology Partner in Building Futuristic Mobile Apps with Flutter and other top Frameworks. The world runs on smartphones.",
      features: [
        "Flutter Development",
        "Native Performance",
        "Cross-Platform",
        "App Store Optimization",
      ],
    },
    {
      icon: Palette,
      title: "UI/UX Designing",
      description:
        "Do you want to build sleek, intuitive and compelling UI/UX Designs that create everlasting impact for your applications? Switch to NOVIZCO’s design expertise.",
      features: [
        "User Research",
        "Wireframing",
        "Prototyping",
        "Design Systems",
      ],
    },
    {
      icon: Brain,
      title: "AI Labs",
      description:
        "Leverage artificial intelligence and machine learning to solve complex problems. From predictive analytics to natural language processing.",
      features: [
        "Machine Learning",
        "AI Integration",
        "Data Analytics",
        "Automation",
      ],
    },
    {
      icon: Cloud,
      title: "Cloud Solutions",
      description:
        "Scalable cloud infrastructure and deployment strategies. Optimize performance, security, and cost-efficiency with modern cloud platforms.",
      features: ["AWS & Azure", "DevOps", "CI/CD Pipelines", "Cloud Migration"],
    },
    {
      icon: Zap,
      title: "Performance Optimization",
      description:
        "Maximize application speed and efficiency. Expert optimization for faster load times, better SEO, and enhanced user satisfaction.",
      features: [
        "Speed Optimization",
        "SEO Enhancement",
        "Code Refactoring",
        "Monitoring",
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
