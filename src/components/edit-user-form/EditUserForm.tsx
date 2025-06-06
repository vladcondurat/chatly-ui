import React, { useEffect, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

import Button from '@app/components/button';
import InputForm from '@app/components/input-form';
import { useAppDispatch, useAppSelector } from '@app/hooks/store-hooks';
import { fetchUserAsyncAction, updateUserAsyncAction } from '@app/store/actions/user-actions';
import { dataUserSelector } from '@app/store/selectors/user-selectors';
import { isFormDataEmpty } from '@app/utils/isFormDataEmpty';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

import { EFInputWrapper, EFWrapper } from './styles';

const schema = z.object({
  avatarImg: z.instanceof(FileList).optional(),
  username: z.string().min(3).max(20),
  email: z.string().email(),
});

type FormFields = z.infer<typeof schema>;

const EditUserForm = () => {
  const dispatch = useAppDispatch();
  const user = useAppSelector(dataUserSelector);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormFields>({ resolver: zodResolver(schema) });

  useEffect(() => {
    const fetchUser = async () => {
      await dispatch(fetchUserAsyncAction());
    };
    fetchUser();
  }, [dispatch]);

  useEffect(() => {
    if (user) {
      reset({
        username: user.username,
        email: user.email,
      });
    }
  }, [user, reset]);

  const onSubmit: SubmitHandler<FormFields> = async data => {
    const formData = new FormData();
    if (data.username && data.username !== user.username) {
      formData.append('username', data.username);
    }
    if (data.email && data.email !== user.email) {
      formData.append('email', data.email);
    }
    if (selectedFile) {
      formData.append('avatarImg', selectedFile);
    }
    if (!isFormDataEmpty(formData)) {
      await dispatch(updateUserAsyncAction(formData));
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setSelectedFile(e.target.files[0]);
    }
  };

  return (
    <EFWrapper onSubmit={handleSubmit(onSubmit)}>
      <EFInputWrapper>
        <InputForm
          {...register('username')}
          formTitle="Username"
          error={errors.username?.message}
        />
        <InputForm {...register('email')} formTitle="Email" error={errors.email?.message} />
        <InputForm
          formTitle="Profile Picture"
          isFile
          placeholder="Choose a file"
          type="file"
          onChange={handleFileChange}
        />
        {errors.avatarImg && <p>{errors.avatarImg.message}</p>}
        <Button
          isFull
          disabled={isSubmitting}
          labelName={isSubmitting ? 'Loading...' : 'Save Changes'}
        />
      </EFInputWrapper>
    </EFWrapper>
  );
};

export default EditUserForm;
