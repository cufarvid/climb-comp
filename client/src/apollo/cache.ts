import { InMemoryCache, makeVar } from '@apollo/client';
import { User, Route } from '../types/generated';

export const cache: InMemoryCache = new InMemoryCache();

export const isLoggedInVar = makeVar<boolean>(!!localStorage.getItem('token'));

export const loggedUserId = makeVar<string | null>(
  localStorage.getItem('publicId'),
);

interface UserInfo {
  user: User;
  route: Route | null;
}

export const loggedUserInfo = makeVar<UserInfo | null>(null);
