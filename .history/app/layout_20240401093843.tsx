// Pastikan Anda mengimpor createContext jika Anda menggunakannya
// import { createContext } from 'react';
import { Hero, Navbar, Sidebar } from '@/components';
import './globals.css';
import { Sora } from "next/font/google";
import { useRouter } from 'next/navigation';
import { AnimatePresence, motion } from 'framer-motion';

// Konfigurasi font Sora
const sora = Sora({
  subsets: ['latin'],
  variable: '--font-sora',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800']
});

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
  const router = useRouter();

  // Periksa apakah router dan router.pathname telah terdefinisi sebelum digunakan
  if (!router || !router.pathname) return null;

  return (
    <html lang="en">
      <head>
        <title>Zecht Porto</title>
      </head>
      <body className={`w-full h-auto  ${sora.variable} font-sora relative z-0 bg-primary`}>
        <AnimatePresence>
          {/* Gunakan router.pathname sebagai kunci */}
          <motion.div className='bg-hero-pattern bg-cover bg-no-repeat bg-center' key={router.pathname}>
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
