import styled from 'styled-components';

export const MNContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: #232733;
  padding: 12px 0;
  position: fixed;
  bottom: 0;
  width: 100%;
  z-index: 1000;
  border-top: 1px solid rgba(255, 255, 255, 0.1);

  @media (min-width: 500px) {
    display: none;
  }
`;

export const MNNavOptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  &:hover {
    cursor: pointer;
  }
`;

export const MNSvg = styled.img`
  width: 24px;
  height: 24px;
`;

export const MNTextWrapper = styled.div`
  font-size: 8px;
  color: #76777a;
`;
