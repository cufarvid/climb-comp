import React, { FC } from 'react';
import { useReactiveVar } from '@apollo/client';
import { Button, Drawer, Row } from 'antd';

import { isLoggedInVar } from '../apollo/cache';
import { LoginForm, LogoutButton, UserInfo } from '../components';

interface LoginProps {
  visible: boolean;
  setVisible: (visible: boolean) => void;
}

const UserDrawer: FC<LoginProps> = ({ visible, setVisible }: LoginProps) => {
  const isLoggedIn = useReactiveVar(isLoggedInVar);

  const closeDrawer = (): void => setVisible(false);

  const title: string = isLoggedIn ? 'User information' : 'User login';

  const footer = isLoggedIn ? (
    <Row justify="space-between">
      <LogoutButton callback={closeDrawer} />
      <Button disabled>Edit settings</Button> {/*TODO*/}
    </Row>
  ) : null;

  return (
    <Drawer
      title={title}
      width={420}
      visible={visible}
      onClose={closeDrawer}
      footer={footer}
    >
      {isLoggedIn ? <UserInfo /> : <LoginForm callback={closeDrawer} />}
    </Drawer>
  );
};

export default UserDrawer;
