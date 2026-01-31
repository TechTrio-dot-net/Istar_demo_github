"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const ITEMS = [
  { href: "/", label: "Home" },
  { href: "/github-basics", label: "GitHub Basics" },
  { href: "/push-deploy", label: "Push & Deploy" },
] as const;

export default function Nav() {
  const pathname = usePathname();

  return (
    <nav
      className="sticky top-0 z-10 border-b border-zinc-200 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80 dark:border-zinc-800 dark:bg-zinc-950/95 dark:supports-[backdrop-filter]:bg-zinc-950/80"
      aria-label="Main navigation"
    >
      <div className="mx-auto flex max-w-4xl items-center justify-between gap-4 px-4 py-3">
        <Link
          href="/"
          className="text-lg font-semibold text-zinc-900 dark:text-zinc-100 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-zinc-950 rounded"
        >
          Git & Vercel Tutorial
        </Link>
        <ul className="flex gap-1 sm:gap-2">
          {ITEMS.map(({ href, label }) => {
            const isActive =
              href === "/" ? pathname === "/" : pathname.startsWith(href);
            return (
              <li key={href}>
                <Link
                  href={href}
                  className={`rounded px-3 py-2 text-sm font-medium transition focus:outline-none focus:ring-2 focus:ring-violet-500 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-zinc-950 ${
                    isActive
                      ? "bg-violet-100 text-violet-800 dark:bg-violet-900/50 dark:text-violet-200"
                      : "text-zinc-600 hover:bg-zinc-100 hover:text-zinc-900 dark:text-zinc-400 dark:hover:bg-zinc-800 dark:hover:text-zinc-100"
                  }`}
                  aria-current={isActive ? "page" : undefined}
                >
                  {label}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
