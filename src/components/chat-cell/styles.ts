import styled from 'styled-components';

export const CCContainer = styled.div<{ $isSelected: boolean }>`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: fit-content;
  border-radius: 4px;
  padding: 8px;
  gap: 8px;
  user-select: none;

  @media (min-width: 500px) {
    background-color: ${({ $isSelected }) => $isSelected && '#282D3C'};
  }
`;

export const CCImage = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: contain;
`;

export const CCChatName = styled.div`
  font-size: 14px;
  font-weight: 600;
  color: white;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const CCLastMsgTimeContainer = styled.div`
  padding-top: 4px;
  font-size: 12px;
  color: #838383;
`;

export const CCLastMsgTimeWrapper = styled.div`
  display: flex;
  align-items: center;
  align-items: flex-start;

  @media (max-width: 800px) and (min-width: 501px) {
    display: none;
  }
`;

export const CCLastMsgContainer = styled.div`
  font-size: 12px;
  color: #888888;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  width: 100%;
`;

export const CCTextWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  overflow: hidden;
  @media (max-width: 800px) and (min-width: 501px) {
    display: none;
  }
`;
