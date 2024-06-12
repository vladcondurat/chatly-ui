import styled from 'styled-components';

export const IFContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`;

export const IFTitleContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  padding-left: 2px;
`;

export const IFErrorWrapper = styled.div`
  color: red;
  font-size: 12px;
`;

export const IFTextWrapper = styled.div`
  font-size: 12px;
  color: white;
`;

export const IFField = styled.input`
  width: 100%;
  height: 40px;
  border-radius: 8px;
  font-size: 16px;
  color: white;
  border: none;
  padding: 0 8px 0 8px;
  outline: none;
  background: rgba(255, 255, 255, 0.05);
`;
