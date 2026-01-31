"use client";

import { useCallback, useRef, useState } from "react";

type CodeBlockProps = {
  children: React.ReactNode;
  title?: string;
  output?: boolean;
};

export default function CodeBlock({
  children,
  title,
  output = false,
}: CodeBlockProps) {
  const codeRef = useRef<HTMLElement>(null);
  const [copied, setCopied] = useState(false);

  const handleCopy = useCallback(async () => {
    const text = codeRef.current?.textContent ?? "";
    if (!text) return;
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // ignore
    }
  }, []);

  const className = output ? "tutorial-output" : "tutorial-code";
  return (
    <div className="my-3">
      {title && (
        <p className="mb-1 text-sm font-medium text-zinc-600 dark:text-zinc-400">
          {title}
        </p>
      )}
      <div className="relative">
        <pre className={`${className} pr-24`}>
          <code ref={codeRef}>{children}</code>
        </pre>
        <button
          type="button"
          onClick={handleCopy}
          className="absolute right-2 top-2 flex items-center gap-1.5 rounded border border-zinc-500/50 bg-zinc-800/90 px-2.5 py-1.5 text-xs font-medium text-zinc-200 transition hover:bg-zinc-700/90 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:ring-offset-2 focus:ring-offset-[#1e1e1e] dark:focus:ring-offset-[#0d1117]"
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




