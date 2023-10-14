import React from 'react';
import { Outlet } from 'react-router-dom';
// import Footer from '../components/Footer/Footer';

const FooterPages = () => {
  return (
    <div style={{}}>
      <Outlet />
      {/* <Footer /> */}
    </div>
  );
};

export default FooterPages;
