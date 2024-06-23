import { useEffect } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import InputForm from '@app/components/input-form';
import { useAppDispatch, useAppSelector } from '@app/hooks/store-hooks';
import { registerActionAsync, resetAuthDataActionAsync } from '@app/store/actions/auth-actions';
import {
  isLoadingAuthSelector,
  isRegisteredAuthSelector,
  registerErrorAuthSelector,
} from '@app/store/selectors/auth-selectors';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

import { RFButton, RFInputWrapper, RFWrapper } from './styles';

const passwordSchema = z
  .string()
  .min(6)
  .max(100)
  .refine(value => /[A-Z]/.test(value), {
    message: 'Password must contain at least one capital letter',
  })
  .refine(value => /[!@#$%^&*()_+=[{\]};:<>|./?,-]/.test(value), {
    message: 'Password must contain at least one special character',
  });

const schema = z
  .object({
    username: z.string().min(3).max(20).optional(),
    email: z.string().email(),
    password: passwordSchema,
    confirmPassword: z.string(),
  })
  .refine(data => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ['confirmPassword'],
  });

type FormFields = z.infer<typeof schema>;

const RegisterForm = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const isRegistered = useAppSelector(isRegisteredAuthSelector);
  const registerError = useAppSelector(registerErrorAuthSelector);
  const isLoading = useAppSelector(isLoadingAuthSelector);
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<FormFields>({ resolver: zodResolver(schema) });

  const onSubmit: SubmitHandler<FormFields> = async data => {
    await dispatch(
      registerActionAsync({
        username: data.username,
        email: data.email,
        password: data.confirmPassword,
      })
    );
  };

  useEffect(() => {
    if (registerError) {
      setError('username', { message: registerError });
    }
  }, [registerError, setError]);

  useEffect(() => {
    const resetAuthData = async () => {
      await dispatch(resetAuthDataActionAsync());
    };

    if (isRegistered) {
      resetAuthData();
      navigate('/login');
    }
  }, [isRegistered, dispatch, navigate]);

  return (
    <RFWrapper onSubmit={handleSubmit(onSubmit)}>
      <RFInputWrapper>
        <InputForm
          {...register('username')}
          formTitle="Username"
          error={errors.username?.message}
        />
        <InputForm {...register('email')} formTitle="Email" error={errors.email?.message} />
        <InputForm
          {...register('password')}
          formTitle="Password"
          isPassword
          error={errors.password?.message}
        />
        <InputForm
          {...register('confirmPassword')}
          formTitle="Confirm Password"
          isPassword
          error={errors.confirmPassword?.message}
        />
      </RFInputWrapper>
      <RFButton disabled={isSubmitting} type="submit">
        {isLoading ? 'Loading...' : 'Register'}
      </RFButton>
    </RFWrapper>
  );
};

export default RegisterForm;
