import styled from 'styled-components';

export const TeamStyle = styled.div`
  background-color: #f4f4f4;
  padding: 8rem 15rem;

  .teamGallery {
    display: flex;
    flex-wrap: wrap;
    gap: 2.5rem;
    margin: 3rem 0;

    .teamMember {
      width: 12rem;
      height: 15rem;
      border-radius: 5px;
      overflow: hidden;
      display: flex;
      align-items: center;
      justify-content: center;
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
  }
`;
