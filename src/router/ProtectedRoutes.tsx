import { Outlet, Navigate } from 'react-router-dom';
import { getToken, AUTH_TOKEN } from '../services/storage-service';

const ProtectedRoutes = () => {
  const authToken = getToken(AUTH_TOKEN);
  return authToken ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoutes;
