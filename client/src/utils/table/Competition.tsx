import React from 'react';
import { Space, Tag, TagProps } from 'antd';
import dayjs, { Dayjs } from 'dayjs';
import { ColumnsType } from 'antd/lib/table/interface';

import { Competition } from '../../types/__generated__';
import { formatDateTime } from '../index';

export interface CompetitionRow {
  id: number;
  name: string;
  description: string;
  startDate: Dayjs;
  endDate: Dayjs;
  address: string;
  compType: Competition['compType'];
  country: Competition['country'];
  region: Competition['region'];
}

export const getCompetitionColumns = (
  editCallback: (row: CompetitionRow) => void,
): ColumnsType<CompetitionRow> => [
  {
    title: 'ID',
    dataIndex: 'id',
    key: 'id',
  },
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Start date',
    dataIndex: 'startDate',
    key: 'startDate',
    render: (value) => formatDateTime(value),
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: 'Country',
    dataIndex: 'country',
    key: 'country',
    render: (value) => value.name,
  },
  {
    title: 'Type',
    dataIndex: 'compType',
    key: 'compType',
    render: function RenderCompType(
      compType: Competition['compType'],
    ): JSX.Element {
      return (
        <Tag color={compTypeTagColor(compType)} key={compType.name}>
          {compType.name.toUpperCase()}
        </Tag>
      );
    },
  },
  {
    title: 'Action',
    key: 'action',
    render: function SpaceRender(row: CompetitionRow): JSX.Element {
      return (
        <Space size="middle">
          <a onClick={() => editCallback(row)}>Edit</a>
        </Space>
      );
    },
  },
];

/**
 * Returns tag color based on competition type
 * @param compType Competition type
 */
export const compTypeTagColor = (
  compType: Competition['compType'],
): TagProps['color'] => {
  switch (compType.name) {
    case 'Boulder':
      return 'green';
    case 'Lead':
      return 'blue';
    case 'Speed':
      return 'red';
  }
};

/**
 * Parses competitions array to competition table rows
 * @param competitions Competitions array
 */
export const parseCompetitions = (
  competitions: Competition[] | undefined,
): CompetitionRow[] => {
  if (!competitions) return [];

  return competitions.map((competition) => ({
    id: competition.id,
    name: competition.name,
    description: competition.description,
    startDate: dayjs(competition.startDate),
    endDate: dayjs(competition.endDate),
    address: competition.address,
    compType: competition.compType,
    country: competition.country,
    region: competition.region,
  }));
};
