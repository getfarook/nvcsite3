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
    "Building the future of technology with innovative solutions. Your trusted partner for digital transformation.",
  year: new Date().getFullYear(),
} as const;

/**
 * Navigation Links
 */
export const NAVIGATION = {
  main: [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
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
  twitter: { href: "#", icon: Twitter, label: "Twitter" },
  linkedin: { href: "#", icon: Linkedin, label: "LinkedIn" },
  github: { href: "#", icon: Github, label: "GitHub" },
} as const;

/**
 * Footer Links
 */
export const FOOTER = {
  quickLinks: [
    { label: "Services", sectionId: "services" },
    { label: "About Us", sectionId: "about" },
    { label: "Contact", sectionId: "contact" },
  ],
  services: [
    "Web Development",
    "Mobile Apps",
    "UI/UX Design",
    "AI Solutions",
    "Cloud Services",
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
    text: "Technology Solutions & Innovation",
    icon: "pulse",
  },
  title: {
    prefix: "Build the Future with",
    highlight: "NOVIZCO INFOTECH",
  },
  description:
    "We deliver cutting-edge technology solutions that transform businesses. From web and mobile development to AI innovation and cloud expertise.",
  ctas: [
    {
      label: "Start Your Project",
      icon: ArrowRight,
      variant: "primary" as const,
      href: "/contact",
    },
    {
      label: "Explore Services",
      variant: "outline" as const,
      href: "/services",
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
      text: "We believe technology should enhance ",
      speed: 1.7, // normal speed
    },
    {
      text: "your daily experiences. Our mission is to ",
      speed: 3.2, // faster speed
    },
    {
      text: "turn that belief into action!",
      speed: 1.7, // normal speed
    },
  ],
  scrollHeight: "300vh",
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
      title: "Web Development",
      description:
        "Build scalable, high-performance web applications using modern frameworks and best practices. Full-stack solutions tailored to your business needs.",
      features: [
        "React & Next.js",
        "Node.js Backend",
        "API Development",
        "Progressive Web Apps",
      ],
    },
    {
      icon: Smartphone,
      title: "Mobile App Development",
      description:
        "Cross-platform mobile applications with Flutter. Native performance, beautiful UI, and seamless user experiences across iOS and Android.",
      features: [
        "Flutter Development",
        "Native Performance",
        "Cross-Platform",
        "App Store Optimization",
      ],
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description:
        "User-centric design that combines aesthetics with functionality. Create intuitive interfaces that delight users and drive engagement.",
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
