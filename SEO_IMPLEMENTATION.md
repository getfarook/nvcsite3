# SEO Implementation Guide

This document outlines the Search Engine Optimization (SEO) strategies and technical implementations applied to the Novizco Infotech website. The implementation follows Next.js best practices and aims for a high SEO ranking (10/10).

## 1. Global Metadata Configuration

**File:** `app/layout.tsx`

The root layout defines the baseline metadata for the entire application. This ensures that every page has essential tags even if they don't define their own.

- **Metadata Base**: Set to `https://novizco.com` to resolve all relative URLs (like images and links) to absolute URLs, which is critical for social sharing.
- **Title Template**: Uses a `%s | NOVIZCO INFOTECH` template. Pages can define their own title (e.g., "Services"), and it will automatically appear as "Services | NOVIZCO INFOTECH".
- **Keywords**: A comprehensive list of relevant keywords (e.g., "Web Development", "Flutter", "AI Labs") helps search engines understand the site's niche.
- **Open Graph (OG)**: Configured for Facebook, LinkedIn, and other platforms. It defines how the site looks when shared (Title, Description, Image).
- **Twitter Cards**: Configured to show a "Summary Large Image" card when links are tweeted.
- **Robots**: Explicitly instructs bots to `index` (show in results) and `follow` (trace links on the page).
- **Canonical URL**: specifices the master copy of a page to prevent duplicate content issues.

## 2. Dynamic Blog SEO & Structured Data

**File:** `app/blog/[slug]/page.tsx`

The blog detail page is a **Server Component** that dynamically generates SEO tags based on the specific post content.

- **`generateMetadata` Function**:
  - Fetches the blog post data before the page renders.
  - Sets the page **Title** to the blog post title.
  - Sets the **Description** using the post's `excerpt` (first few sentences).
  - Sets dynamic **Open Graph** images to the blog post's featured image.
- **JSON-LD (Structured Data)**:
  - We inject a `<script type="application/ld+json">` tag containing **Schema.org** data.
  - **Type**: `BlogPosting`
  - **Fields**: Headline, Image, Date Published, Author, and Description.
  - **Benefit**: This helps Google display "Rich Snippets" (e.g., the article appearing in Google News or top stories carousels).

## 3. Dynamic Sitemap

**File:** `app/sitemap.ts`

We use a dynamic sitemap generator that Next.js automatically detects. This file:

- Lists all static routes (`/`, `/about`, `/services`, etc.) with their change frequency and priority.
- **Dynamically fetches all blog posts** and adds their URLs to the sitemap.
- This ensures that whenever a new blog post is added, Google knows about it immediately without manual updates.
- **Access**: The sitemap is available at `https://novizco.com/sitemap.xml`.

## 4. Robots.txt

**File:** `app/robots.ts`

This file gives instructions to search engine crawlers (bots).

- **User Agent `*`**: Applies to all bots (Googlebot, Bingbot, etc.).
- **Allow**: Allows crawling of the main site (`/`).
- **Disallow**: Prevents crawling of private areas like `/api/` or `/admin/` to save crawl budget and security.
- **Sitemap Link**: Explicitly points bots to the `sitemap.xml` file.

## 5. Performance & User Experience (Core Web Vitals)

While not code-specific tags, these existing features contribute heavily to SEO ranking:

- **Next.js Image Component**: Automatically optimizes images (WebP format, lazy loading) to improve Largest Contentful Paint (LCP).
- **Semantic HTML**: Proper use of `<article>`, `<h1>`, `<main>`, and `<time>` tags helps crawlers understand the content hierarchy.
- **Server-Side Rendering (SSR)**: The blog and marketing pages are rendered on the server, ensuring bots see the full HTML content immediately (unlike client-side formatted SPAs).
