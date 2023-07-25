import React, { useState, useEffect } from "react";
import { Alert, AlertIcon, CloseButton } from "@chakra-ui/react";
import calculatePeriod from "../utils/calculatePeriod";
import "react-datepicker/dist/react-datepicker.css";
import StyledCarousel from "../styled/styledCarousel";
import StyledDatePicker from "../styled/styledDatePicker";
import "react-multi-carousel/lib/styles.css";
import bikeList from "../data/bikelist";
import styles from "../css/BikesGrid.module.css";
import { FaTimes } from "react-icons/fa";
import "react-toastify/dist/ReactToastify.css";

const BikesGrid = () => {
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
  const [isSubmitDisabled, setIsSubmitDisabled] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  useEffect(() => {
    let timeout;
    if (showAlert) {
      timeout = setTimeout(() => setShowAlert(false), 5000);
    }

    return () => clearTimeout(timeout);
  }, [showAlert]);

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
    if (!startDate || !endDate) {
      setShowAlert(true);
      setAlertMessage(
        "Wybierz datę rozpoczęcia i datę zakończenia rezerwacji!"
      );
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
            className={styles.close_button}
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
              <p className={styles.bike_name}>{bike.name}</p>
            )}
          </div>
        ))}
      </StyledCarousel>
    </>
  );
};

export default BikesGrid;
