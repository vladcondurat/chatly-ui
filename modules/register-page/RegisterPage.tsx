import { useNavigate } from 'react-router-dom';
import InputForm from '../../src/components/input-form';
import { RPContainer, RPTitleWrapper, RPFormsWrapper, RPRegisterButton, RPButtonWrapper, RPLoginTextWrapper, RPTextContainer, RPTextWrapper } from './styles';

const RegisterPage = () => {
  const navigate = useNavigate();

  return (
    <RPContainer>
      <RPTitleWrapper>Register Account</RPTitleWrapper>
      <RPFormsWrapper>
        <InputForm formTitle="Username" />
        <InputForm formTitle="Email" />
        <InputForm formTitle="Password" isPassword />
        <InputForm formTitle="Confirm Password" isPassword />
      </RPFormsWrapper>
      <RPButtonWrapper>
        <RPRegisterButton onClick={() => navigate('/login')}>Register</RPRegisterButton>
        <RPTextContainer>
          <RPTextWrapper>Already have an account?</RPTextWrapper>
          <RPLoginTextWrapper onClick={() => navigate('/login')}>Login now</RPLoginTextWrapper>
        </RPTextContainer>
      </RPButtonWrapper>
    </RPContainer>
  );
};

export default RegisterPage;
