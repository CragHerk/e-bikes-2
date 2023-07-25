import React, { Fragment } from "react";
import { Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import styles from "../css/Header.module.css";
import AnimatedWheel from "./AnimatedWheel";

const Header = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1 } },
  };

  const textVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1.5, delay: 1 } },
  };

  return (
    <motion.div
      className={styles.header}
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <Text fontSize="xl" fontWeight="bold" variants={textVariants}>
        Witaj na stronie wypożyczalni rowerów
      </Text>
      <motion.div variants={textVariants}>
        <Text fontSize="lg">Wybierz coś dla siebie</Text>
      </motion.div>
      <AnimatedWheel />
    </motion.div>
  );
};

export default Header;
