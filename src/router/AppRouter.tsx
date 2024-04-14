import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ChatLayout from '../layout/chat-layout';
import LoginLayout from '../layout/login-layout';
import ChatRoom from '../../modules/chat-room';
import LoginPage from '../../modules/login-page';
import RegisterPage from '../../modules/register-page';

import { ROUTE__LOGIN, ROUTE__REGISTER } from './constants';

const AppRouter = () => (
  <BrowserRouter>
    <Routes>
      <Route element={<ChatLayout />}>
        <Route index element={<ChatRoom />} />
        <Route path="chatid" element={<ChatRoom />} />
      </Route>
      <Route element={<LoginLayout />}>
        <Route path={ROUTE__LOGIN} element={<LoginPage />} />
        <Route path={ROUTE__REGISTER} element={<RegisterPage />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

export default AppRouter;
