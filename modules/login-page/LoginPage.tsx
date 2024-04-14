import { useNavigate } from 'react-router-dom';
import InputForm from '../../src/components/input-form';
import { LPButtonWrapper, LPContainer, LPFormsWrapper, LPRegisterTextWrapper, LPTextContainer, LPTitleWrapper, LPTextWrapper, LPLoginButton } from './styles';

const LoginPage = () => {
  const navigate = useNavigate();

  return (
    <LPContainer>
      <LPTitleWrapper>Welcome</LPTitleWrapper>
      <LPFormsWrapper>
        <InputForm formTitle="Username" />
        <InputForm formTitle="Password" isPassword />
      </LPFormsWrapper>
      <LPButtonWrapper>
        <LPLoginButton onClick={() => navigate('/')}>Log in</LPLoginButton>
        <LPTextContainer>
          <LPTextWrapper>Don't have an account?</LPTextWrapper>
          <LPRegisterTextWrapper onClick={() => navigate('/register')}>Register now</LPRegisterTextWrapper>
        </LPTextContainer>
      </LPButtonWrapper>
    </LPContainer>
  );
};

export default LoginPage;
