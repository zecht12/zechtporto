import React from 'react'

const Navbar = () => {
  return (
    <header className="absolute z-30 w-full flex items-center px-15 xl:px-0 xl:h-[90px] ">
    <div className="container mx-0">
      <div className="flex flex-col lg:flex-row justify-between items-center gap-y-6 py-8">
        <Link href='/'>
          <Image src={'/logo-GR.png'} width={40} height={40} alt="logo" priority={true} className="w-[40px] h-[40px] hover:scale-110 " />
        </Link>
        <Socials/>
      </div>
    </div>
  </header>
  )
}

export default Navbar