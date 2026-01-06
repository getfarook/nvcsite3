"use client";

import { ParticleBackground } from "@/components/particle-background";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { BlogPostCard } from "@/components/blog-post-card";
import { THEME } from "@/lib/constants/theme";
import { getBlogPosts } from "@/lib/services/blog";
import { BlogPostSummary } from "@/lib/types/blog";
import { useEffect, useState } from "react";

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
      <ParticleBackground />
      <div className="relative z-10">
        <Navbar />

        <section
          className={`${THEME.spacing.section.py} ${THEME.spacing.section.px}`}
        >
          <div className={THEME.spacing.container}>
            {/* Header */}
            <div className="text-center mb-16 space-y-4">
              <h1 className={THEME.typography.heading.h1}>
                Our <span className="text-accent">Blog</span>
              </h1>
              <p className="text-muted-foreground text-xl max-w-2xl mx-auto">
                Insights, thoughts, and trends from the world of technology and
                innovation.
              </p>
            </div>

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
