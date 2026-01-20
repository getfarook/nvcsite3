import {
  Target,
  Users,
  Award,
  TrendingUp,
  Shield,
  Heart,
  LucideIcon,
} from "lucide-react";

// Type definitions
export interface Value {
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface TimelineItem {
  year: string;
  title: string;
  description: string;
}

export interface Stat {
  value: string;
  label: string;
}

// Company values
export const VALUES: Value[] = [
  {
    icon: Target,
    title: "Integrity",
    description:
      "We do what we promise, with honesty and accountability. Every decision, communication, and delivery is guided by trust and transparency - ensuring long-term, meaningful partnerships.",
  },
  {
    icon: Users,
    title: "Competency",
    description:
      "We bring deep technical expertise and continuous learning to every project. From AI to full-stack engineering, we focus on delivering solutions that are accurate, reliable, and built to last.",
  },
  {
    icon: Award,
    title: "Speed",
    description:
      "We move fast without compromising quality. Through agile execution and efficient workflows, we help businesses accelerate their roadmap and turn ideas into working solutions quickly.",
  },
];

// Company timeline/milestones
export const TIMELINE: TimelineItem[] = [
  {
    year: "2019",
    title: "The Beginning",
    description:
      "NOVIZCO INFOTECH was founded with a vision to transform businesses through technology.",
  },
  {
    year: "2020",
    title: "Rapid Growth",
    description:
      "Expanded our team and delivered 100+ projects across web, mobile, and cloud solutions.",
  },
  {
    year: "2021",
    title: "AI Innovation",
    description:
      "Launched our AI Labs division, pioneering machine learning solutions for Indian businesses.",
  },
  {
    year: "2022",
    title: "Global Reach",
    description:
      "Expanded services internationally while maintaining our commitment to quality and innovation.",
  },
  {
    year: "2023",
    title: "Industry Recognition",
    description:
      "Received multiple awards for excellence in technology services and client satisfaction.",
  },
  {
    year: "2024",
    title: "Future Ready",
    description:
      "Continuing to innovate and lead the digital transformation journey for 500+ clients.",
  },
];

// Company statistics
export const STATS: Stat[] = [
  { value: "500+", label: "Projects Delivered" },
  { value: "200+", label: "Happy Clients" },
  { value: "50+", label: "Team Members" },
  { value: "5+", label: "Years of Excellence" },
  { value: "98%", label: "Client Satisfaction" },
  { value: "24/7", label: "Support Available" },
];

// About section values (shorter descriptions for homepage)
export const SECTION_VALUES: Value[] = [
  {
    icon: Target,
    title: "Innovation First",
    description:
      "Constantly pushing boundaries with cutting-edge technology and creative solutions",
  },
  {
    icon: Users,
    title: "Client-Centric",
    description:
      "Your success is our priority. We build lasting partnerships through exceptional service",
  },
  {
    icon: Award,
    title: "Quality Driven",
    description:
      "Uncompromising standards in code quality, design excellence, and project delivery",
  },
  {
    icon: TrendingUp,
    title: "Growth Focused",
    description:
      "Empowering businesses to scale and thrive in the digital landscape",
  },
];

// About section stats (condensed for homepage)
export const SECTION_STATS: Stat[] = [
  { value: "500+", label: "Projects Delivered" },
  { value: "200+", label: "Happy Clients" },
  { value: "50+", label: "Team Members" },
  { value: "5+", label: "Years Experience" },
];
