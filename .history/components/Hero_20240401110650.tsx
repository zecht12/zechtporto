'use client'

import React from 'react'
import { motion } from "framer-motion"
import { ComputersCanvas } from "./canvas";

const Hero = () => {
    return (
        <section className="relative h-screen w-full mx-auto">
            <div className='absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5 pt-14'>
                <div className='flex flex-col justify-center items-center mt-5'>
                    <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
                    <div className='w-1 sm:h-80 h-40 violet-gradient' />
                </div>
                <div className='w-4/5'>
                    <h1 className='font-black text-white lg:text-[80px] sm:text-[60px] xs:text-[50px] text-[40px] lg:leading-[98px] mt-2'>
                        Hi, Iam <span className='text-[#915EFF]'>Zecht</span>
                    </h1>
                    <p className='text-[#dfd9ff] font-medium lg:text-[30px] sm:text-[26px] xs:text-[20px] text-[16px] lg:leading-[40px]mt-2'>
                        My real name Iam a fullstack web developer especially in build and designing web.
                        <br className='sm:block hidden' />
                        Recently Iam focused on building responsive web applications with supabase database and prisma.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default Hero