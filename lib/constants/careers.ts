import { Code, Smartphone, Palette, Brain, Cloud, Server } from "lucide-react";

/**
 * Career Page Constants
 */

export interface JobOpening {
  id: string;
  title: string;
  department: string;
  location: string;
  type: "Full-time" | "Part-time" | "Contract" | "Internship";
  experience: string;
  description: string;
  responsibilities: string[];
  requirements: string[];
  icon: typeof Code;
}

export const JOB_OPENINGS: JobOpening[] = [
  {
    id: "senior-react-developer",
    title: "Senior React Developer",
    department: "Engineering",
    location: "Kochi, India (Hybrid)",
    type: "Full-time",
    experience: "4+ years",
    description:
      "We're looking for an experienced React developer to join our front-end team and build cutting-edge web applications for our global clients.",
    responsibilities: [
      "Develop and maintain high-quality React applications",
      "Collaborate with designers and backend developers",
      "Write clean, maintainable, and efficient code",
      "Mentor junior developers and conduct code reviews",
      "Optimize applications for maximum performance",
    ],
    requirements: [
      "4+ years of experience with React.js",
      "Strong knowledge of TypeScript",
      "Experience with Next.js and modern front-end tools",
      "Familiarity with RESTful APIs and GraphQL",
      "Excellent problem-solving skills",
    ],
    icon: Code,
  },
  {
    id: "flutter-developer",
    title: "Flutter Developer",
    department: "Mobile",
    location: "Kochi, India (Hybrid)",
    type: "Full-time",
    experience: "2+ years",
    description:
      "Join our mobile team to build beautiful, cross-platform mobile applications using Flutter for iOS and Android.",
    responsibilities: [
      "Build and deploy Flutter applications",
      "Write clean and well-tested code",
      "Integrate third-party libraries and APIs",
      "Collaborate with UI/UX designers",
      "Debug and optimize app performance",
    ],
    requirements: [
      "2+ years of Flutter development experience",
      "Strong Dart programming skills",
      "Experience with state management (Provider, Riverpod, Bloc)",
      "Knowledge of native iOS/Android concepts",
      "Published apps on App Store or Play Store is a plus",
    ],
    icon: Smartphone,
  },
  {
    id: "ui-ux-designer",
    title: "UI/UX Designer",
    department: "Design",
    location: "Remote",
    type: "Full-time",
    experience: "3+ years",
    description:
      "We're seeking a creative UI/UX designer to craft intuitive and visually stunning user experiences for our web and mobile applications.",
    responsibilities: [
      "Create wireframes, prototypes, and high-fidelity designs",
      "Conduct user research and usability testing",
      "Develop and maintain design systems",
      "Collaborate with developers for design implementation",
      "Stay updated with latest design trends",
    ],
    requirements: [
      "3+ years of UI/UX design experience",
      "Proficiency in Figma, Sketch, or Adobe XD",
      "Strong portfolio showcasing web and mobile designs",
      "Understanding of front-end technologies",
      "Excellent visual design skills and attention to detail",
    ],
    icon: Palette,
  },
  {
    id: "ml-engineer",
    title: "Machine Learning Engineer",
    department: "AI Labs",
    location: "Kochi, India (Hybrid)",
    type: "Full-time",
    experience: "3+ years",
    description:
      "Join our AI Labs team to develop and deploy machine learning models that solve real-world problems for our clients.",
    responsibilities: [
      "Design and implement ML models and algorithms",
      "Process and analyze large datasets",
      "Deploy and maintain ML models in production",
      "Collaborate with data scientists and engineers",
      "Stay current with ML/AI research and trends",
    ],
    requirements: [
      "3+ years of experience in machine learning",
      "Strong Python programming skills",
      "Experience with TensorFlow, PyTorch, or similar",
      "Understanding of deep learning concepts",
      "Experience with cloud ML services (AWS, GCP)",
    ],
    icon: Brain,
  },
  {
    id: "devops-engineer",
    title: "DevOps Engineer",
    department: "Infrastructure",
    location: "Kochi, India (On-site)",
    type: "Full-time",
    experience: "3+ years",
    description:
      "We're looking for a DevOps engineer to help us build and maintain our cloud infrastructure and CI/CD pipelines.",
    responsibilities: [
      "Design and implement CI/CD pipelines",
      "Manage AWS and GCP cloud infrastructure",
      "Implement security best practices",
      "Monitor and optimize system performance",
      "Automate deployment processes",
    ],
    requirements: [
      "3+ years of DevOps experience",
      "Strong knowledge of AWS or GCP",
      "Experience with Docker and Kubernetes",
      "Proficiency in scripting (Bash, Python)",
      "Understanding of infrastructure as code (Terraform)",
    ],
    icon: Cloud,
  },
  {
    id: "nodejs-developer",
    title: "Node.js Backend Developer",
    department: "Engineering",
    location: "Kochi, India (Hybrid)",
    type: "Full-time",
    experience: "2+ years",
    description:
      "Join our backend team to design and build scalable server-side applications and APIs using Node.js.",
    responsibilities: [
      "Design and implement RESTful APIs",
      "Build scalable and secure backend services",
      "Optimize database queries and performance",
      "Write unit and integration tests",
      "Collaborate with front-end developers",
    ],
    requirements: [
      "2+ years of Node.js development experience",
      "Strong knowledge of Express.js or NestJS",
      "Experience with MongoDB and PostgreSQL",
      "Understanding of microservices architecture",
      "Familiarity with message queues (Redis, RabbitMQ)",
    ],
    icon: Server,
  },
];

export const CAREER_HERO = {
  title: "Join Our Team",
  subtitle: "Build the Future with Us",
  description:
    "We're always looking for talented individuals who are passionate about technology and innovation. Join NOVIZCO and be part of a team that's shaping the future of digital solutions.",
  stats: [
    { value: "50+", label: "Team Members" },
    { value: "100+", label: "Projects Delivered" },
    { value: "5+", label: "Countries Served" },
    { value: "4.8", label: "Glassdoor Rating" },
  ],
} as const;

export const CAREER_BENEFITS = [
  {
    title: "Flexible Work",
    description: "Work from anywhere with our hybrid work model",
  },
  {
    title: "Health Insurance",
    description: "Comprehensive health coverage for you and family",
  },
  {
    title: "Learning Budget",
    description: "Annual budget for courses, books, and conferences",
  },
  {
    title: "Team Outings",
    description: "Regular team events and annual retreats",
  },
  {
    title: "Competitive Salary",
    description: "Market-leading compensation packages",
  },
  {
    title: "Career Growth",
    description: "Clear growth paths and mentorship programs",
  },
] as const;
