import React from 'react';
import { SlickStyle } from './SlickStyle';
import Cards from '../../Cards/Cards';
import { TestimonialList } from '../../../Objects/TestimonialList.JSON';
// import slick carousels
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import { LeftBtn, RightBtn } from '../../Button/ButtonGroup/ButtonGroup';

const SlickCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3.3,
    slidesToScroll: 1,
    autoplay: true,
    initialSlide: -0.3,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    nextArrow: <RightBtn />,
    prevArrow: <LeftBtn />,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 4,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2.6,
          slidesToScroll: 2.6,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2.2,
          slidesToScroll: 2.2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 650,
        settings: {
          slidesToShow: 1.8,
          slidesToScroll: 1.8,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1.6,
          slidesToScroll: 1.6,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 550,
        settings: {
          slidesToShow: 1.3,
          slidesToScroll: 1.3,
        },
      },
      {
        breakpoint: 450,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <SlickStyle>
      <div>
        <div>
          <h1>
            1,000+ customers are <br />
            loving Lancetech.
          </h1>
        </div>
      </div>

      <Slider {...settings}>
        {TestimonialList &&
          TestimonialList.map(results => (
            // <div className="cards">
            <Cards cardImage={results.avatar} cardBody={results.testimony} handle={results.handle} />
            // </div>
          ))}
      </Slider>
    </SlickStyle>
  );
};

export default SlickCarousel;