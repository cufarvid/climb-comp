import React from 'react';
import { Space, Tag, TagProps } from 'antd';
import { ColumnsType } from 'antd/lib/table/interface';

import { User, UserRole } from '../../types/__generated__';
import { MESSAGE } from '../../constants';

export interface UserRow {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  country: string;
  role: UserRole;
}

/**
 * Users table column definition
 * Takes a callback for current row setter
 * @param editCallback Current row edit callback
 */
export const getUserColumns = (
  editCallback: (row: UserRow) => void,
): ColumnsType<UserRow> => [
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
    render: function SpaceRender(row: UserRow): JSX.Element {
      return (
        <Space size="middle">
          <a onClick={() => editCallback(row)}>Edit</a>
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

/**
 * Parses users array to user table rows
 * @param users
 */
export const parseUsers = (users: User[] | undefined): UserRow[] => {
  if (!users) return [];

  return users.map((user) => ({
    id: user.id,
    firstName: user.firstName,
    lastName: user.lastName,
    email: user.email,
    role: user.role,
    country: user.country?.name || MESSAGE.NO_DATA,
  }));
};
