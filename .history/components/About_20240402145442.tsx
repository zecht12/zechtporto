'use client'

import React from 'react'
import { Tilt } from 'react-tilt'
import { motion } from "framer-motion"
import { services } from '@/app/constants'
import { fadeIn,textVariant } from '@/app/utils/motion'

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <Image
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <div id='about' className="h-screen ">
      <motion.div variants={textVariant(0.2)} initial="hidden" animate="show" exit="hidden" >
        <p className='sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider'>
          Introduction
        </p>
        <h2 className='text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]'>
          Overview
        </h2>
      </motion.div>
      <motion.div variants={fadeIn('down',0.2)} initial="hidden" animate="show" exit="hidden" >

      </motion.div>
    </div>
  )
}

export default About