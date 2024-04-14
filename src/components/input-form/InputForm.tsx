import { IFContainer, IFField, IFTextWrapper } from './styles';

interface InputFormProps {
  formTitle: string;
  placeholder?: string;
  isPassword?: boolean;
}

const InputForm = ({ formTitle, placeholder, isPassword }: InputFormProps) => (
  <IFContainer>
    <IFTextWrapper>{formTitle}</IFTextWrapper>
    {isPassword ? <IFField type="password" placeholder={placeholder} /> : <IFField type="text" placeholder={placeholder} />}
  </IFContainer>
);

export default InputForm;
