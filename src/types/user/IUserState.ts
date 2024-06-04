import IUserData from './IUserData';

interface IUserState {
  test: IUserData;
  username: string;
  avatarUrl: string;
  loading: boolean;
}

export default IUserState;
