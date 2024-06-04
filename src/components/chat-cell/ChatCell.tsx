import { CCContainer, CCChatName, CCDetailsWrapper, CCImage, CCLastMsgContainer, CCLastMsgTimeContainer, CCLastMsgTimeWrapper, CCTextWrapper } from './styles';
import avatarImg from './assets/Avatar.png';
import { useNavigate } from 'react-router-dom';

const ChatCell = ({ id }: { id: string }) => {
  const navigate = useNavigate();

  return (
    <CCContainer onClick={() => navigate(`/rooms/${id}`)}>
      <CCDetailsWrapper>
        <CCImage src={avatarImg} />
        <CCTextWrapper>
          <CCChatName>Sweetie</CCChatName>
          <CCLastMsgContainer>I love you so much!</CCLastMsgContainer>
        </CCTextWrapper>
      </CCDetailsWrapper>
      <CCLastMsgTimeWrapper>
        <CCLastMsgTimeContainer>8:32 PM</CCLastMsgTimeContainer>
      </CCLastMsgTimeWrapper>
    </CCContainer>
  );
};

export default ChatCell;
