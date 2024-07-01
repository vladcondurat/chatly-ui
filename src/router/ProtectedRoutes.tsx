import React, { useEffect } from 'react';
import { Navigate, Outlet } from 'react-router-dom';

import { useAppSelector } from '@app/hooks/store-hooks';
import login from '@app/services/auth-service';
import { isLoggedInAuthSelector } from '@app/store/selectors/auth-selectors';

const ProtectedRoutes: React.FC = () => {
  useEffect(() => {
    login();
  }, []);

  const isLoggedInSelector = useAppSelector(isLoggedInAuthSelector);

  return isLoggedInSelector ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoutes;
