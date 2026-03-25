import {
  BlogPost,
  BlogPostSummary,
  BlogListResponse,
  BlogPostResponse,
} from "@/lib/types/blog";
import { BLOG_POSTS, renderContent } from "@/lib/constants/blog";

/**
 * Blog Service
 *
 * This service layer abstracts data fetching for blog content.
 * Currently uses static data, but can be easily swapped for API calls.
 *
 * To migrate to API:
 * 1. Update these functions to call your API endpoints
 * 2. No changes needed in page components
 */

/**
 * Fetches all blog posts for listing pages
 *
 * @param page - Page number (1-indexed)
 * @param pageSize - Number of posts per page
 * @returns Promise with blog post summaries
 *
 * TODO: Replace with API call
 * Example: return fetch(`/api/blog?page=${page}&pageSize=${pageSize}`).then(res => res.json());
 */
export async function getBlogPosts(
  page: number = 1,
  pageSize: number = 10
): Promise<BlogListResponse> {
  const summaries: BlogPostSummary[] = BLOG_POSTS.map(
    ({ slug, title, excerpt, date, imageUrl, category, readTime }) => ({
      slug,
      title,
      excerpt,
      date,
      imageUrl,
      category,
      readTime,
    })
  );

  const start = (page - 1) * pageSize;
  const paginatedPosts = summaries.slice(start, start + pageSize);

  return {
    posts: paginatedPosts,
    total: summaries.length,
    page,
    pageSize,
  };
}

/**
 * Fetches a single blog post by slug
 *
 * @param slug - The blog post slug
 * @returns Promise with full blog post data or null if not found
 *
 * TODO: Replace with API call
 * Example: return fetch(`/api/blog/${slug}`).then(res => res.json());
 */
export async function getBlogPostBySlug(
  slug: string
): Promise<BlogPostResponse> {
  const raw = BLOG_POSTS.find((post) => post.slug === slug);

  if (!raw) {
    return { post: null };
  }

  const post: BlogPost = {
    slug: raw.slug,
    title: raw.title,
    excerpt: raw.excerpt,
    date: raw.date,
    imageUrl: raw.imageUrl,
    category: raw.category,
    readTime: raw.readTime,
    author: raw.author,
    content: renderContent(raw.content),
  };

  return { post };
}

/**
 * Checks if a blog post exists
 *
 * @param slug - The blog post slug
 * @returns Promise<boolean>
 */
export async function blogPostExists(slug: string): Promise<boolean> {
  return BLOG_POSTS.some((post) => post.slug === slug);
}

/**
 * Gets all blog post slugs (useful for static generation)
 *
 * @returns Promise with array of slugs
 *
 * TODO: Replace with API call
 * Example: return fetch('/api/blog/slugs').then(res => res.json());
 */
export async function getAllBlogSlugs(): Promise<string[]> {
  return BLOG_POSTS.map((post) => post.slug);
}
