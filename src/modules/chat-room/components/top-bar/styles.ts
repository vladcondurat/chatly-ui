import styled from 'styled-components';

export const TBContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  min-height: 64px;
  padding: 0 12px 0 12px;
  border-bottom: 1px solid #2e333a;
`;

export const TBLeftContainer = styled.div`
  display: flex;
  gap: 12px;
`;

export const TBChatNameWrapper = styled.div`
  font-size: 16px;
  font-weight: 500;
  color: #ffffff;
`;

export const TBOtherDetailsWrapper = styled.div`
  font-size: 12px;
  color: #888888;
`;

export const TBTextContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TBChatImage = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 50%;
`;
