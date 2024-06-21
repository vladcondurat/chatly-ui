import { isArray, toString } from 'lodash';
import IUser from '../types/user/IUser';
import IUsers from '../types/user/IUsersResponse';

export const mapUserResponseToUser = (data: Partial<IUser>): IUser => {
  const user: IUser = {
    id: toString(data?.id),
    username: data?.username,
    email: data?.email,
    avatarUrl: data?.avatarUrl,
  };

  return user;
};

export const mapUsersResponseToUsers = (data: IUsers): IUser[] => {
  if (!data || !isArray(data.users)) {
    return [];
  }

  return data.users.map(user => mapUserResponseToUser(user));
};
