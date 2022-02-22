import styled from "styled-components";

const PromoNavStyle = styled.div`
  .info-nav-container {
    display: flex;
    align-items: center;
    justify-content: center;
    /* background-color: #1f2c46; */
    background-color: #13171f;
    width: 100%;
    height: 5%;
    color: white;
    /* text-align: center;    */
    margin: 0;
    font-size: 0.8rem;
  }

  .info-nav-container span a {
    text-decoration: none;
    color: #1c8fc5;
  }

  .info-nav-container span a:hover {
    text-decoration: underline;
  }
`;
export default PromoNavStyle;
