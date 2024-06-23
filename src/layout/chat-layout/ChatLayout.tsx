import { Outlet } from 'react-router-dom';

import ChatsBar from '@app/components/chats-bar';
import Sidebar from '@app/components/sidebar';

import { CLChatRoomContainer, CLChatsBarContainer, CLContainer } from './styles';

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
