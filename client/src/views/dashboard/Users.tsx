import React, { FC, useState } from 'react';
import { useQuery } from '@apollo/client';
import { Button, Table } from 'antd';

import { Query, QueryUsersArgs } from '../../types/__generated__';
import { LIST_USERS } from '../../apollo/queries';
import { getUserColumns, parseUsers, UserRow } from '../../utils';
import { UserModal } from '../../components';
import { ModalType } from '../../types';

const Users: FC = () => {
  const [user, setUser] = useState<UserRow>();
  const [modalType, setModalType] = useState<ModalType>(ModalType.ADD);
  const [modalVisible, setModalVisible] = useState(false);

  const { data, loading } = useQuery<Query, QueryUsersArgs>(LIST_USERS);

  /**
   * Callback called from edit button on each row
   * @param userRow
   */
  const setEditMode = (userRow: UserRow): void => {
    // Set selected row
    setUser(userRow);
    // Set modal type to EDIT
    setModalType(ModalType.EDIT);
    // Show the modal
    setModalVisible(true);
  };

  return (
    <>
      <Button
        type="primary"
        className="mb-1"
        onClick={() => setModalVisible(true)}
      >
        Add new
      </Button>
      <Table
        rowKey="id"
        columns={getUserColumns(setEditMode)}
        dataSource={parseUsers(data?.users)}
        loading={loading}
      />

      {/* User modal */}
      <UserModal
        user={user}
        type={modalType}
        visible={modalVisible}
        setVisible={setModalVisible}
      />
    </>
  );
};

export default Users;
