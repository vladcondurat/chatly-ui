import IConfig from '../types/config/IConfig';

const Environment: IConfig = {
  environment: process.env.NODE_ENV || 'development',
  api: {
    apiUrl: process.env.API_URL || 'http://localhost:3000/api',
  },
};

export default Environment;
