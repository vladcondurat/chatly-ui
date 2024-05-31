import styled from 'styled-components';

export const MIContainer = styled.div`
  display: flex;
  flex-grow: 1;
  height: fit-content;
  max-width: calc(100vw - 350px);
  max-height: 300px;
  padding: 16px 40px 16px 40px;
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

export const MIField = styled.span`
  display: block;
  width: 100%;
  overflow-y: scroll;
  resize: none;
  outline: none;
  background-color: #2e323f;
  color: white;
  user-select: none;
  max-height: 100%;

  &:focus {
    outline: none;
  }

  &:empty::before {
    content: 'Write a message...';
    font-size: 16px;
    color: #8a8a8a;
  }

  &::backdrop {
    background-color: #2e323f;
    color: white;
  }
`;

export const MISvg = styled.img`
  width: 24px;
  height: 24px;
`;
