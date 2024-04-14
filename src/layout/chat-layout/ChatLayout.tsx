import { Outlet } from 'react-router-dom';
import { CLContainer, CLChatRoomContainer } from './styles';
import Sidebar from '../../components/sidebar';
import ChatsBar from '../../components/chats-bar';

const Layout = () => (
  <CLContainer>
    <Sidebar />
    <ChatsBar />
    <CLChatRoomContainer>
      <Outlet />
    </CLChatRoomContainer>
  </CLContainer>
);

export default Layout;
