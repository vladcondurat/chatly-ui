import { useNavigate } from 'react-router-dom';
import { LPFormWrapper, LPContainer, LPRegisterTextWrapper, LPTextContainer, LPTitleWrapper, LPTextWrapper } from './styles';
import LoginForm from '../../components/login-form';

const LoginPage = () => {
  const navigate = useNavigate();

  return (
    <LPContainer>
      <LPTitleWrapper>Welcome</LPTitleWrapper>
      <LPFormWrapper>
        <LoginForm />
        <LPTextContainer>
          <LPTextWrapper>Don't have an account?</LPTextWrapper>
          <LPRegisterTextWrapper onClick={() => navigate('/register')}>Register now</LPRegisterTextWrapper>
        </LPTextContainer>
      </LPFormWrapper>
    </LPContainer>
  );
};

export default LoginPage;
