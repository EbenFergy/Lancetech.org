import styled from "styled-components";
import { COLORS } from "../../styles/COLORS";

export const MainSwiperCont = styled.div`
  /* border: 2px solid blue; */
  max-width: 100%;
  position: relative;
  .swiper {
    /* border: 2px solid yellow; */
    padding: 1rem 0;
    z-index: -100;
    height: 100%;
    /* background: none; */
  }

  .swiper-slide {
    /* border: 2px solid; */
    height: 100%;
  }

  .swiper-button-next,
  .swiper-button-prev {
    display: none;
  }

  @media only screen and (min-width: 768px) {
    padding: 1rem 1.5rem !important;

    :hover {
      .swiper-button-next,
      .swiper-button-prev {
        display: flex;
      }
      /* .swiper-button-next::after,
      .swiper-button-prev::after {
        display: block;
      } */
    }

    .swiper-button-next::after,
    .swiper-button-prev::after {
      font-size: 1rem !important;
      font-weight: 800;
      /* display: block; */
      text-align: center;
      color: ${COLORS.White};
      margin: 0;
    }

    .swiper-button-next,
    .swiper-button-prev {
      /* border: 2px solid yellow; */
      border-radius: 50%;
      height: auto;
      padding: 0.5rem 0;
      align-items: center;
      justify-content: center;
      background-color: ${COLORS.Blue};
      opacity: 0.85;

      /* position: absolute; */
      /* border: 2px solid red; */
    }
    .swiper {
      /* border: 2px solid purple; */
      /* overflow: visible; */
      position: static;
    }
  }

  @media only screen and (min-width: 1024px) {
    padding: 1rem 3rem !important;
  }
`;

export const CarouselStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  /* height: fit-content; */
  /* background-color: rgb(10, 23, 40); */
  /* background-color: rgba(10, 25, 10, 0.9); */
  /* background-color: rgba(145, 65, 145, 0.6); */
  /* overflow: hidden; */
  /* border: 1px solid rgba(10, 25, 10, 1); */
  /* border-radius: 5px; */
  /* padding: 1rem 0.5rem; */
  min-width: 10rem;
  box-sizing: border-box;
  margin-bottom: 2rem;

  #galleriaImg {
    width: 100%;
    object-fit: cover;
  }
`;
