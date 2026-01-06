"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Calendar } from "lucide-react";
import { THEME } from "@/lib/constants/theme";

interface BlogPostCardProps {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  imageUrl: string;
  category: string;
  readTime: string;
}

export function BlogPostCard({
  slug,
  title,
  excerpt,
  date,
  imageUrl,
  category,
  readTime,
}: BlogPostCardProps) {
  return (
    <Link href={`/blog/${slug}`} className="group h-full">
      <div
        className={`h-full flex flex-col ${THEME.card.base} rounded-2xl overflow-hidden`}
      >
        {/* Image Container */}
        <div className="relative h-48 sm:h-56 -mx-6 -mt-6 mb-6 overflow-hidden">
          <Image
            src={imageUrl}
            alt={title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute top-4 left-4 bg-background/80 backdrop-blur-md px-3 py-1 rounded-full text-xs font-semibold text-foreground border border-border/50">
            {category}
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 flex flex-col">
          <div className="flex items-center gap-3 text-xs text-muted-foreground mb-3">
            <span className="flex items-center gap-1">
              <Calendar className="h-3 w-3" />
              {date}
            </span>
            <span>•</span>
            <span>{readTime}</span>
          </div>

          <h3 className="text-xl font-bold mb-3 group-hover:text-accent transition-colors line-clamp-2">
            {title}
          </h3>

          <p className="text-muted-foreground text-sm line-clamp-3 mb-6 flex-1">
            {excerpt}
          </p>

          <div className="flex items-center gap-2 text-sm font-medium text-accent mt-auto">
            Read Article
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </div>
        </div>
      </div>
    </Link>
  );
}
