import Image from 'next/image';
import React from 'react'

const Hero = () => {
  return (
    <div className="xl:flex hidden xl:max-w-none">
          <Link href='/'>
            <Image src={'/logo-GR.png'} width={40} height={40} alt="logo" priority={true} className="w-[40px] h-[40px] hover:scale-110 " />
      </Link>
    </div>
  )
};

export default Hero