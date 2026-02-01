import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact & Help",
  description:
    "Report an issue, ask for reference help, or share feedback. Attach screenshots. TechTrio Automation.",
};

export default function ContactLayout({
  children,
}: { children: React.ReactNode }) {
  return children;
}
