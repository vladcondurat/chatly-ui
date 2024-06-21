import { useEffect, useRef } from 'react';
import { CRContainer, CRMsgContainer, CRMsgWrapper } from './styles';
import TopBar from './components/top-bar';
import SentMsg from './components/sent-msg';
import ReceivedMsg from './components/received-msg';
import MsgInput from './components/msg-input';
import { useParams } from 'react-router-dom';
import { selectedRoomSelector } from '../../store/selectors/room-selectors';
import { useAppDispatch, useAppSelector } from '../../hooks/store-hooks';
import { fetchSelectedRoomAsyncAction } from '../../store/actions/room-actions';
import { dataUserSelector } from '../../store/selectors/user-selectors';
import { fetchUserAsyncAction } from '../../store/actions/user-actions';
import {
  dataMessageSelector,
  isErrorMessageSelector,
  isLoadingMessageSelector,
} from '../../store/selectors/message-selectors';

const ChatRoom = () => {
  const dispatch = useAppDispatch();
  const { roomId } = useParams();

  useEffect(() => {
    dispatch(fetchSelectedRoomAsyncAction({ roomId }));
    dispatch(fetchUserAsyncAction());
  }, [dispatch, roomId]);

  const room = useAppSelector(selectedRoomSelector);
  const user = useAppSelector(dataUserSelector);
  const isLoadingMessage = useAppSelector(isLoadingMessageSelector);
  const isErrorMessage = useAppSelector(isErrorMessageSelector);
  const sentMessage = useAppSelector(dataMessageSelector);
  const lastMessageRef = useRef<HTMLDivElement>(null);

  const scrollToLastMessage = () => {
    if (lastMessageRef.current) {
      lastMessageRef.current.scrollIntoView({ behavior: 'auto' });
    }
  };

  useEffect(() => {
    scrollToLastMessage();
  }, [room, sentMessage]);

  useEffect(() => {
    if (!isLoadingMessage && !isErrorMessage && sentMessage) {
      // Temporary solution to reload the page after sending a message
      window.location.reload();
    }
  }, [isLoadingMessage, isErrorMessage, sentMessage]);

  const handleMessageRender = () => {
    return (
      <>
        {room &&
          user &&
          room.messages &&
          room.messages.map(msg =>
            msg.user.id === user.id ? (
              <SentMsg key={msg.id} message={msg} />
            ) : (
              <ReceivedMsg key={msg.id} message={msg} />
            )
          )}
        {isLoadingMessage && sentMessage && (
          <SentMsg message={sentMessage} isLoading />
        )}
        {isErrorMessage && <SentMsg message={sentMessage} isError />}
        <div ref={lastMessageRef} />
      </>
    );
  };

  return (
    <CRContainer>
      {room && (
        <TopBar
          roomName={room.details.roomName}
          imageUrl={room.details.imageUrl}
          roomId={roomId}
        />
      )}
      <CRMsgWrapper>
        <CRMsgContainer>{handleMessageRender()}</CRMsgContainer>
      </CRMsgWrapper>
      <MsgInput roomId={roomId} />
    </CRContainer>
  );
};

export default ChatRoom;
