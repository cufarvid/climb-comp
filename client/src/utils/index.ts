import { History } from 'history';
import { COLOR, REGEXP } from '../constants';
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

/*
 * Parses 'mm:ss:SSS: time string to milliseconds
 * @param time
 */
export const parseTimeString = (time: string): number => {
  if (!REGEXP.TIME.test(time))
    throw new Error('Time string does not match specified format.');

  const [minute, second, millisecond] = time.split(':');

  return +minute * 60 * 1000 + +second * 1000 + +millisecond;
};

/**
 * Pads provided number with specified length and fill string
 * @param number
 * @param maxLength
 * @param fillString
 */
export const padNumberStart = (
  number: number,
  maxLength: number,
  fillString = '0',
): string => {
  return String(number).padStart(maxLength, fillString);
};
