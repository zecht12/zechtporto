'use client'

import React from "react";
import {VerticalTimeline,VerticalTimelineElement} from "react-vertical-timeline-component";
import { motion } from "framer-motion";
import "react-vertical-timeline-component/style.min.css";
import { experiences } from "@/app/constants";
import { StarWrapper } from "@/app/hoc";
import { textVariant } from "@/app/utils/motion";
import Image from "next/image";

const ExperienceCard = (experiences:any) => {
  return(
    <VerticalTimelineElement contentStyle={{background:"#1d1836",color:"#fff"}} contentArrowStyle={{borderRight:"7px solid #232631"}} date={experiences.date} iconStyle={{background: experiences.iconBg}} icon={
      <div>
        <Image src={experiences.icon} alt={experiences.company_name} width={100} height={100} className="h-[60%] w-[60%] object-contain " />
      </div>
    }>
      <div>
        <h3></h3>
      </div>
    </VerticalTimelineElement>
  )
}

const Experience = () => {
  return (
    <div id='experience' className='relative w-full md:h-screen h-auto px-4 xl:px-10 md:px-8 sm:px-6'>
      <motion.div variants={textVariant(0.2)} initial="hidden" animate="show" exit="hidden">
        <p className='sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider text-center md:text-start'>
          What i have done so far?
        </p>
        <h2 className='text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px] text-center md:text-start'>
          Experience
        </h2>
      </motion.div>
      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {experiences.map((experiences, index) => (
            <ExperienceCard key={index} experience={experiences} />
          ))}
        </VerticalTimeline>
      </div>
    </div>
  )
}

export default StarWrapper(Experience,"experience")