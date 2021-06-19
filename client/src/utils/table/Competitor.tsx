import React from 'react';
import { ColumnsType } from 'antd/lib/table/interface';
import { Space } from 'antd';

import { Competitor } from '../../types/__generated__';
import { MESSAGE } from '../../constants';

export interface CompetitorRow {
  id: number;
  firstName: string;
  lastName: string;
  category: string;
  club: string;
  country: string;
}

/**
 * Competitors table column definition
 */
export const COMPETITOR_COLUMNS: ColumnsType<CompetitorRow> = [
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
    title: 'Category',
    dataIndex: 'category',
    key: 'category',
  },
  {
    title: 'Club',
    dataIndex: 'club',
    key: 'club',
  },
  {
    title: 'Country',
    dataIndex: 'country',
    key: 'country',
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
 * Parses competitors array to competitor table rows
 * @param competitors Competitors array
 */
export const parseCompetitors = (
  competitors: Competitor[] | undefined,
): CompetitorRow[] => {
  if (!competitors) return [];

  return competitors.map((competitor) => ({
    id: competitor.id,
    firstName: competitor.firstName,
    lastName: competitor.lastName,
    category: competitor.category.name,
    club: competitor.club.name,
    country: competitor.country?.name || MESSAGE.NO_DATA,
  }));
};
