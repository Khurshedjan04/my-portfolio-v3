import type { Metadata } from "next";
import "./globals.css";
import Sidebar from "./components/Sidebar";
import CursorEffects from "./components/CursorEffects";
import Bubble from "./components/Bubble";

export const metadata: Metadata = {
  title: {
    default: "Xurshed Alimmamadov — Software Engineer",
    template: "%s | Xurshed Alimmamadov",
  },
  description:
    "Software Engineer and Full-Stack Developer specializing in backend systems, C#, .NET, Node.js, and modern web technologies. Based in Tashkent, Uzbekistan.",
  keywords: [
    "Xurshed Alimmamadov",
    "Xurshid Alimmamadov",
    "software engineer Tashkent",
    "full-stack developer Uzbekistan",
    "C# developer",
    ".NET developer",
    "Node.js developer",
    "backend engineer",
    "PDP University",
    "React developer",
    "Next.js developer",
    "web developer portfolio",
  ],
  authors: [{ name: "Xurshed Alimmamadov" }],
  creator: "Xurshed Alimmamadov",
  icons: {
    icon: "/og-image.png",
  },
  metadataBase: new URL("https://my-portfolio-v3.vercel.app"), 
  openGraph: {
    title: "Xurshed Alimmamadov — Software Engineer",
    description:
      "Software Engineer specializing in backend systems, C#, .NET, and full-stack development. Explore my projects and experience.",
    url: "https://my-portfolio-v3.vercel.app", 
    siteName: "Xurshed Alimmamadov",
    images: [
      {
        url: "/og-image.png", 
        width: 1200,
        height: 630,
        alt: "Xurshed Alimmamadov — Software Engineer Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Xurshed Alimmamadov — Software Engineer",
    description:
      "Software Engineer specializing in backend systems, C#, .NET, and full-stack development.",
    images: ["/og-image.png"],
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
    <html className="scroll-smooth" lang="en">
      <body className="bg-slate-900">
        <CursorEffects />
        <Bubble />
        <div className="max-w-screen-xl mx-auto">
          <div
            className="w-full flex flex-col gap-16 px-6 py-12
            md:px-12 md:py-16 lg:py-0 lg:flex-row lg:justify-between lg:gap-4"
          >
            <Sidebar />
            <main className="flex-1">{children}</main>
          </div>
        </div>
      </body>
    </html>
  );
}