/* eslint-disable react/no-unescaped-entities */
'use client'

import { motion } from "framer-motion";
import { ComputersCanvas } from "./canvas";
import { fadeIn } from "@/app/utils/motion";

const Hero = () => {
    return (
        <section className={`relative w-full h-screen mx-auto`}>
            <div className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto p-paddingX flex flex-row items-start gap-5 pt-14`} >
                <div className='flex flex-col justify-center items-center mt-5'>
                    <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
                    <div className='w-1 sm:h-80 h-40 violet-gradient' />
                </div>
                <motion.div variants={fadeIn('down',0.2)} initial="hidden" animate="show" exit="hidden" className="w-3/4">
                    <h1 className='font-black text-white lg:text-[80px] sm:text-[60px] xs:text-[50px] text-[40px] lg:leading-[98px] mt-2'>
                        Hi, I'm <span className='text-[#915EFF]'>Zecht</span>
                    </h1>
                    <p className='text-[#dfd9ff] font-medium lg:text-[20px] sm:text-[16px] xs:text-[10px] text-[10px] lg:leading-[25px] mt-2 text-justify'>
                        My real name is Gilang Prima Ertansyah. I'm a fullstack web developer especially in build and designing web. Recently I'm focused on building responsive web applications with supabase database and prisma.
                    </p>
                </motion.div>
            </div>

            <div className="pt-28 w-full h-full">
                <ComputersCanvas />
            </div>

            <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
                <a href='#about'>
                    <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
                        <motion.div animate={{ y: [0, 24, 0], }} transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop",}} className='w-3 h-3 rounded-full bg-secondary mb-1'/>
                    </div>
                </a>
            </div>
        </section>
    );
};

export default Hero;