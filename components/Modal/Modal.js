import { useEffect, useRef } from "react";
import gsap from "gsap";

import { motion } from 'framer-motion'; // Importer motion depuis framer-motion

// Définir scaleAnimation
const scaleAnimation = {
    initial: { scale: 0, x: "-50%", y: "-50%" },
    enter: { scale: 1, x: "-50%", y: "-50%", transition: { duration: 0.4, ease: [0.76, 0, 0.24, 1] } },
    closed: { scale: 0, x: "-50%", y: "-50%", transition: { duration: 0.4, ease: [0.32, 0, 0.67, 0] } }
};

export default function Modal({ modal, agents }) {
    const { active, index } = modal;

    return (
        <>
            <motion.div 
                variants={scaleAnimation} 
                initial="initial" 
                animate={active ? "enter" : "closed"} 
                className="modalContainer"
            >
                <div className="modalSlider">
                    {agents[index] && (
                        <div className="modal" style={{ backgroundColor: agents[index].color }}>
                            <Image
                                src={agents[index].fullPortrait}
                                width={300}
                                height={300}
                                alt={agents[index].displayName}
                            />
                        </div>
                    )}
                </div>
            </motion.div>
            <motion.div 
                ref={cursor} 
                className="cursor" 
                variants={scaleAnimation} 
                initial="initial" 
                animate={active ? "enter" : "closed"}
            />
            <motion.div 
                ref={cursorLabel} 
                className="cursorLabel" 
                variants={scaleAnimation} 
                initial="initial" 
                animate={active ? "enter" : "closed"}
            >
                View
            </motion.div>
        </>
    );
}
