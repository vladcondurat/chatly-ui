import { useEffect, useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { AMInputWrapper } from './styles';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../../../hooks/store-hooks';
import {
  isErrorRoomSelector,
  isLoadingRoomSelector,
  selectedRoomSelector,
} from '../../../../store/selectors/room-selectors';
import { addUsersToRoomAsyncAction } from '../../../../store/actions/room-actions';
import { ROUTE__ROOMS } from '../../../../router/constants';
import Modal from '../../../../components/modal/Modal';
import LoadingSpinner from '../../../../components/loading-spinner';
import UserList from '../../../../components/user-list';
import Button from '../../../../components/button';

const schema = z.object({
  userIds: z.array(z.string()).min(1),
});

type FormFields = z.infer<typeof schema>;

const AddUsersModal = ({ onClose }: { onClose: () => void }) => {
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
