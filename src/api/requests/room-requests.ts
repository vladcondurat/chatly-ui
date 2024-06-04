import { AxiosResponse } from 'axios';
import { getApi } from '../Api';
import IPostRoomRequest from '../../types/room/IPostRoomRequest';
import IGetRoomsResponse from '../../types/room/IGetRoomsResponse';
import IRoom from '../../types/room/IRoom';

export const getRoomsRequest = async (): Promise<IGetRoomsResponse> => {
  const response: AxiosResponse<IGetRoomsResponse> = await getApi().get('/rooms');
  return response.data;
};

export const getRoomDetailsRequest = async (roomId: string): Promise<Partial<IRoom>> => {
  const response: AxiosResponse<Partial<IRoom>> = await getApi().get(`/rooms/${roomId}`);
  return response.data;
};

export const postRoomRequest = async (data: IPostRoomRequest): Promise<Partial<IRoom>> => {
  const response: AxiosResponse<Partial<IRoom>> = await getApi().post('/rooms', data);
  return response.data;
};
