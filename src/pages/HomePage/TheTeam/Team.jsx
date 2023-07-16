import React from 'react';
import { TeamStyle } from './TeamStyle';
import DanielImg from '../../../assets/TeamPictures/DanielOsemeke.png';
import OsasImg from '../../../assets/TeamPictures/OsasFerguson.png';

const Team = () => {
  return (
    <TeamStyle>
      <h1 className="teamTitle">
        Meet our <br /> amazing team
      </h1>
      <hr />
      <div className="teamGallery">
        <div>
          <div className="teamMember">
            <img src={OsasImg} alt="teamMember" />
          </div>
          <div className="nameAndTitle">
            <div className="memberName">Osas Ferguson</div>
            <div className="memberTitle">Software Engineer</div>
          </div>
        </div>
        <div>
          <div className="teamMember">
            <img src={DanielImg} alt="teamMember" />
          </div>
          <div className="nameAndTitle">
            <div className="memberName">Daniel Osemeke</div>
            <div className="memberTitle">Product Manager</div>
          </div>
        </div>
        <div>
          <div className="teamMember">
            <img src={DanielImg} alt="teamMember" />
          </div>
          <div className="nameAndTitle">
            <div className="memberName">Daniel Osemeke</div>
            <div className="memberTitle">Product Manager</div>
          </div>
        </div>
        <div>
          <div className="teamMember">
            <img src={DanielImg} alt="teamMember" />
          </div>
          <div className="nameAndTitle">
            <div className="memberName">Daniel Osemeke</div>
            <div className="memberTitle">Product Manager</div>
          </div>
        </div>
        <div>
          <div className="teamMember">
            <img src={DanielImg} alt="teamMember" />
          </div>
          <div className="nameAndTitle">
            <div className="memberName">Daniel Osemeke</div>
            <div className="memberTitle">Product Manager</div>
          </div>
        </div>
        <div>
          <div className="teamMember">
            <img src={DanielImg} alt="teamMember" />
          </div>
          <div className="nameAndTitle">
            <div className="memberName">Daniel Osemeke</div>
            <div className="memberTitle">Product Manager</div>
          </div>
        </div>
        <div>
          <div className="teamMember">
            <img src={DanielImg} alt="teamMember" />
          </div>
          <div className="nameAndTitle">
            <div className="memberName">Daniel Osemeke</div>
            <div className="memberTitle">Product Manager</div>
          </div>
        </div>
      </div>
      <hr />
    </TeamStyle>
  );
};

export default Team;
