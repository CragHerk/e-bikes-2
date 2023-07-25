import styled from "styled-components";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

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

export default StyledCarousel;
