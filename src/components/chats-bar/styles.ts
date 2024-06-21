import styled from 'styled-components';

export const CBContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  height: 100vh;
  padding-top: 8px;
  gap: 8px;
  overflow-y: hidden;
  background: linear-gradient(
    148deg,
    rgba(30, 32, 36, 1) 0%,
    rgba(26, 32, 51, 1) 100%
  );
  padding-right: 2px;

  @media (max-width: 800px) {
    width: fit-content;
    padding-top: 4px;
  }

  @media (max-width: 500px) {
    width: 100vw;
    padding-top: 8px;
  }

  ::-webkit-scrollbar {
    width: 2px;
  }

  ::-webkit-scrollbar-track {
    background: transparent;
  }

  ::-webkit-scrollbar-thumb {
    background: rgba(255, 255, 255, 0.05);
    border-radius: 4px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: rgba(255, 255, 255, 0.3);
  }
`;

export const CBCellWrapper = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  height: 100%;
  padding: 0px 2px 8px 6px;
`;

export const CBSearchBarWrapper = styled.div`
  width: 100%;
  padding: 0 8px 0 8px;

  @media (max-width: 800px) and (min-width: 500px) {
    display: none;
  }
`;

export const CBNoChatsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  color: gray;
`;
