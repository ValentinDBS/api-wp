'use client';

import Image from 'next/image';
import localFont from 'next/font/local';
import { useState } from 'react';
import ListOfRoles from '@/components/ListOfRoles';
import Agent from '@/app/agents/page';
import { animateTitle } from './utilities/animation';

// Font files can be colocated inside of `pages`
const myFont = localFont({ src: './static-font/Valorant_Font.ttf' });

export default function Home() {
    const [selectedRole, setSelectedRole] = useState('');

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
                <div className="mouse">
                    <div className="mouse-icon">
                        <span className="mouse-wheel"></span>
                    </div>
                </div>
            </div>
            <section className='filter-agent'>
                <div className="filter-container">
                    <p>Sélectionne un agent</p>
                    <div className="filter-role">
                        <ListOfRoles onRoleSelect={setSelectedRole} />
                    </div>
                </div>
            </section>
            <section className='select-agent' id='agents'>
                <Agent selectedRole={selectedRole} />
            </section>
        </>
    );
}
