import React, { FC, useEffect } from 'react';
import { useApolloClient } from '@apollo/client';
import { userLogout } from '../../utils';
import { message } from 'antd';
import { PageSection } from '../index';

const Unauthorized: FC = () => {
  const client = useApolloClient();

  const logout = async (): Promise<void> => {
    userLogout(client);
    await message.error('Unauthorized');
  };

  useEffect(() => void logout(), []);

  return (
    <PageSection title="Unauthorized">
      You don&apos;t have privileges to view this page
    </PageSection>
  );
};

export default Unauthorized;
