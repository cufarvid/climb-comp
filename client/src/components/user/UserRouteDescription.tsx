import React, { FC } from 'react';

import { Route } from '../../types/__generated__';
import { Col, Row } from 'antd';
import { DescriptionItem } from '../index';

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
          <DescriptionItem title={'Type'} content={route.routeType} />
        </Col>
        <Col span={12}>
          <DescriptionItem
            title={'Competition'}
            content={route.competition.name}
          />
        </Col>
      </Row>
    </div>
  );
};

export default UserRouteDescription;
