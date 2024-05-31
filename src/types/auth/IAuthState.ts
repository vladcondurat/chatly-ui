interface IAuthState {
  token: string;
  state: boolean;
  loading: boolean;
  loginError: boolean;
}

export default IAuthState;
