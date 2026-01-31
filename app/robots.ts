import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = site.baseUrl || "https://example.com";
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
