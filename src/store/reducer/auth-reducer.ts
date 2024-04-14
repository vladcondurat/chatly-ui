import { createReducer } from '@reduxjs/toolkit';
import IAuthState from '../../types/auth/IAuthState';
import { setStateAuthAction, setTokenAuthAction, setLoadingAuthAction, setLoginErrorAuthAction, resetDataAuthAction } from '../actions/auth-sync-actions';

const initialState: IAuthState = {
  token: null,
  refreshToken: null,
  state: false,
  loading: false,
  loginError: false,
};

const authReducer = createReducer(initialState, builder =>
  builder
    .addCase(setStateAuthAction, (state, action) => ({ ...state, state: action.payload }))
    .addCase(setTokenAuthAction, (state, action) => ({ ...state, token: action.payload }))
    .addCase(setLoadingAuthAction, (state, action) => ({ ...state, loading: action.payload }))
    .addCase(setLoginErrorAuthAction, (state, action) => ({ ...state, loginError: action.payload }))
    .addCase(resetDataAuthAction, () => initialState),
);

export default authReducer;
