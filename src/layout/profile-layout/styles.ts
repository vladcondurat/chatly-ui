import styled from 'styled-components';

export const PLContainer = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  background: rgb(30, 32, 36);
  background: linear-gradient(148deg, rgba(30, 32, 36, 1) 0%, rgba(26, 32, 51, 1) 100%);
`;

export const PLOuteletContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  background: #232733;
`;

export const PLProfileBarContainer = styled.div`
  @media (max-width: 500px) {
    display: none;
  }
`;
