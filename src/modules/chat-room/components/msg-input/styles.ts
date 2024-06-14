import styled from 'styled-components';

export const MIContainer = styled.div`
  display: flex;
  flex-grow: 1;
  height: fit-content;

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

export const MISvg = styled.img`
  width: 24px;
  height: 24px;
`;
