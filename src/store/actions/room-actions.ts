import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  ROOM__ADD_USERS,
  ROOM__FETCH_ROOMS,
  ROOM__FETCH_SELECTED_ROOM,
  ROOM__LEAVE,
  ROOM__POST_ROOM,
  ROOM__REMOVE_USERS,
  ROOM__UPDATE,
} from '../constants';
import { RootState } from '..';
import {
  addUsersToRoomRequest,
  getRoomDetailsRequest,
  getRoomsRequest,
  leaveRoomRequest,
  postRoomRequest,
  putRoomRequest,
  removeUsersFromRoomRequest,
} from '../../api/requests/room-requests';
import {
  mapRoomResponseToRoom,
  mapRoomsResponseToRooms,
} from '../../mappers/room-mappers';
import IGetRoomsResponse from '../../types/room/IGetRoomsResponse';
import {
  setIsErrorRoomAction,
  setLoadingRoomAction,
  setRoomsAction,
  setSelectedRoomAction,
} from './room-sync-actions';
import IRoomResponse from '../../types/room/IRoomResponse';
import IPostRoomRequest from '../../types/room/IPostRoomRequest';
import alertService from '../../services/alert-service';
import ApiException from '../../types/api/ApiException';
import IUserIds from '../../types/room/IUserIds';

interface FetchSelectedRoomParams {
  roomId: string;
}

export const postRoomAsyncAction = createAsyncThunk<
  void,
  IPostRoomRequest,
  { state: RootState }
>(ROOM__POST_ROOM, async (data, thunkApi) => {
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
});

interface IAddUsersToRoomParams {
  userIds: IUserIds;
  roomId: string;
}

export const addUsersToRoomAsyncAction = createAsyncThunk<
  void,
  IAddUsersToRoomParams,
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

export const fetchRoomsAsyncAction = createAsyncThunk<
  void,
  never,
  { state: RootState }
>(ROOM__FETCH_ROOMS, async (__, thunkApi) => {
  thunkApi.dispatch(setLoadingRoomAction(true));
  try {
    const roomsResponse: IGetRoomsResponse = await getRoomsRequest();
    const rooms = mapRoomsResponseToRooms(roomsResponse);
    thunkApi.dispatch(setRoomsAction(rooms));
  } catch (err) {
    // swallow exception
  } finally {
    thunkApi.dispatch(setLoadingRoomAction(false));
  }
});

export const fetchSelectedRoomAsyncAction = createAsyncThunk<
  void,
  FetchSelectedRoomParams,
  { state: RootState }
>(ROOM__FETCH_SELECTED_ROOM, async ({ roomId }, thunkApi) => {
  thunkApi.dispatch(setLoadingRoomAction(true));
  try {
    const roomResponse: Partial<IRoomResponse> = await getRoomDetailsRequest(
      roomId
    );
    const room = mapRoomResponseToRoom(roomResponse);
    thunkApi.dispatch(setSelectedRoomAction(room));
  } catch (err) {
    // swallow exception
  } finally {
    thunkApi.dispatch(setLoadingRoomAction(false));
  }
});

interface IUpdateRoomParams {
  roomId: string;
  data: FormData;
}

export const updateRoomAsyncAction = createAsyncThunk<
  void,
  IUpdateRoomParams,
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

interface IRemoveUsersFromRoomParams {
  userIds: IUserIds;
  roomId: string;
}

export const removeUserFromRoomAsyncAction = createAsyncThunk<
  void,
  IRemoveUsersFromRoomParams,
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

export const leaveRoomAsyncAction = createAsyncThunk<
  void,
  string,
  { state: RootState }
>(ROOM__LEAVE, async (roomId, thunkApi) => {
  thunkApi.dispatch(setLoadingRoomAction(true));
  try {
    await leaveRoomRequest(roomId);
  } catch (err) {
    if (err instanceof ApiException) {
      alertService.errorAlert({ title: err.data.detail });
    }
  } finally {
    thunkApi.dispatch(setLoadingRoomAction(false));
  }
});
