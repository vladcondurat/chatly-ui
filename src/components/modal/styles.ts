import styled from 'styled-components';

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const ModalContent = styled.div`
  background: linear-gradient(148deg, rgba(30, 32, 36, 1) 40%, rgba(26, 32, 51, 1) 100%);
  color: white;
  padding: 32px;
  border-radius: 8px;
  max-width: 90%;
  width: 500px;

  @media (max-width: 500px) {
    width: 90%;
    padding: 15px;
  }
`;

export const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 20px;
`;

export const CloseButton = styled.button`
  background: none;
  border: none;
  font-size: 16px;
  color: white;
  text-decoration: underline;
  cursor: pointer;
`;
