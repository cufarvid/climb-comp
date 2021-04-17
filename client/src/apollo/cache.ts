import { InMemoryCache, makeVar } from '@apollo/client';

export const cache: InMemoryCache = new InMemoryCache();

export const isLoggedInVar = makeVar<boolean>(!!localStorage.getItem('token'));

export const loggedUserId = makeVar<string | null>(
  localStorage.getItem('publicId'),
);
