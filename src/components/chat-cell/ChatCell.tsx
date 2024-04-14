import { CCContainer, CCChatName, CCDetailsWrapper, CCImage, CCLastMsgContainer, CCLastMsgTimeContainer, CCLastMsgTimeWrapper, CCTextWrapper } from './styles';
import avatarImg from './assets/Avatar.png';

const ChatCell = () => (
  <CCContainer>
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

export default ChatCell;
