import { ColumnsType } from 'antd/lib/table/interface';
import { ResultRecord } from '../types';

export const RESULT_COLUMNS: ColumnsType<ResultRecord> = [
  {
    title: 'Rank',
    dataIndex: 'rank',
    sorter: {
      compare: (a, b) => a.rank - b.rank,
    },
  },
  {
    title: 'Name',
    dataIndex: 'name',
    sorter: {
      compare: (a, b) => a.name.localeCompare(b.name),
    },
  },
  {
    title: 'Country',
    dataIndex: 'country',
    sorter: {
      compare: (a, b) => a.country.localeCompare(b.country),
    },
  },
  {
    title: 'Club',
    dataIndex: 'club',
    sorter: {
      compare: (a, b) => a.club.localeCompare(b.club),
    },
  },
  {
    title: 'Qualification',
    dataIndex: 'qualification',
  },
  {
    title: 'Semi-Final',
    dataIndex: 'semiFinal',
  },
  {
    title: 'Final',
    dataIndex: 'final',
  },
];
