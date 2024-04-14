interface IAuthState {
  token: string;
  refreshToken: string;
  state: boolean;
  loading: boolean;
  loginError: boolean;
}

export default IAuthState;
