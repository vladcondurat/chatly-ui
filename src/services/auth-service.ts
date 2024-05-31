import { setTokenAuthAction, setStateAuthAction } from '../store/actions/auth-sync-actions';
import store from '../store';
import { getToken } from './storage-service';

export const TOKEN_AUTH = 'access-token';

const autoLogin = (): void => {
  const accessToken = getToken(TOKEN_AUTH);

  if (accessToken) {
    store.dispatch(setTokenAuthAction(accessToken));
    store.dispatch(setStateAuthAction(true));
  }
};

export default autoLogin;
