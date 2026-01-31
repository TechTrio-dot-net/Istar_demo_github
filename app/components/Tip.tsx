type TipProps = {
  title?: string;
  children: React.ReactNode;
  variant?: "default" | "warning" | "success";
};

export default function Tip({ title = "Tip", children, variant = "default" }: TipProps) {
  const variants = {
    default:
      "border-violet-200 bg-violet-50 text-violet-900 dark:border-violet-800 dark:bg-violet-950/50 dark:text-violet-100",
    warning:
      "border-amber-200 bg-amber-50 text-amber-900 dark:border-amber-800 dark:bg-amber-950/50 dark:text-amber-100",
    success:
      "border-emerald-200 bg-emerald-50 text-emerald-900 dark:border-emerald-800 dark:bg-emerald-950/50 dark:text-emerald-100",
  };
  const icon = variant === "warning" ? "⚠" : variant === "success" ? "✓" : "💡";
  const borderAccent = variant === "warning" ? "border-l-amber-500" : variant === "success" ? "border-l-emerald-500" : "border-l-violet-500";
  return (
    <div
      className={`my-4 rounded-xl border-l-4 ${borderAccent} p-4 ${variants[variant]}`}
      role="note"
      aria-label={title}
    >
      <p className="flex items-center gap-2 text-sm font-semibold">
        <span aria-hidden>{icon}</span>
        {title}
      </p>
      <div className="mt-2 text-sm [&>p]:mt-1 [&>ul]:mt-2 [&>ul]:list-disc [&>ul]:pl-5">
        {children}
      </div>
    </div>
  );
}
