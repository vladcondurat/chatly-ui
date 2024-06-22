import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ChatLayout from '../layout/chat-layout';
import LoginLayout from '../layout/login-layout';
import ChatRoom from '../modules/chat-room';
import LoginPage from '../modules/login-page';
import RegisterPage from '../modules/register-page';

import {
  ROUTE__EDIT_PROFILE,
  ROUTE__EDIT_ROOM_ID,
  ROUTE__LOGIN,
  ROUTE__PROFILE,
  ROUTE__PRVIACY_POLICY,
  ROUTE__REGISTER,
  ROUTE__ROOMS,
  ROUTE__ROOMS_ID,
} from './constants';
import ProtectedRoutes from './ProtectedRoutes';
import EmptyChatRoom from '../modules/empty-chat-room';
import useScreenWidth from '../hooks/useScreenWidth';
import ChatsBar from '../components/chats-bar';
import ProfileLayout from '../layout/profile-layout';
import EmptyProfile from '../modules/empty-profile';
import EditProfile from '../modules/edit-profile';
import ProfileBar from '../components/profile-bar';
import EditChatRoom from '../modules/edit-chat-room';
import useModalOpen from '../hooks/useModalOpen';
import PrivacyPolicy from '../modules/PrivacyPolicy';

const AppRoutes = (): JSX.Element => {
  const width = useScreenWidth();
  const threshold = 500;

  return (
    <Routes>
      <Route element={<ProtectedRoutes />}>
        <Route element={<ChatLayout />}>
          {width > threshold ? (
            <Route path={ROUTE__ROOMS} element={<EmptyChatRoom />} />
          ) : (
            <Route path={ROUTE__ROOMS} element={<ChatsBar />} />
          )}
          <Route path={ROUTE__ROOMS_ID} element={<ChatRoom />} />
          <Route path={ROUTE__EDIT_ROOM_ID} element={<EditChatRoom />} />
        </Route>
        <Route element={<ProfileLayout />}>
          {width > threshold ? (
            <Route path={ROUTE__PROFILE} element={<EmptyProfile />} />
          ) : (
            <Route path={ROUTE__PROFILE} element={<ProfileBar />} />
          )}
          <Route path={ROUTE__EDIT_PROFILE} element={<EditProfile />} />
          <Route path={ROUTE__PRVIACY_POLICY} element={<PrivacyPolicy />} />
        </Route>
      </Route>
      <Route element={<LoginLayout />}>
        <Route path={ROUTE__LOGIN} element={<LoginPage />} />
        <Route path={ROUTE__REGISTER} element={<RegisterPage />} />
      </Route>
    </Routes>
  );
};
const AppRouter = () => {
  useModalOpen();

  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
};

export default AppRouter;
