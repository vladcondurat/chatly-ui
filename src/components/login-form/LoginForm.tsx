import InputForm from '../input-form';
import { SubmitHandler, useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { LFWrapper, LFButton, LFInputWrapper } from './styles';

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

  const onSubmit: SubmitHandler<FormFields> = async data => {
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      console.log(data);
    } catch (error) {
      setError('root', {
        message: 'This email is already taken',
      });
    }
  };

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
