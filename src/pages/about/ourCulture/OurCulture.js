import React from 'react';
import { OurCultureStyle } from './OurCultureStyle';
import Button from '../../../components/Button/Button';
import BackupTableSharpIcon from '@mui/icons-material/BackupTableSharp';
import { Icon, Box } from '@mui/material';
import { COLORS } from '../../../styles/COLORS.ts';
import { GoogleURLConverter } from '../../../core/helpers/GoogleURLConverter.ts';

const OurCulture = ({ toRoles }) => {
  const cultureImgURL = GoogleURLConverter('https://drive.google.com/file/d/1brd5hxoOjlvQU1zBc2Y7wSRkrpggVbCq/view?usp=drive_link');
  console.log('cultureImgURL', cultureImgURL);
  return (
    <OurCultureStyle>
      <Box sx={{ m: 'auto' }}>
        <h2>Our Culture</h2>
        <div className="cultureMid">
          <div className="cultureMidLeft">
            <div className="cultureMidLeftSub">
              <div className="cultures">
                <Icon sx={{ backgroundColor: COLORS.DarkBlue, p: 1, borderRadius: 1 }}>
                  <BackupTableSharpIcon sx={{ color: COLORS.LightBlue }} />
                </Icon>
                <h4>Flexible</h4>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim magni quo ab non? Error qui, iste consequuntur quasi</p>
              </div>
              <div className="cultures">
                <Icon sx={{ backgroundColor: COLORS.DarkBlue, p: 1, borderRadius: 1 }}>
                  <BackupTableSharpIcon sx={{ color: COLORS.LightBlue }} />
                </Icon>
                <h4>Flexible</h4>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim magni quo ab non? Error qui, iste consequuntur quasi</p>
              </div>
            </div>
            <div className="cultureMidLeftSub">
              <div className="cultures">
                <Icon sx={{ backgroundColor: COLORS.DarkBlue, p: 1, borderRadius: 1 }}>
                  <BackupTableSharpIcon sx={{ color: COLORS.LightBlue }} />
                </Icon>
                <h4>Flexible</h4>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim magni quo ab non? Error qui, iste consequuntur quasi</p>
              </div>
              <div className="cultures">
                <Icon sx={{ backgroundColor: COLORS.DarkBlue, p: 1, borderRadius: 1 }}>
                  <BackupTableSharpIcon sx={{ color: COLORS.LightBlue }} />
                </Icon>
                <h4>Flexible</h4>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim magni quo ab non? Error qui, iste consequuntur quasi</p>
              </div>
            </div>
            <Button onClick={toRoles}>See Open Roles</Button>
          </div>
          <img src={cultureImgURL} alt="ourCulture" className="ourCultureImg" />
        </div>
      </Box>
    </OurCultureStyle>
  );
};

export default OurCulture;
