import { toString } from 'lodash';
import IUser from '../types/user/IUser';

export const mapUserResponseToUser = (data: Partial<IUser>): IUser => {
  const user: IUser = {
    id: toString(data?.id),
    details: data?.details,
  };

  return user;
};
