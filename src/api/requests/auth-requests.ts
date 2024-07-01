import { getApi } from '@app/api/Api';
import ILoginRequest from '@app/types/requests/ILoginRequest';
import IRegisterRequest from '@app/types/requests/IRegisterRequest';
import ILoginResponse from '@app/types/responses/ILoginResponse';
import { AxiosResponse } from 'axios';

export const loginRequest = async (data: ILoginRequest): Promise<ILoginResponse> => {
  const response: AxiosResponse<ILoginResponse> = await getApi().post('/auth/login', data);
  return response.data;
};

export const registerRequest = async (data: IRegisterRequest): Promise<void> => {
  await getApi().post('/auth/register', data);
};
