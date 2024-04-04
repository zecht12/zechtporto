import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";
import { experiences } from "@/app/constants";
import { StarWrapper } from "@/app/hoc";
import { textVariant } from "@/app/utils/motion";

const Experience = () => {
  return (
    <div id='experience' className='h-screen'>
      <motion.div variants={textVariant(0.2)} initial="hidden" animate="show" exit="hidden">
        
      </motion.div>
    </div>
  )
}

export default Experience