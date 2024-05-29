import Link from 'next/link';

import { motion } from 'framer-motion';

import { slide, scale } from '../Anim/Anim';

const Linksidebar = ({data, isActive, setSelectedIndicator}) => {
    const { title, href, index} = data;

  

    return (

      <motion.div 
        className="link-sidebar" 
        onMouseEnter={() => {setSelectedIndicator(href)}} 
        custom={index} 
        variants={slide} 
        initial="initial" 
        animate="enter" 
        exit="exit"
        >
        <motion.div 
          variants={scale} 
          animate={isActive ? "open" : "closed"} 
          className="indicator-sidebar">
        </motion.div>

        <Link href={href}>{title}</Link>

      </motion.div>

    )

}

export default Linksidebar