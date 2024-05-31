import { TBChatImage, TBChatNameWrapper, TBContainer, TBLeftContainer, TBOtherDetailsWrapper, TBTextContainer } from './styles';
import chatImg from './assets/Avatar.png';

const ChatCell = () => (
  <TBContainer>
    <TBLeftContainer>
      <TBChatImage src={chatImg} alt="chat-image" />
      <TBTextContainer>
        <TBChatNameWrapper>Chat Name</TBChatNameWrapper>
        <TBOtherDetailsWrapper>Active now</TBOtherDetailsWrapper>
      </TBTextContainer>
    </TBLeftContainer>
  </TBContainer>
);

export default ChatCell;
