import React, {useRef} from 'react';
import {motion, useScroll, useSpring, useTransform} from 'framer-motion'; 
import "./portfolio.scss";

const items = [
    {
        id: 1, 
        title: "ClubFinder", 
        img: "https://images.pexels.com/photos/248547/pexels-photo-248547.jpeg?auto=compress&cs=tinysrgb&w=600",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        linkUrl: "https://www.janettsegazeab.com/"
    }, 
    {
        id: 2, 
        title: "Resurrection (Tinsae) Church Youth", 
        img: "https://images.pexels.com/photos/133699/pexels-photo-133699.jpeg?auto=compress&cs=tinysrgb&w=600", 
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        linkUrl: "https://www.janettsegazeab.com/"
    }, 
    {
        id: 3, 
        title: "Rate My Class", 
        img: "https://images.pexels.com/photos/356065/pexels-photo-356065.jpeg?auto=compress&cs=tinysrgb&w=600", 
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        linkUrl: "https://www.janettsegazeab.com/"
    }, 
    {
        id: 4, 
        title: "Shapes Quest", 
        img: "https://images.pexels.com/photos/1148496/pexels-photo-1148496.jpeg?auto=compress&cs=tinysrgb&w=600", 
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        linkUrl: "https://www.janettsegazeab.com/"
    }, 
]; 


const Single = ({item}) => {

    const ref = useRef(); 
    const {scrollYProgress} = useScroll({
        target:ref, 
        // offset: ["start start", "end start"]
    }) 

    const y = useTransform(scrollYProgress, [0,1], ["-100", "100%"]); 
    return(
        <section >
            <div className="container" >

                <div className='wrapper'>
                    <div className='imageContainerPort' ref={ref}>
                        <img src={item.img} alt=""/> 
                    </div>
                    
                    <motion.div className='portText' style={{y}} >
                        <h2 >
                            {item.title}
                        </h2>
                        <p>
                            {item.description}
                        </p>
                        <button> Visit Site</button>
                    </motion.div>
                </div>
                
            </div>
        </section>
    )
}

const Portfolio = () => {

    const ref = useRef() 
    const {scrollYProgress} = useScroll({target:ref, offset:["end end", "start start"]}) 
    const scaleX = useSpring(scrollYProgress, {
        stiffness:100, 
        damping: 30,
    });

    return (
        <div className='portfolio' ref={ref}  style={{ background: "linear-gradient(180deg, #5C5675, #242455, #111132)" }}>
            <div className='progress'>
                <div className='portTitle'> 
                    <h1 className='one'>Featured </h1>
                    <h1 className='two'>Works</h1>
                </div>
                

                <motion.div style={{ scaleX }} className='progressBar'></motion.div>
            </div>
            {items.map(item => (
                <Single item={item} key={item.id}   />
            ))}
        </div>
    )
}

export default Portfolio