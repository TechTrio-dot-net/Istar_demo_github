export default function Loading() {
  return (
    <div className="flex min-h-[40vh] items-center justify-center px-4" aria-live="polite" aria-busy="true">
      <div className="flex flex-col items-center gap-3">
        <div
          className="h-8 w-8 animate-spin rounded-full border-2 border-violet-200 border-t-violet-600 dark:border-violet-800 dark:border-t-violet-400"
          aria-hidden
        />
        <p className="text-sm text-zinc-600 dark:text-zinc-400">Loading…</p>
      </div>
    </div>
  );
}
