type QuestionProps = {
  question: string;
  number?: number;
  children: React.ReactNode;
};

export default function Question({ question, number, children }: QuestionProps) {
  return (
    <details className="group my-4 rounded-xl border border-zinc-200 bg-white dark:border-zinc-700 dark:bg-zinc-900">
      <summary className="flex cursor-pointer list-none items-center gap-2 px-4 py-3 text-left font-medium text-zinc-800 transition hover:bg-zinc-50 dark:text-zinc-200 dark:hover:bg-zinc-800/50 [&::-webkit-details-marker]:hidden">
        <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-zinc-200 text-sm dark:bg-zinc-600">
          {number ?? "?"}
        </span>
        <span>{question}</span>
        <span className="ml-auto text-zinc-400 transition group-open:rotate-180 dark:text-zinc-500">
          ▼
        </span>
      </summary>
      <div className="border-t border-zinc-200 px-4 py-3 text-sm text-zinc-600 dark:border-zinc-700 dark:text-zinc-400">
        {children}
      </div>
    </details>
  );
}
