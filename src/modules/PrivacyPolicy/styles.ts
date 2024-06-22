import styled from 'styled-components';

export const PPContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 20px;
  gap: 20px;
  overflow-y: scroll;

  @media (max-width: 500px) {
    max-width: 100%;
  }
`;

export const PPTitleContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 16px;
`;

export const PPTitleWrapper = styled.div`
  color: white;
  font-size: 24px;
`;

export const PPGoBackSvg = styled.img`
  width: 20px;
  height: 20px;

  @media (min-width: 500px) {
    display: none;
  }
`;

export const PPContent = styled.div`
  display: flex;
  flex-direction: column;
  color: white;
  font-size: 16px;
  gap: 16px;
  line-height: 1.5;
`;
