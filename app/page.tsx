import Link from "next/link";
import Tip from "./components/Tip";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-50 to-zinc-100 dark:from-zinc-950 dark:to-zinc-900">
      <main className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
        <div className="rounded-2xl border border-zinc-200/80 bg-white/80 p-8 shadow-sm backdrop-blur dark:border-zinc-800 dark:bg-zinc-900/80">
          <p className="text-sm font-medium uppercase tracking-wider text-violet-600 dark:text-violet-400">
            For students
          </p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 sm:text-4xl">
            Git & Vercel Tutorial
          </h1>
          <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-400">
            Use this codebase to learn how to push your code to GitHub and
            deploy your Next.js app on Vercel. All tutorials, tips, and
            practice questions are on this site—no need to leave the app.
          </p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          <Link
            href="/github-basics"
            className="group relative overflow-hidden rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm transition hover:border-violet-200 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 focus-visible:ring-offset-2 dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-violet-800"
          >
            <span className="absolute right-4 top-4 text-3xl opacity-20 transition group-hover:opacity-40">
              📚
            </span>
            <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">
              GitHub Basics
            </h2>
            <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
              <span className="font-medium text-zinc-700 dark:text-zinc-300">
                status
              </span>
              ,{" "}
              <span className="font-medium text-zinc-700 dark:text-zinc-300">
                branch
              </span>
              ,{" "}
              <span className="font-medium text-zinc-700 dark:text-zinc-300">
                checkout
              </span>
              ,{" "}
              <span className="font-medium text-zinc-700 dark:text-zinc-300">
                switch
              </span>
              , add, commit, push, pull, merge—with examples for every scenario,
              <strong className="text-zinc-800 dark:text-zinc-200"> best tips</strong>, and{" "}
              <strong className="text-zinc-800 dark:text-zinc-200">check-your-understanding questions</strong>.
            </p>
            <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-violet-600 dark:text-violet-400 group-hover:underline">
              Open tutorial →
            </span>
          </Link>

          <Link
            href="/push-deploy"
            className="group relative overflow-hidden rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm transition hover:border-violet-200 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 focus-visible:ring-offset-2 dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-violet-800"
          >
            <span className="absolute right-4 top-4 text-3xl opacity-20 transition group-hover:opacity-40">
              🚀
            </span>
            <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">
              Push & Deploy to Vercel
            </h2>
            <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
              Step-by-step: create a GitHub repo, add remote, push your code,
              then deploy this Next.js project on Vercel. Includes{" "}
              <strong className="text-zinc-800 dark:text-zinc-200">tips</strong> and{" "}
              <strong className="text-zinc-800 dark:text-zinc-200">practice questions</strong>.
            </p>
            <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-violet-600 dark:text-violet-400 group-hover:underline">
              Open tutorial →
            </span>
          </Link>
        </div>

        <div className="mt-10">
          <h2 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">
            Tips for success
          </h2>
          <div className="mt-4 space-y-3">
            <Tip title="Run the app and follow along">
              <p>
                Run <code className="rounded bg-violet-100 px-1 dark:bg-violet-900">npm run dev</code> and
                open <code className="rounded bg-violet-100 px-1 dark:bg-violet-900">http://localhost:3000</code>. Keep the
                tutorial open in your browser and try each command in your
                terminal as you read.
              </p>
            </Tip>
            <Tip title="Answer the questions yourself first" variant="success">
              <p>
                Each tutorial has a “Check your understanding” section. Try to
                answer each question before expanding the answer—it reinforces
                what you learned.
              </p>
            </Tip>
            <Tip title="Use the quick jump links">
              <p>
                At the top of each tutorial you can jump to Best tips, specific
                commands, or the practice questions. Use them to revisit
                sections without scrolling.
              </p>
            </Tip>
          </div>
        </div>

        <div className="mt-10 rounded-xl border border-amber-200 bg-amber-50 p-4 dark:border-amber-800 dark:bg-amber-950/40">
          <p className="text-sm font-medium text-amber-800 dark:text-amber-200">
            Quick start
          </p>
          <p className="mt-1 text-sm text-amber-700 dark:text-amber-300">
            Start with <strong>GitHub Basics</strong> if you’re new to Git. Then
            do <strong>Push & Deploy</strong> to put this project on GitHub and
            Vercel.
          </p>
        </div>
      </main>
    </div>
  );
}
