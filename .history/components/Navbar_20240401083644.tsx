import React from 'react'
import Socials from './Socials'
import Link from 'next/link'
import Image from 'next/image'

const Navbar = () => {
  return (
    <header className="fixed z-30 w-full flex items-center px-15 xl:px-0 xl:h-[90px] ">
    <div className="container mx-0">
      <div className="flex flex-col lg:flex-row justify-between items-center gap-y-6 py-8">
        <Link href='/' className='flex items-center justify-around gap-'>
          <Image src={'/avatar.jpg'} width={40} height={40} alt="logo" priority={true} className="w-[40px] h-[40px] hover:scale-110 rounded-full shadow-md shadow-slate-500" />
          <p className='text-2xl'>Zecht</p>
        </Link>
        <Socials/>
      </div>
    </div>
  </header>
  )
}

export default Navbar