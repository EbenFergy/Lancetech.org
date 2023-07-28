import React from 'react';
import { AboutStyle } from './AboutStyle';
import Button from '../../components/Button/Button';
import TorusImage from '../../assets/Torus.svg';
import OurCulture from './ourCulture/OurCulture';

const About = () => {
  return (
    <AboutStyle>
      <div className="AboutTitle">
        <h1>
          We help businesses scale <br /> <span> online</span>
        </h1>
        <Button> See Open Roles</Button>
      </div>

      <img src={TorusImage} alt="torusImage" className="headerImg torusImg2" />
      <OurCulture />
    </AboutStyle>
  );
};

export default About;
