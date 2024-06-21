import styled from 'styled-components';

export const ERWrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 500px;
  width: 100%;
  gap: 20px;
`;

export const ERContainer = styled.div`
  width: 100%;
  overflow-y: scroll;
  padding: 12px 12px;

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

export const ERDetailsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const ERTopBarWrapper = styled.div`
  display: flex;
  align-items: center;
  color: white;
  min-height: 64px;
  gap: 12px;
  font-size: 24px;
`;

export const ERGoBackSvg = styled.img`
  width: 20px;
  height: 20px;
  cursor: pointer;
`;

export const ERButtonsWrapper = styled.div`
  display: flex;
  gap: 16px;
`;

export const ERUserListWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
