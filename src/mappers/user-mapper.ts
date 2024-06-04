import { toString } from 'lodash';
import IUser from '../types/user/IUser';
import IUserResponse from '../types/user/IUserResponse';

export const mapUserResponseToUser = (data: Partial<IUserResponse>): IUser => {
  const user: IUser = {
    data: {
      username: toString(data?.username),
      avatarUrl: toString(data?.avatarUrl),
    },
  };

  return user;
};
