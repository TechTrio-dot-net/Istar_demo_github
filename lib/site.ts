/**
 * Site-wide config for metadata and URLs.
 * Vercel sets VERCEL_URL (e.g. your-app.vercel.app) in production.
 */
export const site = {
  name: "TechTrio Tutorial",
  description:
    "Learn GitHub basics, push to GitHub, deploy Next.js on Vercel, CI/CD coding standards, and Docker. TechTrio Automation tutorial for students with tips and practice questions.",
  /** Our main site: TechTrio company site */
  mainSiteUrl: "https://techtrio.net",
  /** Base URL for canonical and Open Graph. Leave empty to use relative URLs. */
  baseUrl:
    process.env.NEXT_PUBLIC_SITE_URL ||
    process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}`
      : "",
} as const;
