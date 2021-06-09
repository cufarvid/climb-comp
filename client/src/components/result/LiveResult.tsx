import React, { FC } from 'react';
import { Table } from 'antd';
import { ResultRecord } from '../../types';
import { RESULT_COLUMNS } from '../../constants/Result';
import { PageSection } from '../index';

const DATA: ResultRecord[] = [
  {
    rank: 1,
    name: 'Vid Cufar',
    country: 'Slovenia',
    club: 'SPO Radovljica',
    qualification: '23',
    semiFinal: '39+',
    final: 'TOP',
  },
  {
    rank: 2,
    name: 'Janez Novak',
    country: 'Slovenia',
    club: 'Kranj',
    qualification: '20',
    semiFinal: '36',
    final: '28+',
  },
  {
    rank: 3,
    name: 'Janez Nevak',
    country: 'Slovenia',
    club: 'Jesenice',
    qualification: '19',
    semiFinal: '35',
    final: '27',
  },
];

const LiveResult: FC = () => {
  return (
    <PageSection title="Category">
      <Table
        columns={RESULT_COLUMNS}
        dataSource={DATA}
        rowKey="rank"
        className="w-100"
      />
    </PageSection>
  );
};

export default LiveResult;
