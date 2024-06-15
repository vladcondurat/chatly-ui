import styled from 'styled-components';

export const CCContainer = styled.div<{ $isSelected: boolean }>`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: fit-content;
  border-radius: 4px;
  background-color: ${({ $isSelected }) => $isSelected && '#282D3C'};
  padding: 8px;
  gap: 8px;
  user-select: none;
`;

export const CCImage = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
`;

export const CCChatName = styled.div`
  font-size: 14px;
  font-weight: 600;
  color: white;
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
