import {
  ROOM__SET_CHAT_BAR_LOADING,
  ROOM__SET_IS_ERROR,
  ROOM__SET_LOADING,
  ROOM__SET_ROOMS,
  ROOM__SET_SELECTED_ROOM,
} from '@app/store/constants';
import IRoom from '@app/types/room/IRoom';
import IRoomCard from '@app/types/room/IRoomCard';
import { createAction } from '@reduxjs/toolkit';

export const setRoomsAction = createAction<IRoomCard[]>(ROOM__SET_ROOMS);
export const setSelectedRoomAction = createAction<IRoom>(ROOM__SET_SELECTED_ROOM);
export const setLoadingRoomAction = createAction<boolean>(ROOM__SET_LOADING);
export const setChatBarLoadingRoomAction = createAction<boolean>(ROOM__SET_CHAT_BAR_LOADING);
export const setIsErrorRoomAction = createAction<boolean>(ROOM__SET_IS_ERROR);
