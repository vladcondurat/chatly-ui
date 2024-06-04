import { AxiosResponse } from 'axios';
import { getApi } from '../Api';
import IUserResponse from '../../types/user/IUserResponse';

export const getUserRequest = async (): Promise<IUserResponse> => {
  const response: AxiosResponse<IUserResponse> = await getApi().get('/users');
  return response.data;
};
