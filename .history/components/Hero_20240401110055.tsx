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
                    <h1 className='font-black text-white lg:text-[80px] sm:text-[70px] xs:text-[60px] text-[50px] lg:leading-[98px] mt-2'>
                        Hi, Iam <span className='text-[#915EFF]'>Gilang Prima Ertansyah</span>
                    </h1>
                    <p className='mt-2 text-white-100'>
                        I develop 3D visuals, user <br className='sm:block hidden' />
                        interfaces and web applications
                    </p>
                </div>
            </div>
        </section>
    )
}

export default Hero