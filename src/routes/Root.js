import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from '../components/Navigation/NavBar';

const Root = () => {
  return (
    <div style={{ position: 'relative' }}>
      <NavBar />
      <Outlet />
    </div>
  );
};

export default Root;
