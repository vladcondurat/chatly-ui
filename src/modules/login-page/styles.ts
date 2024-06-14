import styled from 'styled-components';

export const LPContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 340px;
  color: white;
  gap: 24px;

  @media (max-width: 600px) {
    width: 100%;
  }
`;

export const LPTitleWrapper = styled.div`
  font-size: 32px;
  font-weight: 300;
`;

export const LPTextWrapper = styled.div`
  font-size: 12px;
  color: white;
`;

export const LPRegisterTextWrapper = styled.div`
  font-size: 12px;
  color: #1141fb;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

export const LPTextContainer = styled.div`
  display: flex;
  gap: 2px;

  @media (max-width: 380px) {
    flex-direction: column;
  }
`;

export const LPFormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;
