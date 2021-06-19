import React, { FC } from 'react';
import { Button, Checkbox, Form, Input, message } from 'antd';
import { useMutation } from '@apollo/client';

import { USER_LOGIN } from '../apollo/mutations';
import { isLoggedInVar } from '../apollo/cache';
import { MESSAGE, ROUTE } from '../constants';
import { useHistory } from 'react-router-dom';

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

interface LoginFormProps {
  callback?: () => void;
}

const LoginForm: FC<LoginFormProps> = ({ callback }: LoginFormProps) => {
  const history = useHistory();
  const [login, { loading }] = useMutation(USER_LOGIN, {
    onCompleted: ({ login }) => {
      if (login) {
        localStorage.setItem('token', login.token);
        localStorage.setItem('publicId', login.publicId);

        isLoggedInVar(true);

        message.success(MESSAGE.LOGIN_SUCCESS).then();

        // Redirect to dashboard
        history.push(ROUTE.DASHBOARD);

        // Execute callback
        callback?.();
      }
    },
    onError: () => message.error(MESSAGE.ERROR_BASIC),
  });

  const onFinish = async ({ email, password }: never) => {
    await login({ variables: { credentials: { email, password } } });
  };

  return (
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
  );
};

export default LoginForm;
