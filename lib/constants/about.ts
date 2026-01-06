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

export interface TeamMember {
  name: string;
  role: string;
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
    title: "Innovation First",
    description:
      "We constantly push boundaries with cutting-edge technology and creative solutions that drive real business value.",
  },
  {
    icon: Users,
    title: "Client-Centric",
    description:
      "Your success is our priority. We build lasting partnerships through exceptional service and dedication.",
  },
  {
    icon: Award,
    title: "Quality Driven",
    description:
      "Uncompromising standards in code quality, design excellence, and project delivery every single time.",
  },
  {
    icon: TrendingUp,
    title: "Growth Focused",
    description:
      "Empowering businesses to scale and thrive in the ever-evolving digital landscape.",
  },
  {
    icon: Shield,
    title: "Trust & Integrity",
    description:
      "Building relationships on transparency, honesty, and ethical business practices.",
  },
  {
    icon: Heart,
    title: "Passion & Purpose",
    description:
      "We love what we do, and it shows in every project we undertake and every client we serve.",
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

// Team departments
export const TEAM: TeamMember[] = [
  {
    name: "Leadership Team",
    role: "15+ Years Combined Experience",
    description: "Visionary leaders driving innovation and excellence",
  },
  {
    name: "Engineering Team",
    role: "30+ Expert Developers",
    description: "Building scalable, robust solutions with cutting-edge tech",
  },
  {
    name: "Design Team",
    role: "12+ Creative Designers",
    description: "Crafting beautiful, user-centric experiences",
  },
  {
    name: "Operations Team",
    role: "Client Success Specialists",
    description: "Ensuring seamless project delivery and support",
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
