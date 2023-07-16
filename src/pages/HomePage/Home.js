import React from 'react';
import { HomeStyle } from './HomeStyle';
import Header from './Header/Header';
import JoinFounders from './JoinFounders/JoinFounders';
import GrowWith from './GrowWith/GrowWith';
import MeetWith from './Meet with/MeetWith';
import Testimonials from './Testimonials/Testimonials';
import SendRequest from './SendRequest/SendRequest';
import Footer from './Footer/Footer';
import Discover from './Discover/Discover';
import Team from './TheTeam/Team';

const Home = () => {
  return (
    <HomeStyle>
      <Header />
      <Discover />
      <JoinFounders />
      <GrowWith />
      <MeetWith />
      <Testimonials />
      <Team />
      <SendRequest />
      <Footer />
    </HomeStyle>
  );
};

export default Home;
