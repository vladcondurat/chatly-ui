import InputForm from '../input-form';
import { SubmitHandler, useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { EFWrapper, EFButton, EFInputWrapper } from './styles';
import { useAppDispatch, useAppSelector } from '../../hooks/store-hooks';
import { dataUserSelector } from '../../store/selectors/user-selectors';
import { useEffect } from 'react';
import { fetchUserAsyncAction } from '../../store/actions/user-actions';

const schema = z.object({
  image: z.instanceof(FileList).optional(),
  username: z.string().min(3).max(20),
  email: z.string().email(),
});

type FormFields = z.infer<typeof schema>;

const EditUserForm: React.FC = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const fetchUser = async () => {
      await dispatch(fetchUserAsyncAction());
    };
    fetchUser();
  }, [dispatch]);

  const user = useAppSelector(dataUserSelector);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormFields>({ resolver: zodResolver(schema) });

  useEffect(() => {
    if (user) {
      reset({
        username: user.username,
        email: user.email,
      });
    }
  }, [user, reset]);

  const onSubmit: SubmitHandler<FormFields> = data => {
    console.log(data); // For demonstration purposes, simply log the form data
  };

  return (
    <EFWrapper onSubmit={handleSubmit(onSubmit)}>
      <EFInputWrapper>
        <InputForm {...register('username')} formTitle="Username" error={errors.username?.message} />
        <InputForm {...register('email')} formTitle="Email" error={errors.email?.message} />
        <InputForm {...register('image')} formTitle="Profile Picture" isFile placeholder="Choose a file" />
      </EFInputWrapper>
      <EFButton disabled={isSubmitting} type="submit">
        {isSubmitting ? 'Loading...' : 'Save Changes'}
      </EFButton>
    </EFWrapper>
  );
};

export default EditUserForm;
