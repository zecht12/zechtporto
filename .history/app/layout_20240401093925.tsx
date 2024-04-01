'use clie'
import { Hero, Navbar, Sidebar } from '@/components';
import './globals.css';
import { Sora } from "next/font/google";
import { usePathname, useRouter } from 'next/navigation';
import { AnimatePresence, motion } from 'framer-motion';

const sora = Sora({
  subsets: ['latin'],
  variable: '--font-sora',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800']
});

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
  const router = usePathname();

  return (
    <html lang="en">
      <head>
        <title>Zecht Porto</title>
      </head>
      <body className={`w-full h-auto  ${sora.variable} font-sora relative z-0 bg-primary`}>
        <AnimatePresence>
          <motion.div className='bg-hero-pattern bg-cover bg-no-repeat bg-center' key={router}>
            <Navbar />
            <Hero />
            <Sidebar />
            {children}
          </motion.div>
        </AnimatePresence>
      </body>
    </html>
  );
}
