import styled from 'styled-components';
import { FONTS } from '../../styles/FONTS.ts';
import { COLORS } from '../../styles/COLORS.ts';

export const AboutStyle = styled.div`
  overflow: hidden;
  padding: 2rem 0;
  position: relative;

  h1 {
    font-size: ${FONTS.large};
    font-weight: 700;
    line-height: 64px;
  }

  h2 {
    font-size: ${FONTS.medium};
    margin: 0 0 2rem 0;
  }

  h3 {
    font-size: ${FONTS.midSmall};
  }

  h4 {
    font-size: ${FONTS.small};
    margin: 0;
    line-height: 34px;
  }

  p {
    font-size: ${FONTS.mini};
    margin: 0;
  }

  .AboutTitle {
    max-width: 1920px;
    margin: auto;
    padding: 6rem;

    span {
      color: ${COLORS.LightBlue};
    }
  }

  .torusImg2 {
    position: absolute;
    right: -8rem;
    top: 12rem;
    transform: rotate(75deg);
  }
`;
