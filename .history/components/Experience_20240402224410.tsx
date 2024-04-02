'use client'

import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";
import { StarWrapper } from "@/app/hoc";
import { textVariant } from "@/app/utils/motion";
import Image from "next/image";
import { meta, shopify, starbucks, tesla } from "@/public/assets";

const ExperienceCard = ({ experiences }:any) => {
  return (
    <VerticalTimelineElement className="text-white" contentStyle={{ background: "#1d1836", color: "#fff", }} contentArrowStyle={{ borderRight: "7px solid  #232631" }} date={experiences.date} iconStyle={{ background: experiences.iconBg }} icon={
        <div className='flex justify-center items-center w-full h-full'>
          <Image src={experiences.icon} alt={experiences.company_name} width={100} height={100} className="h-[60%] w-[60%] object-contain " />
        </div>}>
      <div>
        <h3 className='text-white text-[24px] font-bold'>{experiences.title}</h3>
        <p className='text-secondary text-[16px] font-semibold' style={{ margin: 0 }}>
          {experiences.company_name}
        </p>
      </div>

      <ul className='mt-5 list-disc ml-5 space-y-2'>
        {experiences.points.map((point:any, index:any) => (
          <li
            key={`experiences-point-${index}`}
            className='text-white-100 text-[14px] pl-1 tracking-wider'
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  return (
    <div id='experience' className='relative w-full h-auto px-4 xl:px-10 md:px-8 sm:px-6 py-4 xl:py-10 md:py-8 sm:py-6'>
      <motion.div variants={textVariant(0.2)}>
        <p className="sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider text-center md:text-start">
          What I have done so far
        </p>
        <h2 className='text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px] text-center md:text-start'>
          Work Experience.
        </h2>
      </motion.div>

      <div className='mt-20 flex flex-col'>
        <VerticalTimeline>
          {experiences.map((experiences, index) => (
            <ExperienceCard
              key={`experiences-${index}`}
              experiences={experiences}
            />
          ))}
        </VerticalTimeline>
      </div>
    </div>
  );
};

export default StarWrapper(Experience, "experience");