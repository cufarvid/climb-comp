import { History } from 'history';
import { COLOR } from '../constants';
import { ColorVariant } from '../types';
import { ApolloClient } from '@apollo/client';
import { isLoggedInVar, loggedUserId, loggedUserInfo } from '../apollo/cache';

/**
 * Returns color codes for provided color variant
 * in the following format [background, text, link]
 * @param variant
 * @return [string, string, string]
 */
export const colorFromVariant = (
  variant: ColorVariant,
): [string, string, string] => {
  switch (variant) {
    case 'dark':
      return [COLOR.BASE, COLOR.WHITE, COLOR.LIGHTER];
    case 'light':
    default:
      return [COLOR.WHITE, COLOR.BASE, COLOR.DARK];
  }
};

export const urlPathToArray = (path: string): string[] => {
  return path.split('/');
};

/**
 * Performs user logout and Apollo client cleanup
 * @param client
 * @param history
 * @param callback
 */
export const userLogout = (
  client: ApolloClient<unknown>,
  history: History,
  callback?: () => void,
): void => {
  // Since we're logging out, remove all traces of the current user from the cache.
  client.cache.evict({ fieldName: 'user' });
  client.cache.gc();

  // Remove user details from localStorage.
  localStorage.removeItem('token');
  localStorage.removeItem('publicId');

  // Let other parts of the application that are relying on logged in
  // state know we're now logged out.
  isLoggedInVar(false);
  loggedUserId(null);
  loggedUserInfo(null);

  // Redirect back to home page
  history.push('/');

  // Execute callback
  callback?.();
};

/**
 * Capitalizes first letter of input string
 * @param string Input string
 */
export const capitalize = (string: string): string => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};
