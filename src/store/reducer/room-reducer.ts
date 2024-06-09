import { createReducer } from '@reduxjs/toolkit';
import IRoomState from '../../types/room/IRoomState';
import roomsAdapter from '../adaptors/rooms-adapter';
import { setLoadingRoomAction, setRoomsAction, setSelectedRoomAction } from '../actions/room-sync-actions';

const initialState: IRoomState = {
  rooms: [],
  selectedRoom: null,
  loading: false,
};

const roomReducer = createReducer(roomsAdapter.getInitialState(initialState), builder =>
  builder
    .addCase(setRoomsAction, roomsAdapter.setAll)
    .addCase(setSelectedRoomAction, (state, action) => ({ ...state, selectedRoom: action.payload }))
    .addCase(setLoadingRoomAction, (state, action) => ({ ...state, loading: action.payload })),
);

export default roomReducer;
