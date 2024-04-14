import { CRContainer, CRMsgContainer, CRMsgWrapper } from './styles';
import TopBar from './components/top-bar';
import SentMsg from './components/sent-msg';
import ReceivedMsg from './components/received-msg';
import MsgInput from './components/msg-input';

const ChatRoom = () => {
  return (
    <CRContainer>
      <TopBar />
      <CRMsgWrapper>
        <CRMsgContainer>
          <SentMsg />
          <SentMsg />
          <SentMsg />
          <SentMsg />
          <ReceivedMsg />
          <ReceivedMsg />
          <ReceivedMsg />
          <ReceivedMsg />
        </CRMsgContainer>
      </CRMsgWrapper>
      <MsgInput />
    </CRContainer>
  );
};

export default ChatRoom;
