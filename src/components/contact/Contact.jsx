import "./contact.scss";
import { motion } from "framer-motion";

const variants = {
  initial: {
    y: 500,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.1,
    },
  },
};

const Contact = () => {
  return (
    <motion.div
      className="contact"
      variants={variants}
      initial="initial"
      whileInView="animate"
      style={{ background: "linear-gradient(180deg,  #111132, #242455, #5C5675)" }}
    >
      <motion.div className="textContainer" variants={variants}>
        <motion.div className="together">
          <motion.h1 className='lets' variants={variants}>Let's </motion.h1>
          <motion.h1 className='work' variants={variants}>work </motion.h1>
        </motion.div>
        
        <motion.h1 variants={variants}>together !</motion.h1>
        
        <motion.div className="item" variants={variants}>
          <h2>Email</h2>
          <span>janet.tsegazeab@gmail.com</span>
        </motion.div>
      </motion.div>

      <div className="formContainer">
        <form>
          <input type="text" required placeholder="Name" />
          <input type="email" required placeholder="Email" />
          <textarea rows={8} placeholder="Message" />
          <button>Submit</button>
        </form>
      </div>
    </motion.div>
  );
};

export default Contact;

