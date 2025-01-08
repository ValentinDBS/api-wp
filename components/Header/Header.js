"use client";

import { useGSAP } from "@gsap/react";
import { AnimatePresence } from "framer-motion";
import gsap from "gsap";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Searchbar from "../Searchbar";
import Nav from "./Nav/Nav";

function Header() {
  const [isActive, setIsActive] = useState(false);

  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { duration: 1, ease: "power1" } });

    tl.from(".header-container > header", {
      yPercent: -200,
    });

    tl.from(".hero-container > span", {
      yPercent: 100,
      opacity: 0,
    });
  }, []);
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
                    alt="Picture of the author"
                  />
                </Link>
              </li>
              <li>
                <Link href="/#agents">Agents</Link>
              </li>
            </div>
            <Searchbar />
          </ul>
        </nav>
      </header>
      <div
        onClick={() => {
          setIsActive(!isActive);
        }}
        className="btn-menu"
      >
        <div className={`${"burger"} ${isActive ? "burgerActive" : ""}`}></div>
      </div>
      <AnimatePresence mode="wait">
        {isActive && <Nav setIsActive={setIsActive} />}
      </AnimatePresence>
    </div>
  );
}

export default Header;
