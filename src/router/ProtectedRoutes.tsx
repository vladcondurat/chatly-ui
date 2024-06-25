import { Navigate, Outlet } from 'react-router-dom';

import { useAppSelector } from '@app/hooks/store-hooks';
import autoLogin from '@app/services/auth-service';
import { isLoggedInAuthSelector } from '@app/store/selectors/auth-selectors';

const ProtectedRoutes = () => {
  autoLogin();
  const isLoggedInSelector = useAppSelector(isLoggedInAuthSelector);
  return isLoggedInSelector ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoutes;
