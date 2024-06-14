import { Outlet } from 'react-router-dom';
import { CLContainer, CLChatRoomContainer, CLChatsBarContainer } from './styles';
import Sidebar from '../../components/sidebar';
import ChatsBar from '../../components/chats-bar';

const ChatLayout = () => {
  return (
    <CLContainer>
      <Sidebar />
      <CLChatsBarContainer>
        <ChatsBar />
      </CLChatsBarContainer>
      <CLChatRoomContainer>
        <Outlet />
      </CLChatRoomContainer>
    </CLContainer>
  );
};

export default ChatLayout;
