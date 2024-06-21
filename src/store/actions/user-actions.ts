import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  USER__FETCH,
  USER__FETCH_ALL,
  USER__FETCH_INSIDE_ROOM,
  USER__FETCH_OUTSIDE_ROOM,
  USER__UPDATE,
} from '../constants';
import { RootState } from '..';
import {
  getAllUsersInRoomRequest,
  getAllUsersOutsideRoomRequest,
  getAllUsersRequest,
  getUserRequest,
  updateUserRequest,
} from '../../api/requests/user-requests';
import {
  mapUserResponseToUser,
  mapUsersResponseToUsers,
} from '../../mappers/user-mapper';
import IUsers from '../../types/user/IUsersResponse';
import ApiException from '../../types/api/ApiException';
import alertService from '../../services/alert-service';
import {
  setAllDataUserAction,
  setDataInsideRoomUserAction,
  setDataOutsideRoomUserAction,
  setDataUserAction,
  setLoadingUserAction,
} from './user-sync-actions';
import IUser from '../../types/user/IUser';

export const updateUserAsyncAction = createAsyncThunk<
  void,
  FormData,
  { state: RootState }
>(USER__UPDATE, async (data, thunkApi) => {
  thunkApi.dispatch(setLoadingUserAction(true));
  try {
    const response = await updateUserRequest(data);
    const user = mapUserResponseToUser(response);
    thunkApi.dispatch(setDataUserAction(user));
  } catch (err) {
    if (err instanceof ApiException) {
      alertService.errorAlert({ title: err.data.detail });
    }
  } finally {
    thunkApi.dispatch(setLoadingUserAction(false));
  }
});

export const fetchUserAsyncAction = createAsyncThunk<
  void,
  never,
  { state: RootState }
>(USER__FETCH, async (__, thunkApi) => {
  thunkApi.dispatch(setLoadingUserAction(true));
  try {
    const userResponse: Partial<IUser> = await getUserRequest();
    const user = mapUserResponseToUser(userResponse);
    thunkApi.dispatch(setDataUserAction(user));
  } catch (err) {
    // swallow exception
  } finally {
    thunkApi.dispatch(setLoadingUserAction(false));
  }
});

export const fetchAllUsersAsyncAction = createAsyncThunk<
  void,
  never,
  { state: RootState }
>(USER__FETCH_ALL, async (__, thunkApi) => {
  thunkApi.dispatch(setLoadingUserAction(true));
  try {
    const userResponse: IUsers = await getAllUsersRequest();
    const user = mapUsersResponseToUsers(userResponse);
    thunkApi.dispatch(setAllDataUserAction(user));
  } catch (err) {
    if (err instanceof ApiException) {
      alertService.errorAlert({ title: err.data.detail });
    }
  } finally {
    thunkApi.dispatch(setLoadingUserAction(false));
  }
});

export const fetchUsersInsideRoomAsyncAction = createAsyncThunk<
  void,
  string,
  { state: RootState }
>(USER__FETCH_INSIDE_ROOM, async (roomId, thunkApi) => {
  thunkApi.dispatch(setLoadingUserAction(true));
  try {
    const userResponse: IUsers = await getAllUsersInRoomRequest(roomId);
    const user = mapUsersResponseToUsers(userResponse);
    thunkApi.dispatch(setDataInsideRoomUserAction(user));
  } catch (err) {
    if (err instanceof ApiException) {
      alertService.errorAlert({ title: err.data.detail });
    }
  } finally {
    thunkApi.dispatch(setLoadingUserAction(false));
  }
});

export const fetchUsersOutsideRoomAsyncAction = createAsyncThunk<
  void,
  string,
  { state: RootState }
>(USER__FETCH_OUTSIDE_ROOM, async (roomId, thunkApi) => {
  thunkApi.dispatch(setLoadingUserAction(true));
  try {
    const userResponse: IUsers = await getAllUsersOutsideRoomRequest(roomId);
    const user = mapUsersResponseToUsers(userResponse);
    thunkApi.dispatch(setDataOutsideRoomUserAction(user));
  } catch (err) {
    if (err instanceof ApiException) {
      alertService.errorAlert({ title: err.data.detail });
    }
  } finally {
    thunkApi.dispatch(setLoadingUserAction(false));
  }
});
