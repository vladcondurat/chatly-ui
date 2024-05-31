import { CRContainer, CRMsgContainer, CRMsgWrapper } from './styles';
import TopBar from './components/top-bar';
import SentMsg from './components/sent-msg';
import ReceivedMsg from './components/received-msg';
import MsgInput from './components/msg-input';
import { useParams } from 'react-router-dom';

const ChatRoom = () => {
  const { chatId } = useParams();
  return (
    <CRContainer>
      {chatId ? <div>Chat ID: {chatId}</div> : <p>No Chat ID provided</p>}
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
