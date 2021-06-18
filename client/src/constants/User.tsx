import React from 'react';
import { Space, Tag, TagProps } from 'antd';
import { ColumnsType } from 'antd/lib/table/interface';

import { UserRecord } from '../types';
import { UserRole } from '../types/__generated__';

/**
 * Users table column definition
 */
export const USER_COLUMNS: ColumnsType<UserRecord> = [
  {
    title: 'ID',
    dataIndex: 'id',
    key: 'id',
  },
  {
    title: 'First name',
    dataIndex: 'firstName',
    key: 'firstName',
  },
  {
    title: 'Last name',
    dataIndex: 'lastName',
    key: 'lastName',
  },
  {
    title: 'Email',
    dataIndex: 'email',
    key: 'email',
  },
  {
    title: 'Country',
    dataIndex: 'country',
    key: 'country',
  },
  {
    title: 'Role',
    dataIndex: 'role',
    key: 'role',
    render: function TagRender(role: UserRole): JSX.Element {
      return (
        <Tag color={userRoleTagColor(role)} key={role}>
          {role}
        </Tag>
      );
    },
  },
  {
    title: 'Action',
    key: 'action',
    render: function SpaceRender(): JSX.Element {
      return (
        <Space size="middle">
          <a>Edit</a>
          <a>Delete</a>
        </Space>
      );
    },
  },
];

/**
 * Returns tag color based on user role
 * @param role User role enum
 */
export const userRoleTagColor = (role: UserRole): TagProps['color'] => {
  switch (role) {
    case UserRole.User:
      return 'green';
    case UserRole.Judge:
      return 'yellow';
    case UserRole.Moderator:
      return 'blue';
    case UserRole.Administrator:
      return 'red';
  }
};
