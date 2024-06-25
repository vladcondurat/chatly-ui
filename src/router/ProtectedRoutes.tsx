import { Navigate, Outlet } from 'react-router-dom';

import { AUTH_TOKEN, getToken } from '../services/storage-service';

const ProtectedRoutes = () => {
  //authService
  const authToken = getToken(AUTH_TOKEN);
  return authToken ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoutes;
