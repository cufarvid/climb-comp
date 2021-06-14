import { ApolloError, useQuery } from '@apollo/client';
import { useState } from 'react';
import { message } from 'antd';

import { Query, UserInfo } from '../types/__generated__';
import { USER_INFO } from '../apollo/queries';

interface UseCurrentUser {
  userInfo: UserInfo | undefined;
  error: ApolloError | undefined;
  loading: boolean;
}

export const useCurrentUser = (): UseCurrentUser => {
  const [userInfo, setUserInfo] = useState<UserInfo>();

  const { error, loading } = useQuery<Query>(USER_INFO, {
    onCompleted: ({ contextUserInfo }) => {
      if (contextUserInfo) setUserInfo(contextUserInfo);
    },
    onError: () => message.error('Error fetching user information'),
  });

  return { userInfo, error, loading };
};
