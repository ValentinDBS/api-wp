import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Curve() {
  const [windowHeight, setWindowHeight] = useState(0);

  useEffect(() => {
    // Check if window is defined (i.e., running in the browser)
    if (typeof window !== "undefined") {
      // Set window height on component mount
      setWindowHeight(window.innerHeight);

      // Optional: Update height on window resize
      const handleResize = () => setWindowHeight(window.innerHeight);
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  // Only calculate paths if windowHeight is set
  const initialPath = windowHeight
    ? `M100 0 L100 ${windowHeight} Q-100 ${windowHeight / 2} 100 0`
    : "";
  const targetPath = windowHeight
    ? `M100 0 L100 ${windowHeight} Q100 ${windowHeight / 2} 100 0`
    : "";

  const curve = {
    initial: {
      d: initialPath,
    },
    enter: {
      d: targetPath,
      transition: { duration: 1, ease: [0.76, 0, 0.24, 1] },
    },
    exit: {
      d: initialPath,
      transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
    },
  };

  return (
    <svg className="svgCurve">
      <motion.path
        variants={curve}
        initial="initial"
        animate="enter"
        exit="exit"
      ></motion.path>
    </svg>
  );
}
