import React, { useRef } from 'react';
import "./workPara.scss";
import { motion, useScroll, useTransform } from 'framer-motion';

const WorkPara = () => {
    const ref = useRef();
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"]
    });

    const yText = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
    const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

    return (
        <div className="work-parallax" ref={ref} style={{ background: "linear-gradient(180deg, #5C5675, #242455, #111132)" }}>
            <div className="work-parallaxText">
                <motion.h1 style={{ y: yText }}> Scroll below to discover all my passion projects! </motion.h1>
              
            </div>
            <motion.div className='skyline'></motion.div>
            <motion.div className='stars' style={{ x: yBg }}></motion.div>
        </div>
    );
}

export default WorkPara;
