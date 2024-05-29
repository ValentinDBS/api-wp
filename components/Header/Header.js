'use client';

import { useState } from 'react'
import Link from 'next/link'
import Searchbar from '../Searchbar'
import Image from 'next/image'
import { IoMdArrowDropdown } from "react-icons/io"
import Nav from './Nav/Nav';
import { motion, AnimatePresence } from 'framer-motion'


function Header() {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="header-container">
      <header>
        <nav>
          <ul>
            <div className="left-nav">
              <li>
                <Link href="/">
                  <Image
                    src="/images/valorant-logo.webp"
                    width={50}
                    height={50}
                    alt="Picture of the author" />
                </Link>
              </li>
              <li>
                <Link href="/">
                  Agents
                </Link>
              </li>
              <li>
                <Link href="/">
                  Rôles <IoMdArrowDropdown />
                </Link>
              </li>
            </div>
            <Searchbar />
          </ul>
        </nav>
        
      </header>
      <div onClick={() => { setIsActive(!isActive); } } className='btn-menu'>
          <div className={`${"burger"} ${isActive ? "burgerActive" : ""}`}>
          </div>
        </div>
        <AnimatePresence mode="wait">

          {isActive && <Nav />}

        </AnimatePresence>
    </div>
    
  );
}

export default Header