import type { Metadata } from "next";
import "./globals.css";
import Sidebar from "./components/Sidebar";
import CursorEffects from "./components/CursorEffects";
import Bubble from "./components/Bubble";
export const metadata: Metadata = {
  title: "Xurshed Alimmamadov",
  description: "Welcome my next app",
  icons: {
    icon: "/logo.svg",
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
        <Bubble/>
        <div className="max-w-screen-xl mx-auto">
          <div
            className="w-full flex flex-col  gap-16 px-6 py-12
            md:px-12 md:py-16 lg:py-0 lg:flex-row lg:justify-between lg:gap:4"
          >
            <Sidebar />
            <main className="flex-1 pt-24 lg:py-24">{children}</main>
          </div>
        </div>
      </body>
    </html>
  );
}
