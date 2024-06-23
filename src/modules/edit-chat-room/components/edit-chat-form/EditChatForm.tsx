import React, { useEffect, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';

import Button from '@app/components/button';
import InputForm from '@app/components/input-form';
import { useAppDispatch, useAppSelector } from '@app/hooks/store-hooks';
import {
  fetchRoomsAsyncAction,
  fetchSelectedRoomAsyncAction,
  updateRoomAsyncAction,
} from '@app/store/actions/room-actions';
import { selectedRoomSelector } from '@app/store/selectors/room-selectors';
import { isFormDataEmpty } from '@app/utils/isFormDataEmpty';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

import { EFContainer } from './styles';

const schema = z.object({
  roomName: z.string().min(3).max(50),
  imageUrl: z.instanceof(FileList).optional(),
});

type FormFields = z.infer<typeof schema>;

const EditChatForm = () => {
  const dispatch = useAppDispatch();
  const room = useAppSelector(selectedRoomSelector);
  const { roomId } = useParams();
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormFields>({ resolver: zodResolver(schema) });

  const onSubmit: SubmitHandler<FormFields> = async data => {
    const formData = new FormData();
    if (data.roomName && data.roomName !== room.details.roomName) {
      formData.append('roomName', data.roomName);
    }
    if (selectedFile) {
      formData.append('image', selectedFile);
    }
    if (!isFormDataEmpty(formData)) {
      await dispatch(updateRoomAsyncAction({ data: formData, roomId }));
      await dispatch(fetchRoomsAsyncAction());
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setSelectedFile(e.target.files[0]);
    }
  };

  useEffect(() => {
    const fetchRoom = async () => {
      await dispatch(fetchSelectedRoomAsyncAction({ roomId: roomId }));
    };
    fetchRoom();
  }, [dispatch, roomId]);

  useEffect(() => {
    if (room) {
      reset({
        roomName: room.details.roomName,
      });
    }
  }, [room, reset]);

  return (
    <EFContainer onSubmit={handleSubmit(onSubmit)}>
      <InputForm {...register('roomName')} error={errors.roomName?.message} />
      <InputForm isFile placeholder="Choose a file" type="file" onChange={handleFileChange} />
      {errors.imageUrl && <p>{errors.imageUrl.message}</p>}
      <Button
        isFull
        disabled={isSubmitting}
        labelName={isSubmitting ? 'Loading...' : 'Save Changes'}
      />
    </EFContainer>
  );
};

export default EditChatForm;
