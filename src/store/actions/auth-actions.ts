import { createAsyncThunk } from '@reduxjs/toolkit';
import ILoginRequest from '../../types/auth/ILoginRequest';
import { loginRequest } from '../../api/requests/auth-requests';
import { AUTH_TOKEN } from '../../services/storage-service';
import { LOGIN_FAILED__TITLE } from '../../services/alert-service/alert-errors';
import ApiException from '../../types/api/ApiException';
import alertService from '../../services/alert-service';
import { setToken, removeToken } from '../../services/storage-service';
import { AUTH__LOGIN, AUTH__LOGOUT } from '../constants';
import { RootState } from '..';
import { setLoginErrorAuthAction, setLoadingAuthAction, setTokenAuthAction, setStateAuthAction, resetDataAuthAction, setIsLoginErrorAuthAction } from './auth-sync-actions';
import { fetchUserAsyncAction } from './user-actions';

export const loginAuthActionAsync = createAsyncThunk<void, ILoginRequest, { state: RootState }>(AUTH__LOGIN, async (data, thunkApi) => {
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
});

export const logoutActionAsync = createAsyncThunk<void, never, { state: RootState }>(AUTH__LOGOUT, async (__, thunkApi) => {
  thunkApi.dispatch(resetDataAuthAction());
  removeToken(AUTH_TOKEN);
});
