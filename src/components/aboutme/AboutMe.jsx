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
                        Hey! Welcome to my AboutMe page, where it's all ... well about me!
                        I am a computer science student with a love for problem solving and coding. My other hobbies include sports such as soccer, rugby, and wrestling. I also enjoy teaching and have been a youth mentor for the past 5 years. I strive to always challenge myself and become a better me every day.                     </p>
                </div>
            </div>

            <motion.div className='stars' style={{ y: yBg }}></motion.div>
        </div>
    );
}

export default AboutMe;


