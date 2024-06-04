import { createAsyncThunk } from '@reduxjs/toolkit';
import { USER__FETCH } from '../constants';
import { RootState } from '..';
import { getUserRequest } from '../../api/requests/user-requests';
import { mapUserResponseToUser } from '../../mappers/user-mapper';
import { createAction } from '@reduxjs/toolkit';
import { USER__SET_DATA, USER__SET_LOADING } from '../constants';
import IUserData from '../../types/user/IUserDetails';
import IUser from '../../types/user/IUser';

export const setDataUserAction = createAction<IUserData>(USER__SET_DATA);
export const setLoadingUserAction = createAction<boolean>(USER__SET_LOADING);

export const fetchUserAsyncAction = createAsyncThunk<void, never, { state: RootState }>(USER__FETCH, async (__, thunkApi) => {
  thunkApi.dispatch(setLoadingUserAction(true));
  try {
    const userResponse: Partial<IUser> = await getUserRequest();
    const user = mapUserResponseToUser(userResponse);
    thunkApi.dispatch(setDataUserAction(user.details));
  } catch (err) {
    // swallow exception
  } finally {
    thunkApi.dispatch(setLoadingUserAction(false));
  }
});
