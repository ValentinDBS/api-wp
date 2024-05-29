import gsap from 'gsap';
import { useGSAP } from '@gsap/react';



export const animateTitle = () => {

    useGSAP(() => {
        const tl = gsap.timeline()
    
        gsap.from(".header-container > header", {
            duration: 1.1,
            y: -200,
        });
        // gsap.to("#valorant", {
        //     y: 0,
        //     opacity: 1,
        //     ease: "circ",
        //     duration: 1.5,
        // });
    });
    
}