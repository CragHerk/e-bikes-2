import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import wheel from "../assets/wheel.svg";

const AnimatedWheel = () => {
  const [isVisible, setIsVisible] = useState(true);

  const containerVariants = {
    animate: {
      x: "200%",
      rotate: 360,
      transition: {
        repeat: 0,
        duration: 5,
        ease: "linear",
      },
    },
  };

  useEffect(() => {
    // Ustawiamy opóźnienie na 1 sekundę
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <motion.img
        src={wheel}
        alt="Bike Wheel"
        style={{
          width: "50px",
          height: "50px",
          borderRadius: "50%",
          marginTop: "40px",
          opacity: isVisible ? 1 : 0,
          transition: "opacity 1s ease-in-out", // Dodajemy efekt płynnego znikania
        }}
        animate="animate"
        variants={containerVariants}
      />
    </>
  );
};

export default AnimatedWheel;
