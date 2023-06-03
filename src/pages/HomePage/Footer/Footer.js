import React from 'react';
import { FooterStyle } from '../HomeStyle';

const Footer = () => {
  return (
    <FooterStyle>
      <div className="footerChildren">
        <h4>Community</h4>
        <p>Our Designers</p>
        <p>Our Developers</p>
        <p> Our Product managers</p>
        <p>FAQ</p>
      </div>
      <div className="footerChildren">
        <h4>About us</h4>
        <p>Meet the Founders</p>
        <p>Our Story</p>
        <p>Career</p>
      </div>
      <div className="footerChildren">
        <h4>Useful</h4>
        <p>Linkden Profile</p>
        <p>Behance Profile</p>
        <p>Career Blog</p>
      </div>
      <div className="footerChildren">
        <h4>Subscribe to our Newsletter</h4>
        <p className="timeIsThe">
          Time is the most precious thing you have when <br /> bootstrapping. You can't take time. Outsource today!
        </p>
        <div></div>
      </div>
    </FooterStyle>
  );
};

export default Footer;
