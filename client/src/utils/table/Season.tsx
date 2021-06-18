import React from 'react';
import { Space } from 'antd';
import { ColumnsType } from 'antd/lib/table/interface';
import { Season } from '../../types/__generated__';
import { formatDateTime } from '../index';

export interface SeasonRow {
  id: number;
  name: string;
  startDate: string;
  endDate: string;
  description: string;
  year: number;
}

/**
 * Seasons table column definition
 */
export const SEASON_COLUMNS: ColumnsType<SeasonRow> = [
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
    title: 'End date',
    dataIndex: 'endDate',
    key: 'endDate',
  },
  {
    title: 'Description',
    dataIndex: 'description',
    key: 'description',
  },
  {
    title: 'Year',
    dataIndex: 'year',
    key: 'year',
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
 * Parses seasons array to season table rows
 * @param seasons Seasons array
 */
export const parseSeasons = (seasons: Season[] | undefined): SeasonRow[] => {
  if (!seasons) return [];

  return seasons.map((season) => ({
    id: season.id,
    name: season.name,
    startDate: formatDateTime(season.stardDate),
    endDate: formatDateTime(season.endDate),
    description: season.description ?? '',
    year: season.year,
  }));
};
