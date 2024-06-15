import styled from 'styled-components';

export const IFContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const IFTitleContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  padding-left: 2px;
`;

export const IFErrorWrapper = styled.div`
  color: red;
  font-size: 12px;
`;

export const IFTextWrapper = styled.div`
  font-size: 12px;
  color: white;
`;

export const IFField = styled.input`
  width: 100%;
  height: 40px;
  border-radius: 8px;
  font-size: 16px;
  color: white;
  border: none;
  padding: 0 8px;
  outline: none;
  background: rgba(255, 255, 255, 0.1);
`;

export const IFFileField = styled.input`
  display: none;
`;

export const IFFileContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  background-color: rgba(255, 255, 255, 0.1);
  padding: 20px;
  border-radius: 8px;
`;

export const IFFileLabel = styled.label`
  padding: 8px 16px;
  border-radius: 8px;
  background-color: #1141fb;
  color: white;
  font-size: 14px;
  cursor: pointer;
  text-align: center;

  &:hover {
    background-color: #0d36d9;
  }
`;

export const IFImagePreview = styled.img`
  width: 100px;
  height: 100px;
  object-fit: cover;
  border-radius: 8px;
`;

export const IFPlaceholderCircle = styled.div`
  width: 112px;
  height: 112px;
  border: 2px dashed gray;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
`;
