import { AxiosResponse } from 'axios';
import { getApi } from '../Api';
import IAccountResponse from '../../types/account/IAccountResponse';

export const accountGetRequest = async (): Promise<IAccountResponse> => {
  const response: AxiosResponse<IAccountResponse> = await getApi().get('/api/account');

  return response.data;
};
