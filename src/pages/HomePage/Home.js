import React from "react";
import { HomeStyle } from "./HomeStyle";
import JoinFounders from "./JoinFounders/JoinFounders";
import GrowWith from "./GrowWith/GrowWith";
import MeetWith from "./Meet with/MeetWith";

const Home = () => {
  return (
    <HomeStyle>
      <JoinFounders />
      <GrowWith />
      <MeetWith />
    </HomeStyle>
  );
};

export default Home;
