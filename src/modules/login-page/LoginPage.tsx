import { useNavigate } from 'react-router-dom';

import LoginForm from '@app/components/login-form';

import {
  LPContainer,
  LPFormWrapper,
  LPRegisterTextWrapper,
  LPTextContainer,
  LPTextWrapper,
  LPTitleWrapper,
} from './styles';

const LoginPage = () => {
  const navigate = useNavigate();

  return (
    <LPContainer>
      <LPTitleWrapper>Welcome</LPTitleWrapper>
      <LPFormWrapper>
        <LoginForm />
        <LPTextContainer>
          <LPTextWrapper>Don't have an account?</LPTextWrapper>
          <LPRegisterTextWrapper onClick={() => navigate('/register')}>
            Register now
          </LPRegisterTextWrapper>
        </LPTextContainer>
      </LPFormWrapper>
    </LPContainer>
  );
};

export default LoginPage;
