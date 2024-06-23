import { loginRequest, registerRequest } from '@app/api/requests/auth-requests';
import alertService from '@app/services/alert-service';
import { LOGIN_FAILED__TITLE } from '@app/services/alert-service/alert-errors';
import { AUTH_TOKEN } from '@app/services/storage-service';
import { removeToken, setToken } from '@app/services/storage-service';
import { RootState } from '@app/store';
import { AUTH__LOGIN, AUTH__LOGOUT, AUTH__REGISTER } from '@app/store/constants';
import ApiException from '@app/types/api/ApiException';
import ILoginRequest from '@app/types/requests/ILoginRequest';
import IRegisterRequest from '@app/types/requests/IRegisterRequest';
import { createAsyncThunk } from '@reduxjs/toolkit';

import {
  resetDataAuthAction,
  setIsLoginErrorAuthAction,
  setIsRegisteredAuthAction,
  setLoadingAuthAction,
  setLoginErrorAuthAction,
  setRegisterErrorAuthAction,
  setStateAuthAction,
  setTokenAuthAction,
} from './auth-sync-actions';
import { fetchUserAsyncAction } from './user-actions';

export const loginAuthActionAsync = createAsyncThunk<void, ILoginRequest, { state: RootState }>(
  AUTH__LOGIN,
  async (data, thunkApi) => {
    thunkApi.dispatch(setIsLoginErrorAuthAction(false));
    thunkApi.dispatch(setLoadingAuthAction(true));
    try {
      const response = await loginRequest(data);
      if (response?.token) {
        setToken(AUTH_TOKEN, response.token);
        thunkApi.dispatch(setTokenAuthAction(response.token));
        await thunkApi.dispatch(fetchUserAsyncAction());
        thunkApi.dispatch(setStateAuthAction(true));
      } else {
        alertService.errorAlert({ title: LOGIN_FAILED__TITLE });
        thunkApi.dispatch(setIsLoginErrorAuthAction(true));
      }
    } catch (err) {
      if (err instanceof ApiException) {
        thunkApi.dispatch(setLoginErrorAuthAction(err.data.detail));
      }
      thunkApi.dispatch(setIsLoginErrorAuthAction(true));
    } finally {
      thunkApi.dispatch(setLoadingAuthAction(false));
    }
  }
);

export const resetAuthDataActionAsync = createAsyncThunk<void, never, { state: RootState }>(
  AUTH__LOGOUT,
  async (__, thunkApi) => {
    thunkApi.dispatch(resetDataAuthAction());
    removeToken(AUTH_TOKEN);
  }
);

export const registerActionAsync = createAsyncThunk<void, IRegisterRequest, { state: RootState }>(
  AUTH__REGISTER,
  async (data, thunkApi) => {
    thunkApi.dispatch(setLoadingAuthAction(true));
    thunkApi.dispatch(setIsRegisteredAuthAction(false));
    try {
      await registerRequest(data);
      thunkApi.dispatch(setIsRegisteredAuthAction(true));
    } catch (err) {
      if (err instanceof ApiException) {
        thunkApi.dispatch(setRegisterErrorAuthAction(err.data.detail));
      }
    } finally {
      thunkApi.dispatch(setLoadingAuthAction(false));
    }
  }
);
