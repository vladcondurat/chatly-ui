import { StyledButton } from './styles';

interface ButtonProps {
  labelName: string;
  isFull?: boolean;
  disabled?: boolean;
  outline?: boolean;
  onClick?: () => void;
}

const Button = ({ labelName, isFull, disabled, outline, onClick }: ButtonProps) => {
  return (
    <StyledButton $isFull={isFull} disabled={disabled} $outline={outline} onClick={onClick}>
      {labelName}
    </StyledButton>
  );
};

export default Button;
