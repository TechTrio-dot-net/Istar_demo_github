"use client";

import { useCallback, useState } from "react";

type Platform = "mac" | "windows" | "linux";

type CodeBlockTabsProps = {
  title?: string;
  mac: string;
  windows: string;
  linux: string;
  output?: boolean;
};

export default function CodeBlockTabs({
  title,
  mac,
  windows,
  linux,
  output = false,
}: CodeBlockTabsProps) {
  const [platform, setPlatform] = useState<Platform>("mac");
  const [copied, setCopied] = useState(false);

  const codeByPlatform: Record<Platform, string> = { mac, windows, linux };
  const currentCode = codeByPlatform[platform];

  const handleCopy = useCallback(async () => {
    if (!currentCode) return;
    try {
      await navigator.clipboard.writeText(currentCode);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // ignore
    }
  }, [currentCode]);

  const className = output ? "tutorial-output" : "tutorial-code";

  const tabs: { id: Platform; label: string }[] = [
    { id: "mac", label: "Mac" },
    { id: "windows", label: "Windows" },
    { id: "linux", label: "Linux" },
  ];

  return (
    <div className="my-3">
      <div className="mb-2 flex flex-wrap items-center gap-2">
        {title && (
          <p className="text-sm font-medium text-zinc-600 dark:text-zinc-400">
            {title}
          </p>
        )}
        <div
          className="inline-flex rounded-lg border border-zinc-200 bg-zinc-100/80 p-0.5 dark:border-zinc-700 dark:bg-zinc-800/80"
          role="tablist"
          aria-label="Select operating system"
        >
          {tabs.map(({ id, label }) => (
            <button
              key={id}
              type="button"
              role="tab"
              aria-selected={platform === id}
              onClick={() => setPlatform(id)}
              className={`min-h-[36px] rounded-md px-3 py-1.5 text-sm font-medium transition focus:outline-none focus:ring-2 focus:ring-violet-500 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-zinc-950 ${
                platform === id
                  ? "bg-white text-zinc-900 shadow-sm dark:bg-zinc-700 dark:text-zinc-100"
                  : "text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-200"
              }`}
            >
              {label}
            </button>
          ))}
        </div>
      </div>
      <div className="relative min-w-0">
        <pre className={`${className} pr-20 sm:pr-24 overflow-x-auto`}>
          <code>{currentCode}</code>
        </pre>
        <button
          type="button"
          onClick={handleCopy}
          className="absolute right-2 top-2 flex min-h-[44px] min-w-[44px] items-center justify-center gap-1.5 rounded border border-zinc-500/50 bg-zinc-800/90 px-2.5 py-2 text-xs font-medium text-zinc-200 transition hover:bg-zinc-700/90 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:ring-offset-2 focus:ring-offset-[#1e1e1e] dark:focus:ring-offset-[#0d1117] sm:min-h-0 sm:min-w-0 sm:py-1.5"
          aria-label={copied ? "Copied" : "Copy code"}
        >
          {copied ? (
            <>
              <span aria-hidden>✓</span>
              Copied
            </>
          ) : (
            <>
              <CopyIcon className="h-3.5 w-3.5" aria-hidden />
              Copy
            </>
          )}
        </button>
      </div>
    </div>
  );
}

function CopyIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      strokeWidth={2}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
      />
    </svg>
  );
}
