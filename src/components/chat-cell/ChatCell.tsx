import { useNavigate } from 'react-router-dom';

import { useAppSelector } from '@app/hooks/store-hooks';
import { ROUTE__ROOMS } from '@app/router/constants';
import { selectedRoomSelector } from '@app/store/selectors/room-selectors';
import IRoomCard from '@app/types/room/IRoomCard';
import formatTime from '@app/utils/formatTime';

import {
  CCChatName,
  CCContainer,
  CCImage,
  CCLastMsgContainer,
  CCLastMsgTimeContainer,
  CCLastMsgTimeWrapper,
  CCTextWrapper,
} from './styles';

const ChatCell = ({ id, details, lastMessage }: IRoomCard) => {
  const navigate = useNavigate();
  const selectedRoom = useAppSelector(selectedRoomSelector);
  const isRoomSelected = selectedRoom ? id === selectedRoom.id : false;

  const handleLastMessage = () => {
    if (lastMessage.content.textContent) {
      return <CCLastMsgContainer>{lastMessage.content.textContent}</CCLastMsgContainer>;
    }
    if (lastMessage.content.attachedImageUrl) {
      return <CCLastMsgContainer>Image</CCLastMsgContainer>;
    }
    return <CCLastMsgContainer>New group chat</CCLastMsgContainer>;
  };

  return (
    <CCContainer onClick={() => navigate(`${ROUTE__ROOMS}/${id}`)} $isSelected={isRoomSelected}>
      <CCImage src={details.imageUrl} />
      <CCTextWrapper>
        <CCChatName>{details.roomName}</CCChatName>
        {handleLastMessage()}
      </CCTextWrapper>
      <CCLastMsgTimeWrapper>
        <CCLastMsgTimeContainer>{formatTime(lastMessage.createdAt)}</CCLastMsgTimeContainer>
      </CCLastMsgTimeWrapper>
    </CCContainer>
  );
};

export default ChatCell;
