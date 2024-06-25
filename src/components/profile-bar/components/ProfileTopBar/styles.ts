import styled from 'styled-components';

export const PTBContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: fit-content;
  user-select: none;
  gap: 8px;
`;

export const PTBImage = styled.img`
  width: 60px;
  height: 60px;
  object-fit: cover;
  border-radius: 50%;

  @media (max-width: 800px) and (min-width: 501px) {
    width: 40px;
    height: 40px;
  }
`;

export const PTBContentWrapper = styled.div`
  display: flex;
  align-items: center;
  width: calc(100vw - 68px);
  gap: 12px;
  overflow: hidden;
`;

export const PTBTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;

  @media (max-width: 800px) and (min-width: 501px) {
    display: none;
  }
`;

export const PTBUsername = styled.div`
  font-size: 16px;
  font-weight: 600;
  color: white;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const PTBEmail = styled.div`
  font-size: 14px;
  padding-top: 2px;
  height: fit-content;
  color: #838383;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const PTBModifyButtonWrapper = styled.div`
  display: flex;
  padding: 8px;
  border-radius: 50%;
  background-color: #0f80d7;
  justify-content: center;
  align-items: center;

  &:hover {
    cursor: pointer;
    background-color: #085088;
  }
`;

export const PTBModifyButton = styled.div`
  width: 16px;
  height: 16px;
`;
