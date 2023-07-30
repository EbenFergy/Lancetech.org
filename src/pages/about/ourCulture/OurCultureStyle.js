import styled from 'styled-components';
import { COLORS } from '../../../styles/COLORS.ts';
import { FONTS } from '../../../styles/FONTS.ts';

export const OurCultureStyle = styled.div`
  background-color: ${COLORS.DarkBlue3};
  color: ${COLORS.White};
  padding: 2rem;

  h2 {
    font-size: ${FONTS.medium};
  }
  h4 {
    font-size: ${FONTS.small};
  }
  p {
    font-size: ${FONTS.mini};
    text-align: justify;
  }

  .cultureMid {
    .cultureMidLeft {
      max-width: 20rem;
    }
  }
`;
