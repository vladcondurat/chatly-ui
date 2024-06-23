import { useEffect, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import Button from '@app/components/button';
import LoadingSpinner from '@app/components/loading-spinner';
import Modal from '@app/components/modal/Modal';
import UserList from '@app/components/user-list';
import { useAppDispatch, useAppSelector } from '@app/hooks/store-hooks';
import { ROUTE__ROOMS } from '@app/router/constants';
import { fetchRoomsAsyncAction, postRoomAsyncAction } from '@app/store/actions/room-actions';
import {
  isErrorRoomSelector,
  isLoadingRoomSelector,
  selectedRoomSelector,
} from '@app/store/selectors/room-selectors';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

import { NCInputWrapper } from './styles';

const schema = z.object({
  userIds: z.array(z.string()).min(1),
});

type FormFields = z.infer<typeof schema>;

interface NewChatModalProps {
  onClose: () => void;
}

const NewChatModal = ({ onClose }: NewChatModalProps) => {
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
    await dispatch(fetchRoomsAsyncAction());
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
