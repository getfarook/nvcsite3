import {
  Brain,
  Cpu,
  Database,
  Globe,
  Layout,
  LineChart,
  Network,
  Server,
  Code,
  Cloud,
} from "lucide-react";

export const AI_LABS_HERO = {
  title: "AI Labs",
  subtitle: "Consulting & Enablement",
  description:
    "Novizco AI Labs helps teams explore, design, and implement practical AI solutions. We guide businesses through AI strategy, development, and integration—enabling you to adopt and scale AI with confidence.",
};

export const AI_LABS_FEATURES = [
  {
    title: "AI Consulting",
    description:
      "We help you identify where AI fits in your business and what value it can create. From strategy to architecture and implementation planning, we guide you in building practical, high-impact AI solutions that align with your goals.",
    icon: Brain,
  },
  {
    title: "AI Enablement",
    description:
      " We prepare your engineering teams to adopt and work with modern AI tools, frameworks, and workflows. From integrating LLMs to designing agentic systems, we help your tech teams become AI-ready",
    icon: Cpu,
  },
  {
    title: "AI Red-Teaming & Evaluation",
    description:
      "Novizco builds and  tests your AI systems for accuracy, safety, bias, and reliability using industry-leading tools like Garak, Giskard, PyRIT, DeepEval, PromptFoo, and DeepChecks. This ensures your AI behaves correctly before and after real-world deployment.",
    icon: Cloud,
  },
  {
    title: "Cloud AI Solutions",
    description:
      "We build and deploy scalable AI systems on AWS, Azure, and GCP. From model hosting to vector databases and serverless pipelines, our cloud AI setups ensure performance, security, and seamless integration with your existing applications.",
    icon: Network,
  },
];

export const AI_LABS_INDUSTRIES = [
  { name: "Multi-Agent Workflows", icon: LineChart },
  { name: "Generative AI Applications", icon: Globe },
  { name: "RAG-Based AI Systems", icon: Database },
  { name: "Conversational AI (Chat & Voice)", icon: Layout },
  { name: "AI Quality, Risk & Compliance", icon: Server },
  { name: "AI Workflow Automation", icon: Code },
];

export const AI_STACK = [
  "Python",
  "TensorFlow",
  "Hugging Face",
  "LangChain",
  "LlamaIndex",
  "Azure OpenAI",
  "AWS SageMaker",
  "MLOps",
  "Garak",
  "Giskard",
];
