import {
  ERButtonsWrapper,
  ERContainer,
  ERGoBackSvg,
  ERTopBarWrapper,
  ERUserListWrapper,
  ERWrapper,
} from './styles';
import { useNavigate, useParams } from 'react-router-dom';
import { useAppDispatch } from '../../hooks/store-hooks';
import EditChatForm from './components/edit-chat-form';
import UserList from '../../components/user-list';
import GoBackSvg from '../../assets/GoBackSvg.svg';
import Button from '../../components/button';
import { ROUTE__ROOMS } from '../../router/constants';
import { useState } from 'react';
import {
  fetchRoomsAsyncAction,
  leaveRoomAsyncAction,
  removeUserFromRoomAsyncAction,
} from '../../store/actions/room-actions';
import { fetchUsersInsideRoomAsyncAction } from '../../store/actions/user-actions';

const EditChatRoom = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { roomId } = useParams();
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

  return (
    <ERContainer>
      <ERWrapper>
        <ERTopBarWrapper>
          <ERGoBackSvg
            src={GoBackSvg}
            onClick={() => navigate(`${ROUTE__ROOMS}/${roomId}`)}
          />
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
    </ERContainer>
  );
};

export default EditChatRoom;
