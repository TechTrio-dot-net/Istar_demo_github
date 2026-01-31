"use client";

export default function GlobalError({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="en">
      <body className="bg-zinc-50 text-zinc-900 antialiased dark:bg-zinc-950 dark:text-zinc-100">
        <div className="flex min-h-screen flex-col items-center justify-center px-4">
          <h1 className="text-2xl font-bold">Something went wrong</h1>
          <p className="mt-2 text-zinc-600 dark:text-zinc-400">
            A critical error occurred. Please try again.
          </p>
          <button
            type="button"
            onClick={() => reset()}
            className="mt-6 rounded-lg bg-violet-600 px-4 py-2 text-sm font-medium text-white hover:bg-violet-700"
          >
            Try again
          </button>
        </div>
      </body>
    </html>
  );
}
