import styled from 'styled-components';

export const SMWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 8px;
`;

export const SMContainer = styled.div`
  display: flex;
  max-width: 480px;
  width: fit-content;
  padding: 8px 12px 8px 12px;
  border-radius: 14px 14px 4px 14px;
  background-color: #1566a3;
  gap: 8px;
`;

export const SMTextContainer = styled.div`
  word-break: break-word;
  overflow-wrap: break-word;
  white-space: pre-wrap;
  display: flex;
  flex-grow: 1;
  color: white;
`;

export const SMMsgTime = styled.div`
  display: flex;
  align-items: flex-end;
  min-width: 20px;
  padding-bottom: 2px;
  font-size: 12px;
  color: #b7d9f3;
`;

export const SMTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const SMLoading = styled.div`
  padding-left: 12px;
  font-size: 12px;
  color: #a1aab3;
`;

export const SMError = styled.div`
  padding-left: 12px;
  font-size: 12px;
  color: red;
`;
