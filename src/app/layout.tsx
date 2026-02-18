import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

import { Analytics } from "@vercel/analytics/next";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-jetbrains" });

export const metadata: Metadata = {
  title: "Jayanth M | Portfolio",
  description: "Portfolio of Jayanth M - Transitioning from Pega/Enterprise to Antigravity & Agentic AI. Explore projects like VoyageArchitect and Sarga Ramanthali.",
  keywords: [
    "Jayanth M", "Jayanth", "Jayanth Mouvanal", "Jayanthmouvanal", "Jayanthm", "M Jayanth", "Mjayanth", "Mouvanal Jayanth",
    "ജയന്ത്", "ജയന്ത് എം", "ജയന്ത് മൗവനാൽ", "മൗവനാൽ ജയന്ത്",
    "Pega Developer", "AI Engineer", "Next.js Portfolio", "Antigravity AI", "Vibe Coding"
  ],
  authors: [{ name: "Jayanth M" }],
  creator: "Jayanth M",
  openGraph: {
    title: "Jayanth M | Portfolio",
    description: "Enterprise solutions to Agentic AI. Portfolio of Jayanth M.",
    url: "https://jayanth-m-personal-portfolio.vercel.app/",
    siteName: "Jayanth M Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jayanth M | Portfolio",
    description: "Enterprise solutions to Agentic AI. Portfolio of Jayanth M.",
  },
  verification: {
    google: "SLpWB8SYkrAY0sIXgikAjfyqyxPudNFBi0yXjAJkDVQ",
  },
  robots: {
    index: true,
    follow: true,
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className={`${inter.variable} ${jetbrainsMono.variable} font-sans bg-slate-950 text-slate-200 antialiased selection:bg-cyan-500/30 selection:text-cyan-200`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
