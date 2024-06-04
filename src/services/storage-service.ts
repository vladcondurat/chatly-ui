import Cookies from 'js-cookie';

export const AUTH_TOKEN = 'access-token';

export function setToken(cookie: string, token: string) {
  Cookies.set(cookie, token, { expires: 3, secure: true });
}

export function getToken(cookie: string): string | undefined {
  return Cookies.get(cookie);
}

export function removeToken(cookie: string) {
  Cookies.remove(cookie);
}
