import Link from "next/link";

const CARDS = [
  {
    href: "/github-basics",
    icon: "📚",
    title: "GitHub Basics",
    description:
      "From scratch to advanced: what Git is, install, status, branch, add, commit, push, pull, merge, stash, rebase, and conflicts.",
  },
  {
    href: "/push-deploy",
    icon: "🚀",
    title: "Push & Deploy to Vercel",
    description:
      "Prerequisites, push to GitHub, deploy on Vercel. Advanced: custom domains, env vars, rollbacks, preview deployments.",
  },
  {
    href: "/coding-standards",
    icon: "✓",
    title: "CI/CD Coding Standards",
    description:
      "What is CI/CD, first workflow, lint/format/typecheck/test. Advanced: caching, matrix builds, deploy steps.",
  },
  {
    href: "/docker",
    icon: "🐳",
    title: "Docker",
    description:
      "What is Docker, install, build & run. Advanced: volumes, networks, bind mounts, production tips.",
  },
  {
    href: "/contact",
    icon: "✉",
    title: "Contact & Help",
    description:
      "Report an issue, ask for reference help, or share feedback. Attach screenshots (up to 4 images).",
  },
] as const;

const TIPS = [
  {
    title: "Run the app and follow along",
    body: "Run npm run dev and open http://localhost:3000. Keep the tutorial open and try each command in your terminal as you read.",
  },
  {
    title: "Answer the questions yourself first",
    body: "Each tutorial has a “Check your understanding” section. Try to answer each question before expanding the answer.",
  },
  {
    title: "Use the quick jump links",
    body: "At the top of each tutorial you can jump to Best tips, specific commands, or practice questions.",
  },
] as const;

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-50 to-zinc-100 dark:from-zinc-950 dark:to-zinc-900">
      <main className="mx-auto max-w-4xl px-4 py-8 sm:px-6 sm:py-12">
        <div className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm sm:p-8 dark:border-zinc-800 dark:bg-zinc-900">
          <p className="text-sm font-medium uppercase tracking-wider text-zinc-500 dark:text-zinc-500">
            TechTrio Automation
          </p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 sm:text-4xl">
            Git & Vercel Tutorial
          </h1>
          <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-400">
            Use this codebase to learn how to push your code to GitHub, deploy
            on Vercel, run CI/CD standards, and use Docker. All tutorials, tips,
            and practice questions are on this site.
          </p>
        </div>

        <div className="mt-8 grid gap-4 sm:mt-10 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
          {CARDS.map(({ href, icon, title, description }) => (
            <Link
              key={href}
              href={href}
              className="group flex min-h-[120px] flex-col rounded-xl border border-zinc-200 bg-white p-4 shadow-sm transition hover:border-zinc-300 hover:shadow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 focus-visible:ring-offset-2 active:bg-zinc-50 dark:border-zinc-700 dark:bg-zinc-900 dark:hover:border-zinc-600 dark:active:bg-zinc-800 sm:min-h-0 sm:p-5"
            >
              <span className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-zinc-100 text-xl dark:bg-zinc-800">
                {icon}
              </span>
              <h2 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">
                {title}
              </h2>
              <p className="mt-1.5 flex-1 text-sm text-zinc-600 dark:text-zinc-400">
                {description}
              </p>
              <span className="mt-3 text-sm font-medium text-violet-600 dark:text-violet-400 group-hover:underline">
                Open →
              </span>
            </Link>
          ))}
        </div>

        <section className="mt-8 sm:mt-10">
          <h2 className="text-base font-semibold text-zinc-900 dark:text-zinc-100">
            Tips for success
          </h2>
          <div className="mt-4 rounded-xl border border-zinc-200 bg-white p-4 shadow-sm sm:p-5 dark:border-zinc-700 dark:bg-zinc-900">
            <ul className="space-y-4">
              {TIPS.map(({ title, body }, i) => (
                <li key={i} className="flex gap-4">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-violet-100 text-sm font-semibold text-violet-700 dark:bg-violet-900/50 dark:text-violet-300">
                    {i + 1}
                  </span>
                  <div>
                    <p className="font-medium text-zinc-800 dark:text-zinc-200">
                      {title}
                    </p>
                    <p className="mt-0.5 text-sm text-zinc-600 dark:text-zinc-400">
                      {body}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <div className="mt-8 rounded-xl border border-zinc-200 bg-white p-4 shadow-sm sm:mt-10 sm:p-5 dark:border-zinc-700 dark:bg-zinc-900">
          <p className="text-sm font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-500">
            Quick start
          </p>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
            Start with <strong>GitHub Basics</strong> if you&apos;re new to Git. Then
            <strong> Push & Deploy</strong>, <strong>CI/CD Standards</strong>, and
            <strong> Docker</strong>. Use <strong>Contact</strong> for issues or
            reference help (screenshots welcome).
          </p>
        </div>
      </main>
    </div>
  );
}
