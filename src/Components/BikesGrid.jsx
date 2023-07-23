import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import styled from "styled-components";

const StyledCarousel = styled(Carousel)`
  .react-multiple-carousel__arrow--left {
    left: 0;
  }

  .react-multiple-carousel__arrow--right {
    right: 0;
  }
  .carousel-item {
    height: 500px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid black;
  }
`;

const BikesGrid = () => {
  const bikeList = ["bike#1", "bike#2", "bike#3", "bike#4", "bike#5", "bike#6"];

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

  const customTransition = "transform 500ms ease-in-out"; // Ustawienie własnej animacji dla karuzeli

  return (
    <StyledCarousel
      responsive={responsiveSettings}
      swipeable={true}
      draggable={true}
      showDots={false}
      arrows={true}
      infinite={true}
      autoPlay={false}
      customTransition={customTransition} // Dodajemy własną animację
    >
      {bikeList.map((bike, index) => (
        <div key={index} className="carousel-item">
          <p style={{ textAlign: "center", fontSize: "24px" }}>{bike}</p>
        </div>
      ))}
    </StyledCarousel>
  );
};

export default BikesGrid;
