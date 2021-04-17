import React, { FC } from 'react';
import { useApolloClient } from '@apollo/client';
import { useHistory } from 'react-router-dom';
import { Button } from 'antd';
import { isLoggedInVar } from '../apollo/cache';

interface LogoutButtonProps {
  callback?: () => void;
}

const LogoutButton: FC<LogoutButtonProps> = ({
  callback,
}: LogoutButtonProps) => {
  const client = useApolloClient();
  const history = useHistory();

  return (
    <Button
      type="primary"
      onClick={() => {
        // Since we're logging out, remove all traces of the current user from the cache.
        client.cache.evict({ fieldName: 'user' });
        client.cache.gc();

        // Remove user details from localStorage.
        localStorage.removeItem('token');

        // Let other parts of the application that are relying on logged in
        // state know we're now logged out.
        isLoggedInVar(false);

        // Redirect back to home page
        history.push('/');

        // Execute callback
        callback?.();
      }}
    >
      Logout
    </Button>
  );
};

export default LogoutButton;
