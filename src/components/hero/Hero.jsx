import "./hero.scss";
import { motion } from "framer-motion";
const textvariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
    },
      scrollButton:{
        opacity:0,
        y:10,
        transition: {
          duration:2,
          repeat:Infinity
        }
  },
};

const slidervariants = {
  initial: {
    x: 0,
    
  },
  animate: {
    x: "-500%",
    
    transition: {
      repeat:Infinity,
      repeatType:"mirror",
      duration:10,
    }
  },
};

const Hero = () => {
  return (
    <div className="hero">
      <div className="wrapper">
        <motion.div
          className="textContainer"
          variants={textvariants}
          initial="initial"
          animate="animate"
        >
          <motion.h2 variants={textvariants}>COMPUTER SCIENCE MAJOR </motion.h2>
          <motion.h1 variants={textvariants}>
            Software Engineer & Full Developer
          </motion.h1>

          <motion.img variants={textvariants} animate="scrollButton" src="/scroll.png"></motion.img>
        </motion.div>
      </div>

      <motion.div className="slidingTextContainer" variants={slidervariants} initial="initial" animate="animate">
        Diligent • Driven • Dynamic
      </motion.div>
      <div className="imageContainer">
        <img src="/portpic.png"></img>
      </div>

      <div className="buttons" variants={textvariants}>
            <button variants={textvariants}>
              See My Latest Works
            </button>
            <button variants={textvariants}>Contact Me</button>
          </div>
    </div>
  );
};

export default Hero;
