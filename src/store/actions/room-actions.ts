import { createAsyncThunk } from '@reduxjs/toolkit';
import { ROOM__FETCH_ROOMS, ROOM__FETCH_SELECTED_ROOM } from '../constants';
import { RootState } from '..';
import { getRoomDetailsRequest, getRoomsRequest } from '../../api/requests/room-requests';
import { mapRoomResponseToRoom, mapRoomsResponseToRooms } from '../../mappers/room-mappers';
import IGetRoomsResponse from '../../types/room/IGetRoomsResponse';
import { setLoadingRoomAction, setRoomsAction, setSelectedRoomAction } from './room-sync-actions';
import IRoomResponse from '../../types/room/IRoomResponse';

interface FetchSelectedRoomParams {
  roomId: string;
}

export const fetchRoomsAsyncAction = createAsyncThunk<void, never, { state: RootState }>(ROOM__FETCH_ROOMS, async (__, thunkApi) => {
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

export const fetchSelectedRoomAsyncAction = createAsyncThunk<void, FetchSelectedRoomParams, { state: RootState }>(ROOM__FETCH_SELECTED_ROOM, async ({ roomId }, thunkApi) => {
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
