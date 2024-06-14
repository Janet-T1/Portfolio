import React from 'react'
import "./navbar.scss"
import { FaGithub, FaLinkedin} from 'react-icons/fa'; 
import { motion } from 'framer-motion'
import Sidebar from '../sidebar/Sidebar';

const Navbar = () => {
    return (
        <div className="navbar">
            <Sidebar/> 
            <div className="wrapper">
                <motion.span initial={{opacity:0, scale: 0.5}} animate={{opacity:1, scale: 1}} transition={{duration:0.5}}> Portfolio </motion.span>
                <div className="social">
                    <a href="https://github.com/Janet-T1" target="_blank" rel="noopener noreferrer"> 
                        <FaGithub size={30} /> 
                    </a>
                    <a href="https://www.linkedin.com/in/janet-tsegazeab-379830297/" target="_blank" rel="noopener noreferrer"> 
                        <FaLinkedin size={30} /> 
                    </a>   
                </div>
            </div>
        </div>
    )
}

export default Navbar; 