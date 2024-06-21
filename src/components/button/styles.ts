import styled from 'styled-components';

export const StyledButton = styled.button<{
  $isFull?: boolean;
  $outline?: boolean;
}>`
  background-color: ${({ disabled, $outline }) =>
    disabled ? '#7a7a7a' : $outline ? 'transparent' : '#1141fb'};
  height: 40px;
  color: ${({ disabled, $outline }) =>
    disabled ? '#f0f0f0' : $outline ? '#1141fb' : 'white'};
  font-size: 16px;
  border: ${({ $outline, disabled }) =>
    $outline ? (disabled ? '2px solid #7a7a7a' : '2px solid #1141fb') : 'none'};
  border-radius: 8px;
  padding: ${({ $isFull }) => ($isFull ? '0' : '0 16px')};
  width: ${({ $isFull }) => ($isFull ? '100%' : 'fit-content')};
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};

  &:hover {
    background-color: ${({ disabled, $outline }) =>
      !disabled && ($outline ? '#eef2ff' : '#0d36d9')};
  }
`;
