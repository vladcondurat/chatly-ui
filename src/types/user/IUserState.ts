import IUser from './IUser';

interface IUserState {
  users: IUser[];
  details: IUser;
  loading: boolean;
}

export default IUserState;
