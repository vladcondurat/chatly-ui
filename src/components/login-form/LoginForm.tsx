import { useEffect } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import InputForm from '@app/components/input-form';
import { useAppDispatch, useAppSelector } from '@app/hooks/store-hooks';
import { ROUTE__ROOMS } from '@app/router/constants';
import { loginAuthActionAsync } from '@app/store/actions/auth-actions';
import {
  isLoggedInAuthSelector,
  isLoginErrorAuthSelector,
  loginErrorAuthSelector,
} from '@app/store/selectors/auth-selectors';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

import { LFButton, LFInputWrapper, LFWrapper } from './styles';

const schema = z.object({
  username: z.string().min(3).max(20),
  password: z
    .string()
    .min(6, { message: 'Password must be at least 6 characters long' })
    .max(100, { message: 'Password must be at most 100 characters long' }),
});

type FormFields = z.infer<typeof schema>;

const LoginForm = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const isLoginError = useAppSelector(isLoginErrorAuthSelector);
  const loginError = useAppSelector(loginErrorAuthSelector);
  const isAuth = useAppSelector(isLoggedInAuthSelector);
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<FormFields>({ resolver: zodResolver(schema) });

  const onSubmit: SubmitHandler<FormFields> = async data => {
    await dispatch(loginAuthActionAsync({ username: data.username, password: data.password }));
  };

  useEffect(() => {
    if (isLoginError) {
      setError('username', { message: loginError });
    }
  }, [isLoginError, loginError, setError]);

  useEffect(() => {
    if (isAuth) {
      navigate(ROUTE__ROOMS);
    }
  }, [isAuth, navigate]);

  return (
    <LFWrapper onSubmit={handleSubmit(onSubmit)}>
      <LFInputWrapper>
        <InputForm
          {...register('username')}
          formTitle="Username"
          error={errors.username?.message}
        />
        <InputForm
          {...register('password')}
          formTitle="Password"
          isPassword
          error={errors.password?.message}
        />
      </LFInputWrapper>
      <LFButton disabled={isSubmitting} type="submit">
        {isSubmitting ? 'Loading...' : 'Log in'}
      </LFButton>
    </LFWrapper>
  );
};

export default LoginForm;
