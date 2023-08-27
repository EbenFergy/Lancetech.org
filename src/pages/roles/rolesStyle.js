import styled from 'styled-components';

export const RolesStyle = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(192px, 20rem));
  gap: 2.5rem;
  margin: 3rem 0;

  .jobDescription {
    height: 8.2rem;
    padding: 0.5rem 0.5rem 1rem 0.5rem;
    text-align: justify;
    /* background-color: lightgreen; */

    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 6;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;
