import { forwardRef } from 'react';
import { IFContainer, IFField, IFTextWrapper, IFTitleContainer, IFErrorWrapper } from './styles';

interface InputFormProps {
  formTitle: string;
  placeholder?: string;
  error?: string;
  isPassword?: boolean;
}

const InputForm = forwardRef<HTMLInputElement, InputFormProps>(({ formTitle, placeholder, isPassword, error, ...props }, ref) => (
  <IFContainer>
    <IFTitleContainer>
      <IFTextWrapper>{formTitle}</IFTextWrapper>
      {error && <IFErrorWrapper>{error}</IFErrorWrapper>}
    </IFTitleContainer>
    <IFField type={isPassword ? 'password' : 'text'} placeholder={placeholder} ref={ref} {...props} />
  </IFContainer>
));

export default InputForm;
