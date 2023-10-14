import styled from 'styled-components';
import { COLORS } from '../../../styles/COLORS.ts';
import { GoogleURLConverter } from '../../../core/helpers/GoogleURLConverter.ts';

const cultureImgURL = GoogleURLConverter('https://drive.google.com/file/d/1VYaBtUK7j1r_pcB49cchzgTx0lGt0XVG/view?usp=sharing');

export const OurCultureStyle = styled.div`
  background-color: ${COLORS.DarkBlue3};
  color: ${COLORS.White};
  padding: 6rem 6rem;

  > div {
    max-width: 1440px;
  }

  .cultureMid {
    display: flex;
    gap: 2rem;
    justify-content: space-between;
    box-sizing: border-box;

    .cultureMidLeft {
      max-width: 50%;
      display: flex;
      flex-direction: column;
      gap: 2rem;
      justify-content: space-between;

      .cultureMidLeftSub {
        display: flex;
        gap: 1rem;
      }

      .cultures {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
        max-width: 15rem;
      }
    }

    .ourCultureImg {
      /* height: 30rem; */
      width: 50%;
      background-size: cover;
      background: url(${cultureImgURL});
      background-repeat: no-repeat;
      background-size: cover;
      background-position: center;
      border: 2px solid;
    }
  }
`;
