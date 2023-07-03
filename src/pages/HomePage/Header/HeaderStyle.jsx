import styled from 'styled-components';
import { COLORS } from '../../../styles/COLORS';

export const HeaderStyle = styled.div`
  background-color: ${COLORS.DarkBlue3};
  color: ${COLORS.White};
  height: 55rem;
  position: relative;
  display: flex;
  /* flex-direction: column; */
  align-items: center;
  justify-content: center;

  h2 {
    color: #def4ff;
    font-size: 80px;
    /* border: 2px solid; */
    text-align: center;

    span {
      color: ${COLORS.LightBlue};
    }
  }

  .headerImg {
    position: absolute;
    bottom: -15rem;
    right: -10rem;
    transform: rotate(15deg);
    z-index: 10;
    align-items: center;

    img {
      width: 38rem;
    }
  }

  .waveSVG {
    position: absolute;
    bottom: -90px;
    left: 0;
    width: 100%;
    overflow: hidden;
    line-height: 0;
    /* transform: rotate(180deg); */
  }

  .waveSVG svg {
    position: relative;
    display: block;
    width: calc(100% + 1.3px);
    height: 90px;
  }

  .waveSVG .shape-fill {
    fill: ${COLORS.DarkBlue3};
  }
`;
