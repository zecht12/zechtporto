'use client'

import React from 'react'
import { Tilt } from 'react-tilt'
import { motion } from "framer-motion"
import { services } from '@/app/constants'
import { fadeIn,textVariant } from '@/app/utils/motion'

const About = () => {
  return (
    <div id='about' className="h-screen ">
      <motion.div variants={fadeIn('down',0.2)} initial="hidden" animate="show" exit="hidden" >
        <p className='sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider'>
          Introduction
        </p>
        <h2 className='text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]'>
          Overview
        </h2>
      </motion.div>
    </div>
  )
}

export default About