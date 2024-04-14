import { RootState } from '../index';

export const authBearerTokenSelector = (state: RootState): string => state.auth.token;
export const loginErrorAuthSelector = (state: RootState): boolean => state.auth.loginError;
export const isLoggedInAuthSelector = (state: RootState): boolean => Boolean(state.auth.state);
export const isLoadingAuthSelector = (state: RootState): boolean => state.auth.loading;
export const tokenAuthSelector = (state: RootState): string => state.auth.token;
