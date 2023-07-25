import styled from 'styled-components';

export const TeamStyle = styled.div`
  background-color: #f4f4f4;

  .teamWrapper {
    padding: 8rem 15rem;
    max-width: 1440px;
    margin: auto;
  }

  .teamGallery {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(192px, 1fr));
    gap: 2.5rem;
    margin: 3rem 0;

    .teamMember {
      /* width: 12rem; */
      /* display: flex;
      justify-content: center; */
      align-items: center;
      height: 15rem;
      border-radius: 5px;
      overflow: hidden;
    }

    .memberName {
      font-weight: 600;
      margin-bottom: 5px;
    }

    .memberTitle {
      font-size: 12px;
    }

    .nameAndTitle {
      margin: 1rem 0;
    }

    @media only screen and (max-width: 740px) {
      .teamMember {
        display: flex;
        justify-content: center;
      }
    }
  }
`;
