import React from "react";
import { Box, Center, Text } from "@chakra-ui/react";

const AboutUs = () => {
  return (
    <Center h="100vh">
      <Box
        w="400px"
        p="20px"
        border="1px solid #ccc"
        bg="#f9f9f9"
        textAlign="center"
      >
        <Text fontSize="xl" fontWeight="bold" mb="4">
          About Us
        </Text>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
          odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla
          quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent
          mauris. Fusce nec tellus sed augue semper porta. Mauris massa.
          Vestibulum lacinia arcu eget nulla.
        </Text>
      </Box>
    </Center>
  );
};

export default AboutUs;
