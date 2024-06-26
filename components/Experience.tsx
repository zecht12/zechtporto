'use client'

import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";
import { experiences } from "@/app/constants";
import { StarWrapper } from "@/app/hoc";
import { cardVariantsX, cardVariantsY2, textVariant } from "@/app/utils/motion";
import Image from "next/image";

const ExperienceCard = ({ experience }:any) => {
  return (
    <VerticalTimelineElement visible={true} className="vertical-timeline-element--work" contentStyle={{ background: "#1d1836", color: "#fff", }} contentArrowStyle={{ borderRight: "7px solid  #232631" }} date={experience.date} iconStyle={{ background: experience.iconBg }} icon={
        <motion.div initial="offscreen" whileInView="onscreen" viewport={{ once: true, amount: 0.8 }} variants={cardVariantsX} className='flex justify-center items-center w-full h-full'>
          <Image src={experience.icon} alt={experience.company_name} width={100} height={100} className="h-[60%] w-[60%] object-contain " />
        </motion.div>}>
      <motion.div initial="offscreen" whileInView="onscreen" viewport={{ once: true, amount: 0.8 }} variants={cardVariantsY2}>
        <h3 className='text-white text-[24px] font-bold'>{experience.title}</h3>
        <p className='text-secondary text-[16px] font-semibold' style={{ margin: 0 }}>
          {experience.company_name}
        </p>
      </motion.div>

      <ul className='mt-5 list-disc ml-5 space-y-2'>
        {experience.points.map((point:any, index:any) => (
          <li key={`experience-point-${index}`} className='text-white-100 text-[14px] pl-1 tracking-wider'>
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
      <motion.div initial="offscreen" whileInView="onscreen" viewport={{ once: true, amount: 0.8 }} variants={cardVariantsY2}>
        <p className="sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider text-center md:text-start">
          What I have done so far
        </p>
        <h2 className='text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px] text-center md:text-start'>
          Timeline
        </h2>
      </motion.div>

      <div className='mt-20 flex flex-col'>
        <VerticalTimeline >
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
            />
          ))}
        </VerticalTimeline>
      </div>
    </div>
  );
};

export default StarWrapper(Experience, "experience");