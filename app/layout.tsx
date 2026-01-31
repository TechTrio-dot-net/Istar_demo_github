import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { site } from "@/lib/site";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
  ],
};

export const metadata: Metadata = {
  metadataBase: site.baseUrl ? new URL(site.baseUrl) : undefined,
  title: {
    default: `${site.name} – Learn GitHub Push and Deploy`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  keywords: [
    "Git",
    "GitHub",
    "Vercel",
    "Next.js",
    "tutorial",
    "students",
    "deploy",
    "version control",
  ],
  authors: [{ name: site.name }],
  creator: site.name,
  openGraph: {
    type: "website",
    locale: "en",
    title: site.name,
    description: site.description,
    siteName: site.name,
  },
  twitter: {
    card: "summary_large_image",
    title: site.name,
    description: site.description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-pt-16">
      <body
        className={`${geistSans.variable} ${geistMono.variable} min-h-screen antialiased`}
      >
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded focus:bg-violet-600 focus:px-3 focus:py-2 focus:text-sm focus:font-medium focus:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-violet-600"
        >
          Skip to main content
        </a>
        <Nav />
        <div id="main-content" tabIndex={-1} className="flex min-h-[calc(100vh-8rem)] flex-col">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
