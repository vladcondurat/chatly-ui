import styled from 'styled-components';

export const MIContainer = styled.div`
  display: flex;
  flex-grow: 1;
  height: fit-content;
`;

export const MIEditMessageLabel = styled.div`
  display: flex;
  align-items: center;
  color: #8a8a8a;
  padding: 8px;
  gap: 16px;
  background-color: rgba(0, 0, 0, 0.2);
  border-radius: 8px;
`;

export const MIEditMessageLabelWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding: 16px 40px 16px 40px;

  @media (max-width: 800px) {
    padding: 16px 20px 16px 20px;
  }

  @media (max-width: 500px) {
    padding: 16px 8px 16px 8px;
  }
`;

export const MIWrapper = styled.div`
  display: flex;
  background-color: #2e323f;
  align-items: flex-end;
  border-radius: 8px;
  padding: 8px;
  min-height: 40px;
  width: 100%;
  gap: 8px;
`;

export const MITextArea = styled.textarea`
  display: block;
  width: 100%;
  resize: none;
  outline: none;
  background-color: #2e323f;
  color: white;
  user-select: none;
  max-height: 300px;
  border: none;
  font-size: 16px;
  overflow-y: auto;

  &::placeholder {
    color: #8a8a8a;
  }

  &:focus {
    outline: none;
  }
`;

export const MIImagePreviewContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const MIImagePreview = styled.div`
  position: relative;
`;

export const MIImage = styled.img`
  width: 100px;
  height: 100px;
  object-fit: cover;
  border-radius: 8px;
`;

export const MIClosePreview = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.5);
  color: white;
  padding: 4px;
  border-radius: 50%;
  cursor: pointer;
`;
