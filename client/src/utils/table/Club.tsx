import React from 'react';
import { Space } from 'antd';

import { ColumnsType } from 'antd/lib/table/interface';
import { Club } from '../../types/__generated__';
import { MESSAGE } from '../../constants';

export interface ClubRow {
  id: number;
  name: string;
  address: string;
  country: string;
  region: string;
}

/**
 * Clubs table column definition
 */
export const CLUB_COLUMNS: ColumnsType<ClubRow> = [
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
    title: 'Region',
    dataIndex: 'region',
    key: 'region',
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
 * Parses clubs array to club table rows
 * @param clubs Clubs array
 */
export const parseClubs = (clubs: Club[] | undefined): ClubRow[] => {
  if (!clubs) return [];

  return clubs.map((club) => ({
    id: club.id,
    name: club.name,
    address: club.address || MESSAGE.NO_DATA,
    country: club.country?.name || MESSAGE.NO_DATA,
    region: club.region?.name || MESSAGE.NO_DATA,
  }));
};
