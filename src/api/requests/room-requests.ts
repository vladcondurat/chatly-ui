import { AxiosResponse } from 'axios';
import { getApi } from '../Api';
import IPostRoomRequest from '../../types/room/IPostRoomRequest';
import IGetRoomsResponse from '../../types/room/IGetRoomsResponse';
import IRoom from '../../types/room/IRoom';
import IRoomDetails from '../../types/room/IRoomDetails';
import IAddUsersToRoomRequest from '../../types/room/IAddUsersToRoomRequest';

export const postRoomRequest = async (data: IPostRoomRequest): Promise<Partial<IRoom>> => {
  const response: AxiosResponse<Partial<IRoom>> = await getApi().post('/rooms', data);
  return response.data;
};

export const addUsersToRoomRequest = async (data: IAddUsersToRoomRequest, roomId: string): Promise<void> => {
  await getApi().post(`/rooms/add-users/${roomId}`, data);
};

export const getRoomsRequest = async (): Promise<IGetRoomsResponse> => {
  const response: AxiosResponse<IGetRoomsResponse> = await getApi().get('/rooms');
  return response.data;
};

export const getRoomDetailsRequest = async (roomId: string): Promise<Partial<IRoom>> => {
  const response: AxiosResponse<Partial<IRoom>> = await getApi().get(`/rooms/${roomId}`);
  return response.data;
};

export const putRoomRequest = async (data: Partial<IRoomDetails>, roomId: string): Promise<Partial<IRoom>> => {
  const response: AxiosResponse<Partial<IRoom>> = await getApi().put(`/rooms/${roomId}`, data);
  return response.data;
};

export const deleteRoomRequest = async (roomId: string): Promise<void> => {
  await getApi().delete(`/rooms/${roomId}`);
};
