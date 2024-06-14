import React from 'react'
import { motion } from "framer-motion"

const ToggleButton = ({setOpen}) => {
    return(
    <button onClick={() => setOpen((prev) => !prev )}> 
    <svg>
        <motion.path strokeWidth="3" stroke="black" strokeLinecap="round" 
        variants={{
            closed: {d: "M 12 15 L 37 15" }, 
            open: {d: "M 1 18.5 L 15 4.5 "}
        }} 
        /> 
        <motion.path strokeWidth="3" stroke="black" strokeLinecap="round" 
            d="M 12 25 L 37 25"
            variants={{
                closed: {opacity: 1}, 
                open: {opacity: 0}
            }} 
        /> 
        <motion.path strokeWidth="3" stroke="black" strokeLinecap="round" 
            variants={{
                closed: {d: "M 12 35 L 37 35" }, 
                open: {d: "M 1 4.5 L 15 18.346 "}
            }} 
        />

    </svg>
    </button>
    )
}

export default ToggleButton; 