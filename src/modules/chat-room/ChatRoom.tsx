import React, { useEffect, useRef } from 'react';
import { CRContainer, CRMsgContainer, CRMsgWrapper } from './styles';
import TopBar from './components/top-bar';
import SentMsg from './components/sent-msg';
import ReceivedMsg from './components/received-msg';
import MsgInput from './components/msg-input';
// import { useParams } from 'react-router-dom';

const ChatRoom: React.FC = () => {
  // const { chatId } = useParams();
  const lastMessageRef = useRef<HTMLDivElement>(null);

  const scrollToLastMessage = () => {
    if (lastMessageRef.current) {
      lastMessageRef.current.scrollIntoView({ behavior: 'auto' });
    }
  };

  useEffect(() => {
    scrollToLastMessage();
  }, []);

  return (
    <CRContainer>
      {/* {chatId ? <div>Chat ID: {chatId}</div> : <p>No Chat ID provided</p>} */}
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
          <div ref={lastMessageRef} />
        </CRMsgContainer>
      </CRMsgWrapper>
      <MsgInput />
    </CRContainer>
  );
};

export default ChatRoom;
