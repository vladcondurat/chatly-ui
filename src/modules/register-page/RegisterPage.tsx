import { useNavigate } from 'react-router-dom';

import RegisterForm from '@app/components/register-form';

import {
  RPContainer,
  RPFormWrapper,
  RPLoginTextWrapper,
  RPTextContainer,
  RPTextWrapper,
  RPTitleWrapper,
} from './styles';

const RegisterPage = () => {
  const navigate = useNavigate();

  return (
    <RPContainer>
      <RPTitleWrapper>Register Account</RPTitleWrapper>
      <RPFormWrapper>
        <RegisterForm />
        <RPTextContainer>
          <RPTextWrapper>Already have an account?</RPTextWrapper>
          <RPLoginTextWrapper onClick={() => navigate('/login')}>Login now</RPLoginTextWrapper>
        </RPTextContainer>
      </RPFormWrapper>
    </RPContainer>
  );
};

export default RegisterPage;
