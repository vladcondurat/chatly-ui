import styled from 'styled-components';

export const SMWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 8px;
`;

export const SMContainer = styled.div`
  display: flex;
  max-width: 480px;
  width: 100%;
  padding: 8px 12px;
  border-radius: 16px 16px 4px 16px;
  background-color: #1566a3;
  gap: 8px;
`;

export const SMContainerWithImg = styled.div`
  display: flex;
  max-width: 300px;
  width: 100%;
  padding: 8px 12px;
  border-radius: 0px 0px 4px 16px;
  background-color: #1566a3;
  gap: 8px;
`;

export const SMContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

export const SMDefaultImgTextContainer = styled.div`
  word-break: break-word;
  overflow-wrap: break-word;
  white-space: pre-wrap;
  display: flex;
  flex-grow: 1;
  color: white;
  font-style: italic;
`;

export const SMTextContainer = styled.div`
  word-break: break-word;
  overflow-wrap: break-word;
  white-space: pre-wrap;
  display: flex;
  flex-grow: 1;
  color: white;
`;

export const SMImgContainer = styled.img`
  width: 300px;
  height: 300px;
  object-fit: cover;
  border-radius: 16px 16px 0px 0px;
`;

export const SMFileDownloadLink = styled.a`
  color: #007bff;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

export const SMFileContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #f8f9fa;
  border: 1px solid #dee2e6;
  border-radius: 5px;
  padding: 10px;
  margin-bottom: 10px;
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
  gap: 8px;

  &:hover .options-wrapper {
    opacity: 1;
    visibility: visible;
  }
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

export const SMOptionsWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 8px;
  align-items: center;
  opacity: 0;
  visibility: hidden;
`;

export const SMOptions = styled.div`
  color: rgba(255, 255, 255, 0.8);
  cursor: pointer;
  font-size: 20px;

  &:hover {
    color: white;
  }
`;
