import styled from 'styled-components';

export const RPContainer = styled.div`
  display: flex;
  flex-direction: column;
  color: white;
  width: 340px;
  height: fit-content;
  gap: 24px;
`;

export const RPTitleWrapper = styled.div`
  font-size: 32px;
  font-weight: 300;
`;

export const RPFormsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const RPRegisterButton = styled.button`
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

export const RPTextWrapper = styled.div`
  font-size: 12px;
  color: white;
`;

export const RPLoginTextWrapper = styled.div`
  font-size: 12px;
  color: #1141fb;

  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

export const RPTextContainer = styled.div`
  display: flex;
  gap: 2px;
`;

export const RPButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;
