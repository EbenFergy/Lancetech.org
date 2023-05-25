import React, { useRef, useState } from "react";
import { CarouselStyle } from "./CarouselStyle";
import PlainCards from "../Cards/PlainCards";
import Cards from "../Cards/Cards";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

// import "./styles.css";

// import required modules
import { EffectCards } from "swiper";

const SwiperCarousel = ({ carouselObj }) => {
  return (
    <>
      <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper"
        style={{
          maxWidth: "100%",
          border: "2px solid red",
        }}
      >
        {carouselObj &&
          carouselObj.map((service) => (
            <SwiperSlide key={service.title}>
              <PlainCards
                image={service.image}
                title={service.title}
                body={service.body}
              />
            </SwiperSlide>
          ))}
      </Swiper>
    </>
  );
};

export default SwiperCarousel;
