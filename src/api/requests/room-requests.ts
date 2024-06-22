import { AxiosResponse } from 'axios';
import { getApi } from '../Api';
import IPostRoomRequest from '../../types/room/IPostRoomRequest';
import IGetRoomsResponse from '../../types/room/IGetRoomsResponse';
import IRoomResponse from '../../types/room/IRoomResponse';
import IUserIds from '../../types/room/IUserIds';

export const postRoomRequest = async (data: IPostRoomRequest): Promise<Partial<IRoomResponse>> => {
  const response: AxiosResponse<Partial<IRoomResponse>> = await getApi().post('/rooms', data);
  return response.data;
};

export const addUsersToRoomRequest = async (data: IUserIds, roomId: string): Promise<void> => {
  await getApi().post(`/rooms/add-users/${roomId}`, data);
};

export const getRoomsRequest = async (): Promise<IGetRoomsResponse> => {
  const response: AxiosResponse<IGetRoomsResponse> = await getApi().get('/rooms');
  return response.data;
};

export const getRoomDetailsRequest = async (roomId: string): Promise<Partial<IRoomResponse>> => {
  const response: AxiosResponse<Partial<IRoomResponse>> = await getApi().get(`/rooms/${roomId}`);
  return response.data;
};

export const putRoomRequest = async (
  data: FormData,
  roomId: string
): Promise<Partial<IRoomResponse>> => {
  const response: AxiosResponse<Partial<IRoomResponse>> = await getApi().put(
    `/rooms/${roomId}`,
    data
  );
  return response.data;
};

export const deleteRoomRequest = async (roomId: string): Promise<void> => {
  await getApi().delete(`/rooms/${roomId}`);
};

export const removeUsersFromRoomRequest = async (
  userIds: string[],
  roomId: string
): Promise<void> => {
  const queryString = userIds.map(id => `userIds=${id}`).join('&');
  await getApi().delete(`/rooms/remove-users/${roomId}?${queryString}`);
};

export const leaveRoomRequest = async (roomId: string): Promise<void> => {
  await getApi().delete(`/rooms/${roomId}`);
};
