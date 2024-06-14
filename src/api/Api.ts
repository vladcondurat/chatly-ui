import axios, { Axios } from 'axios';
import isEmpty from 'lodash/isEmpty';
import store from '../store';
import Config from '../config';
import { authBearerTokenSelector } from '../store/selectors/auth-selectors';
import handleApiError from '../utils/handleApiError';
import { AUTH_TOKEN, getToken } from '../services/storage-service';

let instance: Axios = null;

export const initApi = () => {
  instance = axios.create({
    baseURL: Config.api.apiUrl,
  });

  instance.interceptors.request.use(config => {
    const newConfig = { ...config };
    const token2 = getToken(AUTH_TOKEN);
    if (token2) {
      newConfig.headers.Authorization = `Bearer ${token2}`;
    }
    if (authBearerTokenSelector(store.getState())) {
      const token = authBearerTokenSelector(store.getState());
      newConfig.headers.Authorization = `Bearer ${token}`;
    }
    return newConfig;
  });

  instance.interceptors.response.use(
    res => {
      return res;
    },
    async error => {
      if (error.response.status === 401 || error.response.status === 403) {
        error.response.data = { detail: 'Something went wrong' };
      }
      throw handleApiError(error);
    },
  );
};

export const getApi = (): Axios => {
  if (isEmpty(instance)) {
    initApi();
  }

  return instance;
};
