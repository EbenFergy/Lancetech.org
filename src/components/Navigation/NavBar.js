import React from 'react';
import NavStyle from './NavStyle';
import { NavLink, useNavigate } from 'react-router-dom';
import Button from '../Button/Button';
import lancetechlOGO from '../../assets/lancetech.svg';

const NavBar = ({ navFixed }) => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate('/roles');
  };

  return (
    <NavStyle navFixed={navFixed}>
      <div>
        <img src={lancetechlOGO} alt="lancetechLOGO" />
      </div>
      <div className="navLinks">
        <NavLink to="" className={({ isActive }) => (isActive ? 'active' : undefined)}>
          Home
        </NavLink>
        <NavLink to="/about" className={({ isActive }) => (isActive ? 'active' : undefined)}>
          About
        </NavLink>
        <NavLink to="/contact" className={({ isActive }) => (isActive ? 'active' : undefined)}>
          Contact
        </NavLink>
      </div>
      <Button onClick={handleNavigate}>See roles</Button>
    </NavStyle>
  );
};

export default NavBar;
