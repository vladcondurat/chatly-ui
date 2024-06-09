import styled from 'styled-components';

export const RMWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
  margin-top: 8px;
  gap: 8px;
`;

export const RMContainer = styled.div`
  display: flex;
  max-width: 484px;
  width: fit-content;
  padding: 8px 4px 8px 12px;
  border-radius: 14px 14px 14px 4px;
  background-color: #393d47;
  gap: 8px;
`;

export const RMTextContainer = styled.div`
  display: flex;
  flex-grow: 1;
  color: white;
  overflow-wrap: break-word;
`;

export const RMMsgTime = styled.div`
  display: flex;
  align-items: flex-end;
  min-width: 30px;
  padding-bottom: 2px;
  font-size: 12px;
  color: #a1aab3;
`;

export const RMAvatar = styled.img`
  width: 36px;
  height: 36px;
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
