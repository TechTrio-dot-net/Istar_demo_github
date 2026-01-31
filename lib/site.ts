/**
 * Site-wide config for metadata and URLs.
 * Vercel sets VERCEL_URL (e.g. your-app.vercel.app) in production.
 */
export const site = {
  name: "Git & Vercel Tutorial",
  description:
    "Learn GitHub basics (status, branch, checkout, switch) and how to push to GitHub and deploy Next.js on Vercel. Tutorial for students with tips and practice questions.",
  /** Base URL for canonical and Open Graph. Leave empty to use relative URLs. */
  baseUrl:
    process.env.NEXT_PUBLIC_SITE_URL ||
    process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}`
      : "",
} as const;
