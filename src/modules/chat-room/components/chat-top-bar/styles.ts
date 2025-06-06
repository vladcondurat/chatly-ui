import styled from 'styled-components';

export const TBContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 64px;
  gap: 12px;
  padding: 0 12px 0 12px;
  border-bottom: 1px solid #2e333a;
  z-index: 2;
`;

export const TBLeftContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  gap: 12px;
  overflow: hidden;
`;

export const TBChatNameWrapper = styled.div`
  font-size: 16px;
  font-weight: 500;
  color: #ffffff;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const TBOtherDetailsWrapper = styled.div`
  font-size: 12px;
  color: #888888;
`;

export const TBTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  width: 0;
  flex-grow: 1;
  text-overflow: ellipsis;
  @media (max-width: 320px) {
    display: none;
  }
`;

export const TBBackSvg = styled.img`
  width: 20px;
  height: 20px;

  @media (min-width: 500px) {
    display: none;
  }
`;

export const TBChatImage = styled.img`
  min-width: 48px;
  height: 48px;
  border-radius: 50%;
  object-fit: cover;
`;

export const TBOptionSvg = styled.img`
  width: 20px;
  height: 20px;
`;

export const TBOptionSvgWrapper = styled.div`
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  padding: 8px;
`;
export const TBOptionsContainer = styled.div`
  display: flex;
  width: fit-content;
  gap: 16px;
`;
