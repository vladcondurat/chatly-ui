import IUserData from '../../types/user/IUserDetails';
import { RootState } from '../index';

export const dataUserSelector = (state: RootState): IUserData => state.user.data;
export const isLoadingUserSelector = (state: RootState): boolean => state.user.loading;
