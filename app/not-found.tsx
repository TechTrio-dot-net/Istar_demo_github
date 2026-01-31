import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center px-4">
      <p className="text-sm font-medium uppercase tracking-wider text-violet-600 dark:text-violet-400">
        Error 404
      </p>
      <h1 className="mt-2 text-2xl font-bold text-zinc-900 dark:text-zinc-100 sm:text-3xl">
        Page not found
      </h1>
      <p className="mt-2 max-w-md text-center text-zinc-600 dark:text-zinc-400">
        The page you’re looking for doesn’t exist or has been moved.
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex items-center gap-2 rounded-lg bg-violet-600 px-4 py-2 text-sm font-medium text-white hover:bg-violet-700 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:ring-offset-2 dark:focus:ring-offset-zinc-950"
      >
        Back to Home
      </Link>
    </div>
  );
}
