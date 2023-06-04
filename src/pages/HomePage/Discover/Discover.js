import React from 'react';
import { DiscoverStyle } from '../HomeStyle';
import DiscSVG1 from '../../../assets/Discover/DiscSVG1.svg';
import DiscSVG2 from '../../../assets/Discover/DiscSVG2.svg';
import DiscSVG3 from '../../../assets/Discover/DiscSVG3.svg';

const Discover = () => {
  return (
    <DiscoverStyle>
      <h1>Discover our process</h1>
      <div className="discDown">
        <div className="discChildren">
          <img src={DiscSVG1} alt="DiscSVG1" />
          <h4> Strategy development</h4>
          <div className="pCont">
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim magni quo ab non? Error qui, iste consequuntur quasi</p>
          </div>
        </div>
        <div className="discChildren">
          <img src={DiscSVG2} alt="DiscSVG2" />
          <h4>
            Product Development <br />
            process
          </h4>
          <div className="pCont">
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim magni quo ab non? Error qui, iste consequuntur quasi</p>
          </div>
        </div>
        <div className="discChildren">
          <img src={DiscSVG3} alt="DiscSVG3" />
          <h4>
            Testing, prototyping and <br /> support
          </h4>
          <div className="pCont">
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim magni quo ab non? Error qui, iste consequuntur quasi</p>
          </div>
        </div>
      </div>
    </DiscoverStyle>
  );
};

export default Discover;
