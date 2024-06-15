import styled from 'styled-components';

export const SBSvgWrapper = styled.img`
  height: 12px;
  width: 12px;
`;

export const SBWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 8px;
  align-items: center;
  padding: 0 8px 0 8px;
  background-color: #2b2d33;
  border-radius: 4px;
  border-bottom: 1px solid #979aa0;
  color: white;
`;

export const SBInput = styled.input`
  display: flex;
  justify-content: center;
  border: none;
  width: 100%;
  background-color: transparent;
  color: white;
  height: 28px;

  &:focus {
    outline: none;
    border-color: #fff;
  }

  &::placeholder {
    color: #979aa0;
    font-size: 12px;
  }
`;
