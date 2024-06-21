import { AxiosResponse } from 'axios';
import { getApi } from '../Api';
import IUser from '../../types/user/IUser';
import IUsers from '../../types/user/IUsersResponse';

export const updateUserRequest = async (
  user: FormData
): Promise<Partial<IUser>> => {
  const response: AxiosResponse<Partial<IUser>> = await getApi().put(
    '/users',
    user
  );
  return response.data;
};

export const getUserRequest = async (): Promise<Partial<IUser>> => {
  const response: AxiosResponse<Partial<IUser>> = await getApi().get('/users');
  return response.data;
};

export const getAllUsersRequest = async (): Promise<IUsers> => {
  const response: AxiosResponse<IUsers> = await getApi().get('/users/all');
  return response.data;
};

export const getAllUsersInRoomRequest = async (
  roomId: string
): Promise<IUsers> => {
  const response: AxiosResponse<IUsers> = await getApi().get(
    `/users/in-room/${roomId}`
  );
  return response.data;
};

export const getAllUsersOutsideRoomRequest = async (
  roomId: string
): Promise<IUsers> => {
  const response: AxiosResponse<IUsers> = await getApi().get(
    `/users/outside-room/${roomId}`
  );
  return response.data;
};
