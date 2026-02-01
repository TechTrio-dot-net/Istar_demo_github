"use client";

import Link from "next/link";
import { useState } from "react";

type FormState = "idle" | "sending" | "success" | "error";

export default function ContactPage() {
  const [state, setState] = useState<FormState>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    setState("sending");
    setErrorMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        body: formData,
      });
      const data = await res.json().catch(() => ({}));

      if (!res.ok) {
        setState("error");
        setErrorMessage(data.error ?? "Something went wrong.");
        return;
      }
      setState("success");
      form.reset();
    } catch {
      setState("error");
      setErrorMessage("Network error. Please try again.");
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-50 to-zinc-100 dark:from-zinc-950 dark:to-zinc-900">
      <main className="mx-auto max-w-xl px-4 py-8 sm:px-6 sm:py-10">
        <p className="text-sm font-medium uppercase tracking-wider text-violet-600 dark:text-violet-400">
          TechTrio Automation
        </p>
        <h1 className="mt-1 text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
          Contact &amp; Help
        </h1>
        <p className="mt-2 text-zinc-600 dark:text-zinc-400">
          Report an issue, ask for reference help, or share feedback. You can
          attach screenshots (up to 4 images, 5MB each).
        </p>

        <div className="mt-6 rounded-2xl border border-zinc-200 bg-white p-4 shadow-sm sm:mt-8 sm:p-6 dark:border-zinc-800 dark:bg-zinc-900 sm:p-8">
          {state === "success" && (
            <div
              className="mb-6 rounded-lg border border-emerald-200 bg-emerald-50 p-4 text-sm text-emerald-800 dark:border-emerald-800 dark:bg-emerald-950/50 dark:text-emerald-200"
              role="alert"
            >
              Message sent. We&apos;ll get back to you soon.
            </div>
          )}
          {state === "error" && errorMessage && (
            <div
              className="mb-6 rounded-lg border border-red-200 bg-red-50 p-4 text-sm text-red-800 dark:border-red-800 dark:bg-red-950/50 dark:text-red-200"
              role="alert"
            >
              {errorMessage}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label
                htmlFor="name"
                className="mb-1 block text-sm font-medium text-zinc-700 dark:text-zinc-300"
              >
                Name <span className="text-red-500">*</span>
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                autoComplete="name"
                className="w-full min-h-[48px] rounded-lg border border-zinc-300 bg-white px-3 py-3 text-base text-zinc-900 shadow-sm focus:border-violet-500 focus:outline-none focus:ring-1 focus:ring-violet-500 dark:border-zinc-600 dark:bg-zinc-800 dark:text-zinc-100 sm:min-h-0 sm:py-2"
                placeholder="Your name"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="mb-1 block text-sm font-medium text-zinc-700 dark:text-zinc-300"
              >
                Email <span className="text-red-500">*</span>
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                autoComplete="email"
                className="w-full min-h-[48px] rounded-lg border border-zinc-300 bg-white px-3 py-3 text-base text-zinc-900 shadow-sm focus:border-violet-500 focus:outline-none focus:ring-1 focus:ring-violet-500 dark:border-zinc-600 dark:bg-zinc-800 dark:text-zinc-100 sm:min-h-0 sm:py-2"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label
                htmlFor="type"
                className="mb-1 block text-sm font-medium text-zinc-700 dark:text-zinc-300"
              >
                Type
              </label>
              <select
                id="type"
                name="type"
                className="w-full min-h-[48px] rounded-lg border border-zinc-300 bg-white px-3 py-3 text-base text-zinc-900 shadow-sm focus:border-violet-500 focus:outline-none focus:ring-1 focus:ring-violet-500 dark:border-zinc-600 dark:bg-zinc-800 dark:text-zinc-100 sm:min-h-0 sm:py-2"
              >
                <option value="issue">Report an issue</option>
                <option value="reference">Reference / help request</option>
              </select>
            </div>
            <div>
              <label
                htmlFor="message"
                className="mb-1 block text-sm font-medium text-zinc-700 dark:text-zinc-300"
              >
                Message <span className="text-red-500">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                className="w-full min-h-[120px] rounded-lg border border-zinc-300 bg-white px-3 py-3 text-base text-zinc-900 shadow-sm focus:border-violet-500 focus:outline-none focus:ring-1 focus:ring-violet-500 dark:border-zinc-600 dark:bg-zinc-800 dark:text-zinc-100 sm:min-h-0 sm:py-2"
                placeholder="Describe your issue or what help you need..."
              />
            </div>
            <div>
              <label
                htmlFor="screenshots"
                className="mb-1 block text-sm font-medium text-zinc-700 dark:text-zinc-300"
              >
                Screenshots (optional)
              </label>
              <input
                id="screenshots"
                name="screenshots"
                type="file"
                accept="image/jpeg,image/png,image/gif,image/webp"
                multiple
                className="w-full text-sm text-zinc-600 file:mr-3 file:rounded-lg file:border-0 file:bg-violet-100 file:px-3 file:py-2 file:text-violet-700 dark:text-zinc-400 dark:file:bg-violet-900/50 dark:file:text-violet-300"
              />
              <p className="mt-1 text-xs text-zinc-500 dark:text-zinc-500">
                Up to 4 images, 5MB each (JPEG, PNG, GIF, WebP).
              </p>
            </div>
            <button
              type="submit"
              disabled={state === "sending"}
              className="w-full min-h-[48px] rounded-lg bg-violet-600 px-4 py-3 text-base font-medium text-white hover:bg-violet-700 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:ring-offset-2 disabled:opacity-60 dark:focus:ring-offset-zinc-900"
            >
              {state === "sending" ? "Sending…" : "Send message"}
            </button>
          </form>
        </div>

        <div className="mt-8 flex flex-wrap gap-4">
          <Link
            href="/"
            className="text-sm font-medium text-violet-600 hover:underline dark:text-violet-400"
          >
            ← Back to Home
          </Link>
        </div>
      </main>
    </div>
  );
}
