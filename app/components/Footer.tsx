import Link from "next/link";
import { site } from "@/lib/site";

const MAIN_LINKS = [
  { href: "/", label: "Home" },
  { href: "/github-basics", label: "GitHub Basics" },
  { href: "/push-deploy", label: "Push & Deploy" },
  { href: "/coding-standards", label: "CI/CD Standards" },
  { href: "/docker", label: "Docker" },
  { href: "/contact", label: "Contact" },
] as const;

const RESOURCES = [
  { href: "https://git-scm.com/doc", label: "Git docs" },
  { href: "https://vercel.com/docs", label: "Vercel docs" },
  { href: "https://nextjs.org/docs", label: "Next.js docs" },
  { href: "https://docs.docker.com", label: "Docker docs" },
] as const;

export default function Footer() {
  return (
    <footer
      className="mt-auto border-t border-zinc-200 bg-zinc-100 dark:border-zinc-800 dark:bg-zinc-900/80"
      role="contentinfo"
    >
      <div className="mx-auto max-w-5xl px-4 py-6 sm:px-6 sm:py-10">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 sm:gap-8">
          <div className="sm:col-span-2 lg:col-span-1">
            <p className="text-lg font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
              TechTrio Automation
            </p>
            <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
              Git & Vercel tutorial, CI/CD standards, and Docker guides for
              students and teams. Our main site:{" "}
              <a
                href={site.mainSiteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-violet-600 hover:underline dark:text-violet-400"
              >
                techtrio.net
              </a>
            </p>
            <a
              href={site.mainSiteUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-flex min-h-[44px] min-w-[44px] items-center justify-center rounded-lg px-4 py-2.5 text-sm font-medium text-violet-600 hover:bg-violet-100 hover:text-violet-800 dark:text-violet-400 dark:hover:bg-violet-900/30 dark:hover:text-violet-300"
            >
              Visit techtrio.net →
            </a>
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-500">
              Tutorials
            </p>
            <ul className="mt-3 space-y-1">
              {MAIN_LINKS.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="block min-h-[44px] py-2 text-sm text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 sm:min-h-0 sm:py-1"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-500">
              Resources
            </p>
            <ul className="mt-3 space-y-1">
              {RESOURCES.map(({ href, label }) => (
                <li key={href}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block min-h-[44px] py-2 text-sm text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 sm:min-h-0 sm:py-1"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-zinc-200 pt-6 dark:border-zinc-800">
          <p className="text-center text-xs text-zinc-500 dark:text-zinc-500">
            © {new Date().getFullYear()} TechTrio Automation. Tutorial content
            for learning Git, GitHub, Vercel, CI/CD, and Docker.{" "}
            <a
              href={site.mainSiteUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-violet-600 hover:underline dark:text-violet-400"
            >
              techtrio.net
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
