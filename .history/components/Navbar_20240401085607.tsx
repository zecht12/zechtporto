import React from 'react'
import Socials from './Socials'
import Link from 'next/link'
import Image from 'next/image'

const Navbar = () => {
  return (
    <header className="fixed z-30 w-full flex items-center px-15 xl:px-0 xl:h-[90px] ">
    <div className="container mx-0">
      <div className="flex flex-col lg:flex-row justify-between items-center gap-y-6 py-8">
        <div className='md:flex items-center justify-center gap-2'>
          <Link href='/'>
            <Image src={'/avatar.jpg'} width={50} height={50} alt="logo" priority={true} className="w-[50px] h-[50px] hover:scale-110 rounded-full shadow-md shadow-slate-500" />
          </Link>
          <p className='text-xl font-bold cur'>Zecht</p>
        </div>
        <Socials/>
      </div>
    </div>
  </header>
  )
}

export default Navbar