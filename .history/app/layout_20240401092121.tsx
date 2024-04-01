import { Hero, Navbar, Sidebar } from '@/components'
import './globals.css'
import type { Metadata } from "next";
import { Sora } from "next/font/google";
import { useRouter } from 'next/navigation'

const sora = Sora({
  subsets:['latin'],
  variable:'--font-sora',
  weight:['100','200','300','400','500','600','700','800']
})

export const metadata: Metadata = {
  title: "Zecht Portofolio",
  description: "Generated by Zecht",
};

export default function RootLayout({ children}: Readonly<{ children: React.ReactNode; }>) {
  return (
    <div className='relative z-0 bg-primary'>
    <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
      <Navbar />
      <Hero />
    </div>
    <About />
    <Experience />
    <Tech />
    <Works />
    <Feedbacks />
    <div className='relative z-0'>
      <Contact />
      <StarsCanvas />
    </div>
  </div>
  )
}