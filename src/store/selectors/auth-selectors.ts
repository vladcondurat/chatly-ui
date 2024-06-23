import { RootState } from '@app/store';

export const authBearerTokenSelector = (state: RootState): string => state.auth.token;
export const isLoginErrorAuthSelector = (state: RootState): boolean => state.auth.isLoginError;
export const loginErrorAuthSelector = (state: RootState): string => state.auth.loginError;
export const isLoggedInAuthSelector = (state: RootState): boolean => Boolean(state.auth.state);
export const isLoadingAuthSelector = (state: RootState): boolean => state.auth.loading;
export const isRegisteredAuthSelector = (state: RootState): boolean => state.auth.isRegistered;
export const registerErrorAuthSelector = (state: RootState): string => state.auth.registerError;
