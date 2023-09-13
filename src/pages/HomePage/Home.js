import React from 'react';
import { HomeStyle } from './HomeStyle';
import Header from './Header/Header';
import JoinFounders from './JoinFounders/JoinFounders';
import GrowWith from './GrowWith/GrowWith';
import MeetWith from './Meet with/MeetWith';
import Testimonials from './Testimonials/Testimonials';
import SendRequest from './SendRequest/SendRequest';
import Discover from './Discover/Discover';
import Team from './TheTeam/Team';
import { Box, Link } from '@mui/material';
import NavigationRoundedIcon from '@mui/icons-material/NavigationRounded';

const Home = () => {
  return (
    <HomeStyle>
      <Header />
      <Discover />
      <Link
        href="#homeHeader"
        className="stickyNav"
        sx={{ p: 3, position: 'fixed', zIndex: 10, bottom: '2rem', right: '2rem', cursor: 'pointer', borderRadius: '50%' }}
      >
        <NavigationRoundedIcon sx={{ fill: '#ffffff' }} />
      </Link>
      <JoinFounders />
      <GrowWith />
      <MeetWith />
      <Testimonials />
      <Team />
      <SendRequest />
    </HomeStyle>
  );
};

export default Home;
