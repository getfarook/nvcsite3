import { ReactNode } from "react";

/**
 * Blog post data for listing pages (cards, grids, etc.)
 */
export interface BlogPostSummary {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  imageUrl: string;
  category: string;
  readTime: string;
}

/**
 * Full blog post data including content for detail pages
 */
export interface BlogPost extends Omit<BlogPostSummary, "excerpt"> {
  author: string;
  content: ReactNode;
}

/**
 * API response type for blog listing
 */
export interface BlogListResponse {
  posts: BlogPostSummary[];
  total: number;
  page: number;
  pageSize: number;
}

/**
 * API response type for single blog post
 */
export interface BlogPostResponse {
  post: BlogPost | null;
}
