import React, { FC } from 'react';
import { useMutation } from '@apollo/client';
import { Form, Input, message, Modal, Select } from 'antd';

import {
  Mutation,
  MutationRegisterArgs,
  MutationUpdateUserArgs,
  RegisterInput,
  User,
  UserRole,
} from '../../types/__generated__';
import { USER_ADD, USER_UPDATE } from '../../apollo/mutations';
import { ModalType } from '../../types';

interface Props {
  visible: boolean;
  setVisible: (value: boolean) => void;
  type: ModalType;
  user?: User;
}

const UserModal: FC<Props> = ({ visible, setVisible, type, user }: Props) => {
  /**
   * Add user mutation
   */
  const [addUser] = useMutation<Mutation, MutationRegisterArgs>(USER_ADD, {
    onCompleted: ({ register }) => {
      if (register) {
        setVisible(false);
        void message.success('User successfully added');
      }
    },
    onError: () => message.error('Error adding user'),
  });

  /**
   * Edit user mutation
   */
  const [editUser] = useMutation<Mutation, MutationUpdateUserArgs>(
    USER_UPDATE,
    {
      onCompleted: ({ updateUser }) => {
        if (updateUser) {
          setVisible(false);
          void message.success('User successfully updated');
        }
      },
      onError: () => message.error('Error updating user'),
    },
  );

  const [form] = Form.useForm();

  const onOk = async () => {
    const { email, firstName, lastName, role }: RegisterInput =
      await form.validateFields();
    form.resetFields();

    switch (type) {
      case ModalType.ADD:
        await addUser({
          variables: {
            credentials: {
              email,
              firstName,
              lastName,
              role,
              password: email,
            },
          },
        });
        break;
      case ModalType.EDIT:
        if (!user) return;
        await editUser({
          variables: {
            where: {
              id: user.id,
            },
            data: {
              email: { set: email },
              firstName: { set: firstName },
              lastName: { set: lastName },
              role: { set: role },
            },
          },
        });
        break;
    }
  };

  const title = `${type} user`;

  return (
    <Modal
      title={title}
      visible={visible}
      onCancel={() => setVisible(false)}
      onOk={onOk}
    >
      <Form form={form}>
        <Form.Item
          label="First name"
          name="firstName"
          rules={[
            { required: true, message: 'Please input users first name!' },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Last name"
          name="lastName"
          rules={[{ required: true, message: 'Please input users last name!' }]}
        >
          <Input />
        </Form.Item>
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
          label="Role"
          name="role"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Select>
            {Object.keys(UserRole).map((role) => (
              <Select.Option key={role} value={role}>
                {role}
              </Select.Option>
            ))}
          </Select>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default UserModal;
