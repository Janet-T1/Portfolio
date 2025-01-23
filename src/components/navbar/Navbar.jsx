import React, { useState } from 'react';
import './navbar.scss';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { motion } from 'framer-motion';
import Sidebar from '../sidebar/Sidebar';

const Navbar = () => {
    const [open, setOpen] = useState(false);

    return (
        <div className="navbar">
            <Sidebar />
            <div className="nav-wrapper">
                <motion.span
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1.5 }}
                    transition={{ duration: 0.5 }}
                >
                    JANET TSEGAZEAB
                </motion.span>
                <div className="social">
                    <a
                        href="https://github.com/Janet-T1"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FaGithub size={40} /> {/* Increase icon size */}
                    </a>
                    <a
                        href="https://www.linkedin.com/in/janet-t-379830297/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FaLinkedin size={40} /> {/* Increase icon size */}
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
