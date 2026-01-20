import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/header";
import { MobileNav } from "@/components/layout/mobile-nav";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Coffee Inventory",
  description: "Mobile-first inventory system",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex min-h-screen flex-col bg-muted/40 pb-16 md:pb-0">
          <Header />
          <main className="flex-1 p-4 md:p-8">
            {children}
          </main>
          <MobileNav />
        </div>
      </body>
    </html>
  );
}
