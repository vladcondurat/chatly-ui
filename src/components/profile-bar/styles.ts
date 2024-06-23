import styled from 'styled-components';

export const PBContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  height: 100vh;
  overflow-y: hidden;
  background: rgb(30, 32, 36);
  background: linear-gradient(148deg, rgba(30, 32, 36, 1) 0%, rgba(26, 32, 51, 1) 100%);
  gap: 16px;
  padding: 16px;

  @media (max-width: 800px) {
    width: 180px;
  }

  @media (max-width: 500px) {
    width: 100vw;
  }
`;

export const PBWrapper = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  width: 100%;
  gap: 12px;
`;

export const PBOption = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
  width: 100%;
  padding: 4px 4px;
  cursor: pointer;

  @media (max-width: 800px) and (min-width: 501px) {
    gap: 8px;
  }
`;

export const PBOptionTextWrapper = styled.div`
  color: white;
  white-space: nowrap;
  font-size: 16px;

  @media (max-width: 800px) and (min-width: 501px) {
    font-size: 12px;
  }
`;
