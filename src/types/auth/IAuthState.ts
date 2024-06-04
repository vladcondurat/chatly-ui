interface IAuthState {
  token: string;
  state: boolean;
  loading: boolean;
  loginError: string;
  isLoginError: boolean;
}

export default IAuthState;
