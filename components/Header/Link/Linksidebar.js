import Link from 'next/link';

import { motion } from 'framer-motion';

import { slide, scale } from '../Anim/Anim';

const Linksidebar = ({data, isActive, setSelectedIndicator, handleLinkClick }) => {
    const { title, href, index} = data;

    const handleClick = () => {
      handleLinkClick(); // Appeler la fonction pour fermer le menu mobile
    };

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

        <Link href={href} onClick={handleClick}>{title}</Link>
        
      </motion.div>

    )

}

export default Linksidebar