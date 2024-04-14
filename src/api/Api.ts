import axios, { Axios, AxiosRequestConfig } from 'axios';
import isEmpty from 'lodash/isEmpty';
import { refreshAuthActionAsync } from '@app/store/actions/auth-actions';
import handleApiError from '../utils/handleApiError';
import eventEmitter from '../emitters/eventEmitter';
import { EventType } from '../emitters/EventType';
import store from '../store';
import Config from '../config';
import { authBearerTokenSelector, isLoggedInAuthSelector } from '../store/selectors/auth-selectors';

let instance: Axios = null;

export const authInstance = (): Axios => {
  return axios.create({
    baseURL: Config.api.apiUrl,
  });
};

export const initApi = () => {
  instance = axios.create({
    baseURL: Config.api.apiUrl,
  });

  instance.interceptors.request.use((config: AxiosRequestConfig) => {
    const newConfig = { ...config };
    if (authBearerTokenSelector(store.getState())) {
      const token = authBearerTokenSelector(store.getState());
      newConfig.headers = {
        ...newConfig.headers,
        Authorization: `Bearer ${token}`,
      };
    }
    return newConfig;
  });

  instance.interceptors.response.use(
    res => {
      return res;
    },
    async error => {
      if (error.response.status === 401) {
        const token = authBearerTokenSelector(store.getState());
        const refreshToken = refreshTokenAuthSelector(store.getState());
        await store.dispatch(refreshAuthActionAsync({ token, refreshToken }));
        const authState = isLoggedInAuthSelector(store.getState());

        if (authState) {
          try {
            const accessToken = authBearerTokenSelector(store.getState());

            const response = await axios({
              headers: {
                Authorization: `Bearer ${accessToken}`,
              },
              method: error?.config?.method,
              url: (error?.config?.baseURL as string) + (error?.config?.url as string),
              data: error?.config?.data,
            });
            return Promise.resolve(response);
          } catch (err) {
            throw handleApiError(error);
          }
        } else {
          eventEmitter.emit(EventType.AUTH__REQUIRED);
          throw handleApiError(error);
        }
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
