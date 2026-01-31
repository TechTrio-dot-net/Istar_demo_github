import Link from "next/link";
import CodeBlock from "../components/CodeBlock";
import Question from "../components/Question";
import Tip from "../components/Tip";

export const metadata = {
  title: "GitHub Basics | Git & Vercel Tutorial",
  description:
    "Git basics: status, branch, checkout, switch, add, commit, push, pull, merge with examples.",
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
    <section id={id} className="scroll-mt-8 border-b border-zinc-200 py-10 dark:border-zinc-800">
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

export default function GitHubBasicsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-50 to-zinc-100 dark:from-zinc-950 dark:to-zinc-900">
      <main className="mx-auto max-w-3xl px-4 py-10 sm:px-6">
        <p className="text-sm font-medium uppercase tracking-wider text-violet-600 dark:text-violet-400">
          Tutorial
        </p>
        <h1 className="mt-1 text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
          GitHub Basics
        </h1>
        <p className="mt-2 text-zinc-600 dark:text-zinc-400">
          All common Git commands with examples for every scenario. Run these in
          your terminal from the project folder. Use the <strong>Best tips</strong> and <strong>Check your understanding</strong> sections to get the most out of this tutorial.
        </p>

        <nav className="mt-8 rounded-xl border border-zinc-200 bg-white p-4 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
          <p className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
            Quick jump
          </p>
          <ul className="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-sm text-blue-600 dark:text-blue-400">
            <li><a href="#tips">Best tips</a></li>
            <li><a href="#status">git status</a></li>
            <li><a href="#branch">git branch</a></li>
            <li><a href="#checkout">git checkout</a></li>
            <li><a href="#switch">git switch</a></li>
            <li><a href="#add-commit">add & commit</a></li>
            <li><a href="#push-pull">push & pull</a></li>
            <li><a href="#merge">merge</a></li>
            <li><a href="#scenarios">Scenarios</a></li>
            <li><a href="#questions">Check your understanding</a></li>
          </ul>
        </nav>

        {/* BEST TIPS */}
        <Section id="tips" title="Best tips">
          <Tip title="Run status often">
            <p>Get in the habit of running <code>git status</code> before and after you run other commands. It tells you exactly where you are and what will be committed.</p>
          </Tip>
          <Tip title="Prefer git switch for branches">
            <p>Use <code>git switch</code> when you only want to change branches. Use <code>git checkout</code> when you need to restore files or create a branch in older setups. This keeps “switching branch” separate from “undo file changes.”</p>
          </Tip>
          <Tip title="Write clear commit messages">
            <p>Use the imperative: “Add login form” not “Added login form.” Keep the first line under ~50 characters; add more detail in the body if needed.</p>
          </Tip>
          <Tip title="Pull before you push">
            <p>If others use the same branch, run <code>git pull</code> (or <code>git pull --rebase</code>) before <code>git push</code> to avoid unnecessary merge commits and conflicts.</p>
          </Tip>
          <Tip title="Use branches for new work">
            <p>Create a branch for each feature or fix (<code>git switch -c feature-name</code>). Merge into <code>main</code> when it’s ready. That keeps main stable and makes it easy to switch context.</p>
          </Tip>
          <Tip title="Don’t commit secrets" variant="warning">
            <p>Never commit API keys, passwords, or <code>.env</code> files. Add them to <code>.gitignore</code> and use environment variables in your app.</p>
          </Tip>
        </Section>

        {/* STATUS */}
        <Section id="status" title="1. git status">
          <p>
            Shows the state of your working directory and staging area: which
            branch you’re on, and which files are modified, untracked, or
            staged.
          </p>
          <H3>Check status (any time)</H3>
          <CodeBlock title="Command">git status</CodeBlock>
          <H3>Example: clean working tree</H3>
          <CodeBlock title="Command">git status</CodeBlock>
          <CodeBlock title="Example output" output>
{`On branch main
nothing to commit, working tree clean`}
          </CodeBlock>
          <H3>Example: modified file (not staged)</H3>
          <CodeBlock title="After you edit a file">git status</CodeBlock>
          <CodeBlock title="Example output" output>
{`On branch main
Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git restore <file>..." to discard changes)
        modified:   app/page.tsx

no changes added to commit (use "git add" and/or "git commit -m")`}
          </CodeBlock>
          <H3>Example: untracked file</H3>
          <CodeBlock title="New file that Git has never seen">git status</CodeBlock>
          <CodeBlock title="Example output" output>
{`On branch main
Untracked files:
  (use "git add <file>..." to include in what will be committed)
        new-file.txt

nothing added to commit but untracked files present`}
          </CodeBlock>
          <H3>Example: staged file (ready to commit)</H3>
          <CodeBlock title="After git add">git add app/page.tsx
git status</CodeBlock>
          <CodeBlock title="Example output" output>
{`On branch main
Changes to be committed:
  (use "git restore --staged <file>..." to unstage)
        modified:   app/page.tsx`}
          </CodeBlock>
          <H3>Short status (one line per change)</H3>
          <CodeBlock title="Command">git status -s</CodeBlock>
          <CodeBlock title="Example output" output>
{` M app/page.tsx     (modified, not staged)
M  app/layout.tsx   (staged)
?? new-file.txt     (untracked)`}
          </CodeBlock>
        </Section>

        {/* BRANCH */}
        <Section id="branch" title="2. git branch">
          <p>
            List, create, rename, or delete branches. Does not switch you to
            another branch (use <code>git checkout</code> or{" "}
            <code>git switch</code> for that).
          </p>
          <H3>List local branches</H3>
          <CodeBlock title="Command">git branch</CodeBlock>
          <CodeBlock title="Example output" output>
{`  feature-login
* main
  fix-header`}
          </CodeBlock>
          <p className="text-sm text-zinc-600 dark:text-zinc-400">
            The <code>*</code> is your current branch.
          </p>
          <H3>List all branches (local + remote)</H3>
          <CodeBlock title="Command">git branch -a</CodeBlock>
          <CodeBlock title="Example output" output>
{`  feature-login
* main
  fix-header
  remotes/origin/main
  remotes/origin/feature-login`}
          </CodeBlock>
          <H3>Create a new branch (does not switch)</H3>
          <CodeBlock title="Command">git branch feature-name</CodeBlock>
          <H3>Create branch and switch to it (shortcut)</H3>
          <CodeBlock title="Command">git checkout -b feature-name
# or (newer)
git switch -c feature-name</CodeBlock>
          <H3>Rename current branch</H3>
          <CodeBlock title="Command">git branch -m new-branch-name</CodeBlock>
          <H3>Rename another branch</H3>
          <CodeBlock title="Command">git branch -m old-name new-name</CodeBlock>
          <H3>Delete a local branch</H3>
          <CodeBlock title="Safe delete (only if merged)">git branch -d feature-done</CodeBlock>
          <CodeBlock title="Force delete">git branch -D feature-abandoned</CodeBlock>
          <H3>Delete a remote branch</H3>
          <CodeBlock title="Command">git push origin --delete branch-name</CodeBlock>
        </Section>

        {/* CHECKOUT */}
        <Section id="checkout" title="3. git checkout">
          <p>
            Switch branches, create a new branch and switch to it, or restore
            files from a branch/commit. Does several things; for “switch
            branch” only, prefer <code>git switch</code>.
          </p>
          <H3>Switch to an existing branch</H3>
          <CodeBlock title="Command">git checkout main
git checkout feature-login</CodeBlock>
          <H3>Create a new branch and switch to it</H3>
          <CodeBlock title="Command">git checkout -b new-feature</CodeBlock>
          <p className="text-sm text-zinc-600 dark:text-zinc-400">
            Same as: <code>git branch new-feature</code> then{" "}
            <code>git checkout new-feature</code>.
          </p>
          <H3>Switch to a remote branch (create local tracking branch)</H3>
          <CodeBlock title="Command">git checkout feature-login
# If branch exists only on remote:
git fetch origin
git checkout feature-login</CodeBlock>
          <H3>Discard changes in a file (before staging)</H3>
          <CodeBlock title="Revert file to last committed version">git checkout -- app/page.tsx</CodeBlock>
          <p className="text-sm text-zinc-600 dark:text-zinc-400">
            Newer equivalent: <code>git restore app/page.tsx</code>
          </p>
          <H3>Unstage a file (keep changes in working dir)</H3>
          <CodeBlock title="Command">git checkout --staged app/page.tsx</CodeBlock>
          <p className="text-sm text-zinc-600 dark:text-zinc-400">
            Newer equivalent: <code>git restore --staged app/page.tsx</code>
          </p>
        </Section>

        {/* SWITCH */}
        <Section id="switch" title="4. git switch">
          <p>
            Newer command focused only on switching branches. Use this instead
            of <code>git checkout</code> when you only want to change branch.
          </p>
          <H3>Switch to an existing branch</H3>
          <CodeBlock title="Command">git switch main
git switch feature-login</CodeBlock>
          <H3>Create a new branch and switch to it</H3>
          <CodeBlock title="Command">git switch -c new-feature</CodeBlock>
          <p className="text-sm text-zinc-600 dark:text-zinc-400">
            <code>-c</code> = create. Same as <code>git checkout -b new-feature</code>.
          </p>
          <H3>Switch back to previous branch</H3>
          <CodeBlock title="Command">git switch -</CodeBlock>
          <p className="text-sm text-zinc-600 dark:text-zinc-400">
            The <code>-</code> means “the branch I was on before.”
          </p>
        </Section>

        {/* ADD & COMMIT */}
        <Section id="add-commit" title="5. git add & git commit">
          <p>
            Stage changes with <code>git add</code>, then save a snapshot with{" "}
            <code>git commit</code>.
          </p>
          <H3>Stage one file</H3>
          <CodeBlock title="Command">git add app/page.tsx</CodeBlock>
          <H3>Stage all changes (modified + new, not deleted in working dir)</H3>
          <CodeBlock title="Command">git add .</CodeBlock>
          <H3>Stage all modified and new files (current directory and below)</H3>
          <CodeBlock title="Command">git add -A</CodeBlock>
          <H3>Unstage a file (keep file changes)</H3>
          <CodeBlock title="Command">git restore --staged app/page.tsx</CodeBlock>
          <H3>Commit staged changes</H3>
          <CodeBlock title="Command">{'git commit -m "Add login page"'}</CodeBlock>
          <H3>Commit with multi-line message</H3>
          <CodeBlock title="Command">{'git commit -m "Add login page" -m "Includes form and validation"'}</CodeBlock>
          <H3>Stage and commit in one step (only modified tracked files)</H3>
          <CodeBlock title="Command">{'git commit -am "Fix typo in header"'}</CodeBlock>
          <p className="text-sm text-zinc-600 dark:text-zinc-400">
            <code>-a</code> stages all modified tracked files. New untracked
            files are not included; use <code>git add</code> for those.
          </p>
        </Section>

        {/* PUSH & PULL */}
        <Section id="push-pull" title="6. git push & git pull">
          <p>
            <code>git push</code> sends your commits to a remote (e.g. GitHub).{" "}
            <code>git pull</code> fetches and merges changes from the remote
            into your current branch.
          </p>
          <H3>First time: set upstream and push</H3>
          <CodeBlock title="Command">git push -u origin main</CodeBlock>
          <p className="text-sm text-zinc-600 dark:text-zinc-400">
            <code>-u origin main</code> sets <code>main</code> to track{" "}
            <code>origin/main</code>. After this, you can just run{" "}
            <code>git push</code>.
          </p>
          <H3>Push current branch (after first time)</H3>
          <CodeBlock title="Command">git push</CodeBlock>
          <H3>Push a specific branch</H3>
          <CodeBlock title="Command">git push origin feature-login</CodeBlock>
          <H3>Pull latest changes from remote</H3>
          <CodeBlock title="Command">git pull</CodeBlock>
          <p className="text-sm text-zinc-600 dark:text-zinc-400">
            Same as <code>git fetch origin</code> then{" "}
            <code>git merge origin/main</code> (for current branch).
          </p>
          <H3>Pull from a specific remote and branch</H3>
          <CodeBlock title="Command">git pull origin main</CodeBlock>
        </Section>

        {/* MERGE */}
        <Section id="merge" title="7. git merge">
          <p>
            Merges another branch into your current branch. You must be on the
            branch that should receive the changes (e.g. <code>main</code>).
          </p>
          <H3>Merge a branch into current branch</H3>
          <CodeBlock title="Example: merge feature into main">git switch main
git merge feature-login</CodeBlock>
          <H3>Merge with a commit message</H3>
          <CodeBlock title="Command">{'git merge feature-login -m "Merge feature-login into main"'}</CodeBlock>
          <H3>Abort a merge (if there are conflicts and you want to cancel)</H3>
          <CodeBlock title="Command">git merge --abort</CodeBlock>
        </Section>

        {/* SCENARIOS */}
        <Section id="scenarios" title="8. Common scenarios">
          <p>
            End-to-end examples: from first commit to branch workflow and
            merge.
          </p>
          <H3>Scenario A: First-time setup (init, add remote, first push)</H3>
          <CodeBlock title="Commands">{`git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/USERNAME/REPO.git
git push -u origin main`}</CodeBlock>
          <H3>Scenario B: Daily work (edit, stage, commit, push)</H3>
          <CodeBlock title="Commands">{`git status
git add .
git commit -m "Describe your changes"
git push`}</CodeBlock>
          <H3>Scenario C: New feature on a branch</H3>
          <CodeBlock title="Commands">{`git switch main
git pull
git switch -c feature-new-page
# ... edit files ...
git add .
git commit -m "Add new page"
git push -u origin feature-new-page`}</CodeBlock>
          <H3>Scenario D: Merge feature into main</H3>
          <CodeBlock title="Commands">git switch main
git pull
git merge feature-new-page
git push</CodeBlock>
          <H3>Scenario E: See where you are and what changed</H3>
          <CodeBlock title="Commands">git status
git branch
git log --oneline -5</CodeBlock>
          <H3>Scenario F: Undo last commit (keep changes)</H3>
          <CodeBlock title="Command">git reset --soft HEAD~1</CodeBlock>
          <H3>Scenario G: Discard all local changes in a file</H3>
          <CodeBlock title="Command">git restore app/page.tsx</CodeBlock>
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
            <Question number={1} question="What does 'M' in the second column of git status -s mean (e.g. M  file.txt)?">
              <p>It means the file is <strong>staged</strong> (added to the index). The first column is for the working tree; the second is for the staging area. So <code>M </code> (M + space) = staged, <code> M</code> (space + M) = modified but not staged.</p>
            </Question>
            <Question number={2} question="You're on main. How do you start working on a new feature called 'dark-mode' without affecting main yet?">
              <p>Create and switch to a new branch: <code>git switch -c dark-mode</code> (or <code>git checkout -b dark-mode</code>). All new commits will go to <code>dark-mode</code> until you switch back to <code>main</code>.</p>
            </Question>
            <Question number={3} question="What is the difference between git checkout and git switch?">
              <p><code>git switch</code> only changes branches (and can create a branch with <code>-c</code>). <code>git checkout</code> can do that <em>and</em> restore files (e.g. <code>git checkout -- file</code>) and other operations. For just switching branches, <code>git switch</code> is clearer.</p>
            </Question>
            <Question number={4} question="You staged a file by mistake. How do you unstage it but keep your edits?">
              <p>Run <code>git restore --staged &lt;file&gt;</code> (or <code>git reset HEAD &lt;file&gt;</code>). The file stays modified in your working directory but is no longer staged.</p>
            </Question>
            <Question number={5} question="Why do you use git push -u origin main only the first time?">
              <p><code>-u</code> sets the <strong>upstream</strong> for your current branch so it tracks <code>origin/main</code>. After that, <code>git push</code> and <code>git pull</code> know which remote branch to use without you typing it again.</p>
            </Question>
            <Question number={6} question="You want to merge feature-x into main. Which branch do you need to be on when you run git merge?">
              <p>You must be on <code>main</code>. Merge brings another branch <em>into</em> your current branch. So: <code>git switch main</code>, then <code>git merge feature-x</code>.</p>
            </Question>
          </div>
        </section>

        <div className="flex flex-wrap gap-4 py-10">
          <Link
            href="/push-deploy"
            className="inline-block rounded-lg bg-violet-600 px-4 py-2 text-sm font-medium text-white hover:bg-violet-700 dark:bg-violet-500 dark:hover:bg-violet-600"
          >
            Next: Push & Deploy to Vercel →
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
