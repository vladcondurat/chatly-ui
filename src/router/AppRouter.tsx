import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ChatLayout from '../layout/chat-layout';
import LoginLayout from '../layout/login-layout';
import ChatRoom from '../modules/chat-room';
import LoginPage from '../modules/login-page';
import RegisterPage from '../modules/register-page';

import { ROUTE__LOGIN, ROUTE__PROFILE, ROUTE__REGISTER, ROUTE__ROOMS, ROUTE__ROOMS_ID } from './constants';
import ProtectedRoutes from './ProtectedRoutes';
import EmptyChatRoom from '../modules/empty-chat-room';
import useScreenWidth from '../hooks/useScreenWidth';
import ChatsBar from '../components/chats-bar';
import ProfileLayout from '../layout/settings-layout';

const AppRouter = () => {
  const width = useScreenWidth();
  const threshold = 500;

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<ProtectedRoutes />}>
          <Route element={<ChatLayout />}>
            {width > threshold && <Route path={ROUTE__ROOMS} element={<EmptyChatRoom />} />}
            {width <= threshold && <Route path={ROUTE__ROOMS} element={<ChatsBar />} />}
            <Route path={ROUTE__ROOMS_ID} element={<ChatRoom />} />
          </Route>
          <Route element={<ProfileLayout />}>
            <Route path={ROUTE__PROFILE} element={<div>sal</div>} />
          </Route>
        </Route>
        <Route element={<LoginLayout />}>
          <Route path={ROUTE__LOGIN} element={<LoginPage />} />
          <Route path={ROUTE__REGISTER} element={<RegisterPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
