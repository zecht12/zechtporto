import { motion } from "framer-motion";
import { staggerContainer } from "@/app/utils/motion";

const SectionWrapper = (Component:any, idName:any, staggerContainer) =>
    function HOC() {
        return (
        <motion.section
            variants={staggerContainer()}
            initial='hidden'
            whileInView='show'
            viewport={{ once: true, amount: 0.25 }}
            className={`p-padding max-w-7xl mx-auto relative z-0`}
        >
            <span className='hash-span' id={idName}>
            &nbsp;
            </span>

            <Component />
        </motion.section>
        );
    };

export default SectionWrapper;