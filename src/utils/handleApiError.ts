import ApiException from '../types/api/ApiException';
import IApiError from '../types/api/IApiError';
import { AxiosError } from 'axios';

const handleApiError = (err: AxiosError): ApiException => {
  const errorData: IApiError = err.response?.data as unknown as IApiError;
  const exception: ApiException = new ApiException(errorData);

  return exception;
};

export default handleApiError;
