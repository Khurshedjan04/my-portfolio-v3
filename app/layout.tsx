import type { Metadata } from "next";
import "./globals.css";
import Sidebar from "./components/Sidebar";
import CursorEffects from "./components/CursorEffects";
import Bubble from "./components/Bubble";
export const metadata: Metadata = {
  title: "Xurshed's portfolio",
  description:
    "Welcome to my portflio, Explore a collection of my web development projects, showcasing my skills in front-end technologies.",
  icons: {
    icon: "/logo.svg",
  },
  keywords: [
    "portfolio",
    "Xurshed",
    "Alimmamadov",
    "web development",
    "front-end",
    "React",
    "Next.js,",
    "Tailwind",
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "Python",
    "PDP university",
  ],
  openGraph: {
    title: "Xurshed's Portfolio",
    description:
      "Explore a collection of web development projects showcasing skills in React, JavaScript, and modern front-end technologies.",
    url: "https://my-portfolio-v2--seven.vercel.app",
    siteName: "Xurshed's Portfolio",
    images: [
      {
        url: "/logo.svg",
        width: 1200,
        height: 630,
        alt: "Portfolio Thumbnail",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="scroll-smooth" lang="en">
      <body className="bg-slate-900">
        <CursorEffects />
        <Bubble />
        <div className="max-w-screen-xl mx-auto">
          <div
            className="w-full flex flex-col  gap-16 px-6 py-12
            md:px-12 md:py-16 lg:py-0 lg:flex-row lg:justify-between lg:gap:4"
          >
            <Sidebar />
            <main className="flex-1 text-balance">{children}</main>
          </div>
        </div>
      </body>
    </html>
  );
}
