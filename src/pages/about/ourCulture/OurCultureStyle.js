import styled from 'styled-components';
import { COLORS } from '../../../styles/COLORS.ts';

export const OurCultureStyle = styled.div`
  background-color: ${COLORS.DarkBlue3};
  color: ${COLORS.White};
  padding: 6rem 6rem;

  > div {
    max-width: 1440px;
  }

  .cultureMid {
    display: flex;
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
      }

      .cultures {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
        max-width: 15rem;
      }
    }

    .ourCultureImg {
      height: 30rem;
      border: 2px solid;
    }
  }
`;
