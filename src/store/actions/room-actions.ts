import {
  addUsersToRoomRequest,
  getRoomDetailsRequest,
  getRoomsRequest,
  leaveRoomRequest,
  postRoomRequest,
  putRoomRequest,
  removeUsersFromRoomRequest,
} from '@app/api/requests/room-requests';
import { mapRoomResponseToRoom, mapRoomsResponseToRooms } from '@app/mappers/room-mappers';
import alertService from '@app/services/alert-service';
import { RootState } from '@app/store';
import {
  ROOM__ADD_USERS,
  ROOM__FETCH_ROOMS,
  ROOM__FETCH_SELECTED_ROOM,
  ROOM__LEAVE,
  ROOM__POST_ROOM,
  ROOM__REMOVE_USERS,
  ROOM__UPDATE,
} from '@app/store/constants';
import ApiException from '@app/types/api/ApiException';
import IAddUsersToRoomRequest from '@app/types/requests/IAddUsersToRoomRequest';
import IFetchSelectedRoomRequest from '@app/types/requests/IFetchSelectedRoomRequest';
import IPostRoomRequest from '@app/types/requests/IPostRoomRequest';
import IRemoveUsersFromRoomRequest from '@app/types/requests/IRemoveUsersFromRoomRequest';
import IUpdateRoomRequest from '@app/types/requests/IUpdateRoomRequest';
import IGetRoomsResponse from '@app/types/responses/IGetRoomsResponse';
import IRoomResponse from '@app/types/responses/IRoomResponse';
import { createAsyncThunk } from '@reduxjs/toolkit';

import {
  setChatBarLoadingRoomAction,
  setIsErrorRoomAction,
  setLoadingRoomAction,
  setRoomsAction,
  setSelectedRoomAction,
} from './room-sync-actions';

export const postRoomAsyncAction = createAsyncThunk<void, IPostRoomRequest, { state: RootState }>(
  ROOM__POST_ROOM,
  async (data, thunkApi) => {
    thunkApi.dispatch(setLoadingRoomAction(true));
    thunkApi.dispatch(setIsErrorRoomAction(false));
    try {
      const roomsResponse: Partial<IRoomResponse> = await postRoomRequest(data);
      const room = mapRoomResponseToRoom(roomsResponse);
      thunkApi.dispatch(setSelectedRoomAction(room));
    } catch (err) {
      if (err instanceof ApiException) {
        alertService.errorAlert({ title: err.data.detail });
      }
      thunkApi.dispatch(setIsErrorRoomAction(true));
    } finally {
      thunkApi.dispatch(setLoadingRoomAction(false));
    }
  }
);

export const addUsersToRoomAsyncAction = createAsyncThunk<
  void,
  IAddUsersToRoomRequest,
  { state: RootState }
>(ROOM__ADD_USERS, async ({ userIds, roomId }, thunkApi) => {
  thunkApi.dispatch(setLoadingRoomAction(true));
  try {
    await addUsersToRoomRequest({ userIds: userIds.userIds }, roomId);
  } catch (err) {
    if (err instanceof ApiException) {
      alertService.errorAlert({ title: err.data.detail });
    }
  } finally {
    thunkApi.dispatch(setLoadingRoomAction(false));
  }
});

export const fetchRoomsAsyncAction = createAsyncThunk<void, never, { state: RootState }>(
  ROOM__FETCH_ROOMS,
  async (__, thunkApi) => {
    thunkApi.dispatch(setChatBarLoadingRoomAction(true));
    try {
      const roomsResponse: IGetRoomsResponse = await getRoomsRequest();
      const rooms = mapRoomsResponseToRooms(roomsResponse);
      thunkApi.dispatch(setRoomsAction(rooms));
    } catch (err) {
      // swallow exception
    } finally {
      thunkApi.dispatch(setChatBarLoadingRoomAction(false));
    }
  }
);

export const fetchRoomsRealTimeAsyncAction = createAsyncThunk<void, never, { state: RootState }>(
  ROOM__FETCH_ROOMS,
  async (__, thunkApi) => {
    try {
      const roomsResponse: IGetRoomsResponse = await getRoomsRequest();
      const rooms = mapRoomsResponseToRooms(roomsResponse);
      thunkApi.dispatch(setRoomsAction(rooms));
    } catch (err) {
      // swallow exception
    }
  }
);

export const fetchSelectedRoomAsyncAction = createAsyncThunk<
  void,
  IFetchSelectedRoomRequest,
  { state: RootState }
>(ROOM__FETCH_SELECTED_ROOM, async ({ roomId }, thunkApi) => {
  thunkApi.dispatch(setLoadingRoomAction(true));
  try {
    const roomResponse: Partial<IRoomResponse> = await getRoomDetailsRequest(roomId);
    const room = mapRoomResponseToRoom(roomResponse);
    thunkApi.dispatch(setSelectedRoomAction(room));
  } catch (err) {
    // swallow exception
  } finally {
    thunkApi.dispatch(setLoadingRoomAction(false));
  }
});

export const updateRoomAsyncAction = createAsyncThunk<
  void,
  IUpdateRoomRequest,
  { state: RootState }
>(ROOM__UPDATE, async ({ data, roomId }, thunkApi) => {
  thunkApi.dispatch(setLoadingRoomAction(true));
  try {
    const response = await putRoomRequest(data, roomId);
    const room = mapRoomResponseToRoom(response);
    thunkApi.dispatch(setSelectedRoomAction(room));
  } catch (err) {
    if (err instanceof ApiException) {
      alertService.errorAlert({ title: err.data.detail });
    }
  } finally {
    thunkApi.dispatch(setLoadingRoomAction(false));
  }
});

export const removeUserFromRoomAsyncAction = createAsyncThunk<
  void,
  IRemoveUsersFromRoomRequest,
  { state: RootState }
>(ROOM__REMOVE_USERS, async ({ userIds, roomId }, thunkApi) => {
  thunkApi.dispatch(setLoadingRoomAction(true));
  try {
    await removeUsersFromRoomRequest(userIds.userIds, roomId);
  } catch (err) {
    if (err instanceof ApiException) {
      alertService.errorAlert({ title: err.data.detail });
    }
  } finally {
    thunkApi.dispatch(setLoadingRoomAction(false));
  }
});

export const leaveRoomAsyncAction = createAsyncThunk<void, string, { state: RootState }>(
  ROOM__LEAVE,
  async roomId => {
    try {
      await leaveRoomRequest(roomId);
    } catch (err) {
      if (err instanceof ApiException) {
        alertService.errorAlert({ title: err.data.detail });
      }
    }
  }
);
