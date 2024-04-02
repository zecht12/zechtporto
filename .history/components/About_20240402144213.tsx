import React from 'react'
import { Tilt } from 'react-tilt'
import { motion } from "framer-motion"
import { services } from '@/app/constants'
import { fadeIn,textVariant } from '@/app/utils/motion'

const About = () => {
  return (
    <div id='about' className="h-screen ">
      <motion.div variants={fadeIn('down',0.2)} initial="hidden" animate="show" exit="hidden" >
        <p className='font-sectionSubText'>Introduction</p>
        <h2 className='font-se'>Overview</h2>
      </motion.div>
    </div>
  )
}

export default About