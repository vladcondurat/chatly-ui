import IUserData from '../../types/user/IUser';
import usersAdapter from '../adaptors/users-adapter';
import { RootState } from '../index';

const usersSelectors = usersAdapter.getSelectors<RootState>(state => state.user);

export const dataUserSelector = (state: RootState): IUserData => state.user.details;
export const isLoadingUserSelector = (state: RootState): boolean => state.user.loading;
export const allUsersSelector = usersSelectors.selectAll;
