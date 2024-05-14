"use client"

import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { EarthCanvas } from "./canvas";
import { StarWrapper } from "../app/hoc";
import { cardVariantsFadeIn, cardVariantsY1, slideIn } from "../app/utils/motion";

const Contact = () => {
  return (
    <div id='contact' className="relative w-full h-screen px-4 xl:px-10 md:px-8 sm:px-6 py-4 xl:py-10 md:py-8 sm:py-6">
      <motion.div
        initial="offscreen" whileInView="onscreen" viewport={{ once: true, amount: 0.8 }} variants={cardVariantsY1}
        className='flex-[0.75] p-8 rounded-2xl'
      >
        <p className="sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider text-center md:text-start">Get in touch</p>
        <h3 className='text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px] text-center md:text-start'>Contact.</h3>
        <form
          onSubmit={() => { }}
          className='mt-12 flex flex-col gap-8'
        >
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Name</span>
            <input
              type='text'
              name='name'
              value=""
              onChange={()=>{}}
              placeholder="What's your good name?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your email</span>
            <input
              type='email'
              name='email'
              value=""
              onChange={()=>{}}
              placeholder="What's your web address?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Message</span>
            <textarea
              rows={7}
              name='message'
              value=""
              onChange={()=>{}}
              placeholder='What you want to say?'
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>

          <button
            type='submit'
            className='bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary'
          >
            Send
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >
        <EarthCanvas />
      </motion.div>
    </div>
  )
}

export default Contact