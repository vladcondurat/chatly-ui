import { AxiosResponse } from 'axios';
import { getApi } from '../Api';
import IUser from '../../types/user/IUser';

export const getUserRequest = async (): Promise<Partial<IUser>> => {
  const response: AxiosResponse<Partial<IUser>> = await getApi().get('/users');
  return response.data;
};
