import React, { useState } from "react";
import DatePicker from "react-datepicker";
import { Alert, AlertIcon, Box, Button } from "@chakra-ui/react";
import calculatePeriod from "../utils/calculatePeriod";
import "react-datepicker/dist/react-datepicker.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import styled from "styled-components";
import styles from "../css/BikesGrid.module.css";
import { FaTimes } from "react-icons/fa";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const StyledCarousel = styled(Carousel)`
  .react-multiple-carousel__arrow--left {
    left: 0;
  }

  .react-multiple-carousel__arrow--right {
    right: 0;
  }

  .carousel-item {
    position: relative;
    height: 500px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid grey;
    transition: background-color 0.3s ease-in-out;
  }

  .carousel-item.active {
    background-color: grey;
    position: relative;
  }

  .btn-reserve {
    position: absolute;
    bottom: 20px;
    background-color: white;

    border: none;
    cursor: pointer;
    transition: background-color 0.3s ease-in-out;
  }

  .carousel-item.active .btn-reserve {
    background-color: transparent;
    color: white;
  }
`;
const StyledDatePicker = styled(DatePicker)`
  margin-bottom: 20px;
  height: 30px;
  background: transparent;
  border: none;
  outline: none;
  color: rgba(255, 255, 255, 0.741);
  ::placeholder {
    color: white;
    font-weight: bold;
    font-size: 18px;
    outline: none;
  }
  &:focus {
    box-shadow: none;
  }
  &::after {
    display: none;
  }
`;

const BikesGrid = () => {
  const bikeList = [
    { name: "bike#1", price: 100 },
    { name: "bike#2", price: 200 },
    { name: "bike#3", price: 300 },
    { name: "bike#4", price: 400 },
    { name: "bike#5", price: 500 },
    { name: "bike#6", price: 600 },
  ];

  const responsiveSettings = {
    desktop: {
      breakpoint: { max: 3000, min: 1200 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1200, min: 768 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 768, min: 0 },
      items: 1,
    },
  };

  const customTransition = "transform 500ms ease-in-out";

  const [activeIndex, setActiveIndex] = useState(null);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [isSubmitDisabled, setIsSubmitDisabled] = useState(true);
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");

  const handleCarouselItemClick = (index) => {
    setActiveIndex(index);
  };

  const handleCloseButtonClick = (event) => {
    event.stopPropagation();
    setActiveIndex(null);
    setStartDate(null);
    setEndDate(null);
  };

  const handleStartDateChange = (date) => {
    setStartDate(date);
    setIsSubmitDisabled(!date || !endDate);
  };

  const handleEndDateChange = (date) => {
    setEndDate(date);
    setIsSubmitDisabled(!startDate || !date);
  };

  const handleReservationSubmit = (event) => {
    event.preventDefault();
    if (!startDate && !endDate) {
      setShowAlert(true);
      setAlertMessage(
        "Wybierz datę rozpoczęcia i datę zakończenia rezerwacji!"
      );
      return;
    } else if (!startDate) {
      setShowAlert(true);
      setAlertMessage("Wybierz datę rozpoczęcia rezerwacji!");
      return;
    } else if (!endDate) {
      setShowAlert(true);
      setAlertMessage("Wybierz datę zakończenia rezerwacji!");
      return;
    }

    const selectedBike = bikeList[activeIndex];

    if (selectedBike) {
      const { name, price } = selectedBike;

      localStorage.setItem(
        "reservationData",
        JSON.stringify({
          startDate,
          endDate,
          name,
          price,
          period: calculatePeriod(startDate, endDate),
        })
      );
    }

    setActiveIndex(null);
    setStartDate(null);
    setEndDate(null);

    window.location.href = "/e-bikes-2/reservation";
  };

  return (
    <>
      {showAlert && (
        <Alert status="error" mb={4}>
          <AlertIcon />
          {alertMessage}
          <CloseButton
            position="fixed"
            right="8px"
            top="8px"
            onClick={() => setShowAlert(false)}
          />
        </Alert>
      )}
      <StyledCarousel
        responsive={responsiveSettings}
        swipeable={true}
        draggable={true}
        showDots={false}
        arrows={true}
        infinite={true}
        autoPlay={false}
        customTransition={customTransition}
      >
        {bikeList.map((bike, index) => (
          <div
            key={index}
            className={`carousel-item ${index === activeIndex ? "active" : ""}`}
            onClick={() => handleCarouselItemClick(index)}
          >
            {activeIndex !== null && index === activeIndex ? (
              <form
                className={styles.datepicker__div}
                onSubmit={handleReservationSubmit}
              >
                <StyledDatePicker
                  className={styles.datepicker}
                  selected={startDate}
                  onChange={handleStartDateChange}
                  dateFormat="yyyy-MM-dd"
                  placeholderText="Data startu"
                />

                <StyledDatePicker
                  selected={endDate}
                  onChange={handleEndDateChange}
                  dateFormat="yyyy-MM-dd"
                  placeholderText="Data zakończenia"
                />
                <p className={styles.bike_destripton}>{bike.name}</p>
                <p className={styles.price}>Cena za 1 dzień: {bike.price} zł</p>

                <button
                  type="button"
                  className={styles.btn_close}
                  onClick={handleCloseButtonClick}
                >
                  <FaTimes />
                </button>
                <button
                  type="submit"
                  className={styles.btn_reserve}
                  disabled={isSubmitDisabled}
                >
                  Zarezerwuj
                </button>
              </form>
            ) : (
              <p style={{ textAlign: "center", fontSize: "24px" }}>
                {bike.name}
              </p>
            )}
          </div>
        ))}
      </StyledCarousel>
    </>
  );
};

export default BikesGrid;
