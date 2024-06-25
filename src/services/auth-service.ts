import store from '@app/store';
import { setStateAuthAction, setTokenAuthAction } from '@app/store/actions/auth-sync-actions';

import { getToken } from './storage-service';

export const AUTH_TOKEN = 'access-token';

const autoLogin = (): void => {
  const accessToken = getToken(AUTH_TOKEN);

  if (accessToken) {
    store.dispatch(setTokenAuthAction(accessToken));
    store.dispatch(setStateAuthAction(true));
  }
};

export default autoLogin;
