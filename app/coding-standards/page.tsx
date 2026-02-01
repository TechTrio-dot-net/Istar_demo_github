import Link from "next/link";
import CodeBlock from "../components/CodeBlock";
import CodeBlockTabs from "../components/CodeBlockTabs";
import Tip from "../components/Tip";

export const metadata = {
  title: "Coding Standards for CI/CD | TechTrio Tutorial",
  description:
    "From scratch to advanced: what is CI/CD, lint/format/typecheck/test, GitHub Actions pipeline, caching, matrix builds, deploy.",
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

export default function CodingStandardsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-50 to-zinc-100 dark:from-zinc-950 dark:to-zinc-900">
      <main className="mx-auto max-w-3xl px-4 py-10 sm:px-6">
        <p className="text-sm font-medium uppercase tracking-wider text-violet-600 dark:text-violet-400">
          TechTrio Automation
        </p>
        <h1 className="mt-1 text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
          Coding Standards for CI/CD
        </h1>
        <p className="mt-2 text-zinc-600 dark:text-zinc-400">
          From scratch to advanced: what CI/CD is, how to add your first workflow, lint/format/typecheck/test, then caching, matrix builds, and deployment steps.
        </p>

        <nav className="mt-8 rounded-xl border border-zinc-200 bg-white p-4 shadow-sm dark:border-zinc-800 dark:bg-zinc-900 [&_a]:inline-flex [&_a]:min-h-[44px] [&_a]:items-center [&_a]:rounded-lg [&_a]:px-2 [&_a]:py-2 [&_a]:text-sm [&_a]:text-blue-600 [&_a]:hover:bg-blue-50 [&_a]:dark:text-blue-400 [&_a]:dark:hover:bg-blue-950/30 sm:[&_a]:min-h-0 sm:[&_a]:py-1" aria-label="Quick jump">
          <p className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
            Quick jump
          </p>
          <ul className="mt-2 flex flex-wrap gap-x-3 gap-y-1 text-sm sm:gap-x-4">
            <li><a href="#what-is-cicd">What is CI/CD</a></li>
            <li><a href="#overview">Overview</a></li>
            <li><a href="#lint">Lint</a></li>
            <li><a href="#format">Format</a></li>
            <li><a href="#typecheck">Typecheck</a></li>
            <li><a href="#test">Test</a></li>
            <li><a href="#pipeline">Pipeline</a></li>
            <li><a href="#advanced">Advanced</a></li>
          </ul>
        </nav>

        {/* WHAT IS CI/CD - SCRATCH */}
        <Section id="what-is-cicd" title="0. What is CI/CD? (Scratch)">
          <p>
            <strong>CI (Continuous Integration)</strong> means every push triggers automated checks—lint, test, build—so broken code never reaches the main branch. <strong>CD (Continuous Delivery/Deployment)</strong> takes it further by deploying to staging or production automatically when checks pass.
          </p>
          <p>
            GitHub Actions is a popular CI/CD platform: you define workflows in YAML files under <code>.github/workflows/</code>, and GitHub runs them on every push or pull request.
          </p>
          <H3>Why use CI/CD?</H3>
          <ul className="list-inside list-disc space-y-1 text-sm">
            <li>Catch bugs before they reach production</li>
            <li>Enforce code style and quality</li>
            <li>Keep the main branch always deployable</li>
            <li>Automate testing across Node versions and OSes</li>
          </ul>
          <Tip title="Start simple">
            <p>Begin with a single workflow that runs lint and build. Add tests and deployment once that works.</p>
          </Tip>
        </Section>

        <Section id="overview" title="1. Why coding standards in CI/CD?">
          <p>
            Your CI/CD pipeline should enforce the same rules locally: lint,
            format, typecheck, and tests. That way broken or inconsistent code
            never reaches the main branch or production.
          </p>
          <Tip title="Run the same commands locally">
            <p>
              Use the same scripts in your pipeline as on your machine (e.g.{" "}
              <code>npm run lint</code>, <code>npm run build</code>). If the
              pipeline fails, fix it locally and push again.
            </p>
          </Tip>
        </Section>

        <Section id="lint" title="2. Lint (ESLint)">
          <p>
            ESLint catches bugs and style issues. Fail the pipeline if lint
            fails.
          </p>
          <H3>Script</H3>
          <CodeBlock title="package.json">{`"scripts": {
  "lint": "eslint .",
  "lint:fix": "eslint . --fix"
}`}</CodeBlock>
          <H3>CI step (GitHub Actions)</H3>
          <CodeBlock title=".github/workflows/ci.yml">{`- name: Lint
  run: npm run lint`}</CodeBlock>
          <Tip title="Fix auto-fixable issues" variant="success">
            <p>
              Run <code>npm run lint:fix</code> locally (or in CI) to fix
              formatting and simple rule violations before failing the build.
            </p>
          </Tip>
        </Section>

        <Section id="format" title="3. Format (Prettier)">
          <p>
            Prettier keeps formatting consistent. Run it in CI and fail if
            files are not formatted.
          </p>
          <H3>Install</H3>
          <CodeBlockTabs
            title="Command"
            mac={`npm install -D prettier
npx prettier --write .`}
            windows={`npm install -D prettier
npx prettier --write .`}
            linux={`npm install -D prettier
npx prettier --write .`}
          />
          <H3>Script</H3>
          <CodeBlock title="package.json">{`"scripts": {
  "format": "prettier --write .",
  "format:check": "prettier --check ."
}`}</CodeBlock>
          <H3>CI step</H3>
          <CodeBlock title=".github/workflows/ci.yml">{`- name: Check formatting
  run: npm run format:check`}</CodeBlock>
        </Section>

        <Section id="typecheck" title="4. Typecheck (TypeScript)">
          <p>
            <code>tsc --noEmit</code> checks types without emitting files.
            Next.js <code>next build</code> already runs TypeScript; you can
            add a dedicated step for faster feedback.
          </p>
          <H3>Script</H3>
          <CodeBlock title="package.json">{`"scripts": {
  "typecheck": "tsc --noEmit"
}`}</CodeBlock>
          <H3>CI step</H3>
          <CodeBlock title=".github/workflows/ci.yml">{`- name: Typecheck
  run: npm run typecheck`}</CodeBlock>
        </Section>

        <Section id="test" title="5. Test">
          <p>
            Run unit and E2E tests in CI. Fail the pipeline if tests fail.
          </p>
          <H3>Example (Jest + React Testing Library)</H3>
          <CodeBlock title="package.json">{`"scripts": {
  "test": "jest",
  "test:watch": "jest --watch"
}`}</CodeBlock>
          <H3>CI step</H3>
          <CodeBlock title=".github/workflows/ci.yml">{`- name: Test
  run: npm run test`}</CodeBlock>
        </Section>

        <Section id="pipeline" title="6. Full pipeline example (GitHub Actions)">
          <CodeBlock title=".github/workflows/ci.yml">{`name: CI

on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4

      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: "20"
          cache: "npm"

      - name: Install
        run: npm ci

      - name: Lint
        run: npm run lint

      - name: Format check
        run: npm run format:check

      - name: Typecheck
        run: npm run typecheck

      - name: Test
        run: npm run test

      - name: Build
        run: npm run build`}</CodeBlock>
          <Tip title="Order matters">
            <p>
              Run fast checks first (lint, format, typecheck), then tests,
              then build. That way you get quick feedback and avoid long builds
              when lint fails.
            </p>
          </Tip>
        </Section>

        {/* ADVANCED */}
        <Section id="advanced" title="7. Advanced: caching, matrix, deploy">
          <p>
            Speed up pipelines and run checks across multiple Node versions.
          </p>
          <H3>Cache dependencies (faster installs)</H3>
          <p>
            Use <code>actions/setup-node</code> with <code>cache: "npm"</code> so <code>npm ci</code> reuses cached <code>node_modules</code>. You can also cache with <code>actions/cache</code>.
          </p>
          <CodeBlock title="Caching with actions/cache">{`- name: Cache node_modules
  uses: actions/cache@v4
  with:
    path: node_modules
    key: \${{ runner.os }}-npm-\${{ hashFiles('**/package-lock.json') }}

- name: Install
  run: npm ci`}</CodeBlock>
          <H3>Matrix: test multiple Node versions</H3>
          <CodeBlock title="Run on Node 18, 20, 22">{`jobs:
  build:
    runs-on: ubuntu-latest
    strategy:
      matrix:
        node-version: [18, 20, 22]
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: \${{ matrix.node-version }}
          cache: "npm"
      - run: npm ci
      - run: npm run build`}</CodeBlock>
          <H3>Deploy step (after build passes)</H3>
          <p>
            Add a deploy job that runs only when the build job succeeds and you&apos;re on <code>main</code>. Use Vercel&apos;s GitHub integration for automatic deploys, or trigger a deploy via API/CLI in the workflow.
          </p>
          <CodeBlock title="Deploy job (runs after build)">{`deploy:
  needs: build
  runs-on: ubuntu-latest
  if: github.ref == 'refs/heads/main' && github.event_name == 'push'
  steps:
    - uses: actions/checkout@v4
    - uses: amondnet/vercel-action@v25
      with:
        vercel-token: \${{ secrets.VERCEL_TOKEN }}
        vercel-org-id: \${{ secrets.VERCEL_ORG_ID }}
        vercel-project-id: \${{ secrets.VERCEL_PROJECT_ID }}
        vercel-args: '--prod'`}</CodeBlock>
          <Tip title="Secrets in GitHub" variant="success">
            <p>Store tokens and IDs in GitHub: Repo → Settings → Secrets and variables → Actions. Never commit them to the repo.</p>
          </Tip>
        </Section>

        <div className="flex flex-wrap gap-4 py-10">
          <Link
            href="/docker"
            className="inline-block rounded-lg bg-violet-600 px-4 py-2 text-sm font-medium text-white hover:bg-violet-700 dark:bg-violet-500 dark:hover:bg-violet-600"
          >
            Next: Docker →
          </Link>
          <Link
            href="/"
            className="inline-block rounded-lg border border-zinc-300 px-4 py-2 text-sm font-medium text-zinc-700 hover:bg-zinc-100 dark:border-zinc-600 dark:text-zinc-300 dark:hover:bg-zinc-800"
          >
            Back to Home
          </Link>
        </div>
      </main>
    </div>
  );
}
