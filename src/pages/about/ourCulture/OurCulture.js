import React from 'react';
import { OurCultureStyle } from './OurCultureStyle';
import Button from '../../../components/Button/Button';
import BackupTableSharpIcon from '@mui/icons-material/BackupTableSharp';
import { Icon } from '@mui/material';
import { COLORS } from '../../../styles/COLORS.ts';

const OurCulture = ({ toRoles }) => {
  return (
    <OurCultureStyle>
      <h2>OurCulture</h2>
      <div className="cultureMid">
        <div className="cultureMidLeft">
          <div>
            <Icon sx={{ backgroundColor: COLORS.DarkBlue, p: 1, borderRadius: 1 }}>
              <BackupTableSharpIcon sx={{ color: COLORS.LightBlue }} />
            </Icon>
            <h4>Flexible</h4>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim magni quo ab non? Error qui, iste consequuntur quasi</p>
          </div>
          <div>
            <img alt="GrowthIcon" />
            <h4>Growth</h4>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim magni quo ab non? Error qui, iste consequuntur quasi</p>
          </div>
        </div>
        <div>
          <img alt="ourCulture" />
        </div>
      </div>
      <Button onClick={toRoles}>See Open Roles</Button>
    </OurCultureStyle>
  );
};

export default OurCulture;
