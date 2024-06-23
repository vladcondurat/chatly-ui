import styled, { css } from 'styled-components';

interface ButtonProps {
  $isFull?: boolean;
  $outline?: boolean;
  disabled?: boolean;
}

const getBackgroundColor = ({ disabled, $outline }: ButtonProps) => {
  if (disabled) return '#7a7a7a';
  return $outline ? 'transparent' : '#1141fb';
};

const getColor = ({ disabled, $outline }: ButtonProps) => {
  if (disabled) return '#f0f0f0';
  return $outline ? '#1141fb' : 'white';
};

const getBorder = ({ $outline, disabled }: ButtonProps) => {
  if ($outline) {
    return disabled ? '2px solid #7a7a7a' : '2px solid #1141fb';
  }
  return 'none';
};

const getPadding = ({ $isFull }: ButtonProps) => {
  return $isFull ? '0' : '0 16px';
};

const getWidth = ({ $isFull }: ButtonProps) => {
  return $isFull ? '100%' : 'fit-content';
};

const getCursor = ({ disabled }: ButtonProps) => {
  return disabled ? 'not-allowed' : 'pointer';
};

const hoverStyles = ({ disabled, $outline }: ButtonProps) => {
  if (!disabled) {
    return css`
      &:hover {
        background-color: ${$outline ? '#eef2ff' : '#0d36d9'};
      }
    `;
  }
  return '';
};

export const StyledButton = styled.button<ButtonProps>`
  background-color: ${getBackgroundColor};
  height: 40px;
  color: ${getColor};
  font-size: 16px;
  border: ${getBorder};
  border-radius: 8px;
  padding: ${getPadding};
  width: ${getWidth};
  cursor: ${getCursor};
  ${hoverStyles}
`;
