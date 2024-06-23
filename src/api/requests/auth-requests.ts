import { AxiosResponse } from 'axios';

import ILoginRequest from '../../types/requests/ILoginRequest';
import IRegisterRequest from '../../types/requests/IRegisterRequest';
import ILoginResponse from '../../types/responses/ILoginResponse';
import { getApi } from '../Api';

export const loginRequest = async (data: ILoginRequest): Promise<ILoginResponse> => {
  const response: AxiosResponse<ILoginResponse> = await getApi().post('/auth/login', data);
  return response.data;
};

export const registerRequest = async (data: IRegisterRequest): Promise<void> => {
  await getApi().post('/auth/register', data);
};
