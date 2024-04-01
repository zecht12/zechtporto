/* eslint-disable react/no-unescaped-entities */
'use client'

import React from 'react'
import { motion } from "framer-motion"
import { ComputersCanvas } from "./canvas";

const Hero = () => {
    return (
        <section className="relative h-screen w-full mx-auto">
            <motion.div variants={fadeIn('down',0.2)} initial="hidden" animate="show" exit="hidden" className='absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5 pt-14'>
                <div className='flex flex-col justify-center items-center mt-5'>
                    <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
                    <div className='w-1 sm:h-80 h-40 violet-gradient' />
                </div>
                <div className='w-3/5'>
                    <h1 className='font-black text-white lg:text-[80px] sm:text-[60px] xs:text-[50px] text-[40px] lg:leading-[98px] mt-2'>
                        Hi, I'm <span className='text-[#915EFF]'>Zecht</span>
                    </h1>
                    <p className='text-[#dfd9ff] font-medium lg:text-[20px] sm:text-[16px] xs:text-[10px] text-[6px] lg:leading-[25px] mt-2 text-justify'>
                        My real name is Gilang Prima Ertansyah. I'm a fullstack web developer especially in build and designing web.
                    </p>
                    <p className='text-[#dfd9ff] font-medium lg:text-[20px] sm:text-[16px] xs:text-[10px] text-[6px] lg:leading-[25px] mt-2 text-justify'>
                        Recently I'm focused on building responsive web applications with supabase database, Framer motion, Threejs and prisma.
                    </p>
                </div>
            </motion.div>
        </section>
    )
}

export default Hero