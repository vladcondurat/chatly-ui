import styled from 'styled-components';

export const PTBContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: fit-content;
  border-radius: 4px;
  gap: 12px;
  user-select: none;
`;

export const PTBImage = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 50%;

  @media (max-width: 800px) and (min-width: 501px) {
    width: 40px;
    height: 40px;
  }
`;

export const PTBTextWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  overflow: hidden;

  @media (max-width: 800px) and (min-width: 501px) {
    display: none;
  }
`;

export const PTBUsername = styled.div`
  font-size: 16px;
  height: fit-content;
  font-weight: 600;
  color: white;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const PTBEmail = styled.div`
  font-size: 14px;
  padding-top: 2px;
  height: fit-content;
  color: #838383;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const PTBModifyButtonWrapper = styled.div`
  display: flex;
  padding: 8px;
  border-radius: 100%;
  background-color: #0f80d7;
  justify-content: center;
  align-items: center;

  &:hover {
    cursor: pointer;
    background-color: #085088;
  }
`;

export const PTBModifyButton = styled.img`
  width: 16px;
  height: 16px;
`;
