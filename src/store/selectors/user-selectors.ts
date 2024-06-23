import { RootState } from '@app/store';
import usersAdapter from '@app/store/adaptors/users-adapter';
import IUserData from '@app/types/user/IUser';

const usersSelectors = usersAdapter.getSelectors<RootState>(state => state.user);

export const dataUserSelector = (state: RootState): IUserData => state.user.details;
export const isLoadingUserSelector = (state: RootState): boolean => state.user.loading;
export const allUsersSelector = usersSelectors.selectAll;
