import Link from "next/link";

const LINKS = [
  { href: "/", label: "Home" },
  { href: "/github-basics", label: "GitHub Basics" },
  { href: "/push-deploy", label: "Push & Deploy" },
] as const;

const EXTERNAL = [
  { href: "https://git-scm.com/doc", label: "Git docs" },
  { href: "https://vercel.com/docs", label: "Vercel docs" },
  { href: "https://nextjs.org/docs", label: "Next.js docs" },
] as const;

export default function Footer() {
  return (
    <footer
      className="mt-auto border-t border-zinc-200 bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-900/50"
      role="contentinfo"
    >
      <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="font-semibold text-zinc-900 dark:text-zinc-100">
              Git & Vercel Tutorial
            </p>
            <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
              Learn GitHub basics and deploy Next.js on Vercel.
            </p>
          </div>
          <nav aria-label="Footer navigation">
            <ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
              {LINKS.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div className="mt-6 border-t border-zinc-200 pt-6 dark:border-zinc-800">
          <p className="text-xs text-zinc-500 dark:text-zinc-500">
            External resources:{" "}
            {EXTERNAL.map(({ href, label }, i) => (
              <span key={href}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-violet-600 hover:underline dark:text-violet-400"
                >
                  {label}
                </a>
                {i < EXTERNAL.length - 1 ? ", " : ""}
              </span>
            ))}
          </p>
        </div>
      </div>
    </footer>
  );
}
