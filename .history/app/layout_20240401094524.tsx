'use client'
import { Hero, Navbar, Sidebar } from '@/components';
import './globals.css';
import { Sora } from "next/font/google";
import Anim{ AnimatePresence } from 'framer-motion';

const sora = Sora({
  subsets: ['latin'],
  variable: '--font-sora',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800']
});

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode; }>) {

  return (
    <html lang="en">
      <head>
        <title>Zecht Porto</title>
      </head>
      <body className={`w-full h-auto  ${sora.variable} font-sora relative z-0 bg-primary`}>
        <AnimatePresence>
          <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
            <Navbar />
            <Hero />
            <Sidebar />
            {children}
          </div>
        </AnimatePresence>
      </body>
    </html>
  );
}
