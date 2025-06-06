import styled from 'styled-components';

export const RMWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
  margin-top: 8px;
  margin-right: 40px;
  gap: 8px;
`;

export const RMContainer = styled.div<{ $isSameUser: boolean; $isLastFromUser: boolean }>`
  display: flex;
  max-width: 484px;
  width: fit-content;
  padding: 8px 0px 8px 12px;
  border-radius: ${({ $isSameUser, $isLastFromUser }) =>
    $isSameUser ? '16px 16px 16px 4px' : $isLastFromUser ? '4px 16px 16px 16px' : '16px'};
  background-color: #393d47;
  gap: 8px;
`;

export const RMContainerWithImg = styled.div`
  display: flex;
  max-width: 300px;
  width: 100%;
  padding: 8px 0px 8px 12px;
  border-radius: 0 0 16px 16px;
  background-color: #393d47;
  gap: 8px;

  @media (max-width: 500px) {
    width: 100%;
  }
`;

export const RMContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

export const RMTextContainer = styled.div`
  display: flex;
  flex-grow: 1;
  color: white;
  word-break: break-word;
  overflow-wrap: break-word;
  white-space: pre-wrap;
`;

export const RMDefaultImgTextContainer = styled.div`
  word-break: break-word;
  overflow-wrap: break-word;
  white-space: pre-wrap;
  display: flex;
  flex-grow: 1;
  color: white;
  font-style: italic;
`;

export const RMImgContainer = styled.img`
  object-fit: cover;
  border-radius: 16px 16px 0px 0px;
  height: 100%;
  width: 100%;
`;

export const RMImgContainerWrapper = styled.div`
  max-width: 300px;
  height: 300px;
  width: 100%;

  @media (max-width: 500px) {
    aspect-ratio: 1/1;
    height: 100%;
  }
`;

export const RMMsgTime = styled.div`
  display: flex;
  align-items: flex-end;
  min-width: 36px;
  padding-bottom: 2px;
  font-size: 12px;
  color: #a1aab3;
`;

export const RMAvatar = styled.img`
  width: 36px;
  height: 36px;
  border-radius: 50%;
`;

export const RMAvatarPlaceholder = styled.div`
  min-width: 36px;
  width: 36px;
  height: 36px;
  border-radius: 50%;
`;

export const RMTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const RMUsername = styled.div`
  padding-left: 12px;
  font-size: 12px;
  color: #a1aab3;
`;
