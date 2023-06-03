import styled from 'styled-components';
import { FONTS } from '../../styles/FONTS';
import { COLORS } from '../../styles/COLORS';

export const HomeStyle = styled.div`
  h1 {
    font-size: ${FONTS.large};
    font-weight: 700;
    line-height: 64px;
    color: ${COLORS.LightHeader};
  }

  h4 {
    font-size: ${FONTS.small};
    margin: 0;
  }
`;

export const JoinFoundersStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h1 {
    text-align: center;
  }
`;

export const GrowWithStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: 2rem;
  background: #f9fafa;
  padding: 7rem 5rem 3rem 5rem;
  /* border: 2px solid red; */

  .growWithChild {
    display: flex;
    align-items: center;
    gap: 2rem;
    margin-bottom: 2rem;

    p {
      margin: 0;
      line-height: 28px;
      color: ${COLORS.LightFont};
    }
  }

  .growImgCont {
    position: relative;
    .growDotPat {
      position: absolute;
      top: -3rem;
      left: -5rem;
    }
  }
`;

export const MeetWithStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: 2rem;
  background: #f9fafa;
  padding: 3rem 5rem;
  /* border: 2px solid red; */

  .meetLeft {
    /* border: 2px solid red; */

    .meetImgCont {
      position: relative;

      .MeetPNG {
        position: relative;
        z-index: 2;
      }
      .meetDotPat {
        position: absolute;
        bottom: -2rem;
        left: -3rem;
        z-index: 1;
      }
    }
  }
  .meetRight {
    display: flex;
    flex-direction: column;
    align-self: flex-end;
    flex-basis: 35%;
    /* border: 2px solid red; */

    .meetFirstP {
      line-height: 32px;
    }

    button {
      margin: 2rem 0;
    }

    .meetSecondP {
      font-size: ${FONTS.mini};
      line-height: 25px;
      color: ${COLORS.LightFont};
    }

    h4 {
      font-size: ${FONTS.mini};
    }
  }
`;

export const TestimonialsStyle = styled.div`
  justify-content: space-around;
  padding: 5rem 10rem;
`;

export const RequestStyle = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 4rem;
  padding: 5rem 3rem 3rem 3rem;
  background-color: ${COLORS.DarkBlue};
  color: ${COLORS.White};
  overflow: hidden;
  /* border: 2px solid red; */

  .requestImg {
    position: absolute;
  }

  .requestLeftSVG {
    top: 5rem;
    left: 0;
  }

  .requestRightSVG {
    bottom: -5rem;
    right: 0;
  }

  .requestTop {
    display: flex;
    justify-content: space-around;
    line-height: 28.8px;

    .topLeft {
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }
  }

  .whiteLogo {
    max-width: 185px;
  }

  .copyright {
    text-align: center;
    font-size: ${FONTS.mini};
  }

  #filled-multiline-flexible,
  #filled-multiline-flexible ::placeholder {
    color: #ffffff;
  }

  #filled-multiline-flexible-label {
    color: rgba(250, 250, 250, 0.5);
  }

  hr {
    width: 90%;
    margin: 2rem;
    border: none;
    border-top: 0.5px solid;
    opacity: 0.2;
  }
`;
