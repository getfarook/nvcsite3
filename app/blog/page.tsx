"use client";

import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { BlogPostCard } from "@/components/blog-post-card";
import { THEME } from "@/lib/constants/theme";
import { getBlogPosts } from "@/lib/services/blog";
import { BlogPostSummary } from "@/lib/types/blog";
import { useEffect, useState } from "react";

import { NeuralNetworkBackground } from "@/components/neural-network-background";

// ... existing imports ...

export default function BlogPage() {
  const [posts, setPosts] = useState<BlogPostSummary[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchPosts() {
      try {
        const response = await getBlogPosts();
        setPosts(response.posts);
      } catch (error) {
        console.error("Failed to fetch blog posts:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchPosts();
  }, []);

  return (
    <main className="relative min-h-screen">
      <div className="relative z-10">
        <Navbar />

        {/* Hero Section */}
        <section className="relative py-24 sm:py-32 flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden">
          <NeuralNetworkBackground spreadNearText />
          <div className="relative z-10 mx-auto max-w-7xl mt-16">
            <div className="text-center space-y-4">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-6 text-balance">
                Our{" "}
                <span className="bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
                  Blog
                </span>
              </h1>
              <p className="text-muted-foreground text-xl max-w-2xl mx-auto">
                Insights, thoughts, and trends from the world of technology and
                innovation.
              </p>
            </div>
          </div>
        </section>

        {/* Blog Grid Section */}
        <section
          className={`${THEME.spacing.section.py} ${THEME.spacing.section.px}`}
        >
          <div className={THEME.spacing.container}>
            {/* Blog Grid */}
            {loading ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[...Array(3)].map((_, i) => (
                  <div
                    key={i}
                    className="h-96 rounded-2xl bg-muted/20 animate-pulse"
                  />
                ))}
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {posts.map((post) => (
                  <BlogPostCard key={post.slug} {...post} />
                ))}
              </div>
            )}
          </div>
        </section>

        <Footer />
      </div>
    </main>
  );
}
