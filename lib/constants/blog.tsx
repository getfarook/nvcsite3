import { BlogPost, BlogPostSummary } from "@/lib/types/blog";

/**
 * Static blog post summaries for listing pages
 * This will be replaced by API data in production
 */
export const BLOG_POST_SUMMARIES: BlogPostSummary[] = [
  {
    slug: "future-of-ai-2026",
    title: "The Future of AI in 2026: Trends to Watch",
    excerpt:
      "AI in 2026 is becoming core business infrastructure, not an experiment. From agentic AI and RAG to safety, evaluation, and cloud-native deployment, this blog explores the trends shaping real-world AI adoption.",
    date: "Jan 02, 2026",
    imageUrl:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800",
    category: "AI & Innovation",
    readTime: "5 min read",
  },
  {
    slug: "how-to-make-your-tech-team-ai-ready",
    title: "How to Make Your Tech Team AI-Ready",
    excerpt:
      "A practical look at how teams can integrate AI, RAG, agents, and evaluation workflows into real projects. Discover what it means to build an AI-ready engineering team.",
    date: "Dec 28, 2025",
    imageUrl:
      "https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&q=80&w=800",
    category: "Development",
    readTime: "7 min read",
  },
  {
    slug: "what-makes-a-great-mobile-app",
    title: "What Makes a Great Mobile App in Today’s Tech Landscape?",
    excerpt:
      "Modern mobile apps need more than good UI—they require strong architecture, smooth performance, secure integrations, and continuous support. This blog explores what truly makes a high-quality mobile app and how Novizco builds products that scale with your business.",
    date: "Dec 15, 2025",
    imageUrl:
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80&w=800",
    category: "Design",
    readTime: "6 min read",
  },
  // {
  //   slug: "cloud-native-benefits",
  //   title: "Why Your Business Should Go Cloud-Native",
  //   excerpt:
  //     "Discover the benefits of cloud-native architecture, from scalability to resilience, and how it can transform your business operations.",
  //   date: "Dec 10, 2025",
  //   imageUrl:
  //     "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800",
  //   category: "Cloud",
  //   readTime: "4 min read",
  // },
];

/**
 * Static blog post content lookup by slug
 * This will be replaced by API data in production
 */
export const BLOG_POST_CONTENT: Record<
  string,
  Pick<BlogPost, "author" | "content">
> = {
  "future-of-ai-2026": {
    author: "Novizco Team",
    content: (
      <>
        <p className="mb-6">
          As we move into 2026, artificial intelligence is no longer seen as an
          emerging technology but as a foundational layer of modern digital
          systems. Organizations across industries are moving beyond pilots and
          proofs of concept, embedding AI directly into their products,
          platforms, and operations. The focus has shifted from whether to use
          AI to how to use it responsibly, effectively, and at scale. This shift
          is being driven by better models, stronger cloud infrastructure, and a
          clearer understanding of AI's real business value.
        </p>
        <h2 className="text-2xl font-bold mb-4">
          Agentic AI and Autonomous Workflows
        </h2>
        <p className="mb-6">
          One of the most important developments shaping 2026 is the rise of
          agentic AI and autonomous workflows. AI systems are evolving from
          passive responders into active participants that can plan tasks, make
          decisions, and execute actions across tools and systems. Alongside
          this, Retrieval-Augmented Generation (RAG) has become a standard
          architectural approach for enterprise AI. By grounding model responses
          in verified internal data, RAG helps businesses build AI systems that
          are more accurate, contextual, and dependable—addressing long-standing
          concerns around hallucinations and trust.
        </p>
        <h2 className="text-2xl font-bold mb-4">
          Evaluation, Safety, and Governance
        </h2>
        <p className="mb-6">
          With AI becoming deeply embedded in critical workflows, evaluation,
          safety, and governance are now central priorities. Organizations are
          increasingly adopting structured evaluation frameworks and red-teaming
          practices to test models for accuracy, bias, security risks, and
          compliance. Tools designed for continuous AI testing are becoming as
          essential as traditional QA processes, reflecting a growing awareness
          that AI systems require ongoing oversight throughout their lifecycle,
          not just at launch.
        </p>
        <div className="bg-accent/10 border-l-4 border-accent p-4 my-8 italic text-muted-foreground">
          "The defining characteristic of AI in 2026 will be its role as core
          business infrastructure—quietly powering smarter decisions, efficient
          operations, and more adaptive digital experiences."
        </div>
        <h2 className="text-2xl font-bold mb-4">Cloud-Native AI at Scale</h2>
        <p>
          At the same time, cloud-native AI platforms are accelerating adoption
          at scale. Services from AWS, Azure, and Google Cloud are making it
          easier to deploy production-ready AI with built-in support for GPUs,
          vector databases, and monitoring pipelines. This combination of
          scalable infrastructure and mature tooling is enabling businesses to
          move faster while maintaining reliability and cost control. Looking
          ahead, the defining characteristic of AI in 2026 will be its role as
          core business infrastructure—quietly powering smarter decisions,
          efficient operations, and more adaptive digital experiences.
        </p>
      </>
    ),
  },
  "how-to-make-your-tech-team-ai-ready": {
    author: "Novizco Team",
    content: (
      <>
        <p className="mb-6">
          Artificial Intelligence is no longer a specialized add-on for digital
          products; it is becoming a core skill for every engineering team.
          Companies that want to stay competitive must ensure their developers,
          analysts, and product teams understand how to work with AI
          systems—from integrating LLMs to designing data pipelines and
          evaluating outputs. Becoming "AI-ready" doesn't mean turning everyone
          into data scientists; it means giving teams the awareness, tools, and
          direction needed to build reliable and responsible AI-powered
          features. This shift requires structured learning, practical exposure,
          and clear guidance on how AI fits into real business goals.
        </p>
        <h2 className="text-2xl font-bold mb-4">
          The Challenge of AI Adoption
        </h2>
        <p className="mb-6">
          Many organizations struggle because the AI landscape moves quickly and
          is often overwhelming. Developers may not know where to start, which
          frameworks to learn, or how to apply AI in a way that is safe,
          scalable, and aligned with product requirements. Concepts like RAG,
          vector databases, agentic AI workflows, and evaluation frameworks are
          new to most teams. At the same time, leaders may be unsure how to
          assess readiness, identify use cases, or adopt AI without disrupting
          existing systems. Making a team AI-ready requires bridging these gaps
          through hands-on learning, architectural clarity, and practical
          implementation pathways.
        </p>
        <h2 className="text-2xl font-bold mb-4">
          Novizco's AI Enablement Program
        </h2>
        <p className="mb-6">
          This is where Novizco's AI Enablement Program makes a meaningful
          difference. We work closely with engineering teams to teach them how
          to integrate AI into their existing stack, build prototypes, and
          understand when and where AI makes sense. Our enablement covers
          everything from LLM integration and RAG architectures to building
          autonomous agents and running evaluation tests using industry tools
          like Garak, Giskard, DeepEval, PyRIT, and PromptFoo. Instead of
          theoretical training, we focus on real use cases—helping teams
          implement features, solve problems, and understand the strengths and
          limitations of AI. The goal is simple: empower internal teams to build
          confidently and independently.
        </p>
        <div className="bg-accent/10 border-l-4 border-accent p-4 my-8 italic text-muted-foreground">
          "With the right enablement, your tech team becomes equipped to lead
          your company into the next era of intelligent digital products."
        </div>
        <h2 className="text-2xl font-bold mb-4">
          Building Long-Term AI Capability
        </h2>
        <p>
          By combining strategic guidance, hands-on engineering support, and
          ongoing mentorship, Novizco helps businesses accelerate their AI
          journey without the confusion or risk. Your teams learn modern
          frameworks, best practices, and safe deployment strategies while
          staying aligned with your product roadmap. Whether you are starting
          from scratch or looking to scale existing AI initiatives, we ensure
          your organization is not just using AI—but using it responsibly,
          effectively, and with long-term capability. With the right enablement,
          your tech team becomes equipped to lead your company into the next era
          of intelligent digital products.
        </p>
      </>
    ),
  },
  "what-makes-a-great-mobile-app": {
    author: "Novizco Team",
    content: (
      <>
        <p className="mb-6">
          Mobile apps have become the default interface for how people interact
          with brands, services, and information. But behind every smooth,
          intuitive experience is a deep stack of engineering decisions — from
          UI frameworks to performance layers, security, and long-term
          maintainability. Today, building a great mobile app is not about just
          shipping screens; it's about creating a system that can handle scale,
          evolve quickly, and deliver a consistent user experience across
          devices.
        </p>
        <h2 className="text-2xl font-bold mb-4">
          Modern Frameworks and Clean Architecture
        </h2>
        <p className="mb-6">
          Modern development frameworks like Flutter and React Native have
          changed how teams build apps, allowing shared codebases while still
          achieving near-native performance. Flutter's widget engine and React
          Native's bridge architecture enable fast UI rendering, faster
          development cycles, and easier iteration. But even with great
          frameworks, success depends on clean architecture — MVVM, BLoC, Redux,
          or layered domain-driven structures that keep code maintainable.
          Without a strong foundation, apps become harder to update, debug, and
          scale as new features are added.
        </p>
        <h2 className="text-2xl font-bold mb-4">Performance and Security</h2>
        <p className="mb-6">
          Performance is another key part of mobile engineering. Users expect
          instant load times, offline support, smooth animations, and stable
          behavior under bad networks — all of which require good API design,
          caching strategies, background sync, and careful state management.
          Security also plays a critical role: secure storage, proper auth
          flows, encrypted APIs, and compliance with OS best practices ensure
          the app stays protected as the user base grows.
        </p>
        <div className="bg-accent/10 border-l-4 border-accent p-4 my-8 italic text-muted-foreground">
          "The result is not just an app — but a product that can grow with your
          business and users."
        </div>
        <h2 className="text-2xl font-bold mb-4">
          Mobile Development as a Lifecycle
        </h2>
        <p>
          At Novizco, mobile development is not just coding — it's a lifecycle.
          We start with architecture, build with clean patterns, integrate APIs,
          optimize performance, and guide App Store and Play Store releases.
          After launch, our production support ensures bugs are fixed quickly,
          analytics are monitored, and new features roll out smoothly. The
          result is not just an app — but a product that can grow with your
          business and users.
        </p>
      </>
    ),
  },
};

/**
 * Default fallback content for posts without specific content
 */
export const DEFAULT_BLOG_POST_CONTENT: Pick<BlogPost, "author" | "content"> = {
  author: "Novizco Team",
  content: (
    <p>
      This is a placeholder for blog posts that don't have specific content
      defined in the demo. In a real application, this content would be fetched
      from a CMS or database based on the slug.
    </p>
  ),
};
