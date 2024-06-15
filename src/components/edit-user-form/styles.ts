import styled from 'styled-components';

export const EFWrapper = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const EFInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const EFButton = styled.button`
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

export const EFImageLabel = styled.label`
  display: flex;
  flex-direction: column;
  gap: 8px;
  font-size: 14px;
  color: #333;
`;

export const EFImageField = styled.input`
  padding: 8px;
  width: 100%;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 14px;
`;

export const EFImagePreview = styled.img`
  width: 100px;
  height: 100px;
  object-fit: cover;
  border-radius: 50%;
  margin-top: 10px;
`;
