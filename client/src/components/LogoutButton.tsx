import React, { FC } from 'react';
import { useApolloClient } from '@apollo/client';
import { useHistory } from 'react-router-dom';
import { Button } from 'antd';
import { userLogout } from '../utils';

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
      onClick={() => userLogout(client, history, callback)}
    >
      Logout
    </Button>
  );
};

export default LogoutButton;
