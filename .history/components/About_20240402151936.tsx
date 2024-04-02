/* eslint-disable react/no-unescaped-entities */
'use client'

import React from 'react'
import { Tilt } from 'react-tilt'
import { motion } from "framer-motion"
import { services } from '@/app/constants'
import { fadeIn,textVariant } from '@/app/utils/motion'
import Image from 'next/image'
import { SectionWrapper } from '@/app/hoc'

const ServiceCard = ({ index, title, icon }:any) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div variants={fadeIn('down',0.2)} initial="hidden" animate="show" exit="hidden" className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card' >
      <div className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col' >
        <Image width={100} height={100} src={icon} alt='web-development' className='w-16 h-16 object-contain' />
        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
    <div className="relative w-full md:h-screen h-auto px-2 xl:px-8 md:px-6 sm:px-4">

    </div>
    </>
  )
}

export default SectionWrapper(About,"about");