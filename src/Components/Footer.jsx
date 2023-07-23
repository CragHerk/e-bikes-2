import React from "react";
import { Box, Center, Flex, Icon, Link, Text } from "@chakra-ui/react";
import { FaPhone, FaEnvelope, FaFacebook, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <Box bg="gray.200" py="4">
      <Center mx="4" flexDirection="column" spacing="4">
        {" "}
        {/* Dodajemy marginesy po lewej i prawej stronie */}
        <Flex align="center" justify="center">
          <Icon as={FaPhone} mr="2" />
          <Link href="tel:123-456-789">Telefon: 123-456-789</Link>
        </Flex>
        <Flex align="center" justify="center">
          <Icon as={FaEnvelope} mr="2" />
          <Link href="mailto:kontakt@przykladowyemail.com">
            Email: kontakt@przykladowyemail.com
          </Link>
        </Flex>
        <Flex align="center" justify="center">
          <Link href="#" isExternal mx="2">
            <Icon as={FaFacebook} boxSize="24px" />
          </Link>
          <Link href="#" isExternal mx="2">
            <Icon as={FaInstagram} boxSize="24px" />
          </Link>
        </Flex>
      </Center>
    </Box>
  );
};

export default Footer;
