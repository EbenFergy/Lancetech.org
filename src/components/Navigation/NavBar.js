import React from "react";
import NavStyle from "./NavStyle";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <NavStyle>
      <div>LANCETECH</div>
      <ul>
        <NavLink to="">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </ul>
      <div>Request Demo</div>
    </NavStyle>
  );
};

export default NavBar;
