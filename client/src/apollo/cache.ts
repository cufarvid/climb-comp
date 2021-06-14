import { InMemoryCache, makeVar } from '@apollo/client';
import { UserInfo } from '../types/__generated__';

export const cache: InMemoryCache = new InMemoryCache();

export const isLoggedInVar = makeVar<boolean>(!!localStorage.getItem('token'));

export const loggedUserId = makeVar<string | null>(
  localStorage.getItem('publicId'),
);

export const loggedUserInfo = makeVar<UserInfo | null>(null);
