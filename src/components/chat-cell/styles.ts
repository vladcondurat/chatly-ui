import styled from 'styled-components';

export const CCContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: fit-content;
  padding: 8px;
  user-select: none;
`;

export const CCImage = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
`;

export const CCLastMsgContainer = styled.div`
  font-size: 12px;
  color: #888888;
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
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

export const CCTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

export const CCDetailsWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;
