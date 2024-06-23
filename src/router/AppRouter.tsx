import { BrowserRouter, Route, Routes } from 'react-router-dom';

import ChatsBar from '@app/components/chats-bar';
import ProfileBar from '@app/components/profile-bar';
import useModalOpen from '@app/hooks/useModalOpen';
import useScreenWidth from '@app/hooks/useScreenWidth';
import ChatLayout from '@app/layout/chat-layout';
import LoginLayout from '@app/layout/login-layout';
import ProfileLayout from '@app/layout/profile-layout';
import PrivacyPolicy from '@app/modules/PrivacyPolicy';
import ChatRoom from '@app/modules/chat-room';
import EditChatRoom from '@app/modules/edit-chat-room';
import EditProfile from '@app/modules/edit-profile';
import EmptyChatRoom from '@app/modules/empty-chat-room';
import EmptyProfile from '@app/modules/empty-profile';
import LoginPage from '@app/modules/login-page';
import RegisterPage from '@app/modules/register-page';

import ProtectedRoutes from './ProtectedRoutes';
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
