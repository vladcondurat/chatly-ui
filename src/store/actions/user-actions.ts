import {
  getAllUsersInRoomRequest,
  getAllUsersOutsideRoomRequest,
  getAllUsersRequest,
  getUserRequest,
  updateUserRequest,
} from '@app/api/requests/user-requests';
import { mapUserResponseToUser, mapUsersResponseToUsers } from '@app/mappers/user-mapper';
import alertService from '@app/services/alert-service';
import { RootState } from '@app/store';
import {
  USER__FETCH,
  USER__FETCH_ALL,
  USER__FETCH_INSIDE_ROOM,
  USER__FETCH_OUTSIDE_ROOM,
  USER__UPDATE,
} from '@app/store/constants';
import ApiException from '@app/types/api/ApiException';
import IUsers from '@app/types/responses/IUsersResponse';
import IUser from '@app/types/user/IUser';
import { createAsyncThunk } from '@reduxjs/toolkit';

import {
  setAllDataUserAction,
  setDataInsideRoomUserAction,
  setDataOutsideRoomUserAction,
  setDataUserAction,
  setLoadingUserAction,
} from './user-sync-actions';

export const updateUserAsyncAction = createAsyncThunk<void, FormData, { state: RootState }>(
  USER__UPDATE,
  async (data, thunkApi) => {
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
  }
);

export const fetchUserAsyncAction = createAsyncThunk<void, never, { state: RootState }>(
  USER__FETCH,
  async (__, thunkApi) => {
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
  }
);

export const fetchAllUsersAsyncAction = createAsyncThunk<void, never, { state: RootState }>(
  USER__FETCH_ALL,
  async (__, thunkApi) => {
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
  }
);

export const fetchUsersInsideRoomAsyncAction = createAsyncThunk<void, string, { state: RootState }>(
  USER__FETCH_INSIDE_ROOM,
  async (roomId, thunkApi) => {
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
  }
);

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
