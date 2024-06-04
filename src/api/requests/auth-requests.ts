import { AxiosResponse } from 'axios';
import { getApi } from '../Api';
import ILoginResponse from '../../types/auth/ILoginResponse';
import ILoginRequest from '../../types/auth/ILoginRequest';
import IRegisterRequest from '../../types/auth/IRegisterRequest';

export const loginRequest = async (data: ILoginRequest): Promise<ILoginResponse> => {
  const response: AxiosResponse<ILoginResponse> = await getApi().post('/auth/login', data);
  return response.data;
};

export const registerRequest = async (data: IRegisterRequest): Promise<void> => {
  await getApi().post('/auth/register', data);
};
