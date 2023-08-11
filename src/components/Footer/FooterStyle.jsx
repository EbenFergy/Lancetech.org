import styled from 'styled-components';
import { FONTS } from '../../styles/FONTS.ts';
import { COLORS } from '../../styles/COLORS.ts';

const FooterStyle = styled.div`
  display: flex;
  justify-content: center;
  gap: 5rem;
  padding: 5rem 12rem;
  max-width: 1920px;
  margin: auto;

  .footerChildren {
    display: flex;
    flex-direction: column;
  }

  h4 {
    font-size: 1rem;
    margin-bottom: 1rem;
  }

  p {
    font-size: ${FONTS.mini};
    color: ${COLORS.LightFont};
  }

  .timeIsThe {
    line-height: 28px;
  }

  svg {
    width: 1.2rem;
    :hover {
      opacity: 0.7;
    }
  }
  .footerIcons {
    display: flex;
    align-items: center;
    gap: 1rem;
  }
`;

export default FooterStyle;
