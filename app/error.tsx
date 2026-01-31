"use client";

import Link from "next/link";
import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center px-4">
      <p className="text-sm font-medium uppercase tracking-wider text-amber-600 dark:text-amber-400">
        Something went wrong
      </p>
      <h1 className="mt-2 text-2xl font-bold text-zinc-900 dark:text-zinc-100 sm:text-3xl">
        An error occurred
      </h1>
      <p className="mt-2 max-w-md text-center text-zinc-600 dark:text-zinc-400">
        We couldn’t load this page. Try again or go back to the home page.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <button
          type="button"
          onClick={() => reset()}
          className="inline-flex items-center rounded-lg border border-zinc-300 bg-white px-4 py-2 text-sm font-medium text-zinc-700 hover:bg-zinc-50 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:ring-offset-2 dark:border-zinc-600 dark:bg-zinc-800 dark:text-zinc-200 dark:hover:bg-zinc-700 dark:focus:ring-offset-zinc-950"
        >
          Try again
        </button>
        <Link
          href="/"
          className="inline-flex items-center rounded-lg bg-violet-600 px-4 py-2 text-sm font-medium text-white hover:bg-violet-700 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:ring-offset-2 dark:focus:ring-offset-zinc-950"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}
