import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ChatLayout from '../layout/chat-layout';
import LoginLayout from '../layout/login-layout';
import ChatRoom from '../modules/chat-room';
import LoginPage from '../modules/login-page';
import RegisterPage from '../modules/register-page';

import { ROUTE__LOGIN, ROUTE__REGISTER } from './constants';
import ProtectedRoutes from './ProtectedRoutes';

const AppRouter = () => (
  <BrowserRouter>
    <Routes>
      <Route element={<ChatLayout />}>
        {/* empty chat */}
        <Route element={<ProtectedRoutes />}>
          <Route index element={<ChatRoom />} />
          <Route path="rooms/:chatId" element={<ChatRoom />} />
        </Route>
      </Route>
      <Route element={<LoginLayout />}>
        <Route path={ROUTE__LOGIN} element={<LoginPage />} />
        <Route path={ROUTE__REGISTER} element={<RegisterPage />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

export default AppRouter;
