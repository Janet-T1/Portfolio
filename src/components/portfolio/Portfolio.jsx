import React, {useRef} from 'react';
import {motion, useScroll, useSpring, useTransform} from 'framer-motion'; 
import "./portfolio.scss";

const items = [
    {
        id: 1, 
        title: "Let Them Cook", 
        img: "Let Them Cook.png",
        description: "A cooking instruction wep application that aims to make recipe browsing fast, efficient, and fun!",
        linkUrl: "https://recipe-website-liard.vercel.app/"
    }, 
    {
        id: 2, 
        title: "Resurrection (Tinsae) Church Youth", 
        img: "tinsae.png",
        description: "Web platform for a Youth Program that allows members to view any previous lesson plans, photo galleries and keep up to date with upcoming events",
        linkUrl: "https://tinsae-church.vercel.app/"
    }, 
    {
        id: 3, 
        title: "Club Finder", 
        img: "Clubfinder.png",
        description: "A social media platform aimed to connect people through common shared interests.",
        linkUrl: "https://github.com/Janet-T1/clubFinder"
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
                        <a href={item.linkUrl} target="_blank" className="button-link">
                            Visit Site
                        </a>


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