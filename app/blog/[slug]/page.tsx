"use client";

import { ParticleBackground } from "@/components/particle-background";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { THEME } from "@/lib/constants/theme";
import { getBlogPostBySlug } from "@/lib/services/blog";
import { BlogPost } from "@/lib/types/blog";
import { ArrowLeft, Calendar, Clock, FileX, User } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { use, useEffect, useState } from "react";

export default function BlogDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params);
  const [post, setPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchPost() {
      try {
        const response = await getBlogPostBySlug(slug);
        if (!response.post) {
          setError(true);
        } else {
          setPost(response.post);
        }
      } catch (err) {
        console.error("Failed to fetch blog post:", err);
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    fetchPost();
  }, [slug]);

  // Loading state
  if (loading) {
    return (
      <main className="relative min-h-screen">
        <ParticleBackground />
        <div className="relative z-10">
          <Navbar />
          <div className="pt-32 pb-24 px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto space-y-8">
              <div className="h-8 w-32 bg-muted/20 rounded animate-pulse" />
              <div className="h-12 w-full bg-muted/20 rounded animate-pulse" />
              <div className="aspect-video bg-muted/20 rounded-2xl animate-pulse" />
              <div className="space-y-4">
                <div className="h-4 w-full bg-muted/20 rounded animate-pulse" />
                <div className="h-4 w-3/4 bg-muted/20 rounded animate-pulse" />
                <div className="h-4 w-5/6 bg-muted/20 rounded animate-pulse" />
              </div>
            </div>
          </div>
        </div>
      </main>
    );
  }

  // Post not found state
  if (error || !post) {
    return (
      <main className="relative min-h-screen">
        <ParticleBackground />
        <div className="relative z-10">
          <Navbar />
          <div className="pt-32 pb-24 px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              {/* Icon */}
              <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-muted/20 mb-8">
                <FileX className="w-12 h-12 text-muted-foreground" />
              </div>

              {/* Message */}
              <h1 className={`${THEME.typography.heading.h2} mb-4`}>
                Post Not Found
              </h1>
              <p className="text-muted-foreground text-lg mb-8 max-w-md mx-auto">
                Sorry, the blog post you're looking for doesn't exist or may
                have been removed.
              </p>

              {/* Back Button */}
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-accent-foreground rounded-full font-medium hover:bg-accent/90 transition-colors group"
              >
                <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
                Back to Blog
              </Link>
            </div>
          </div>
          <Footer />
        </div>
      </main>
    );
  }

  return (
    <main className="relative min-h-screen">
      <ParticleBackground />
      <div className="relative z-10">
        <Navbar />

        <article className="pt-32 pb-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            {/* Back Link */}
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-accent transition-colors mb-8 group"
            >
              <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
              Back to Blog
            </Link>

            {/* Header */}
            <div className="space-y-6 mb-12">
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <span className="bg-accent/10 text-accent px-3 py-1 rounded-full text-xs font-semibold">
                  {post.category}
                </span>
                <span className="flex items-center gap-1">
                  <Calendar className="h-3 w-3" />
                  {post.date}
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="h-3 w-3" />
                  {post.readTime}
                </span>
              </div>

              <h1 className={`${THEME.typography.heading.h2} leading-tight`}>
                {post.title}
              </h1>

              <div className="flex items-center gap-3 pt-4 border-t border-border/40">
                <div className="h-10 w-10 rounded-full bg-accent/20 flex items-center justify-center text-accent">
                  <User className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-sm font-medium">{post.author}</div>
                  <div className="text-xs text-muted-foreground">Author</div>
                </div>
              </div>
            </div>

            {/* Featured Image */}
            <div className="relative w-full aspect-video rounded-2xl overflow-hidden mb-12 border border-border/50 shadow-2xl shadow-black/50">
              <Image
                src={post.imageUrl}
                alt={post.title}
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Content */}
            <div className="prose prose-lg dark:prose-invert max-w-none text-muted-foreground leading-relaxed">
              {post.content}
            </div>
          </div>
        </article>

        <Footer />
      </div>
    </main>
  );
}
