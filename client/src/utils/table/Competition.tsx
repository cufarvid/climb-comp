import React from 'react';
import { Space, Tag, TagProps } from 'antd';

import { ColumnsType } from 'antd/lib/table/interface';
import { Competition } from '../../types/__generated__';
import { CompetitionType } from '../../types';
import { formatDateTime } from '../index';

export interface CompetitionRow {
  id: number;
  name: string;
  startDate: string;
  address: string;
  compType: string;
  country: string;
}

/**
 * Competitions table column definition
 */
export const COMPETITION_COLUMNS: ColumnsType<CompetitionRow> = [
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
  },
  {
    title: 'Type',
    dataIndex: 'compType',
    key: 'compType',
    render: function RenderCompType(compType: CompetitionType): JSX.Element {
      return (
        <Tag color={compTypeTagColor(compType)} key={compType}>
          {compType.toUpperCase()}
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
  compType: CompetitionType,
): TagProps['color'] => {
  switch (compType) {
    case CompetitionType.BOULDER:
      return 'green';
    case CompetitionType.LEAD:
      return 'blue';
    case CompetitionType.SPEED:
      return 'red';
  }
};

/**
 * Parses competitions array to competition table rows
 * @param competitions
 */
export const parseCompetitions = (
  competitions: Competition[] | undefined,
): CompetitionRow[] => {
  if (!competitions) return [];
  console.log(competitions);
  return competitions.map((competition) => ({
    id: competition.id,
    name: competition.name,
    startDate: formatDateTime(competition.startDate),
    address: competition.address,
    compType: competition.compType.name,
    country: competition.location.country.name ?? '',
  }));
};
