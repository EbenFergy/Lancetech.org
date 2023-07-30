import styled from 'styled-components';
import { COLORS } from '../../../styles/COLORS.ts';

export const SlickStyle = styled.div`
  position: relative;

  /* border: 2px solid red; */
  max-width: 100%;
  padding: 0 0 2rem;
  /* overflow: hidden; */
  /* background-color: #4a4a4a; */

  .slick-slider {
    position: static;
    /* border: 2px solid blue; */
  }
  .slick-slide {
    /* border: 2px solid blue; */
    padding-bottom: 2rem;
  }
  .slick-slide > div {
    margin: 0 10px;
  }
  .slick-list {
    margin: 0 5px;
    /* border: 2px solid blue; */
  }

  .slick-dots {
    /* border: 2px solid blue; */
    text-align: left;

    li {
      /* border: 2px solid blue; */
      margin-right: 17px;

      button:before {
        content: '';
        /* border: 1px solid; */
        background-color: ${COLORS.LightGrey};
        height: 5px;
        width: 38px;
        border-radius: 5px;
      }
    }
  }

  li.slick-active button:before {
    background-color: ${COLORS.MainBlue};
  }
  .cards {
    display: flex;
    align-items: center;
    justify-content: center;
    height: min-content;
    /* background-color: rgb(10, 23, 40); */
    /* background-color: rgba(10, 25, 10, 0.9); */
    /* background-color: rgba(145, 65, 145, 0.6); */
    overflow: hidden;
    border: 1px solid rgba(10, 25, 10, 1);
    /* border-radius: 5px; */
    padding: 0 0 1rem;
    min-width: 10rem;
    box-sizing: border-box;
    margin-bottom: 2rem;
  }
  #galleriaImg {
    width: 100%;
    object-fit: cover;
  }

  .galleryCont {
    width: 2rem;
    height: 5rem;
  }

  @media only screen and (min-width: 768px) {
    .slick-slide > div {
      margin: 0 10px;
    }
    .slick-list {
      margin: 0 10px;
    }
  }
`;
