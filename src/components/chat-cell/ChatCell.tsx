import { CCContainer, CCChatName, CCDetailsWrapper, CCImage, CCLastMsgContainer, CCLastMsgTimeContainer, CCLastMsgTimeWrapper, CCTextWrapper } from './styles';
import genericAvatarImage from './assets/generic-avatar.png';
import { useNavigate } from 'react-router-dom';
import IRoomCard from '../../types/room/IRoomCard';
import formatTime from '../../utils/formatTime';

const ChatCell = ({ props }: { props: IRoomCard }) => {
  const navigate = useNavigate();
  const { id, details, lastMessage } = props;

  return (
    <CCContainer onClick={() => navigate(`/${id}`)}>
      <CCDetailsWrapper>
        <CCImage src={genericAvatarImage} />
        <CCTextWrapper>
          <CCChatName>{details.roomName}</CCChatName>
          <CCLastMsgContainer>{lastMessage.content.textContent}</CCLastMsgContainer>
        </CCTextWrapper>
      </CCDetailsWrapper>
      <CCLastMsgTimeWrapper>
        <CCLastMsgTimeContainer>{formatTime(lastMessage.createdAt)}</CCLastMsgTimeContainer>
      </CCLastMsgTimeWrapper>
    </CCContainer>
  );
};

export default ChatCell;
