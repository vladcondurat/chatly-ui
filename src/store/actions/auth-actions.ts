// import { createAsyncThunk } from '@reduxjs/toolkit';
// import ILoginRequest from '@app/types/auth/ILoginRequest';
// import { loginRequest } from '@app/api/requests/auth-requests';

// import { TOKEN_AUTH } from '@app/services/auth-service';
// import { LOGIN_FAILED__TITLE } from '@app/services/alert-service/alert-errors';
// import ApiException from '../../types/api/ApiException';
// import alertService from '@app/services/alert-service';
// import { clearItem, setItem } from '@app/services/storage-service'; //better use cookie service
// import { AUTH__LOGIN, AUTH__LOGOUT } from '../constants';
// import { RootState } from '..';
// import { setLoginErrorAuthAction, setLoadingAuthAction, setTokenAuthAction, setStateAuthAction, resetDataAuthAction } from './auth-sync-actions';
// import { fetchAccountAsyncAction } from './account-actions';

// export const loginAuthActionAsync = createAsyncThunk<void, ILoginRequest, { state: RootState }>(AUTH__LOGIN, async (data, thunkApi) => {
//   thunkApi.dispatch(setLoginErrorAuthAction(false));

//   thunkApi.dispatch(setLoadingAuthAction(true));
//   try {
//     const response = await loginRequest(data);
//     if (response?.token) {
//       thunkApi.dispatch(setTokenAuthAction(response.token));
//       setItem(TOKEN_AUTH, response.token);
//       await thunkApi.dispatch(fetchAccountAsyncAction());
//       thunkApi.dispatch(setStateAuthAction(true));
//       alertService.successAlert({ title: 'Login successfully', message: null });
//     } else {
//       alertService.errorAlert({ title: LOGIN_FAILED__TITLE, message: 'Error from session, please reload!' });
//       thunkApi.dispatch(setLoginErrorAuthAction(true));
//     }
//   } catch (err) {
//     if (err instanceof ApiException) {
//       alertService.errorAlert({ title: LOGIN_FAILED__TITLE, message: err.data.detail });
//     }
//     thunkApi.dispatch(setLoginErrorAuthAction(true));
//   } finally {
//     thunkApi.dispatch(setLoadingAuthAction(false));
//   }
// });

// export const logoutActionAsync = createAsyncThunk<void, never, { state: RootState }>(AUTH__LOGOUT, async (__, thunkApi) => {
//   thunkApi.dispatch(resetDataAuthAction());
//   clearItem(TOKEN_AUTH);
// });
