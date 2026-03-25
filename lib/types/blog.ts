import { ReactNode } from "react";

export type ContentBlock =
  | { type: "paragraph"; text: string }
  | { type: "heading"; text: string }
  | { type: "quote"; text: string };

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
 * Raw blog post as stored in constants — content is plain structured blocks
 */
export interface RawBlogPost extends BlogPostSummary {
  author: string;
  content: ContentBlock[];
}

/**
 * Full blog post data including rendered content for detail pages
 */
export interface BlogPost extends BlogPostSummary {
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
