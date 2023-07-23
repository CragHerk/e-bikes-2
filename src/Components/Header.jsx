import React from "react";
import { Box, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";

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
      style={{
        height: "50vh",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: "300px",
      }}
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
    </motion.div>
  );
};

export default Header;
