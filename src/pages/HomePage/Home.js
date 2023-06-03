import React from 'react';
import { HomeStyle } from './HomeStyle';
import JoinFounders from './JoinFounders/JoinFounders';
import GrowWith from './GrowWith/GrowWith';
import MeetWith from './Meet with/MeetWith';
import Testimonials from './Testimonials/Testimonials';
import SendRequest from './SendRequest/SendRequest';
import Footer from './Footer/Footer';
import Discover from './Discover/Discover';

const Home = () => {
  return (
    <HomeStyle>
      <Discover />
      <JoinFounders />
      <GrowWith />
      <MeetWith />
      <Testimonials />
      <SendRequest />
      <Footer />
    </HomeStyle>
  );
};

export default Home;
