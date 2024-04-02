import React from 'react'
import { Tilt } from 'react-tilt'
import { motion } from "framer-motion"
import { services } from '@/app/constants'
import { fadeIn,textVariant } from '@/app/utils/motion'

const About = () => {
  return (
    <div id='about' className="h-screen ">
      <motion.div variants={fadeIn('down',0.2)} initial="hidden" animate="show" exit="hidden" >
        <p c>Introduction</p>
        <h2>Overview</h2>
      </motion.div>
    </div>
  )
}

export default About