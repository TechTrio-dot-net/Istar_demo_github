import Link from "next/link";
import CodeBlock from "../components/CodeBlock";
import CodeBlockTabs from "../components/CodeBlockTabs";
import Question from "../components/Question";
import Tip from "../components/Tip";

export const metadata = {
  title: "Push & Deploy to Vercel | Git & Vercel Tutorial",
  description:
    "From scratch to advanced: prerequisites, push to GitHub, deploy on Vercel, custom domains, rollbacks, preview deployments.",
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
          From scratch to advanced: prerequisites, push to GitHub, deploy on Vercel, then custom domains, rollbacks, and preview deployments.
        </p>

        <nav className="mt-8 rounded-xl border border-zinc-200 bg-white p-4 shadow-sm dark:border-zinc-800 dark:bg-zinc-900 [&_a]:inline-flex [&_a]:min-h-[44px] [&_a]:items-center [&_a]:rounded-lg [&_a]:px-2 [&_a]:py-2 [&_a]:text-sm [&_a]:text-blue-600 [&_a]:hover:bg-blue-50 [&_a]:dark:text-blue-400 [&_a]:dark:hover:bg-blue-950/30 sm:[&_a]:min-h-0 sm:[&_a]:py-1" aria-label="Quick jump">
          <p className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
            Quick jump
          </p>
          <ul className="mt-2 flex flex-wrap gap-x-3 gap-y-1 text-sm sm:gap-x-4">
            <li><a href="#prerequisites">Prerequisites</a></li>
            <li><a href="#part1-github">Push to GitHub</a></li>
            <li><a href="#part2-vercel">Deploy on Vercel</a></li>
            <li><a href="#advanced">Advanced</a></li>
            <li><a href="#questions">Check understanding</a></li>
          </ul>
        </nav>

        {/* PREREQUISITES - SCRATCH */}
        <Section id="prerequisites" title="Prerequisites (Start from scratch)">
          <p>
            Before pushing and deploying, make sure you have these set up.
          </p>
          <H3>1. Git installed</H3>
          <p>
            Run <code>git --version</code>. If it fails, install Git—see the <Link href="/github-basics#install" className="text-blue-600 dark:text-blue-400 underline">GitHub Basics tutorial</Link>.
          </p>
          <H3>2. GitHub account</H3>
          <p>
            Create a free account at <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 underline">github.com</a>. You&apos;ll need it to create a repo and push code.
          </p>
          <H3>3. This project in a Git repo</H3>
          <p>
            If you cloned this repo, you already have Git. If you downloaded a ZIP, initialize first (select your OS):
          </p>
          <CodeBlockTabs
            title="Initialize repo (if needed)"
            mac={`git init
git add .
git commit -m "Initial commit"
git branch -M main`}
            windows={`git init
git add .
git commit -m "Initial commit"
git branch -M main`}
            linux={`git init
git add .
git commit -m "Initial commit"
git branch -M main`}
          />
          <H3>4. Vercel account</H3>
          <p>
            Sign up at <a href="https://vercel.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 underline">vercel.com</a>—use &quot;Continue with GitHub&quot; for the easiest setup.
          </p>
          <Tip title="All free">
            <p>GitHub and Vercel both have free tiers. You can deploy personal projects without paying.</p>
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
          <Tip title="Create the repo empty">
            <p>When creating the GitHub repo, do <strong>not</strong> add a README, .gitignore, or license. This project already has them; adding them on GitHub can cause unrelated histories when you push.</p>
          </Tip>
          <Tip title="Use HTTPS if you&apos;re new">
            <p>HTTPS (<code>https://github.com/.../repo.git</code>) is easier to set up than SSH. You can switch to SSH later for passwordless push if you want.</p>
          </Tip>

          <H3>Step 2: Add GitHub as remote and push</H3>
          <p>
            Open a terminal in this project folder and run the commands below.
            Replace <code>YOUR_USERNAME</code> and <code>YOUR_REPO</code> with
            your GitHub username and repository name.
          </p>
          <CodeBlockTabs
            title="Add the GitHub repo as remote (HTTPS)"
            mac="git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git"
            windows="git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git"
            linux="git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git"
          />
          <p className="text-sm text-zinc-600 dark:text-zinc-400">
            If you use SSH:
          </p>
          <CodeBlockTabs
            title="Add remote (SSH)"
            mac="git remote add origin git@github.com:YOUR_USERNAME/YOUR_REPO.git"
            windows="git remote add origin git@github.com:YOUR_USERNAME/YOUR_REPO.git"
            linux="git remote add origin git@github.com:YOUR_USERNAME/YOUR_REPO.git"
          />
          <CodeBlockTabs
            title="Make sure default branch is main and push"
            mac={`git branch -M main
git push -u origin main`}
            windows={`git branch -M main
git push -u origin main`}
            linux={`git branch -M main
git push -u origin main`}
          />
          <p className="text-sm text-zinc-600 dark:text-zinc-400">
            <code>-u origin main</code> sets <code>main</code> to track{" "}
            <code>origin/main</code>. After this, you can use{" "}
            <code>git push</code> without extra arguments.
          </p>

          <H3>Example (copy and edit)</H3>
          <CodeBlockTabs
            title="Example: user johndoe, repo nextjs-vercel-demo"
            mac={`git remote add origin https://github.com/johndoe/nextjs-vercel-demo.git
git branch -M main
git push -u origin main`}
            windows={`git remote add origin https://github.com/johndoe/nextjs-vercel-demo.git
git branch -M main
git push -u origin main`}
            linux={`git remote add origin https://github.com/johndoe/nextjs-vercel-demo.git
git branch -M main
git push -u origin main`}
          />

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
          <p>Install the CLI and deploy from your project folder (select your OS):</p>
          <CodeBlockTabs
            title="Install Vercel CLI (once)"
            mac="npm i -g vercel"
            windows="npm i -g vercel"
            linux="npm i -g vercel"
          />
          <CodeBlockTabs
            title="From project folder: deploy"
            mac={`cd nextjs-vercel-demo
vercel`}
            windows={`cd nextjs-vercel-demo
vercel`}
            linux={`cd nextjs-vercel-demo
vercel`}
          />
          <p className="text-sm text-zinc-600 dark:text-zinc-400">
            Follow the prompts: log in if needed, link to an existing project or
            create a new one. First run is usually a preview deployment.
          </p>
          <CodeBlock title="Deploy to production">
{`vercel --prod`}
          </CodeBlock>
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

        {/* ADVANCED */}
        <Section id="advanced" title="Advanced: domains, env vars, rollbacks, previews">
          <p>
            Once you&apos;re deployed, these steps help you customize and manage your app.
          </p>
          <H3>Custom domain</H3>
          <ol className="list-inside list-decimal space-y-2 text-sm">
            <li>In Vercel: Project → Settings → Domains.</li>
            <li>Add your domain (e.g. <code>myapp.com</code> or <code>www.myapp.com</code>).</li>
            <li>Add the DNS records Vercel shows (A or CNAME) at your registrar.</li>
            <li>Vercel will provision SSL automatically.</li>
          </ol>
          <H3>Environment variables in detail</H3>
          <p>
            Variables can be scoped to Production, Preview, or Development. Use Production for live secrets; Preview for branch deployments. Redeploy after adding or changing env vars.
          </p>
          <CodeBlock title="Vercel CLI: add env var (example)">
{`vercel env add RESEND_API_KEY production`}
          </CodeBlock>
          <H3>Preview deployments</H3>
          <p>
            Every push to a non-production branch (e.g. <code>feature-x</code>) gets a unique preview URL. Test changes before merging to <code>main</code>. Enable in Project → Settings → Git.
          </p>
          <H3>Rollback a deployment</H3>
          <p>
            If a deployment is broken, roll back to a previous one:
          </p>
          <ol className="list-inside list-decimal space-y-2 text-sm">
            <li>Project → Deployments.</li>
            <li>Find the last working deployment.</li>
            <li>Click the ⋮ menu → Promote to Production.</li>
          </ol>
          <H3>Vercel CLI: production deploy</H3>
          <CodeBlock title="Deploy to production from CLI">vercel --prod</CodeBlock>
          <H3>Ignore build step</H3>
          <p>
            Add <code>VERCEL_IGNORE_BUILD_STEP=1</code> as an env var (or set in <code>vercel.json</code>) to skip the build—useful for docs-only or static sites.
          </p>
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
            <Question number={5} question="How do you roll back a bad Vercel deployment?">
              <p>Go to Project → Deployments, find a previous working deployment, open the ⋮ menu, and choose &quot;Promote to Production&quot;. This makes that deployment live without changing your Git history.</p>
            </Question>
            <Question number={6} question="What are preview deployments?">
              <p>Preview deployments are unique URLs created for each push to non-production branches (e.g. <code>feature-x</code>). You can test changes before merging to <code>main</code> without affecting the live site.</p>
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
