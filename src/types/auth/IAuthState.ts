interface IAuthState {
  token: string;
  state: boolean;
  loading: boolean;
  loginError: string;
  isLoginError: boolean;
  registerError: string;
  isRegistered: boolean;
}

export default IAuthState;
