import { forwardRef, useState, ChangeEvent } from 'react';
import { IFContainer, IFField, IFTextWrapper, IFTitleContainer, IFErrorWrapper, IFFileLabel, IFFileField, IFImagePreview, IFFileContainer, IFPlaceholderCircle } from './styles';

interface InputFormProps extends React.InputHTMLAttributes<HTMLInputElement> {
  formTitle: string;
  placeholder?: string;
  error?: string;
  isPassword?: boolean;
  isFile?: boolean;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const InputForm = forwardRef<HTMLInputElement, InputFormProps>(({ formTitle, placeholder, isPassword, isFile, error, onChange, ...props }, ref) => {
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    } else {
      setImagePreview(null);
    }
  };

  return (
    <IFContainer>
      <IFTitleContainer>
        <IFTextWrapper>{formTitle}</IFTextWrapper>
        {error && <IFErrorWrapper>{error}</IFErrorWrapper>}
      </IFTitleContainer>
      {isFile ? (
        <IFFileContainer>
          <IFPlaceholderCircle>{imagePreview && <IFImagePreview src={imagePreview} alt="Image preview" />}</IFPlaceholderCircle>
          <IFFileLabel>
            {placeholder}
            <IFFileField type="file" ref={ref} onChange={handleFileChange} {...props}></IFFileField>
          </IFFileLabel>
        </IFFileContainer>
      ) : (
        <IFField type={isPassword ? 'password' : 'text'} placeholder={placeholder} ref={ref} {...props} />
      )}
    </IFContainer>
  );
});

export default InputForm;
