import React from 'react';
import { RequestStyle } from '../HomeStyle';
import LancetechLOGO from '../../../assets/LancetechWhite.png';
import Button from '../../../components/Button/Button';
import TextField from '@mui/material/TextField';
import leftSVG from '../../../assets/SendRequest/left.svg';
import rightSVG from '../../../assets/SendRequest/right.svg';

const SendRequest = () => {
  return (
    <RequestStyle>
      <div className="requestTop">
        <div className="topLeft">
          <img src={LancetechLOGO} alt="companyLogo" className="whiteLogo" />
          <div>
            Drop a request for our team with <br /> your name and email or phone <br /> number, and we will respond!
          </div>
          <Button>Drop a request</Button>
        </div>
        <div>
          <TextField
            id="filled-multiline-flexible"
            label="Send us a request..."
            multiline
            minRows={8}
            maxRows={8}
            sx={{
              maxWidth: '38rem',
              minWidth: '17.5rem',
              width: '30rem',
              bgcolor: '#545D6D',
              borderRadius: '15px 15px 0 0',
              color: 'success.dark',
            }}
            variant="filled"
            slots={{ root: 'aside' }}
            slotProps={{ input: { className: 'requestInput' } }}
          />
        </div>
      </div>
      <div className="copyright">
        <div>Copyright © 2021 Lancetech. All rights reserved</div>
        <hr />
      </div>
      <div className="requestImg requestLeftSVG">
        <img src={leftSVG} alt="leftSVG" classname=" " />
      </div>
      <div className="requestImg requestRightSVG">
        <img src={rightSVG} alt="rightSVG" className="" />
      </div>
    </RequestStyle>
  );
};

export default SendRequest;
