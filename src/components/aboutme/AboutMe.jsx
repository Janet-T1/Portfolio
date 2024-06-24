import React from 'react';
import "./aboutme.scss";
import { motion, useScroll, useTransform } from 'framer-motion';

const AboutMe = () => {
    const { scrollYProgress } = useScroll();
    const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

    return (
        <div className='AboutMe'>
            <div className='oneAbout'>
                <h1>Janet</h1>
                <h1 className='oneH1'>Tsegazeab</h1>
            </div>

            <div className='contentAbout'>
                <div className='imageAbout'>
                    <img src="./AboutMe.jpg" alt="About Me" />
                </div>
                <div className='textAbout'>
                    <p>
                        I am currently a third-year Computer Science student with a deep passion for coding. I find programming to be a unique blend of creativity and intellectual challenge, as it involves solving complex problems and devising innovative algorithms. My dedication to education extends beyond my technical pursuits; for the past three years, I have been actively teaching and mentoring youth, and I have accumulated five years of general teaching experience. I am committed to leveraging my technical skills to inspire and equip the next generation, fostering their growth, development, and innovation in the realm of technology. My enthusiasm for learning drives me to explore and master new topics continuously.
                    </p>
                </div>
            </div>

            <motion.div className='stars' style={{ y: yBg }}></motion.div>
        </div>
    );
}

export default AboutMe;


