import styled from 'styled-components';

export const UCContainer = styled.div<{ selected: boolean }>`
  padding: 8px;
  border: 1px solid ${({ selected }) => (selected ? '#1141fb' : 'rgba(255, 255, 255, 0.1)')};
  border-radius: 8px;
  display: flex;
  color: #ffffff;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
`;

export const UCUsername = styled.div`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const UCAvatarImg = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
`;

export const UCDetailsWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const UCCheckbox = styled.input`
  background-color: rgba(255, 255, 255, 0.1);
`;
