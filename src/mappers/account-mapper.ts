import { toNumber, toString } from 'lodash';
import IAccount from '../types/account/IAccount';
import IAccountResponse from '../types/account/IAccountResponse';

export const mapAccountResponseToAccount = (data: Partial<IAccountResponse>): IAccount => {
  const account: IAccount = {
    data: {
      id: toNumber(data?.id),
      emailAddress: toString(data?.emailAddress),
      username: toString(data?.username),
    },
  };

  return account;
};
