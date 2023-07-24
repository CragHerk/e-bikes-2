import React, { useEffect } from "react";
import {
  Box,
  Flex,
  Text,
  Input,
  Button,
  Link as ChakraLink,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Reservation = () => {
  // Pobierz dane z localStorage
  const reservationData = JSON.parse(localStorage.getItem("reservationData"));

  // Upewnij się, że dane są dostępne
  if (
    !reservationData ||
    !reservationData.startDate ||
    !reservationData.endDate ||
    !reservationData.name ||
    !reservationData.price ||
    !reservationData.period
  ) {
    return (
      <Box p="4">
        <Text fontSize="2xl" fontWeight="bold" mb="4">
          Brak danych rezerwacji.
        </Text>
        <ChakraLink as={Link} to="/" color="teal.500" mt="2" fontSize="sm">
          Wróć do strony głównej
        </ChakraLink>
      </Box>
    );
  }

  const { startDate, endDate, name, price, period } = reservationData;

  // Wyodrębnij liczbę dni z period za pomocą regular expression
  const days = Number(period.match(/\((\d+) dni\)/)[1]);

  // Oblicz całkowitą cenę wypożyczenia
  const totalPrice = price * days;

  useEffect(() => {
    //localStorage.removeItem("reservationData");
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Tutaj możesz obsłużyć logikę wysłania formularza rezerwacji
  };

  return (
    <Box p="4">
      <Text fontSize="2xl" fontWeight="bold" mb="4">
        Reservation Page
      </Text>
      <Text>Data rozpoczęcia: {startDate}</Text>
      <Text>Data zakończenia: {endDate}</Text>
      <Text>Okres: {period}</Text>
      <Text>Rower: {name}</Text>
      <Text>Cena za 1 dzień: {price}zł</Text>
      <Text>Całkowita cena: {totalPrice}zł</Text>
      <Box mt="4">
        <form onSubmit={handleSubmit}>
          <Flex flexDirection="column">
            <Input type="text" placeholder="Imię" mb="2" />
            <Input type="text" placeholder="Nazwisko" mb="2" />
            <Input type="email" placeholder="Email" mb="2" />
            <Input type="tel" placeholder="Telefon" mb="2" />
            <Button type="submit" colorScheme="teal">
              Zarezerwuj
            </Button>
          </Flex>
        </form>
      </Box>
      <ChakraLink as={Link} to="/" color="teal.500" mt="2" fontSize="sm">
        Wróć do strony głównej
      </ChakraLink>
    </Box>
  );
};

export default Reservation;
