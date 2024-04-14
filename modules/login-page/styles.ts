import styled from 'styled-components';

export const LPContainer = styled.div`
  display: flex;
  flex-direction: column;
  color: white;
  width: 340px;
  height: fit-content;
  gap: 24px;
`;

export const LPTitleWrapper = styled.div`
  font-size: 32px;
  font-weight: 300;
`;

export const LPFormsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const LPLoginButton = styled.button`
  background-color: #1141fb;
  height: 40px;
  color: white;
  font-size: 16px;
  border: none;
  border-radius: 8px;

  &:hover {
    background-color: #0d36d9;
  }
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
`;

export const LPButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;
