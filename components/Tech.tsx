'use client'

import React from "react";
import { technologies } from "@/app/constants";
import { Tilt } from 'react-tilt'
import { motion } from "framer-motion"
import Image from "next/image";
import { cardVariantsFadeIn, cardVariantsY2, fadeIn } from "@/app/utils/motion";

const Tech = () => {
  return (
    <div id="tech" className="relative w-full h-auto px-4 xl:px-10 md:px-8 sm:px-6 py-4 xl:py-10 md:py-8 sm:py-6">
      <motion.div initial="offscreen" whileInView="onscreen" viewport={{ once: true, amount: 0.8 }} variants={cardVariantsY2} className="py-4 xl:py-10 md:py-8 sm:py-6">
        <p className="sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider text-center md:text-start">
          my current framework i use for code
        </p>
        <h2 className='text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px] text-center md:text-start'>
          Skills
        </h2>
      </motion.div>
      <div className='grid md:grid-cols-3 grid-cols-1 justify-center items-center gap-12 py-4 xl:py-10 md:py-8 sm:py-6'>
        {technologies.map((technology) => (
          <div key={technology.name} className='w-full hover:scale-110'>
            <motion.div initial="offscreen" whileInView="onscreen" viewport={{ once: true, amount: 0.8 }} variants={cardVariantsFadeIn} className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card">
              <div className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col' >
                <Image width={100} height={100} src={technology.icon} alt={technology.name} className='w-16 h-16 object-contain' />
                <h3 className='text-white text-[20px] font-bold text-center'>
                  {technology.name}
                </h3>
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tech;