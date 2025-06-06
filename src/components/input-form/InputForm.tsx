import { ChangeEvent, forwardRef, useState } from 'react';

import {
  IFContainer,
  IFErrorWrapper,
  IFField,
  IFFileContainer,
  IFFileField,
  IFFileLabel,
  IFImagePreview,
  IFPlaceholderCircle,
  IFTextWrapper,
  IFTitleContainer,
} from './styles';

interface InputFormProps extends React.InputHTMLAttributes<HTMLInputElement> {
  formTitle?: string;
  placeholder?: string;
  error?: string;
  isPassword?: boolean;
  isFile?: boolean;
}

const InputForm = forwardRef<HTMLInputElement, InputFormProps>(
  ({ formTitle, placeholder, isPassword, isFile, error, onChange, ...props }, ref) => {
    const [imagePreview, setImagePreview] = useState<string | null>(null);

    const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
      if (onChange) {
        onChange(e);
      }

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
        {formTitle && (
          <IFTitleContainer>
            <IFTextWrapper>{formTitle}</IFTextWrapper>
            {error && <IFErrorWrapper>{error}</IFErrorWrapper>}
          </IFTitleContainer>
        )}
        {isFile ? (
          <IFFileContainer>
            <IFPlaceholderCircle>
              {imagePreview && <IFImagePreview src={imagePreview} alt="Image preview" />}
            </IFPlaceholderCircle>
            <IFFileLabel>
              {placeholder}
              <IFFileField
                type="file"
                ref={ref}
                onChange={handleFileChange}
                {...props}
              ></IFFileField>
            </IFFileLabel>
          </IFFileContainer>
        ) : (
          <IFField
            type={isPassword ? 'password' : 'text'}
            placeholder={placeholder}
            ref={ref}
            {...props}
          />
        )}
      </IFContainer>
    );
  }
);

export default InputForm;
