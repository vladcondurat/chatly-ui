import { createAction } from '@reduxjs/toolkit';
import { ROOM__SET_LOADING, ROOM__SET_ROOMS, ROOM__SET_SELECTED_ROOM } from '../constants';
import IRoomCard from '../../types/room/IRoomCard';
import IRoom from '../../types/room/IRoom';

export const setRoomsAction = createAction<IRoomCard[]>(ROOM__SET_ROOMS);
export const setSelectedRoomAction = createAction<IRoom>(ROOM__SET_SELECTED_ROOM);
export const setLoadingRoomAction = createAction<boolean>(ROOM__SET_LOADING);
