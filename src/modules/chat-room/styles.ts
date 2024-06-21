import styled from 'styled-components';

export const CRContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;

  ::-webkit-scrollbar {
    width: 2px;
  }

  ::-webkit-scrollbar-track {
    background: transparent;
    margin-left: -2px;
  }

  ::-webkit-scrollbar-thumb {
    background: #979aa0;
    border-radius: 4px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
`;

export const CRMsgContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding: 0 40px 0 40px;

  @media (max-width: 800px) {
    padding: 0 20px 0 80px;
  }

  @media (max-width: 500px) {
    padding: 0 8px 0 80px;
  }
`;

export const CRMsgWrapper = styled.div`
  width: 100%;
  height: 100%;
  overflow-y: scroll;
  z-index: 1;
`;
