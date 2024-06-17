import gsap from 'gsap';
import { useGSAP } from '@gsap/react';



export const animateAccueil = () => {

    useGSAP(() => {
        const tl = gsap.timeline({ defaults: { duration: 1, ease: "power1" } })
    
        tl.from(".header-container > header", {
            yPercent: -200,
        });

        tl.from(".hero-container > span", {
            yPercent: 100,
            opacity: 0,
        });
    });
}
