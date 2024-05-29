import React, { useState } from 'react'

import { motion } from 'framer-motion';

import { usePathname } from 'next/navigation';

import { menuSlide } from '../Anim/Anim';

import Link from '../Link/Linksidebar';
import Curve from '../Curve/Curve';



const navItems = [

  {
    title: "Accueil",
    href: "/",
  },
  {
    title: "Agents",
    href: "/#agents",
  },
  {
    title: "Rôles",
    href: "/about",
  },

]
const Nav = () => {

    const pathname = usePathname();

    const [selectedIndicator, setSelectedIndicator] = useState(pathname);

  return (
    <motion.div 
      variants={menuSlide} 
      initial="initial" 
      animate="enter" 
      exit="exit" 
      className="menu-sidebar"
      >

       <div className="body-sidebar">
            <div onMouseLeave={() => {setSelectedIndicator(pathname)}} className="nav-sidebar">
                    <div className="header-sidebar">
                        <p>Navigation</p>
                    </div>

                    {

                      navItems.map( (data, index) => {
                        return <Link 
                        key={index} 
                        data={{...data, index}} 
                        isActive={selectedIndicator == data.href} 
                        setSelectedIndicator={setSelectedIndicator}>
                        </Link>

                      })

                    }

            </div>

            <div className="footer-sidebar">
                <a>Awwwards</a>
                <a>Instagram</a>
                <a>Dribble</a>
                <a>LinkedIn</a>
            </div>
        </div>
        <Curve />    
    </motion.div>
  )
}

export default Nav