import { AxiosResponse } from 'axios';
import { getApi } from '../Api';
import IUserDetails from '../../types/user/IUser';

export const getUserRequest = async (): Promise<Partial<IUserDetails>> => {
  const response: AxiosResponse<Partial<IUserDetails>> = await getApi().get('/users');
  return response.data;
};
