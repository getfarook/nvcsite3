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
      "Artificial Intelligence continues to evolve at a breakneck pace. From generative models to autonomous agents, here's what to expect in the coming year.",
    date: "Jan 02, 2026",
    imageUrl:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800",
    category: "AI & Innovation",
    readTime: "5 min read",
  },
  {
    slug: "web-development-best-practices",
    title: "Modern Web Development: Best Practices for Performance",
    excerpt:
      "Speed matters. Learn how to optimize your Next.js applications for core web vitals and provide a seamless user experience.",
    date: "Dec 28, 2025",
    imageUrl:
      "https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&q=80&w=800",
    category: "Development",
    readTime: "7 min read",
  },
  {
    slug: "design-systems-guide",
    title: "Building Scalable Design Systems",
    excerpt:
      "A comprehensive guide to creating and maintaining design systems that ensure consistency and speed up development workflows.",
    date: "Dec 15, 2025",
    imageUrl:
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80&w=800",
    category: "Design",
    readTime: "6 min read",
  },
  {
    slug: "cloud-native-benefits",
    title: "Why Your Business Should Go Cloud-Native",
    excerpt:
      "Discover the benefits of cloud-native architecture, from scalability to resilience, and how it can transform your business operations.",
    date: "Dec 10, 2025",
    imageUrl:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800",
    category: "Cloud",
    readTime: "4 min read",
  },
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
    author: "Sarah Jenkin",
    content: (
      <>
        <p className="mb-6">
          Artificial Intelligence is no longer just a buzzword; it's the driving
          force behind modern innovation. As we step into 2026, the landscape of
          AI involves more than just generative text and images. We are seeing
          the rise of autonomous agents, personalized education systems, and
          breakthrough medical diagnostics.
        </p>
        <h2 className="text-2xl font-bold mb-4">Autonomous Agents</h2>
        <p className="mb-6">
          The next generation of AI isn't just about answering questions; it's
          about taking action. Agents that can plan, execute, and verify complex
          tasks are becoming mainstream. From booking travel arrangements to
          writing and deploying code, these agents act as force multipliers for
          human productivity.
        </p>
        <h2 className="text-2xl font-bold mb-4">Ethical AI and Governance</h2>
        <p className="mb-6">
          With great power comes great responsibility. 2026 sees a massive push
          towards transparent and explainable AI. Governments and organizations
          are collaborating to establish frameworks that ensure AI is used
          safely and equitably, minimizing bias and maximizing societal benefit.
        </p>
        <div className="bg-accent/10 border-l-4 border-accent p-4 my-8 italic text-muted-foreground">
          "The true measure of AI progress isn't just intelligence, but its
          ability to integrate seamlessly and safely into our daily lives."
        </div>
        <h2 className="text-2xl font-bold mb-4">Conclusion</h2>
        <p>
          The future is bright and automated. By staying ahead of these trends,
          businesses can leverage AI not just to survive, but to thrive in an
          increasingly digital world.
        </p>
      </>
    ),
  },
  "web-development-best-practices": {
    author: "Mike Ross",
    content: (
      <>
        <p className="mb-6">
          In the world of web development, performance is king. Users expect
          instant load times and buttery smooth interactions. If your site takes
          more than 3 seconds to load, you've likely lost half your audience.
        </p>
        <h2 className="text-2xl font-bold mb-4">Optimize Images</h2>
        <p className="mb-6">
          Images often account for the majority of a page's weight. Using modern
          formats like WebP or AVIF, and leveraging Next.js `Image` component
          for automatic optimization, can drastically reduce bandwidth usage.
        </p>
        <h2 className="text-2xl font-bold mb-4">Code Splitting</h2>
        <p className="mb-6">
          Don't ship code the user doesn't need. Frameworks like Next.js handle
          route-based splitting automatically, but dynamic imports for heavy
          components can save crucial milliseconds on initial load.
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
