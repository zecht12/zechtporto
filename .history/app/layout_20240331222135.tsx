import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import { Hero, Navbar } from "../components";
import Sidebar from "@/components/Sidebar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Zecht Portofolio",
  description: "Generated by Zecht",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <div className='relative z-0 bg-primary'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar />
          <Hero />
        </div>
        <Sidebar/>
      </div>
        {children}
      </body>
    </html>
  );
}
