import React, { FC, useEffect } from 'react';
import { useMutation } from '@apollo/client';
import { Form, Input, message, Modal, Select } from 'antd';

import {
  Mutation,
  MutationRegisterArgs,
  MutationUpdateUserArgs,
  RegisterInput,
  UserRole,
} from '../../types/__generated__';
import { USER_ADD, USER_UPDATE } from '../../apollo/mutations';
import { ModalType } from '../../types';
import { UserRow } from '../../utils';
import { useCountries, useRegions } from '../../hooks';

interface Props {
  visible: boolean;
  setVisible: (value: boolean) => void;
  type: ModalType;
  user?: UserRow;
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

  const { countries } = useCountries();
  const { regions } = useRegions();

  /**
   * Form object
   */
  const [form] = Form.useForm();

  const onOk = async () => {
    const {
      email,
      firstName,
      lastName,
      role,
      regionId,
      countryId,
    }: RegisterInput = await form.validateFields();

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
              regionId,
              countryId,
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

  const onCancel = (): void => {
    setVisible(false);
    form.resetFields();
  };

  useEffect(() => {
    // Update form fields after user change
    form.setFields([
      { name: 'firstName', value: user?.firstName },
      { name: 'firstName', value: user?.firstName },
      { name: 'lastName', value: user?.lastName },
      { name: 'email', value: user?.email },
      { name: 'role', value: user?.role },
    ]);
  }, [user]);

  const title = `${type} user`;

  return (
    <Modal title={title} visible={visible} onCancel={onCancel} onOk={onOk}>
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
            {Object.values(UserRole).map((role) => (
              <Select.Option key={role} value={role}>
                {role}
              </Select.Option>
            ))}
          </Select>
        </Form.Item>
        <Form.Item
          label="Region"
          name="regionId"
          rules={[
            {
              required: false,
            },
          ]}
        >
          <Select>
            {regions?.map(({ id, name }) => (
              <Select.Option key={id} value={id}>
                {name}
              </Select.Option>
            ))}
          </Select>
        </Form.Item>
        <Form.Item
          label="Country"
          name="countryId"
          rules={[
            {
              required: false,
            },
          ]}
        >
          <Select>
            {countries?.map(({ id, name }) => (
              <Select.Option key={id} value={id}>
                {name}
              </Select.Option>
            ))}
          </Select>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default UserModal;
