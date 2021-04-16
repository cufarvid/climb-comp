import React, { FC } from 'react';
import { useHistory } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { Button, Checkbox, Drawer, Form, Input, message } from 'antd';

import { isLoggedInVar } from '../apollo/cache';
import { USER_LOGIN } from '../apollo/mutations/';

import { MESSAGE, ROUTE } from '../constants';

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

interface LoginProps {
  visible: boolean;
  setVisible: (visible: boolean) => void;
}

const LoginDrawer: FC<LoginProps> = ({ visible, setVisible }: LoginProps) => {
  const history = useHistory();
  const [login, { loading }] = useMutation(USER_LOGIN, {
    onCompleted: ({ login }) => {
      if (login) {
        localStorage.setItem('token', login.token);
        isLoggedInVar(true);

        message.success(MESSAGE.LOGIN_SUCCESS).then();

        // Close drawer
        setVisible(false);

        // Redirect to user page
        history.push(ROUTE.USER);
      }
    },
    onError: () => message.error(MESSAGE.ERROR_BASIC),
  });

  const onFinish = async ({ email, password }: never) => {
    await login({ variables: { credentials: { email, password } } });
  };

  return (
    <Drawer
      title="Login to your account"
      width={420}
      visible={visible}
      onClose={() => setVisible(false)}
    >
      <Form
        {...layout}
        name="basic"
        initialValues={{ remember: true }}
        onFinish={onFinish}
      >
        <Form.Item
          label="Email"
          name="email"
          rules={[
            {
              required: true,
              type: 'email',
              message: 'Please input a valid email!',
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <Input.Password />
        </Form.Item>
        <Form.Item {...tailLayout} name="remember" valuePropName="checked">
          <Checkbox>Remember me</Checkbox>
        </Form.Item>
        <Form.Item {...tailLayout}>
          <Button loading={loading} type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </Drawer>
  );
};

export default LoginDrawer;
