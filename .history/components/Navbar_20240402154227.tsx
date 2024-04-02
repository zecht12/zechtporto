import React from 'react'
import Socials from './Socials'
import Link from 'next/link'
import Image from 'next/image'

const Navbar = () => {
  return (
    <header className="fixed z-30 w-full flex items-center px-15 xl:px-0 xl:h-[70px] ">
    <div className="container mx-0">
      <div className="flex flex-col lg:flex-row justify-between items-center gap-y-6 py-8">
        <div className='md:flex items-center justify-center gap-2'>
          <Link href='#home' smo className='flex justify-center items-center'>
            <Image src={'/avatar.jpg'} width={40} height={40} alt="logo" priority={true} className="w-[40px] h-[40px] hover:scale-110 rounded-full shadow-md shadow-slate-500" />
          </Link>
          <p className='text-xl font-bold cursor-default'>Zecht</p>
        </div>
        <Socials/>
      </div>
    </div>
  </header>
  )
}

export default Navbar