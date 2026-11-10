import type { MetadataRoute } from "next";
import { allPosts } from "content-collections";
import { DATA } from "@/data/resume";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const posts = allPosts.map((post) => ({
    url: `${DATA.url}/blog/${post._meta.path.replace(/\.mdx$/, "")}`,
    lastModified: new Date(post.publishedAt),
  }));
  return [
    { url: DATA.url, lastModified: now, priority: 1 },
    { url: `${DATA.url}/cv`, lastModified: now, priority: 0.8 },
    ...(posts.length ? [{ url: `${DATA.url}/blog`, lastModified: now }] : []),
    ...posts,
  ];
}
