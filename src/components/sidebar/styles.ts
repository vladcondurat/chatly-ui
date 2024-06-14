import styled from 'styled-components';

export const SBContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding-top: 8px;
  min-width: 50px;
  background: #232733;
  height: 100%;

  @media (max-width: 500px) {
    display: none;
  }
`;

export const SBNavOptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  &:hover {
    cursor: pointer;
  }
`;

export const SBSvg = styled.img`
  width: 24px;
  height: 24px;
`;

export const SBTextWrapper = styled.div`
  font-size: 10px;
  color: #76777a;
`;
