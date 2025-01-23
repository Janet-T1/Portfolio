import React, { useRef } from 'react';
import "./parallax.scss";
import { motion, useScroll, useTransform } from 'framer-motion';

const Parallax = () => {
    const ref = useRef();
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"]
    });

    const yText = useTransform(scrollYProgress, [0, 1], ["0%", "10%"]);
    const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

    return (
        <div className="parallax" ref={ref} style={{ background: "linear-gradient(180deg, #111132, #766e97)" }}>

            <div className= "parallaxText">
                <motion.h1 style={{ y: yText }}> Welcome to My World! </motion.h1>
                <motion.h2 style={{ y: yText }}> Scroll below to get to know me a little better. </motion.h2>
            </div>
            <motion.div className='mountains'></motion.div>
            <motion.div className='planets' style={{ y: yBg}}></motion.div>
            <motion.div className='stars'   style={{ x: yBg}}></motion.div>
            
        </div>
    );
}

export default Parallax;
