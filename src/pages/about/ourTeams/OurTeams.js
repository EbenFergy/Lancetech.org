import React from 'react';
import { OurTeamsStyle } from './OurTeams.style';
import { Box } from '@mui/material';
import { OurTeamsUtils } from './utils/OurTeams.util.ts';

const OurTeams = () => {
  return (
    <OurTeamsStyle>
      <Box sx={{ p: 10, maxWidth: '1440px', m: 'auto' }}>
        <h2>Our Teams</h2>
        {OurTeamsUtils.map(team => (
          <Box sx={{ display: 'flex' }}>
            <h3>{team.team}</h3>
            <p>{team.description}</p>
          </Box>
        ))}
      </Box>
    </OurTeamsStyle>
  );
};

export default OurTeams;
