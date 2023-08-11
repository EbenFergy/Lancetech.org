import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from '../components/Navigation/NavBar';
import Footer from '../components/Footer/Footer';

const Root = () => {
  return (
    <div style={{ position: 'relative' }}>
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Root;
