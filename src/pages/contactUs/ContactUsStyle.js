import styled from 'styled-components';
import { COLORS } from '../../styles/COLORS.ts';
import { GoogleURLConverter } from '../../core/helpers/GoogleURLConverter.ts';

const { DarkBlue3, DarkBlue4, FadedWhite } = COLORS;

const contactUsImgURL = GoogleURLConverter('https://drive.google.com/file/d/1n88j8eza271BwrTDC-Nq5UIFOhTZYMuD/view?usp=sharing');

const ContactUsStyle = styled.div`
  display: flex;
  height: 100vh;

  .contactUsLeft {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 4rem;
    box-sizing: border-box;
    width: 60%;
    background: rgb(2, 0, 36);
    background: linear-gradient(180deg, ${DarkBlue3} 40%, ${DarkBlue4} 100%);
    color: ${FadedWhite};
  }

  .contactUsRight {
    display: flex;
    justify-content: center;
    align-items: center;
    width: fit-content;
    width: 40%;
    background-image: url(${contactUsImgURL});
    background-repeat: no-repeat;
    background-size: cover;
  }
`;

export default ContactUsStyle;
