import InputForm from '../input-form';
import { SubmitHandler, useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { RFWrapper, RFButton, RFInputWrapper } from './styles';

const schema = z
  .object({
    username: z.string().min(3).max(20).optional(),
    email: z.string().email(),
    password: z.string().min(6).max(100),
    confirmPassword: z.string(),
  })
  .refine(data => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ['confirmPassword'],
  });

type FormFields = z.infer<typeof schema>;

const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<FormFields>({ resolver: zodResolver(schema) });

  const onSubmit: SubmitHandler<FormFields> = async data => {
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      console.log(data);
    } catch (error) {
      setError('root', {
        message: 'An error occurred during registration',
      });
    }
  };

  return (
    <RFWrapper onSubmit={handleSubmit(onSubmit)}>
      <RFInputWrapper>
        <InputForm {...register('username')} formTitle="Username" error={errors.username?.message} />
        <InputForm {...register('email')} formTitle="Email" error={errors.email?.message} />
        <InputForm {...register('password')} formTitle="Password" isPassword error={errors.password?.message} />
        <InputForm {...register('confirmPassword')} formTitle="Confirm Password" isPassword error={errors.confirmPassword?.message} />
      </RFInputWrapper>
      <RFButton disabled={isSubmitting} type="submit">
        {isSubmitting ? 'Loading...' : 'Register'}
      </RFButton>
    </RFWrapper>
  );
};

export default RegisterForm;
