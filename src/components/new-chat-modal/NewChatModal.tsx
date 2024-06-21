import { useEffect, useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import Modal from '../modal/Modal';
import UserList from '../user-list';
import Button from '../button';
import { NCInputWrapper } from './styles';
import { useAppDispatch, useAppSelector } from '../../hooks/store-hooks';
import { postRoomAsyncAction } from '../../store/actions/room-actions';
import {
  isErrorRoomSelector,
  isLoadingRoomSelector,
  selectedRoomSelector,
} from '../../store/selectors/room-selectors';
import { useNavigate } from 'react-router-dom';
import LoadingSpinner from '../loading-spinner';
import { ROUTE__ROOMS } from '../../router/constants';

const schema = z.object({
  userIds: z.array(z.string()).min(1),
});

type FormFields = z.infer<typeof schema>;

const NewChatModal = ({ onClose }: { onClose: () => void }) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const isError = useAppSelector(isErrorRoomSelector);
  const selectedRoom = useAppSelector(selectedRoomSelector);
  const isLoading = useAppSelector(isLoadingRoomSelector);
  const [isAnySelected, setIsAnySelected] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const {
    handleSubmit,
    setValue,
    watch,
    formState: { isSubmitting },
    reset,
  } = useForm<FormFields>({
    resolver: zodResolver(schema),
  });

  const selectedUserIds = watch('userIds', []);

  const handleSelectionChange = (userIds: string[]) => {
    if (JSON.stringify(userIds) !== JSON.stringify(selectedUserIds)) {
      setValue('userIds', userIds);
    }
    if (userIds.length > 0) {
      setIsAnySelected(true);
    }
  };

  const onSubmit: SubmitHandler<FormFields> = async data => {
    await dispatch(postRoomAsyncAction({ userIds: data.userIds }));
    setIsSubmitted(true);
  };

  useEffect(() => {
    reset({ userIds: [] });
  }, [reset]);

  useEffect(() => {
    if (isSubmitted && selectedRoom && !isError) {
      onClose();
      navigate(`${ROUTE__ROOMS}/${selectedRoom.id}`);
    }
  }, [isSubmitted, selectedRoom, isError, navigate, onClose]);

  return (
    <Modal onClose={onClose} title="New Chat">
      <NCInputWrapper onSubmit={handleSubmit(onSubmit)}>
        {isLoading ? (
          <LoadingSpinner />
        ) : (
          <UserList fetchType="all" onSelectionChange={handleSelectionChange} />
        )}
        <Button
          disabled={isSubmitting && isAnySelected}
          labelName={isSubmitting ? 'Loading...' : 'Create Room'}
          isFull
        />
      </NCInputWrapper>
    </Modal>
  );
};

export default NewChatModal;
