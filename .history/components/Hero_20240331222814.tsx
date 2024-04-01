import Image from 'next/image';
import React from 'react'

const Hero = () => {
  return (
    <div className="xl:flex hidden xl:max-w-none">
      <Image src="./favicon.ico" width={737} height={678} alt="avatar" className="translate-z-0 w-full h-full" />
    </div>
  )
};

export default Hero