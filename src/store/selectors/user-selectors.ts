import IUserData from '../../types/user/IUser';
import { RootState } from '../index';

export const dataUserSelector = (state: RootState): IUserData => state.user.details;
export const isLoadingUserSelector = (state: RootState): boolean => state.user.loading;
