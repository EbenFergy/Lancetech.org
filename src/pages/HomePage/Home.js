import React from 'react';
import { HomeStyle } from './HomeStyle';
import JoinFounders from './JoinFounders/JoinFounders';
import GrowWith from './GrowWith/GrowWith';
import MeetWith from './Meet with/MeetWith';
import Testimonials from './Testimonials/Testimonials';
import SendRequest from './SendRequest/SendRequest';

const Home = () => {
  return (
    <HomeStyle>
      <JoinFounders />
      <GrowWith />
      <MeetWith />
      <Testimonials />
      <SendRequest />
    </HomeStyle>
  );
};

export default Home;
