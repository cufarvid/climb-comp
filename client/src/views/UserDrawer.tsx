import React, { FC } from 'react';
import { useReactiveVar } from '@apollo/client';
import { Drawer } from 'antd';

import { isLoggedInVar } from '../apollo/cache';
import { LoginForm, LogoutButton } from '../components';

interface LoginProps {
  visible: boolean;
  setVisible: (visible: boolean) => void;
}

const UserDrawer: FC<LoginProps> = ({ visible, setVisible }: LoginProps) => {
  const isLoggedIn = useReactiveVar(isLoggedInVar);

  const closeDrawer = (): void => setVisible(false);

  const drawerTitle: string = isLoggedIn ? 'User information' : 'User login';

  return (
    <Drawer
      title={drawerTitle}
      width={420}
      visible={visible}
      onClose={closeDrawer}
    >
      {isLoggedIn ? <LogoutButton callback={closeDrawer} /> : <LoginForm />}
    </Drawer>
  );
};

export default UserDrawer;
