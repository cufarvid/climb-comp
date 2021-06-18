import { ColumnsType } from 'antd/lib/table/interface';
import { Space, Tag, TagProps } from 'antd';
import React from 'react';
import { Round, Route, RouteType } from '../../types/__generated__';
import { userFullName } from '../index';

export interface RouteRow {
  id: number;
  name: string;
  round: Round;
  category: string;
  routeType: RouteType;
  competition: string;
  setter: string;
  judge: string;
}

/**
 * Routes table column definition
 */
export const ROUTE_COLUMNS: ColumnsType<RouteRow> = [
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
    title: 'Category',
    dataIndex: 'category',
    key: 'category',
  },
  {
    title: 'Route type',
    dataIndex: 'routeType',
    key: 'routeType',
    render: function RenderRouteType(routeType: RouteType): JSX.Element {
      return (
        <Tag color={routeTypeTagColor(routeType)} key={routeType}>
          {routeType}
        </Tag>
      );
    },
  },
  {
    title: 'Round',
    dataIndex: 'round',
    key: 'round',
    render: function RenderRound(round: Round): JSX.Element {
      return (
        <Tag color={roundTagColor(round)} key={round}>
          {round}
        </Tag>
      );
    },
  },
  {
    title: 'Competition',
    dataIndex: 'competition',
    key: 'competition',
  },
  {
    title: 'Setter',
    dataIndex: 'setter',
    key: 'setter',
  },
  {
    title: 'Judge',
    dataIndex: 'judge',
    key: 'judge',
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
 * Returns tag color based on competition round
 * @param round Competition round
 */
export const roundTagColor = (round: Round): TagProps['color'] => {
  switch (round) {
    case Round.Qualification:
      return 'green';
    case Round.SemiFinal:
      return 'blue';
    case Round.Final:
      return 'red';
  }
};

/**
 * Returns tag color based on route type
 * @param routeType Competition round
 */
export const routeTypeTagColor = (routeType: RouteType): TagProps['color'] => {
  switch (routeType) {
    case RouteType.Boulder:
      return 'green';
    case RouteType.Lead:
      return 'blue';
    case RouteType.Speed:
      return 'red';
    case RouteType.Duel:
      return 'magenta';
  }
};

/**
 * Parses routes array to route table rows
 * @param routes Routes array
 */
export const parseRoutes = (routes: Route[] | undefined): RouteRow[] => {
  if (!routes) return [];

  return routes.map((route) => ({
    id: route.id,
    name: route.name,
    round: route.round,
    routeType: route.routeType,
    category: route.category.name,
    competition: route.competition.name,
    setter: userFullName(route.setter),
    judge: userFullName(route.judge),
  }));
};
