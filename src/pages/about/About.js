import React from 'react';
import { AboutStyle } from './AboutStyle';
import Button from '../../components/Button/Button';
import TorusImage from '../../assets/Torus.svg';
import OurCulture from './ourCulture/OurCulture';
import { useNavigate } from 'react-router-dom';
import OurTeams from './ourTeams/OurTeams';

const About = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate('/roles');
  };
  return (
    <AboutStyle>
      <div className="AboutTitle">
        <h1>
          We help businesses scale <br /> <span> online</span>
        </h1>
        <Button onClick={handleNavigate}> See Open Roles</Button>
      </div>
      <div style={{ overflow: 'hidden' }}>
        <img src={TorusImage} alt="torusImage" className="headerImg torusImg2" />
      </div>
      <OurCulture toRoles={handleNavigate} />
      <OurTeams />
    </AboutStyle>
  );
};

export default About;
