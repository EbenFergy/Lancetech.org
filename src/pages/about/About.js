import React from 'react';
import { AboutStyle } from './AboutStyle';
import Button from '../../components/Button/Button';
import TorusImage from '../../assets/Torus.svg';
import OurCulture from './ourCulture/OurCulture';
import { useNavigate } from 'react-router-dom';

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

      <img src={TorusImage} alt="torusImage" className="headerImg torusImg2" />
      <OurCulture toRoles={handleNavigate} />
    </AboutStyle>
  );
};

export default About;
