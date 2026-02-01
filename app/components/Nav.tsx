"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { site } from "@/lib/site";

const ITEMS = [
  { href: "/", label: "Home" },
  { href: "/github-basics", label: "GitHub Basics" },
  { href: "/push-deploy", label: "Push & Deploy" },
  { href: "/coding-standards", label: "CI/CD" },
  { href: "/docker", label: "Docker" },
  { href: "/contact", label: "Contact" },
] as const;

function NavLink({
  href,
  label,
  isActive,
  onClick,
}: {
  href: string;
  label: string;
  isActive: boolean;
  onClick?: () => void;
}) {
  return (
    <li>
      <Link
        href={href}
        onClick={onClick}
        className={`block rounded-lg px-3 py-2.5 text-sm font-medium transition focus:outline-none focus:ring-2 focus:ring-violet-500 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-zinc-950 min-h-[44px] flex items-center ${
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
}

export default function Nav() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav
      className="sticky top-0 z-20 border-b border-zinc-200 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80 dark:border-zinc-800 dark:bg-zinc-950/95 dark:supports-[backdrop-filter]:bg-zinc-950/80"
      aria-label="Main navigation"
    >
      <div className="mx-auto flex max-w-4xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <div className="flex min-w-0 flex-1 items-center gap-3">
          <Link
            href="/"
            className="shrink-0 text-base font-semibold text-zinc-900 dark:text-zinc-100 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-zinc-950 rounded sm:text-lg"
          >
            TechTrio Tutorial
          </Link>
          <a
            href={site.mainSiteUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden shrink-0 text-xs font-medium text-zinc-500 hover:text-zinc-700 dark:text-zinc-400 dark:hover:text-zinc-300 sm:inline"
          >
            techtrio.net →
          </a>
        </div>

        {/* Desktop: inline links */}
        <ul className="hidden flex-wrap items-center gap-1 md:flex">
          {ITEMS.map(({ href, label }) => {
            const isActive =
              href === "/" ? pathname === "/" : pathname.startsWith(href);
            return (
              <NavLink key={href} href={href} label={label} isActive={isActive} />
            );
          })}
        </ul>

        {/* Mobile: hamburger + drawer */}
        <div className="flex items-center gap-2 md:hidden">
          <a
            href={site.mainSiteUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg px-2 py-2 text-xs font-medium text-zinc-500 min-h-[44px] flex items-center"
          >
            techtrio.net
          </a>
          <button
            type="button"
            onClick={() => setMobileOpen((o) => !o)}
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg text-zinc-600 hover:bg-zinc-100 focus:outline-none focus:ring-2 focus:ring-violet-500 dark:text-zinc-400 dark:hover:bg-zinc-800"
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            {mobileOpen ? (
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <div
        id="mobile-nav"
        className={`border-t border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-950 md:hidden ${mobileOpen ? "block" : "hidden"}`}
        role="dialog"
        aria-label="Navigation menu"
      >
        <ul className="max-h-[70vh] overflow-y-auto px-2 py-3">
          {ITEMS.map(({ href, label }) => {
            const isActive =
              href === "/" ? pathname === "/" : pathname.startsWith(href);
            return (
              <NavLink
                key={href}
                href={href}
                label={label}
                isActive={isActive}
                onClick={() => setMobileOpen(false)}
              />
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
