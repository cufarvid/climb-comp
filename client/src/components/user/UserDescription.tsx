import React, { FC } from 'react';
import { Col, Row } from 'antd';

import { User } from '../../types/generated';
import { MESSAGE } from '../../constants';
import { DescriptionItem } from '../index';

interface UserDescriptionProps {
  user: User;
}

const UserDescription: FC<UserDescriptionProps> = ({
  user,
}: UserDescriptionProps) => {
  return (
    <div>
      <Row>
        <Col span={12}>
          <DescriptionItem title="First name" content={user.firstName} />
        </Col>
        <Col span={12}>
          <DescriptionItem title="Last name" content={user.lastName} />
        </Col>
      </Row>
      <Row>
        <Col span={12}>
          <DescriptionItem title="Email" content={user.email} />
        </Col>
        <Col span={12}>
          <DescriptionItem title="Role" content={user.role} />
        </Col>
      </Row>
      <Row>
        <Col span={12}>
          <DescriptionItem
            title="Region"
            content={user.location?.region?.name || MESSAGE.NO_DATA}
          />
        </Col>
        <Col span={12}>
          <DescriptionItem
            title="Country"
            content={user.location?.country?.name || MESSAGE.NO_DATA}
          />
        </Col>
      </Row>
    </div>
  );
};

export default UserDescription;
