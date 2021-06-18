import React, { FC } from 'react';
import { Form, Input, Modal, Select } from 'antd';
import { UserRole } from '../../types/__generated__';

interface Props {
  visible: boolean;
  setVisible: (value: boolean) => void;
}

const UserModal: FC<Props> = ({ visible, setVisible }: Props) => {
  return (
    <Modal
      title="New user"
      visible={visible}
      onCancel={() => setVisible(false)}
    >
      <Form>
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
