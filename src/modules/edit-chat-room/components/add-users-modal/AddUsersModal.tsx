import { useEffect, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import Button from '@app/components/button';
import LoadingSpinner from '@app/components/loading-spinner';
import Modal from '@app/components/modal/Modal';
import UserList from '@app/components/user-list';
import { useAppDispatch, useAppSelector } from '@app/hooks/store-hooks';
import { ROUTE__ROOMS } from '@app/router/constants';
import { addUsersToRoomAsyncAction } from '@app/store/actions/room-actions';
import {
  isErrorRoomSelector,
  isLoadingRoomSelector,
  selectedRoomSelector,
} from '@app/store/selectors/room-selectors';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

import { AMInputWrapper } from './styles';

const schema = z.object({
  userIds: z.array(z.string()).min(1),
});

type FormFields = z.infer<typeof schema>;

interface AddUsersModalProps {
  onClose: () => void;
}

const AddUsersModal = ({ onClose }: AddUsersModalProps) => {
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
    await dispatch(
      addUsersToRoomAsyncAction({
        userIds: { userIds: data.userIds },
        roomId: selectedRoom.id,
      })
    );
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
    <Modal onClose={onClose} title="Add Users">
      <AMInputWrapper onSubmit={handleSubmit(onSubmit)}>
        {isLoading ? (
          <LoadingSpinner />
        ) : (
          <UserList
            fetchType="outsideRoom"
            roomId={selectedRoom.id}
            onSelectionChange={handleSelectionChange}
          />
        )}
        <Button
          disabled={isSubmitting && isAnySelected}
          labelName={isSubmitting ? 'Loading...' : 'Add'}
          isFull
        />
      </AMInputWrapper>
    </Modal>
  );
};

export default AddUsersModal;
