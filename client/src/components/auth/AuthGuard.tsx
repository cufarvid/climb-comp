import React, { FC, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useApolloClient, useLazyQuery, useReactiveVar } from '@apollo/client';
import { message, Spin } from 'antd';

import { userLogout } from '../../utils';
import { loggedUserInfo } from '../../apollo/cache';
import { USER_INFO } from '../../apollo/queries';

const AuthGuard: FC = () => {
  const client = useApolloClient();
  const history = useHistory();
  const userInfo = useReactiveVar(loggedUserInfo);

  const [getUserInfo, { loading }] = useLazyQuery(USER_INFO, {
    onCompleted: ({ contextUserInfo }) => {
      if (contextUserInfo && !userInfo) loggedUserInfo(contextUserInfo);
    },
    onError: async (error) => {
      userLogout(client, history);
      await message.error(error.message);
    },
  });

  useEffect(() => {
    getUserInfo();
  }, []);

  if (loading) return <Spin />;

  return null;
};

export default AuthGuard;
