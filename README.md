# Git & Vercel Tutorial

A **production-ready** Next.js tutorial for students: learn GitHub basics (status, branch, checkout, switch) and how to push to GitHub and deploy on Vercel. All tutorials, tips, and practice questions live on the site.

## Features

- **Tutorials:** GitHub Basics (full command reference) and Push & Deploy (step-by-step)
- **Best tips** and **Check your understanding** questions on every tutorial
- **Production-ready:** error pages, SEO (Open Graph, sitemap, robots), accessibility (skip link, focus, semantic HTML), loading states
- **Responsive** and **dark mode** support

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). Use the nav to open **GitHub Basics** or **Push & Deploy**.

## Scripts

| Command      | Description                |
| ------------ | -------------------------- |
| `npm run dev` | Start dev server           |
| `npm run build` | Build for production    |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint               |

## Production Build

```bash
npm run build
npm run start
```

No environment variables are required. Optional:

- **`NEXT_PUBLIC_SITE_URL`** – Full site URL (e.g. `https://your-app.vercel.app`) for canonical URLs, sitemap, and Open Graph. If unset, Vercel’s `VERCEL_URL` is used when deployed on Vercel.

## Push to GitHub

1. Create a new **empty** repo at [github.com/new](https://github.com/new) (no README, .gitignore, or license).
2. From the project folder:

```bash
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
git branch -M main
git push -u origin main
```

## Deploy on Vercel

- **From GitHub:** Sign in at [vercel.com](https://vercel.com) with GitHub → Add New → Project → Import your repo → Deploy.
- **CLI:** `npm i -g vercel` then `vercel` (and `vercel --prod` for production).

After connecting GitHub, every push to your default branch triggers a new deployment.

## Project Structure

- `app/` – Routes, layout, error/not-found, loading
- `app/components/` – Nav, Footer, CodeBlock, Tip, Question
- `lib/site.ts` – Site config and base URL for metadata/sitemap

## License

MIT
