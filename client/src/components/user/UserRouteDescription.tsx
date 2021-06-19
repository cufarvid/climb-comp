import React, { FC } from 'react';

import { Route } from '../../types/__generated__';
import { Col, Row, Tag } from 'antd';
import { DescriptionItem } from '../index';
import { routeTypeTagColor } from '../../utils';

interface Props {
  route: Route;
}

const UserRouteDescription: FC<Props> = ({ route }: Props) => {
  return (
    <div>
      <Row>
        <Col span={12}>
          <DescriptionItem title={'Number'} content={route.number} />
        </Col>
        <Col span={12}>
          <DescriptionItem title={'Category'} content={route.category.name} />
        </Col>
      </Row>
      <Row>
        <Col span={12}>
          <DescriptionItem
            title={'Competition'}
            content={route.competition.name}
          />
        </Col>
        <Col span={12}>
          <DescriptionItem
            title={'Type'}
            content={
              <Tag color={routeTypeTagColor(route.routeType)}>
                {route.routeType}
              </Tag>
            }
          />
        </Col>
      </Row>
    </div>
  );
};

export default UserRouteDescription;
