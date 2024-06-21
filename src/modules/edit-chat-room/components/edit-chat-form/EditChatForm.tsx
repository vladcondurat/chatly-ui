import React, { useEffect, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useAppDispatch, useAppSelector } from '../../../../hooks/store-hooks';
import {
  fetchRoomsAsyncAction,
  fetchSelectedRoomAsyncAction,
  updateRoomAsyncAction,
} from '../../../../store/actions/room-actions';
import { useParams } from 'react-router-dom';
import { selectedRoomSelector } from '../../../../store/selectors/room-selectors';
import InputForm from '../../../../components/input-form';
import Button from '../../../../components/button';
import { EFContainer } from './styles';
import { isFormDataEmpty } from '../../../../utils/isFormDataEmpty';

const schema = z.object({
  roomName: z.string().min(3).max(50),
  imageUrl: z.instanceof(FileList).optional(),
});

type FormFields = z.infer<typeof schema>;

const EditChatForm: React.FC = () => {
  const dispatch = useAppDispatch();
  const { roomId } = useParams();
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  useEffect(() => {
    const fetchRoom = async () => {
      await dispatch(fetchSelectedRoomAsyncAction({ roomId: roomId }));
    };
    fetchRoom();
  }, [dispatch, roomId]);

  const room = useAppSelector(selectedRoomSelector);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormFields>({ resolver: zodResolver(schema) });

  useEffect(() => {
    if (room) {
      reset({
        roomName: room.details.roomName,
      });
    }
  }, [room, reset]);

  const onSubmit: SubmitHandler<FormFields> = async data => {
    const formData = new FormData();
    if (data.roomName && data.roomName !== room.details.roomName) {
      formData.append('roomName', data.roomName);
    }
    if (selectedFile) {
      formData.append('imageUrl', selectedFile);
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

  return (
    <EFContainer onSubmit={handleSubmit(onSubmit)}>
      <InputForm {...register('roomName')} error={errors.roomName?.message} />
      <InputForm
        isFile
        placeholder="Choose a file"
        type="file"
        onChange={handleFileChange}
      />
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
