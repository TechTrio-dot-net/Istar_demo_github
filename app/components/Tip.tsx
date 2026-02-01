type TipProps = {
  title?: string;
  children: React.ReactNode;
  variant?: "default" | "warning" | "success";
};

const variantStyles = {
  default: {
    wrapper: "border-zinc-200 bg-white dark:border-zinc-700 dark:bg-zinc-900/50",
    label: "text-violet-600 dark:text-violet-400",
    accent: "bg-violet-500",
  },
  warning: {
    wrapper: "border-amber-200/80 bg-amber-50/50 dark:border-amber-800/50 dark:bg-amber-950/20",
    label: "text-amber-700 dark:text-amber-400",
    accent: "bg-amber-500",
  },
  success: {
    wrapper: "border-emerald-200/80 bg-emerald-50/50 dark:border-emerald-800/50 dark:bg-emerald-950/20",
    label: "text-emerald-700 dark:text-emerald-400",
    accent: "bg-emerald-500",
  },
};

const variantIcons = {
  default: (
    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
    </svg>
  ),
  warning: (
    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
    </svg>
  ),
  success: (
    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
};

export default function Tip({ title = "Tip", children, variant = "default" }: TipProps) {
  const style = variantStyles[variant];
  const icon = variantIcons[variant];

  return (
    <div
      className={`rounded-lg border ${style.wrapper} p-4 shadow-sm`}
      role="note"
      aria-label={title}
    >
      <div className="flex gap-3">
        <span
          className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg ${style.accent} text-white`}
          aria-hidden
        >
          {icon}
        </span>
        <div className="min-w-0 flex-1">
          <p className={`text-sm font-semibold ${style.label}`}>{title}</p>
          <div className="mt-1.5 text-sm text-zinc-600 [&>p]:mt-1 [&>ul]:mt-2 [&>ul]:list-disc [&>ul]:pl-5 [&_code]:rounded [&_code]:bg-zinc-200 [&_code]:px-1 [&_code]:py-0.5 [&_code]:font-mono [&_code]:text-xs dark:text-zinc-400 dark:[&_code]:bg-zinc-700">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
