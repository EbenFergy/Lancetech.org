import React from "react";
import { CarouselStyle, MainSwiperCont } from "./CarouselStyle";
import PlainCards from "../Cards/PlainCards";
// import Swiper core and required modules
import { Pagination, Scrollbar, A11y, Navigation } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
// import "swiper/css/scrollbar";

const Carousel = ({ carouselObj, Galleria }) => {
  return (
    <MainSwiperCont className="mainSwiperCont">
      <Swiper
        // install Swiper modules
        modules={[Pagination, Scrollbar, A11y, Navigation]}
        breakpoints={{
          400: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          450: {
            slidesPerView: 1.3,
            spaceBetween: 20,
          },
          550: {
            slidesPerView: 1.6,
            spaceBetween: 20,
          },
          600: {
            slidesPerView: 1.8,
            spaceBetween: 20,
          },
          650: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          700: {
            slidesPerView: 2.2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2.6,
            spaceBetween: 20,
          },
          950: {
            slidesPerView: 2.8,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
        }}
        navigation={true}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        loop={true}
        //   onSwiper={(swiper) => console.log(swiper)}
        //   onSlideChange={() => console.log("slide change")}
        style={{
          maxWidth: "100%",
          zIndex: "0",
          // border: "2px solid red",
        }}
      >
        {carouselObj &&
          carouselObj.map((service) => (
            <SwiperSlide key={service.title}>
              <CarouselStyle>
                <PlainCards
                  image={service.image}
                  title={service.title}
                  body={service.body}
                />
              </CarouselStyle>
            </SwiperSlide>
          ))}
        {Galleria &&
          Galleria.map((results) => (
            <SwiperSlide key={results.name}>
              <CarouselStyle>
                <img src={results.image} alt={results.name} id="galleriaImg" />
              </CarouselStyle>
            </SwiperSlide>
          ))}
      </Swiper>
    </MainSwiperCont>
  );
};

export default Carousel;
