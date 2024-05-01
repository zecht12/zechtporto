/* eslint-disable react/no-unescaped-entities */
"use client"

import React from "react";
import { motion } from "framer-motion";
import { StarWrapper } from "../app/hoc";
import { cardVariantsFadeIn, cardVariantsY2, fadeIn, textVariant } from "../app/utils/motion";
import { testimonials } from "../app/constants";
import Image from "next/image";

const FeedbackCard = ({
  index,
  testimonial,
  name,
  designation,
  company,
  image,
}: any) => (
  <motion.div initial="offscreen" whileInView="onscreen" viewport={{ once: true, amount: 0.8 }} variants={cardVariantsFadeIn} className='bg-black-200 p-10 rounded-3xl xs:w-[320px] w-full'>
    <p className='text-white font-black text-[48px]'>"</p>
    <div className='mt-1'>
      <p className='text-white tracking-wider text-[18px]'>{testimonial}</p>

      <div className='mt-7 flex justify-between items-center gap-1'>
        <div className='flex-1 flex flex-col'>
          <p className='text-white font-medium text-[16px]'>
            <span className='blue-text-gradient'>@</span> {name}
          </p>
          <p className='mt-1 text-secondary text-[12px]'>
            {designation} of {company}
          </p>
        </div>

        <Image
          src={image}
          width={1000}
          height={1000}
          alt={`feedback_by-${name}`}
          className='w-10 h-10 rounded-full object-cover'
        />
      </div>
    </div>
  </motion.div>
);

const Feedbacks = () => {
  return (
    <div id='feedback' className="mt-12 rounded-[20px]">
      <div className="rounded-2xl p-padding min-h-[300px]">
        <motion.div initial="offscreen" whileInView="onscreen" viewport={{ once: true, amount: 0.8 }} variants={cardVariantsY2}>
          <p className="sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider text-center md:text-start">What others say</p>
          <h2 className='text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px] text-center md:text-start'>Testimonials.</h2>
        </motion.div>
      </div>
      <div className="-mt-20 pb-14 p-paddingX flex flex-wrap gap-7">
        {/* {testimonials.map((testimonial:any, index:any) => (
          <FeedbackCard key={testimonial.name} index={index} {...testimonial} />
        ))} */}
      </div>
    </div>
  )
}

export default Feedbacks