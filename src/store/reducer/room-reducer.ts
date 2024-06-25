import {
  setChatBarLoadingRoomAction,
  setIsErrorRoomAction,
  setLoadingRoomAction,
  setRoomsAction,
  setSelectedRoomAction,
} from '@app/store/actions/room-sync-actions';
import roomsAdapter from '@app/store/adaptors/rooms-adapter';
import IRoomState from '@app/types/room/IRoomState';
import { createReducer } from '@reduxjs/toolkit';

const initialState: IRoomState = {
  rooms: [],
  selectedRoom: null,
  loading: false,
  chatBarLoading: false,
  isError: false,
};

const roomReducer = createReducer(roomsAdapter.getInitialState(initialState), builder =>
  builder
    .addCase(setRoomsAction, roomsAdapter.setAll)
    .addCase(setSelectedRoomAction, (state, action) => ({ ...state, selectedRoom: action.payload }))
    .addCase(setLoadingRoomAction, (state, action) => ({ ...state, loading: action.payload }))
    .addCase(setChatBarLoadingRoomAction, (state, action) => ({
      ...state,
      chatBarLoading: action.payload,
    }))
    .addCase(setIsErrorRoomAction, (state, action) => ({ ...state, isError: action.payload }))
);

export default roomReducer;
