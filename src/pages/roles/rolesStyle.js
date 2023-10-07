import styled from 'styled-components';
import { GoogleURLConverter } from '../../core/helpers/GoogleURLConverter.ts';

const bgImg = GoogleURLConverter('https://drive.google.com/file/d/17DY88QbmOzM2volO0bTxlJMOvxbG2z_a/view?usp=sharing');

export const RolesStyle = styled.div`
  .rolesHeader {
    height: 40rem;
    background-size: cover;
    background: linear-gradient(to right, rgba(2, 18, 44, 1), rgba(2, 26, 63, 0.7)), url(${bgImg});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    color: #ffffff;
    padding: 0 1rem;
    transition: all 0.8s;

    .btnCont {
      margin-bottom: 5rem;
    }
  }

  #headerTitle {
    font-size: 2.2rem;
    font-weight: 800;
    margin-bottom: 0;
  }

  .roleCards {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 20rem));
    justify-content: center;
    width: 100%;
    box-sizing: border-box;
    gap: 2.5rem;
    margin: 3rem 0;
  }

  .jobDescription {
    height: 8.2rem;
    padding: 0 0 1rem 0;
    text-align: justify;

    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 8;
    white-space: pre-wrap;
    overflow: hidden;
    text-overflow: ellipsis;

    font-size: 12px;
  }
`;
