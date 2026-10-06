import type { Metadata } from "next";
import { Providers } from "./providers";
import EyeCursor from "@/components/EyeCursor";
import "./globals.css";

export const metadata: Metadata = {
  title: "Monicah Wangari | Software Developer",
  description: "Full-Stack Software Developer specializing in React, Next.js, Node.js, and mobile applications.",
  keywords: "Software Developer, Full Stack, React, Next.js, Mobile Apps, Portfolio, Kenya",
  openGraph: {
    title: "Monicah Wangari | Software Developer",
    description: "Building software that solves real-world problems.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <EyeCursor />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}