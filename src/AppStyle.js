import styled from 'styled-components';
import { FONTS } from './styles/FONTS.ts';
import { COLORS } from './styles/COLORS.ts';

const { large, medium } = FONTS;
const { LightHeader } = COLORS;

const AppStyle = styled.div`
  h1 {
    font-size: ${large};
    font-weight: 700;
    line-height: 64px;
    color: ${LightHeader};

    @media only screen and (max-width: 600px) {
      font-size: ${medium};
    }
  }
`;

export default AppStyle;
