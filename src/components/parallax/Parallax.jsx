import React from 'react'
import "./parallax.scss"
import { motion } from 'framer-motion'

const Parallax = () => {
    return (
        <div className="parallax" style={{background: "linear-gradient(180deg, #111132, #766e97"}}>
           <motion.h1> Welcome to My World! </motion.h1>

           <motion.div className='mountains'> </motion.div>
           <div className='planets'></div>
           <div className='stars'></div>



        </div>
    )
}

export default Parallax; 