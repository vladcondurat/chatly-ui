import InputForm from '../input-form';
import { SubmitHandler, useForm } from 'react-hook-form';
import { z } from 'zod';
import { useEffect } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { LFWrapper, LFButton, LFInputWrapper } from './styles';
import { useAppDispatch, useAppSelector } from '../../hooks/store-hooks';
import { loginAuthActionAsync } from '../../store/actions/auth-actions';
import { isLoggedInAuthSelector, loginErrorAuthSelector } from '../../store/selectors/auth-selectors';
import { useNavigate } from 'react-router-dom';

const schema = z.object({
  username: z.string().min(3).max(20),
  password: z.string().min(6).max(100),
});

type FormFields = z.infer<typeof schema>;

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<FormFields>({ resolver: zodResolver(schema) });

  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const isLoginError = useAppSelector(loginErrorAuthSelector);
  const isAuth = useAppSelector(isLoggedInAuthSelector);

  const onSubmit: SubmitHandler<FormFields> = async data => {
    await dispatch(loginAuthActionAsync({ username: data.username, password: data.password }));
    // setError('username', { message: response.payload as string });
    if (isLoginError) {
      setError('username', { message: 'Invalid username or password' });
    }
  };

  useEffect(() => {
    if (isAuth) {
      navigate('/');
    }
  }, [isAuth, navigate]);

  return (
    <LFWrapper onSubmit={handleSubmit(onSubmit)}>
      <LFInputWrapper>
        <InputForm {...register('username')} formTitle="Username" error={errors.username?.message} />
        <InputForm {...register('password')} formTitle="Password" isPassword error={errors.password?.message} />
      </LFInputWrapper>
      <LFButton disabled={isSubmitting} type="submit">
        {isSubmitting ? 'Loading...' : 'Log in'}
      </LFButton>
    </LFWrapper>
  );
};

export default LoginForm;
