'use client'

import './globals.css'
import {Sora} from '@next/font/google'
import Nav from '@/components/Nav'
import Header from '@/components/Header'
import TopLeftImg from '@/components/TopLeftImg'
import { useRouter } from 'next/navigation'

const sora = Sora({
  subsets:['latin'],
  variable:'--font-sora',
  weight:['100','200','300','400','500','600','700','800']
})

export default function RootLayout({ children }) {
  const router = useRouter();
  return (
    <html lang="en">
      <head>
        <title>Zecht Porto</title>
      </head>
      <body className={`page  ${sora.variable} font-sora relative `}>
        {children}
      </body>
    </html>
  )
}