import { ApolloError, useApolloClient, useQuery } from '@apollo/client';
import { useState } from 'react';
import { message } from 'antd';

import { Query, UserInfo } from '../types/__generated__';
import { USER_INFO } from '../apollo/queries';
import { userLogout } from '../utils';

interface UseCurrentUser {
  userInfo: UserInfo | undefined;
  error: ApolloError | undefined;
  loading: boolean;
}

export const useCurrentUser = (): UseCurrentUser => {
  const [userInfo, setUserInfo] = useState<UserInfo>();
  const client = useApolloClient();

  const { error, loading } = useQuery<Query>(USER_INFO, {
    onCompleted: ({ contextUserInfo }) => {
      if (contextUserInfo) setUserInfo(contextUserInfo);
    },
    onError: async (error) => {
      if (error.message === 'Unauthorized') {
        userLogout(client);
        return;
      }
      await message.error('Error fetching user information');
    },
  });

  return { userInfo, error, loading };
};
