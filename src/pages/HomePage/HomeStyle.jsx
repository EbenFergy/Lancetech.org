import styled from "styled-components";
import { FONTS } from "../../styles/FONTS";
import { COLORS } from "../../styles/COLORS";

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
  padding: 5rem;

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
`;

export const MeetWithStyle = styled.div``;
