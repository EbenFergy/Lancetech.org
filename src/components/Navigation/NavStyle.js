import styled from "styled-components";
import { COLORS } from "../../styles/COLORS";
import { FONTS } from "../../styles/FONTS";

const NavStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem 4rem;

  a {
    color: ${COLORS.LightFont};
    font-size: ${FONTS.mini};
    text-decoration: none;
    font-weight: 500;
  }

  .navLinks {
    display: flex;
    gap: 2rem;
  }

  .active,
  a:hover {
    text-decoration: underline;
    color: ${COLORS.MainBlue};
  }
`;

export default NavStyle;
