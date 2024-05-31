import Cookies from 'js-cookie';

export const TOKEN_AUTH = 'access-token';

export function setToken(cookie: string, token: string) {
  Cookies.set(cookie, token, { expires: 3 });
}

export function getToken(cookie: string): string | undefined {
  return Cookies.get(cookie);
}

export function removeToken(cookie: string) {
  Cookies.remove(cookie);
}
