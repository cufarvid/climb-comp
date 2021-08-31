import React, { FC, useState } from 'react';
import { useQuery } from '@apollo/client';
import { Button, Table } from 'antd';

import { Query } from '../../types/__generated__';
import { LIST_COMPETITIONS } from '../../apollo/queries';
import {
  CompetitionRow,
  getCompetitionColumns,
  parseCompetitions,
} from '../../utils';
import { TABLE_PAGINATION_CONFIG } from '../../constants';
import { ModalType } from '../../types';
import { CompetitionModal } from '../../components/competition';

const ListCompetitions: FC = () => {
  const [competition, setCompetition] = useState<CompetitionRow>();
  const [modalType, setModalType] = useState<ModalType>(ModalType.ADD);
  const [modalVisible, setModalVisible] = useState(false);

  const { data, loading } = useQuery<Query>(LIST_COMPETITIONS);

  /**
   * Callback called from edit button on each row
   * @param compRow
   */
  const setEditMode = (compRow: CompetitionRow): void => {
    // Set selected row
    setCompetition(compRow);
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
        columns={getCompetitionColumns(setEditMode)}
        dataSource={parseCompetitions(data?.competitions)}
        loading={loading}
        pagination={TABLE_PAGINATION_CONFIG}
      />

      <CompetitionModal
        competition={competition}
        type={modalType}
        visible={modalVisible}
        setVisible={setModalVisible}
      />
    </>
  );
};

export default ListCompetitions;
