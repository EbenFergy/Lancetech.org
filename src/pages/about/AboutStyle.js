import styled from 'styled-components';
import { FONTS } from '../../styles/FONTS.ts';
import { COLORS } from '../../styles/COLORS.ts';

export const AboutStyle = styled.div`
  padding: 2rem 4rem;
  h1 {
    font-size: ${FONTS.large};
    font-weight: 700;
    line-height: 64px;
  }

  h4 {
    font-size: ${FONTS.small};
    margin: 0;
    line-height: 34px;
  }

  .AboutTitle {
    margin-top: 10rem;
    span {
      color: ${COLORS.LightBlue};
    }
  }

  .torusImg2 {
    position: absolute;
    right: -5rem;
    bottom: -10rem;
    transform: rotate(75deg);
  }
`;
