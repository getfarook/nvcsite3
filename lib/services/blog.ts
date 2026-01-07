import {
  BlogPost,
  BlogPostSummary,
  BlogListResponse,
  BlogPostResponse,
} from "@/lib/types/blog";
import {
  BLOG_POST_SUMMARIES,
  BLOG_POST_CONTENT,
  DEFAULT_BLOG_POST_CONTENT,
} from "@/lib/constants/blog";

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
  // Simulate API delay (remove in production)
  // await new Promise(resolve => setTimeout(resolve, 100));

  const start = (page - 1) * pageSize;
  const end = start + pageSize;
  const paginatedPosts = BLOG_POST_SUMMARIES.slice(start, end);

  return {
    posts: paginatedPosts,
    total: BLOG_POST_SUMMARIES.length,
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
  // Simulate API delay (remove in production)
  // await new Promise(resolve => setTimeout(resolve, 100));

  // Find the summary data
  const summary = BLOG_POST_SUMMARIES.find((post) => post.slug === slug);

  if (!summary) {
    return { post: null };
  }

  // Get the content (or use default)
  const contentData = BLOG_POST_CONTENT[slug] || DEFAULT_BLOG_POST_CONTENT;

  // Combine summary and content to form full post
  const post: BlogPost = {
    slug: summary.slug,
    title: summary.title,
    date: summary.date,
    imageUrl: summary.imageUrl,
    category: summary.category,
    readTime: summary.readTime,
    excerpt: summary.excerpt,
    author: contentData.author,
    content: contentData.content,
  };

  return { post };
}

/**
 * Checks if a blog post exists
 *
 * @param slug - The blog post slug
 * @returns Promise<boolean>
 *
 * TODO: Replace with API call or use getBlogPostBySlug
 */
export async function blogPostExists(slug: string): Promise<boolean> {
  return BLOG_POST_SUMMARIES.some((post) => post.slug === slug);
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
  return BLOG_POST_SUMMARIES.map((post) => post.slug);
}
