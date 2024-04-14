import IApiError from './IApiError';

class ApiException extends Error {
  data?: IApiError;

  constructor(data: IApiError) {
    super();
    this.data = data;
  }
}

export default ApiException;
