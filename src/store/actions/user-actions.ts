import { createAsyncThunk } from '@reduxjs/toolkit';
import { USER_FETCH } from '../constants';
import { RootState } from '..';
import { getUserRequest } from '../../api/requests/user-requests';
import { mapUserResponseToUser } from '../../mappers/user-mapper';
import IUserResponse from '../../types/user/IUserResponse';
import { createAction } from '@reduxjs/toolkit';
import { USER_SET_DATA, USER__SET_LOADING } from '../constants';
import IUserData from '../../types/user/IUserData';

export const setDataUserAction = createAction<IUserData>(USER_SET_DATA);
export const setLoadingUserAction = createAction<boolean>(USER__SET_LOADING);

export const fetchUserAsyncAction = createAsyncThunk<void, never, { state: RootState }>(USER_FETCH, async (__, thunkApi) => {
  thunkApi.dispatch(setLoadingUserAction(true));
  try {
    const userResponse: IUserResponse = await getUserRequest();
    const user = mapUserResponseToUser(userResponse);
    thunkApi.dispatch(setDataUserAction(user.data));
  } catch (err) {
    // swallow exception
  } finally {
    thunkApi.dispatch(setLoadingUserAction(false));
  }
});
