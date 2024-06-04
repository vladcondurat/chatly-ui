import { RootState } from '../index';

export const usernameUserSelector = (state: RootState): string => state.user.username;
export const avatarUrlUserSelector = (state: RootState): string => state.user.avatarUrl;
export const isLoadingUserSelector = (state: RootState): boolean => state.user.loading;
