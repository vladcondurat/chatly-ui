import styled from 'styled-components';

export const CBContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 300px;
  height: 100vh;
  overflow-y: hidden;
  background: rgb(30, 32, 36);
  background: linear-gradient(148deg, rgba(30, 32, 36, 1) 0%, rgba(26, 32, 51, 1) 100%);
  padding: 4px;
  gap: 16px;

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
`;
