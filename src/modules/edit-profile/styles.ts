import styled from 'styled-components';

export const EPContainer = styled.div`
  width: 100%;
  max-width: 400px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  gap: 20px;

  @media (max-width: 500px) {
    max-width: 100%;
  }
`;

export const EPTitleContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 16px;
`;

export const EPTitleWrapper = styled.div`
  color: white;
  font-size: 24px;
`;

export const EPGoBackSvg = styled.img`
  width: 20px;
  height: 20px;

  @media (min-width: 500px) {
    display: none;
  }
`;
