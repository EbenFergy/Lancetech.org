import React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { RolesStyle } from './rolesStyle';

const RolesPage = () => {
  return (
    <RolesStyle>
      <Card
        sx={{
          border: '2px solid pink',
        }}
      >
        <CardContent>
          <Box>
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
              <Typography variant="h6" component="div" sx={{ fontWeight: 800, m: 0, lineHeight: '20px' }}>
                React Developer
              </Typography>
              <Typography sx={{ fontSize: 14, fontWeight: 700, m: 0 }} color="text.secondary" gutterBottom>
                Mid Level
              </Typography>
            </Box>
          </Box>

          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            Remote| contract
          </Typography>
          <Typography className="jobDescription">
            Design and develop technical solutions to support business operations Collaborate with project managers, product managers, and
            stakeholders to gather requirements and specifications Lead projects with competing timelines and requirements, while exceeding
            delivery expectations Required Qualifications: 2+ years as a React/Typescript developer focused in React. Exceptional
            Javascript/Typescript fundamentals. Experience with creating applications using React and its ecosystem Experience working with
            RESTful APIs Proficiency in TypeScript
          </Typography>
        </CardContent>
      </Card>
    </RolesStyle>
  );
};

export default RolesPage;
