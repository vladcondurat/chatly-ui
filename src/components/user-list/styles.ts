import styled from 'styled-components';

export const ULContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 12px 0;
  height: 100%;
  max-height: 420px;
  overflow-y: auto;

  ::-webkit-scrollbar {
    width: 1px;
  }

  ::-webkit-scrollbar-track {
    background: transparent;
  }

  ::-webkit-scrollbar-thumb {
    background: #979aa0;
    border-radius: 4px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
`;

export const ULCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-right: 2px;
  overflow-y: auto;
  gap: 8px;
`;

export const ULErrorContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  color: gray;
`;
