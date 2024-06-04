import IConfig from '../types/config/IConfig';

const Environment: IConfig = {
  environment: import.meta.env.NODE_ENV || 'development',
  api: {
    apiUrl: import.meta.env.VITE_API_URL || 'http://localhost:5281/api/',
  },
};

export default Environment;
