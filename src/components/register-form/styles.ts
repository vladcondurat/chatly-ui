import styled from 'styled-components';

export const RFWrapper = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const RFInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const RFButton = styled.button`
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
