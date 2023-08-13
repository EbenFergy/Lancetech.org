import styled from 'styled-components';
import { COLORS } from '../../styles/COLORS.ts';

const { DarkBlue3, DarkBlue4, MainBlue, LightBlue } = COLORS;

const ContactUsStyle = styled.div`
  display: flex;
  height: 100vh;

  .contactUsLeft {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50%;
    background: rgb(2, 0, 36);
    background: linear-gradient(180deg, ${DarkBlue4} 40%, ${MainBlue} 100%);
  }

  .contactUsRight {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50%;
  }
`;

export default ContactUsStyle;
