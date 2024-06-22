import {
  CCContainer,
  CCChatName,
  CCImage,
  CCLastMsgContainer,
  CCLastMsgTimeContainer,
  CCLastMsgTimeWrapper,
  CCTextWrapper,
} from './styles';
import { useNavigate } from 'react-router-dom';
import IRoomCard from '../../types/room/IRoomCard';
import formatTime from '../../utils/formatTime';
import { useAppSelector } from '../../hooks/store-hooks';
import { selectedRoomSelector } from '../../store/selectors/room-selectors';
import { ROUTE__ROOMS } from '../../router/constants';

const ChatCell = ({ props }: { props: IRoomCard }) => {
  const navigate = useNavigate();
  const selectedRoom = useAppSelector(selectedRoomSelector);
  const { id, details, lastMessage } = props;
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
