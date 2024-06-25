import Config from '@app/config';
import store from '@app/store';
import { authBearerTokenSelector } from '@app/store/selectors/auth-selectors';
import handleApiError from '@app/utils/handleApiError';
import axios, { Axios } from 'axios';
import isEmpty from 'lodash/isEmpty';

let instance: Axios = null;

export const initApi = () => {
  instance = axios.create({
    baseURL: Config.api.apiUrl,
  });

  instance.interceptors.request.use(config => {
    const newConfig = { ...config };
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
    }
  );
};

export const getApi = (): Axios => {
  if (isEmpty(instance)) {
    initApi();
  }

  return instance;
};
