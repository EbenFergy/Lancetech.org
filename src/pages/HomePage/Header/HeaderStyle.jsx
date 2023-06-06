import styled from 'styled-components';
import { COLORS } from '../../../styles/COLORS';

export const HeaderStyle = styled.div`
  background-color: ${COLORS.DarkBlue3};
  color: ${COLORS.White};
  height: 50rem;
  position: relative;
  display: flex;
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
    fill: #020817;
  }
`;
