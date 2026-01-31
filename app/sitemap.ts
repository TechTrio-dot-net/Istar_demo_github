import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

const PAGES = ["", "/github-basics", "/push-deploy"] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const base = site.baseUrl || "https://example.com";
  const baseUrl = base.endsWith("/") ? base.slice(0, -1) : base;
  return PAGES.map((path) => ({
    url: path ? `${baseUrl}${path}` : `${baseUrl}/`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: path === "" ? 1 : 0.8,
  }));
}
