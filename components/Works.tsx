'use client'

import React from "react";
import { motion } from "framer-motion";
import { github } from "../public/assets";
import { StarWrapper } from "../app/hoc";
import { projects } from "../app/constants";
import { textVariant, cardVariantsFadeIn, cardVariantsY1, cardVariantsY2 } from "@/app/utils/motion";
import Image from "next/image";
import { Tilt } from "react-tilt";

const ProjectCard = ({ index, name, description, tags, image, source_code_link, }: any) => {
  return (
    <motion.div initial="offscreen" whileInView="onscreen" viewport={{ once: true, amount: 0.8 }} variants={cardVariantsFadeIn}>
      <div
        className='bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full'
      >
        <div className='relative w-full h-[230px]'>
          <Image
            width={1000}
            height={1000}
            src={image}
            alt='project_image'
            className='w-full h-full object-cover rounded-2xl'
          />

          <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
            >
              <Image
                width={1000}
                height={1000}
                src={github}
                alt='source code'
                className='w-1/2 h-1/2 object-contain'
              />
            </div>
          </div>
        </div>

        <div className='mt-5'>
          <h3 className='text-white font-bold text-[24px]'>{name}</h3>
          <p className='mt-2 text-secondary text-[14px]'>{description}</p>
        </div>

        <div className='mt-4 flex flex-wrap gap-2'>
          {tags.map((tag: any) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

const Works = () => {
  return (
    <div id='work' className="relative w-full h-auto px-4 xl:px-10 md:px-8 sm:px-6 py-4 xl:py-10 md:py-8 sm:py-6">
      <motion.div initial="offscreen" whileInView="onscreen" viewport={{ once: true, amount: 0.8 }} variants={cardVariantsY2}>
        <p className="sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider text-center md:text-start">My work</p>
        <h2 className='text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px] text-center md:text-start'>Projects.</h2>
      </motion.div>
      <div className='w-full flex'>
        <motion.p initial="offscreen" whileInView="onscreen" viewport={{ once: true, amount: 0.8 }} variants={cardVariantsY1} className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px] text-justify' >
          Following projects showcases my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories and live demos in it. It reflects my
          ability to solve complex problems, work with different technologies,
          and manage projects effectively.
        </motion.p>
      </div>
      <div className='mt-20 flex flex-wrap items-center justify-center gap-7'>
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </div>
  )
}

export default StarWrapper(Works, "work");