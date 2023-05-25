import React from 'react';
import BtnGroupStyle from './BtnGroupStyle';
import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded';
import ChevronLeftRoundedIcon from '@mui/icons-material/ChevronLeftRounded';
import IconButton from '@mui/material/IconButton';
import { COLORS } from '../../../styles/COLORS';

export const LeftBtn = ({ onClick }) => {
  return (
    <BtnGroupStyle style={{ right: '4.5rem' }}>
      <IconButton onClick={onClick} sx={{ backgroundColor: COLORS.PaleBlue, border: '1px solid rgba(34, 176, 252, 0.25)' }}>
        <ChevronLeftRoundedIcon sx={{ fontSize: 40, color: '#448CB3' }} />
      </IconButton>
    </BtnGroupStyle>
  );
};

export const RightBtn = ({ onClick }) => {
  return (
    <BtnGroupStyle style={{ right: 0 }}>
      <IconButton onClick={onClick} style={{ backgroundColor: '#448CB3' }}>
        <ChevronRightRoundedIcon sx={{ fontSize: 40, color: '#ffffff' }} />
      </IconButton>
    </BtnGroupStyle>
  );
};
