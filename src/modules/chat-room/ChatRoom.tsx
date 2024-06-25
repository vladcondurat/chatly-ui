import { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';

import { useAppDispatch, useAppSelector } from '@app/hooks/store-hooks';
import {
  fetchRoomsRealTimeAsyncAction,
  fetchSelectedRoomAsyncAction,
} from '@app/store/actions/room-actions';
import { fetchUserAsyncAction } from '@app/store/actions/user-actions';
import {
  dataMessageSelector,
  isErrorMessageSelector,
  isLoadingMessageSelector,
} from '@app/store/selectors/message-selectors';
import { selectedRoomSelector } from '@app/store/selectors/room-selectors';
import { dataUserSelector } from '@app/store/selectors/user-selectors';
import IMessage from '@app/types/message/IMessage';
import * as signalR from '@microsoft/signalr';

import TopBar from './components/chat-top-bar';
import MsgInput from './components/msg-input';
import ReceivedMsg from './components/received-msg';
import SentMsg from './components/sent-msg';
import { CRContainer, CRMsgContainer, CRMsgWrapper } from './styles';

const ChatRoom = () => {
  const dispatch = useAppDispatch();
  const room = useAppSelector(selectedRoomSelector);
  const user = useAppSelector(dataUserSelector);
  const isLoadingMessage = useAppSelector(isLoadingMessageSelector);
  const isErrorMessage = useAppSelector(isErrorMessageSelector);
  const sentMessage = useAppSelector(dataMessageSelector);
  const { roomId } = useParams();
  const lastMessageRef = useRef<HTMLDivElement>(null);
  const [messageToEdit, setMessageToEdit] = useState<IMessage | null>(null);

  const scrollToLastMessage = () => {
    if (lastMessageRef.current) {
      lastMessageRef.current.scrollIntoView({ behavior: 'auto' });
    }
  };

  useEffect(() => {
    const connection = new signalR.HubConnectionBuilder()
      .withUrl('http://localhost:5003/messageHub')
      .withAutomaticReconnect()
      .build();

    connection.on('ReceiveMessage', message => {
      console.log('Message received:', message);
      dispatch(fetchSelectedRoomAsyncAction({ roomId }));
      dispatch(fetchRoomsRealTimeAsyncAction());
    });

    connection
      .start()
      .then(() => console.log('Connection started'))
      .catch(err => console.error('Connection error: ', err));

    return () => {
      connection.stop();
    };
  }, [dispatch, roomId]);

  useEffect(() => {
    dispatch(fetchSelectedRoomAsyncAction({ roomId }));
    dispatch(fetchUserAsyncAction());
  }, [dispatch, roomId]);

  useEffect(() => {
    scrollToLastMessage();
  }, [room]);

  useEffect(() => {
    if (!isLoadingMessage && !isErrorMessage && sentMessage) {
      setMessageToEdit(null);
    }
  }, [isLoadingMessage, isErrorMessage, sentMessage]);

  const handleMessageRender = () => {
    return (
      <>
        {user &&
          room?.messages &&
          room.messages.map((msg, index) => {
            const isSameUser = index > 0 && room.messages[index - 1].user.id === msg.user.id;
            const isLastFromUser =
              index === room.messages.length - 1 ||
              room.messages[index + 1].user.id !== msg.user.id;

            return msg.user.id === user.id ? (
              <SentMsg key={msg.id} message={msg} onEditMessage={setMessageToEdit} />
            ) : (
              <ReceivedMsg
                key={msg.id}
                message={msg}
                isSameUser={isSameUser}
                isLastFromUser={isLastFromUser}
                isGroup={room.isGroup}
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
      {room && <TopBar details={room.details} id={room.id} isGroup={room.isGroup} />}
      <CRMsgWrapper>
        <CRMsgContainer>{handleMessageRender()}</CRMsgContainer>
      </CRMsgWrapper>
      <MsgInput roomId={roomId} messageToEdit={messageToEdit} setMessageToEdit={setMessageToEdit} />
    </CRContainer>
  );
};

export default ChatRoom;
