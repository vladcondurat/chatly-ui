import styled from 'styled-components';

export const LFWrapper = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const LFInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const LFButton = styled.button`
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
