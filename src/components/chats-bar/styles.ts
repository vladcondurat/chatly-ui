import styled from 'styled-components';

export const CBContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  height: 100vh;
  overflow-y: hidden;
  background: rgb(30, 32, 36);
  background: linear-gradient(148deg, rgba(30, 32, 36, 1) 0%, rgba(26, 32, 51, 1) 100%);
  padding: 8px 4px 8px 4px;
  gap: 16px;

  @media (max-width: 800px) {
    width: fit-content;
  }

  @media (max-width: 500px) {
    width: 100vw;
  }

  ::-webkit-scrollbar {
    width: 2px;
  }

  ::-webkit-scrollbar-track {
    background: transparent;
  }

  ::-webkit-scrollbar-thumb {
    background: #979aa0;
    border-radius: 4px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
`;

export const CBCellWrapper = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  height: 100%;
  width: 100%;
  padding-left: 2px; // Compansate for scrollbar width
`;

export const CBSearchBarWrapper = styled.div`
  width: 100%;
  padding: 0 8px 0 8px;

  @media (max-width: 800px) {
    display: none;
  }
`;
