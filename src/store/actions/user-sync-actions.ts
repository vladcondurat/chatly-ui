import { createAction } from '@reduxjs/toolkit';
import IUser from '../../types/user/IUser';
import {
  USER__SET_DATA,
  USER__SET_DATA_ALL,
  USER__SET_DATA_INSIDE_ROOM,
  USER__SET_DATA_OUTSIDE_ROOM,
  USER__SET_LOADING,
} from '../constants';

export const setDataUserAction = createAction<IUser>(USER__SET_DATA);
export const setAllDataUserAction = createAction<IUser[]>(USER__SET_DATA_ALL);
export const setDataOutsideRoomUserAction = createAction<IUser[]>(
  USER__SET_DATA_OUTSIDE_ROOM
);
export const setDataInsideRoomUserAction = createAction<IUser[]>(
  USER__SET_DATA_INSIDE_ROOM
);
export const setLoadingUserAction = createAction<boolean>(USER__SET_LOADING);
