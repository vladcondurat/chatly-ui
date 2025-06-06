import {
  resetDataAuthAction,
  setIsLoginErrorAuthAction,
  setIsRegisteredAuthAction,
  setLoadingAuthAction,
  setLoginErrorAuthAction,
  setRegisterErrorAuthAction,
  setStateAuthAction,
  setTokenAuthAction,
} from '@app/store/actions/auth-sync-actions';
import IAuthState from '@app/types/auth/IAuthState';
import { createReducer } from '@reduxjs/toolkit';

const initialState: IAuthState = {
  token: null,
  state: false,
  loading: false,
  loginError: null,
  isLoginError: false,
  registerError: null,
  isRegistered: false,
};

const authReducer = createReducer(initialState, builder =>
  builder
    .addCase(setStateAuthAction, (state, action) => ({ ...state, state: action.payload }))
    .addCase(setTokenAuthAction, (state, action) => ({ ...state, token: action.payload }))
    .addCase(setLoadingAuthAction, (state, action) => ({ ...state, loading: action.payload }))
    .addCase(setLoginErrorAuthAction, (state, action) => ({ ...state, loginError: action.payload }))
    .addCase(setIsLoginErrorAuthAction, (state, action) => ({
      ...state,
      isLoginError: action.payload,
    }))
    .addCase(setIsRegisteredAuthAction, (state, action) => ({
      ...state,
      isRegistered: action.payload,
    }))
    .addCase(setRegisterErrorAuthAction, (state, action) => ({
      ...state,
      registerError: action.payload,
    }))
    .addCase(resetDataAuthAction, () => initialState)
);

export default authReducer;
