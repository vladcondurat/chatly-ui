import { useEffect, useRef, useState } from 'react';
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
import IMessage from '../../types/message/IMessage';

const ChatRoom = () => {
  const dispatch = useAppDispatch();
  const { roomId } = useParams();
  const [messageToEdit, setMessageToEdit] = useState<IMessage | null>(null);

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
      setMessageToEdit(null);
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
          room.messages.map((msg, index) => {
            const isSameUser = index > 0 && room.messages[index - 1].user.id === msg.user.id;
            const isLastFromUser =
              index === room.messages.length - 1 ||
              room.messages[index + 1].user.id !== msg.user.id;

            return msg.user.id === user.id ? (
              <SentMsg
                key={msg.id}
                message={msg}
                roomId={roomId}
                onEditMessage={setMessageToEdit}
              />
            ) : (
              <ReceivedMsg
                key={msg.id}
                message={msg}
                isSameUser={isSameUser}
                isLastFromUser={isLastFromUser}
              />
            );
          })}
        {isLoadingMessage && !messageToEdit && sentMessage && (
          <SentMsg message={sentMessage} isLoading />
        )}
        {isErrorMessage && <SentMsg message={sentMessage} isError />}
        <div ref={lastMessageRef} />
      </>
    );
  };

  return (
    <CRContainer>
      {room && <TopBar room={room} />}
      <CRMsgWrapper>
        <CRMsgContainer>{handleMessageRender()}</CRMsgContainer>
      </CRMsgWrapper>
      <MsgInput roomId={roomId} messageToEdit={messageToEdit} setMessageToEdit={setMessageToEdit} />
    </CRContainer>
  );
};

export default ChatRoom;
