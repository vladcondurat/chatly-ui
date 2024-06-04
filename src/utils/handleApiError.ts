import ApiException from '../types/api/ApiException';
import IApiError from '../types/api/IApiError';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const handleApiError = (err: any): ApiException => {
  const errorData: IApiError = err.response?.data as unknown as IApiError;
  const exception: ApiException = new ApiException(errorData);

  return exception;
};

export default handleApiError;
