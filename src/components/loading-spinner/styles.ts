import styled from 'styled-components';

export const LSSpinner = styled.div`
  border: 4px solid rgba(0, 0, 0, 0.1);
  width: 36px;
  height: 36px;
  border-radius: 50%;
  border-left-color: #09f;
  animation: spin 1s ease infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export const LSContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding-top: 20%;
  height: 100%;
  width: 100%;
`;
