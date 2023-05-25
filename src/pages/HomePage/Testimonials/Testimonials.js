import React from 'react';
import { TestimonialsStyle } from '../HomeStyle';
import loveSVG from '../../../assets/love.svg';
import SlickCarousel from '../../../components/Carousel/SlickCarousel/SlickCarousel';

const Testimonials = () => {
  return (
    <TestimonialsStyle>
      <img src={loveSVG} alt="loveSVG" />

      <SlickCarousel />
    </TestimonialsStyle>
  );
};

export default Testimonials;
