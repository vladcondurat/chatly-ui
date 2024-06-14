import styled from 'styled-components';

export const ECRContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: gray;
  width: 100%;
  height: 100%;

  @media (max-width: 500px) {
    display: none;
  }

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
