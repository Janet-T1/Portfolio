import React from 'react';
import "./aboutMe.scss";
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
                        Hey! My name is Janet. I am currently a Computer Science student at the University of Calgary, with a minor in Statistics. I love building technology that directly impacts people in my community. Outside the class room, I am an undergraduate teaching assistant, a python tutoring mentor, and a youth coordinator. Scroll below to check out my latest projects! 
                    </p>
                </div>
            </div>

            <motion.div className='stars' style={{ y: yBg }}></motion.div>
        </div>
    );
}

export default AboutMe;


