import { InMemoryCache, makeVar } from '@apollo/client';

export const cache: InMemoryCache = new InMemoryCache({
  typePolicies: {
    LoggedUser: {
      fields: {
        isLoggedIn: {
          read() {
            return isLoggedInVar();
          },
        },
      },
    },
  },
});

export const isLoggedInVar = makeVar<boolean>(!!localStorage.getItem('token'));
