import { MetadataRoute } from "next";
import { getBlogPosts } from "@/lib/services/blog";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://novizco.com"; // Replace with actual domain

  // Static routes
  const routes = [
    "",
    "/services",
    "/about",
    "/contact",
    "/blog",
    "/careers",
    "/hire-resource",
    "/ai-labs",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: route === "" ? 1 : 0.8,
  }));

  // Dynamic blog routes
  const { posts } = await getBlogPosts(1, 100); // Fetch all posts (adjust limit as needed)
  const blogRoutes = posts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.date), // Assuming date is parsable
    changeFrequency: "weekly" as const,
    priority: 0.6,
  }));

  return [...routes, ...blogRoutes];
}
