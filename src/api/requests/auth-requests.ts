import { AxiosResponse } from 'axios';
import ILoginResponse from '../../types/auth/ILoginResponse';
import ILoginRequest from '../../types/auth/ILoginRequest';
import { getApi } from '../Api';

export const loginRequest = async (data: ILoginRequest): Promise<ILoginResponse> => {
  const response: AxiosResponse<ILoginResponse> = await getApi().post('/api/auth/login', data);

  return response.data;
};
