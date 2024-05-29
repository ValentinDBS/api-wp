"use client"

import Image from 'next/image'
import localFont from 'next/font/local'
import ListOfRoles from '@/components/ListOfRoles';
import Agent from '@/components/Agent';
import { animateTitle } from './utilities/animation';


// Font files can be colocated inside of `pages`
const myFont = localFont({ src: './static-font/Valorant_Font.ttf' })



export default function Home() {

  animateTitle();

  return (
    <>
      <div id="hero">
        <div className="hero-container">
          <p>Un jeu de tir tactique avec personnages en 5c5</p>
          <span className={myFont.className} id='valorant'>vAlorant</span>
          <a href="https://playvalorant.com/fr-fr/" className='btn-link'>Je découvre</a>
        </div>
        <Image 
          src="/images/valorant-hero.webp"
          alt="Image représentant 3 agents de valorant"
          className="bg-hero"
          fill={true}
        />
        <div class="mouse">
          <div class="mouse-icon">
            <span class="mouse-wheel"></span>
          </div>
        </div>
      </div>
      <section className='filter-agent'>
        <div className="filter-container">
          <p>Séléctionne un agent</p>
          <div className="filter-role">
            <ListOfRoles />
          </div>
        </div>
      </section>
      <section className='select-agent'>
        <Agent name="Gekko"/>
        <Agent name="Jett"/>
        <Agent name="Brimstone"/>
        <Agent name="Fade"/>
        <Agent name="Kay/O"/>
        <Agent name="Raze"/>
      </section>
      
    </>
  );
}
