import React from 'react';
import { TeamStyle } from './TeamStyle';
import { TeamList } from './__fixtures__/Team.fixtures.ts';

const Team = () => {
  return (
    <TeamStyle>
      <div className="teamWrapper">
        <h1 className="teamTitle">
          Meet our <br /> amazing team
        </h1>
        <hr />
        <div className="teamGallery">
          {TeamList.map(member => (
            <div>
              <div className="teamMember">
                <img src="https://drive.google.com/file/d/1kevxiwz1fB0z9-f9MO8XzTZZI_R88MJE/view" alt="teamMember" />
              </div>
              <div className="nameAndTitle">
                <div className="memberName">{member.memberName}</div>
                <div className="memberTitle">{member.memberTitle}</div>
              </div>
            </div>
          ))}
        </div>
        <hr />
      </div>
    </TeamStyle>
  );
};

export default Team;
