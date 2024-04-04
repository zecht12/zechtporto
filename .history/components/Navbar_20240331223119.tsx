import React from 'react'
import Socials from './Socials'
import Link from 'next/link'
import Image from 'next/image'
import { Hero } from '.'

const Navbar = () => {
  return (
    <header className="absolute z-30 w-full flex items-center px-15 xl:px-0 xl:h-[90px] ">
    <div className="container mx-0">
      <div className="flex flex-col lg:flex-row justify-between items-center gap-y-6 py-8">
        <Hero
        <Socials/>
      </div>
    </div>
  </header>
  )
}

export default Navbar