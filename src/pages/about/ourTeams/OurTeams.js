import React from 'react';
import { OurTeamsStyle } from './OurTeams.style';
import { Box } from '@mui/material';
import { OurTeamsUtils } from './utils/OurTeams.util.ts';

const OurTeams = () => {
  return (
    <OurTeamsStyle>
      <Box sx={{ p: 10, maxWidth: '960px', m: 'auto' }}>
        <h2>Our teams</h2>
        {OurTeamsUtils.map(team => (
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <h3 style={{ maxWidth: '15rem' }}>{team.team}</h3>
            <p style={{ maxWidth: '30rem' }}>{team.description}</p>
          </Box>
        ))}
      </Box>
    </OurTeamsStyle>
  );
};

export default OurTeams;
