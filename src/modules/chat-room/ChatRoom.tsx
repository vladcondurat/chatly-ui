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

const ChatRoom = () => {
  const dispatch = useAppDispatch();
  const { roomId } = useParams();

  useEffect(() => {
    dispatch(fetchSelectedRoomAsyncAction({ roomId: roomId }));
    dispatch(fetchUserAsyncAction());
  }, [dispatch, roomId]);

  const room = useAppSelector(selectedRoomSelector);
  const user = useAppSelector(dataUserSelector);
  const lastMessageRef = useRef<HTMLDivElement>(null);

  const scrollToLastMessage = () => {
    if (lastMessageRef.current) {
      lastMessageRef.current.scrollIntoView({ behavior: 'auto' });
    }
  };

  useEffect(() => {
    scrollToLastMessage();
  }, [room]);

  return (
    <CRContainer>
      <TopBar />
      <CRMsgWrapper>
        <CRMsgContainer>
          {room &&
            room.messages.length > 0 &&
            room.messages.map(msg => {
              if (msg.user.id === user.id) {
                return <SentMsg key={msg.id} props={msg} />;
              } else {
                return <ReceivedMsg key={msg.id} props={msg} />;
              }
            })}
          <div ref={lastMessageRef} />
        </CRMsgContainer>
      </CRMsgWrapper>
      <MsgInput roomId={roomId} />
    </CRContainer>
  );
};

export default ChatRoom;
