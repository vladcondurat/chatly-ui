import styled from 'styled-components';

export const RPContainer = styled.div`
  display: flex;
  width: 340px;
  flex-direction: column;
  color: white;
  gap: 24px;

  @media (max-width: 600px) {
    width: 100%;
  }
`;

export const RPTitleWrapper = styled.div`
  font-size: 32px;
  font-weight: 300;
`;

export const RPTextWrapper = styled.div`
  font-size: 12px;
  color: white;
`;

export const RPLoginTextWrapper = styled.div`
  font-size: 12px;
  color: #1141fb;

  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

export const RPTextContainer = styled.div`
  display: flex;
  gap: 2px;

  @media (max-width: 380px) {
    flex-direction: column;
  }
`;

export const RPFormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;
