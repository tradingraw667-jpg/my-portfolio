import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { LangProvider } from "@/context/LangContext";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Full Stack Developer Portfolio",
  description:
    "Full Stack Developer specializing in responsive, high-performance web and mobile applications.",
  keywords: [
    "full stack developer",
    "web development",
    "React",
    "Next.js",
    "PWA",
    "mobile apps",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} font-sans bg-bg text-text-primary antialiased`}>
        <LangProvider>{children}</LangProvider>
      </body>
    </html>
  );
}
