type QuestionProps = {
  question: string;
  number?: number;
  children: React.ReactNode;
};

export default function Question({ question, number, children }: QuestionProps) {
  return (
    <details className="group rounded-lg border border-zinc-200 bg-white shadow-sm dark:border-zinc-700 dark:bg-zinc-900/50">
      <summary className="flex cursor-pointer list-none items-center gap-3 px-4 py-3.5 text-left transition hover:bg-zinc-50 dark:hover:bg-zinc-800/50 [&::-webkit-details-marker]:hidden">
        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-zinc-100 text-sm font-semibold text-zinc-700 dark:bg-zinc-700 dark:text-zinc-200">
          {number ?? "?"}
        </span>
        <span className="min-w-0 flex-1 font-medium text-zinc-800 dark:text-zinc-200">
          {question}
        </span>
        <span className="shrink-0 text-zinc-400 transition-[transform] group-open:rotate-180 dark:text-zinc-500">
          <ChevronDown className="h-5 w-5" />
        </span>
      </summary>
      <div className="border-t border-zinc-200 px-4 py-3.5 text-sm text-zinc-600 dark:border-zinc-700 dark:text-zinc-400">
        {children}
      </div>
    </details>
  );
}

function ChevronDown({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
    </svg>
  );
}
