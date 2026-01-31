import Link from "next/link";
import CodeBlock from "../components/CodeBlock";
import Question from "../components/Question";
import Tip from "../components/Tip";

export const metadata = {
  title: "Push & Deploy to Vercel | Git & Vercel Tutorial",
  description:
    "Step-by-step: push your Next.js project to GitHub and deploy on Vercel.",
};

function Section({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section
      id={id}
      className="scroll-mt-8 border-b border-zinc-200 py-10 dark:border-zinc-800"
    >
      <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100">
        {title}
      </h2>
      <div className="mt-4 space-y-4 text-zinc-700 dark:text-zinc-300">
        {children}
      </div>
    </section>
  );
}

function H3({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="mt-6 text-lg font-semibold text-zinc-800 dark:text-zinc-200">
      {children}
    </h3>
  );
}

export default function PushDeployPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-50 to-zinc-100 dark:from-zinc-950 dark:to-zinc-900">
      <main className="mx-auto max-w-3xl px-4 py-10 sm:px-6">
        <p className="text-sm font-medium uppercase tracking-wider text-violet-600 dark:text-violet-400">
          Tutorial
        </p>
        <h1 className="mt-1 text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
          Push to GitHub & Deploy on Vercel
        </h1>
        <p className="mt-2 text-zinc-600 dark:text-zinc-400">
          Follow these steps to put your code on GitHub and deploy this Next.js
          app on Vercel. Includes <strong>Best tips</strong> and <strong>Check your understanding</strong> questions.
        </p>

        <nav className="mt-8 rounded-xl border border-zinc-200 bg-white p-4 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
          <p className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
            Quick jump
          </p>
          <ul className="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-sm text-blue-600 dark:text-blue-400">
            <li><a href="#tips">Best tips</a></li>
            <li><a href="#part1-github">Part 1: Push to GitHub</a></li>
            <li><a href="#part2-vercel">Part 2: Deploy on Vercel</a></li>
            <li><a href="#questions">Check your understanding</a></li>
          </ul>
        </nav>

        {/* BEST TIPS */}
        <Section id="tips" title="Best tips">
          <Tip title="Create the repo empty">
            <p>When creating the GitHub repo, do <strong>not</strong> add a README, .gitignore, or license. This project already has them; adding them on GitHub can cause “unrelated histories” when you push.</p>
          </Tip>
          <Tip title="Use HTTPS if you're new">
            <p>HTTPS (<code>https://github.com/.../repo.git</code>) is easier to set up than SSH. You can switch to SSH later for passwordless push if you want.</p>
          </Tip>
          <Tip title="Connect GitHub to Vercel once">
            <p>After you connect your GitHub account to Vercel and import a repo, every push to the default branch will trigger a new deployment. No need to deploy manually each time.</p>
          </Tip>
          <Tip title="Preview URLs for other branches">
            <p>If you push a branch other than <code>main</code>, Vercel can create a preview URL for that branch. Useful for testing before merging.</p>
          </Tip>
          <Tip title="Environment variables on Vercel" variant="success">
            <p>For API keys or secrets, add them in Vercel: Project → Settings → Environment Variables. Never commit them to the repo.</p>
          </Tip>
        </Section>

        {/* PART 1: GITHUB */}
        <Section
          id="part1-github"
          title="Part 1: Push this project to GitHub"
        >
          <p>
            You need a GitHub account and a new empty repository. Then add that
            repo as a remote and push your code.
          </p>

          <H3>Step 1: Create a new repository on GitHub</H3>
          <ol className="list-inside list-decimal space-y-2 text-sm">
            <li>Go to <a href="https://github.com/new" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 underline">github.com/new</a>.</li>
            <li>Choose a name (e.g. <code>nextjs-vercel-demo</code>).</li>
            <li>
              <strong>Do not</strong> check “Add a README”, “Add .gitignore”, or
              “Choose a license”—this project already has them.
            </li>
            <li>Click <strong>Create repository</strong>.</li>
          </ol>

          <H3>Step 2: Add GitHub as remote and push</H3>
          <p>
            Open a terminal in this project folder and run the commands below.
            Replace <code>YOUR_USERNAME</code> and <code>YOUR_REPO</code> with
            your GitHub username and repository name.
          </p>
          <CodeBlock title="Add the GitHub repo as remote (HTTPS)">
{`git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git`}
          </CodeBlock>
          <p className="text-sm text-zinc-600 dark:text-zinc-400">
            If you use SSH:
          </p>
          <CodeBlock title="Add remote (SSH)">
{`git remote add origin git@github.com:YOUR_USERNAME/YOUR_REPO.git`}
          </CodeBlock>
          <CodeBlock title="Make sure default branch is main and push">
{`git branch -M main
git push -u origin main`}
          </CodeBlock>
          <p className="text-sm text-zinc-600 dark:text-zinc-400">
            <code>-u origin main</code> sets <code>main</code> to track{" "}
            <code>origin/main</code>. After this, you can use{" "}
            <code>git push</code> without extra arguments.
          </p>

          <H3>Example (copy and edit)</H3>
          <CodeBlock title="Example: user johndoe, repo nextjs-vercel-demo">
{`git remote add origin https://github.com/johndoe/nextjs-vercel-demo.git
git branch -M main
git push -u origin main`}
          </CodeBlock>

          <H3>If you get “remote origin already exists”</H3>
          <p>Remove the old remote, then add the correct one:</p>
          <CodeBlock title="Commands">
{`git remote remove origin
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
git push -u origin main`}
          </CodeBlock>

          <H3>Later: push new commits</H3>
          <CodeBlock title="After you make changes">
{`git add .
git commit -m "Describe your changes"
git push`}
          </CodeBlock>
        </Section>

        {/* PART 2: VERCEL */}
        <Section id="part2-vercel" title="Part 2: Deploy on Vercel">
          <p>
            Vercel runs Next.js very well. You can connect your GitHub repo
            (recommended) or use the Vercel CLI.
          </p>

          <H3>Option A: Deploy from GitHub (recommended)</H3>
          <ol className="list-inside list-decimal space-y-2 text-sm">
            <li>
              Go to <a href="https://vercel.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 underline">vercel.com</a> and sign in (use <strong>Continue with GitHub</strong>).
            </li>
            <li>Click <strong>Add New…</strong> → <strong>Project</strong>.</li>
            <li>
              <strong>Import</strong> your GitHub repository (e.g.{" "}
              <code>nextjs-vercel-demo</code>). If you don’t see it, click
              “Adjust GitHub App Permissions” and grant access to the repo.
            </li>
            <li>
              Vercel will detect Next.js and set Framework Preset, Build
              Command, and Output Directory. Leave them as default unless you
              know you need to change them.
            </li>
            <li>Click <strong>Deploy</strong>.</li>
            <li>
              Wait for the build to finish. You’ll get a URL like{" "}
              <code>https://nextjs-vercel-demo-xxx.vercel.app</code>.
            </li>
          </ol>
          <p className="text-sm text-zinc-600 dark:text-zinc-400">
            After this, every push to your default branch (e.g.{" "}
            <code>main</code>) will trigger a new deployment automatically.
          </p>

          <H3>Option B: Deploy with Vercel CLI</H3>
          <p>Install the CLI and deploy from your project folder:</p>
          <CodeBlock title="Install Vercel CLI (once)">
{`npm i -g vercel`}
          </CodeBlock>
          <CodeBlock title="From project folder: deploy">
{`cd nextjs-vercel-demo
vercel`}
          </CodeBlock>
          <p className="text-sm text-zinc-600 dark:text-zinc-400">
            Follow the prompts: log in if needed, link to an existing project or
            create a new one. First run is usually a preview deployment.
          </p>
          <CodeBlock title="Deploy to production">
{`vercel --prod`}
          </CodeBlock>
        </Section>

        {/* CHECK YOUR UNDERSTANDING */}
        <section id="questions" className="scroll-mt-8 border-b border-zinc-200 py-10 dark:border-zinc-800">
          <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100">
            Check your understanding
          </h2>
          <p className="mt-2 text-zinc-600 dark:text-zinc-400">
            Try answering these before revealing the answer. Click to expand.
          </p>
          <div className="mt-6 space-y-2">
            <Question number={1} question="Why shouldn't you initialize the GitHub repo with a README when pushing an existing project?">
              <p>If GitHub creates a first commit (e.g. README) and your local repo already has commits, the two histories don’t share a common commit. Then <code>git push</code> can be rejected or require a merge. Starting with an empty repo keeps a single, linear history.</p>
            </Question>
            <Question number={2} question="What does the -u in git push -u origin main do?">
              <p>It sets the <strong>upstream</strong> of your local <code>main</code> to <code>origin/main</code>. After that, <code>git push</code> and <code>git pull</code> use that branch by default, so you don’t have to type <code>origin main</code> every time.</p>
            </Question>
            <Question number={3} question="After you connect your repo to Vercel, when does a new deployment happen?">
              <p>Whenever you push to the branch you connected (usually <code>main</code>). Vercel watches the repo and runs a new build and deploy on each push to that branch.</p>
            </Question>
            <Question number={4} question="Where should you put API keys or secrets for your Vercel deployment?">
              <p>In Vercel’s dashboard: Project → Settings → Environment Variables. Add the key and value there. They are injected at build/runtime and are not stored in your Git repo.</p>
            </Question>
          </div>
        </section>

        <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-4 dark:border-emerald-800 dark:bg-emerald-950/40">
          <p className="text-sm font-medium text-emerald-800 dark:text-emerald-200">
            Summary
          </p>
          <ul className="mt-2 list-inside list-disc text-sm text-emerald-700 dark:text-emerald-300">
            <li>
              <strong>Push to GitHub:</strong> Create repo →{" "}
              <code>git remote add origin &lt;url&gt;</code> →{" "}
              <code>git push -u origin main</code>
            </li>
            <li>
              <strong>Deploy on Vercel:</strong> Sign in with GitHub → Import
              repo → Deploy (or use <code>vercel</code> CLI)
            </li>
          </ul>
        </div>

        <div className="flex flex-wrap gap-4 py-10">
          <Link
            href="/github-basics"
            className="inline-block rounded-lg border border-zinc-300 px-4 py-2 text-sm font-medium text-zinc-700 hover:bg-zinc-100 dark:border-zinc-600 dark:text-zinc-300 dark:hover:bg-zinc-800"
          >
            ← GitHub Basics
          </Link>
          <Link
            href="/"
            className="inline-block rounded-lg bg-zinc-900 px-4 py-2 text-sm font-medium text-white hover:bg-zinc-800 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-200"
          >
            Back to Home
          </Link>
        </div>
      </main>
    </div>
  );
}
