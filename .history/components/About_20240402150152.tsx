/* eslint-disable react/no-unescaped-entities */
'use client'

import React from 'react'
import { Tilt } from 'react-tilt'
import { motion } from "framer-motion"
import { services } from '@/app/constants'
import { fadeIn,textVariant } from '@/app/utils/motion'
import Image from 'next/image'

const ServiceCard = ({ index, title, icon }:any) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div variants={fadeIn('down',0.2)} initial="hidden" animate="show" exit="hidden" className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card' >
      <div className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col' >
        <Image width={16} height={16} src={icon} alt='web-development' className='w-16 h-16 object-contain' />
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
      <motion.div  variants={textVariant(0.2)} initial="hidden" animate="show" exit="hidden" >
        <p className='sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider'>
          Introduction
        </p>
        <h2 className='text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]'>
          Overview
        </h2>
      </motion.div>
      <motion.p variants={fadeIn('down',0.2)} initial="hidden" animate="show" exit="hidden" className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]' >
        I'm a skilled software developer with experience in TypeScript and JavaScript, and expertise in frameworks like Nextjs, React, and Three.js. I'm a quick learner and collaborate closely with clients to create efficient, scalable, and user-friendly solutions that solve real-world problems. Let's work together to bring your ideas to life!
      </motion.p>
      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  )
}

export default About