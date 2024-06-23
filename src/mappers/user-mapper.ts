import IUsers from '@app/types/responses/IUsersResponse';
import IUser from '@app/types/user/IUser';
import { isArray, toString } from 'lodash';

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
