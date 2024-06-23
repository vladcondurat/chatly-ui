import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import GoBackSvg from '@app/assets/GoBackSvg.svg';
import Button from '@app/components/button';
import UserList from '@app/components/user-list';
import { useAppDispatch, useAppSelector } from '@app/hooks/store-hooks';
import { ROUTE__ROOMS } from '@app/router/constants';
import {
  fetchRoomsAsyncAction,
  fetchSelectedRoomAsyncAction,
  leaveRoomAsyncAction,
  removeUserFromRoomAsyncAction,
} from '@app/store/actions/room-actions';
import { fetchUsersInsideRoomAsyncAction } from '@app/store/actions/user-actions';
import { selectedRoomSelector } from '@app/store/selectors/room-selectors';

import EditChatForm from './components/edit-chat-form';
import {
  ERButtonsWrapper,
  ERContainer,
  ERGoBackSvg,
  ERTopBarWrapper,
  ERUserListWrapper,
  ERWrapper,
} from './styles';

const EditChatRoom = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { roomId } = useParams();
  const room = useAppSelector(selectedRoomSelector);
  const [selectedUserIds, setSelectedUserIds] = useState<string[]>([]);
  const [isAnySelected, setIsAnySelected] = useState(false);

  const handleSelectionChange = (userIds: string[]) => {
    setSelectedUserIds(userIds);

    if (userIds.length > 0) {
      setIsAnySelected(true);
    } else {
      setIsAnySelected(false);
    }
  };

  const handleRemoveUsers = async () => {
    await dispatch(
      removeUserFromRoomAsyncAction({
        userIds: { userIds: selectedUserIds },
        roomId,
      })
    );
    await dispatch(fetchUsersInsideRoomAsyncAction(roomId));
  };

  const handleLeaveRoom = async () => {
    await dispatch(leaveRoomAsyncAction(roomId));
    await dispatch(fetchRoomsAsyncAction());
    navigate(ROUTE__ROOMS);
  };

  useEffect(() => {
    const fetchSelectedRoom = async () => {
      await dispatch(fetchSelectedRoomAsyncAction({ roomId: roomId }));
    };
    fetchSelectedRoom();
  }, [dispatch, roomId]);

  return (
    <ERContainer>
      {room && room.isGroup && (
        <ERWrapper>
          <ERTopBarWrapper>
            <ERGoBackSvg src={GoBackSvg} onClick={() => navigate(`${ROUTE__ROOMS}/${roomId}`)} />
            <div>Edit Chat Room</div>
          </ERTopBarWrapper>
          <EditChatForm />
          <ERUserListWrapper>
            <UserList
              onSelectionChange={handleSelectionChange}
              fetchType="insideRoom"
              roomId={roomId}
            />
            <ERButtonsWrapper>
              <Button
                onClick={handleRemoveUsers}
                disabled={!isAnySelected}
                labelName="Remove"
                isFull
              />
              <Button onClick={handleLeaveRoom} labelName="Leave" isFull />
            </ERButtonsWrapper>
          </ERUserListWrapper>
        </ERWrapper>
      )}
    </ERContainer>
  );
};

export default EditChatRoom;
