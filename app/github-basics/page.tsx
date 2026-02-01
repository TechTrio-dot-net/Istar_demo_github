import Link from "next/link";
import CodeBlock from "../components/CodeBlock";
import CodeBlockTabs from "../components/CodeBlockTabs";
import Question from "../components/Question";
import Tip from "../components/Tip";

export const metadata = {
  title: "GitHub Basics | Git & Vercel Tutorial",
  description:
    "From scratch to advanced: what Git is, install, status, branch, add, commit, push, pull, merge, stash, rebase, and merge conflicts.",
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
          From scratch to advanced: what Git is, how to install it, daily commands, then stash, rebase, merge conflicts, and more. Tips and practice questions throughout.
        </p>

        <nav className="mt-6 rounded-xl border border-zinc-200 bg-white p-4 shadow-sm sm:mt-8 dark:border-zinc-800 dark:bg-zinc-900 [&_a]:inline-flex [&_a]:min-h-[44px] [&_a]:items-center [&_a]:rounded-lg [&_a]:px-2 [&_a]:py-2 [&_a]:text-sm [&_a]:text-blue-600 [&_a]:hover:bg-blue-50 [&_a]:dark:text-blue-400 [&_a]:dark:hover:bg-blue-950/30 sm:[&_a]:min-h-0 sm:[&_a]:py-1" aria-label="Quick jump">
          <p className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
            Quick jump
          </p>
          <ul className="mt-2 flex flex-wrap gap-x-3 gap-y-1 text-sm sm:gap-x-4">
            <li><a href="#what-is-git">What is Git</a></li>
            <li><a href="#install">Install</a></li>
            <li><a href="#status">git status</a></li>
            <li><a href="#branch">git branch</a></li>
            <li><a href="#add-commit">add & commit</a></li>
            <li><a href="#push-pull">push & pull</a></li>
            <li><a href="#merge">merge</a></li>
            <li><a href="#advanced">Advanced</a></li>
            <li><a href="#scenarios">Scenarios</a></li>
            <li><a href="#questions">Check understanding</a></li>
          </ul>
        </nav>

        {/* WHAT IS GIT - SCRATCH */}
        <Section id="what-is-git" title="0. What is Git? What is GitHub? (Scratch)">
          <p>
            <strong>Git</strong> is a version control system—it tracks changes to your files over time so you can undo mistakes, compare versions, and collaborate with others. It keeps every change you commit so you can always go back.
          </p>
          <p>
            <strong>GitHub</strong> is a hosted service for Git repositories. It stores your code in the cloud, lets others clone and contribute, and integrates with tools like Vercel for deployment. Git is the tool; GitHub is the place to put it.
          </p>
          <H3>Why use Git?</H3>
          <ul className="list-inside list-disc space-y-1 text-sm">
            <li>See who changed what and when</li>
            <li>Revert to any earlier version</li>
            <li>Work on features in branches without breaking main</li>
            <li>Collaborate via push, pull, and pull requests</li>
            <li>Deploy from GitHub to Vercel, Netlify, etc.</li>
          </ul>
        </Section>

        {/* INSTALL - SCRATCH */}
        <Section id="install" title="1. Install Git (First-time setup)">
          <p>
            If you haven&apos;t installed Git yet, install it for your operating system. Select your platform below, then run the command. After install, configure your name and email (used for commit authorship).
          </p>
          <CodeBlockTabs
            title="Install Git"
            mac="brew install git"
            windows="winget install Git.Git"
            linux="sudo apt update && sudo apt install -y git"
          />
          <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
            Windows: Or download from <a href="https://git-scm.com/download/win" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 underline">git-scm.com</a>. Linux Fedora: <code>sudo dnf install git</code>.
          </p>
          <H3>Configure your identity (once per machine)</H3>
          <CodeBlockTabs
            title="Commands"
            mac={`git config --global user.name "Your Name"
git config --global user.email "you@example.com"`}
            windows={`git config --global user.name "Your Name"
git config --global user.email "you@example.com"`}
            linux={`git config --global user.name "Your Name"
git config --global user.email "you@example.com"`}
          />
          <H3>Check that Git is installed</H3>
          <CodeBlockTabs
            title="Command"
            mac="git --version"
            windows="git --version"
            linux="git --version"
          />
          <Tip title="GitHub account">
            <p>Create a free account at <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 underline">github.com</a> so you can push your repos and deploy to Vercel.</p>
          </Tip>
        </Section>

        {/* STATUS */}
        <Section id="status" title="2. git status">
          <p>
            Shows the state of your working directory and staging area: which
            branch you&apos;re on, and which files are modified, untracked, or
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
          <Tip title="Run status often">
            <p>Get in the habit of running <code>git status</code> before and after you run other commands. It tells you exactly where you are and what will be committed.</p>
          </Tip>
        </Section>

        {/* BRANCH */}
        <Section id="branch" title="3. git branch">
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
          <Tip title="Use branches for new work">
            <p>Create a branch for each feature or fix (<code>git switch -c feature-name</code>). Merge into <code>main</code> when it&apos;s ready. That keeps main stable and makes it easy to switch context.</p>
          </Tip>
        </Section>

        {/* CHECKOUT */}
        <Section id="checkout" title="4. git checkout">
          <p>
            Switch branches, create a new branch and switch to it, or restore
            files from a branch/commit. Does several things; for &quot;switch
            branch&quot; only, prefer <code>git switch</code>.
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
        <Section id="switch" title="5. git switch">
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
            The <code>-</code> means &quot;the branch I was on before.&quot;
          </p>
          <Tip title="Prefer git switch for branches">
            <p>Use <code>git switch</code> when you only want to change branches. Use <code>git checkout</code> when you need to restore files or create a branch in older setups. This keeps switching branch separate from undoing file changes.</p>
          </Tip>
        </Section>

        {/* ADD & COMMIT */}
        <Section id="add-commit" title="6. git add & git commit">
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
          <Tip title="Write clear commit messages">
            <p>Use the imperative: “Add login form” not “Added login form.” Keep the first line under ~50 characters; add more detail in the body if needed.</p>
          </Tip>
          <Tip title="Don&apos;t commit secrets" variant="warning">
            <p>Never commit API keys, passwords, or <code>.env</code> files. Add them to <code>.gitignore</code> and use environment variables in your app.</p>
          </Tip>
        </Section>

        {/* PUSH & PULL */}
        <Section id="push-pull" title="7. git push & git pull">
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
          <Tip title="Pull before you push">
            <p>If others use the same branch, run <code>git pull</code> (or <code>git pull --rebase</code>) before <code>git push</code> to avoid unnecessary merge commits and conflicts.</p>
          </Tip>
        </Section>

        {/* MERGE */}
        <Section id="merge" title="8. git merge">
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

        {/* ADVANCED */}
        <Section id="advanced" title="9. Advanced: stash, rebase, conflicts">
          <p>
            Once you&apos;re comfortable with the basics, these tools help you work faster and keep history clean.
          </p>
          <H3>git stash — save work in progress</H3>
          <p>
            Need to switch branches but you have uncommitted changes? Stash them, do something else, then restore.
          </p>
          <CodeBlock title="Stash changes (working dir + staged)">git stash</CodeBlock>
          <CodeBlock title="Stash with a message">git stash push -m "WIP: login form"</CodeBlock>
          <CodeBlock title="List stashes">git stash list</CodeBlock>
          <CodeBlock title="Restore most recent stash (and remove from list)">git stash pop</CodeBlock>
          <CodeBlock title="Restore without removing from list">git stash apply</CodeBlock>
          <Tip title="Stash is your friend">
            <p>Use <code>git stash</code> when you need to quickly switch context. <code>git stash pop</code> puts your changes back and removes the stash. If something goes wrong, <code>git stash apply</code> keeps the stash so you can try again.</p>
          </Tip>
          <H3>git rebase — linear history</H3>
          <p>
            Rebase rewrites your branch commits on top of another branch. Use it to keep a clean, linear history before merging.
          </p>
          <CodeBlock title="Rebase current branch onto main">{`git switch feature-x
git rebase main`}</CodeBlock>
          <CodeBlock title="Abort rebase if it goes wrong">git rebase --abort</CodeBlock>
          <CodeBlock title="Continue after resolving conflicts">git add .
git rebase --continue</CodeBlock>
          <Tip title="Don't rebase shared branches" variant="warning">
            <p>Only rebase branches that you haven&apos;t pushed yet, or that no one else is using. Rebasing shared branches rewrites history and can cause problems for collaborators.</p>
          </Tip>
          <H3>Resolving merge conflicts</H3>
          <p>
            When Git can&apos;t auto-merge, it marks conflicts in your files. You edit, stage, and complete the merge.
          </p>
          <CodeBlock title="After a failed merge, see conflicted files">git status</CodeBlock>
          <CodeBlock title="Conflict markers in a file" output>
{`<<<<<<< HEAD
your version
=======
their version
>>>>>>> feature-branch`}
          </CodeBlock>
          <p className="text-sm text-zinc-600 dark:text-zinc-400">
            Edit the file: remove the markers and keep the correct content (or combine both). Then:
          </p>
          <CodeBlock title="Mark as resolved and complete merge">git add path/to/file
git commit -m "Resolve merge conflict"</CodeBlock>
          <H3>git diff — see changes</H3>
          <CodeBlock title="Unstaged changes">git diff</CodeBlock>
          <CodeBlock title="Staged changes">git diff --staged</CodeBlock>
          <CodeBlock title="Compare two branches">git diff main..feature-x</CodeBlock>
          <H3>git log — browse history</H3>
          <CodeBlock title="Compact one-line per commit">git log --oneline -10</CodeBlock>
          <CodeBlock title="Graph of branches">git log --oneline --graph -10</CodeBlock>
          <H3>.gitignore — exclude files</H3>
          <p>
            Add filenames or patterns so Git never tracks them (e.g. <code>node_modules/</code>, <code>.env</code>).
          </p>
          <CodeBlock title=".gitignore example">{`node_modules/
.env
.env.local
*.log
.DS_Store`}</CodeBlock>
        </Section>

        {/* SCENARIOS */}
        <Section id="scenarios" title="10. Common scenarios">
          <p>
            End-to-end examples: from first commit to branch workflow and
            merge.
          </p>
          <H3>Scenario A: First-time setup (init, add remote, first push)</H3>
          <CodeBlockTabs
            title="Commands"
            mac={`git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/USERNAME/REPO.git
git push -u origin main`}
            windows={`git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/USERNAME/REPO.git
git push -u origin main`}
            linux={`git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/USERNAME/REPO.git
git push -u origin main`}
          />
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
            <Question number={7} question="You have uncommitted changes and need to switch branches. What do you do?">
              <p>Use <code>git stash</code> to save your changes, switch branches, do your work, then <code>git stash pop</code> to restore them. Or commit the changes if they belong on the current branch.</p>
            </Question>
            <Question number={8} question="What's the difference between git merge and git rebase?">
              <p><code>git merge</code> creates a merge commit and preserves the full branch history. <code>git rebase</code> replays your commits on top of another branch for a linear history. Use merge for shared branches; rebase for your own feature branches before merging.</p>
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
