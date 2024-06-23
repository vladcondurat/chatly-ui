import { ReactNode } from 'react';

import { CloseButton, ModalContent, ModalHeader, ModalOverlay } from './styles';

interface ModalProps {
  title: string;
  children: ReactNode;
  onClose: () => void;
}

const Modal = ({ title, children, onClose }: ModalProps) => {
  return (
    <ModalOverlay onClick={onClose}>
      <ModalContent onClick={e => e.stopPropagation()}>
        <ModalHeader>
          <h2>{title}</h2>
          <CloseButton onClick={onClose}>close</CloseButton>
        </ModalHeader>
        {children}
      </ModalContent>
    </ModalOverlay>
  );
};

export default Modal;
