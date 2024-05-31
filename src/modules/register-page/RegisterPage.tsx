import { useNavigate } from 'react-router-dom';
import { RPContainer, RPTitleWrapper, RPFormWrapper, RPLoginTextWrapper, RPTextContainer, RPTextWrapper } from './styles';
import RegisterForm from '../../components/register-form';

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
