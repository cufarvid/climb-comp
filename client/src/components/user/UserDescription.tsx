import React, { FC } from 'react';
import { Col, Row, Tag } from 'antd';

import { User } from '../../types/__generated__';
import { MESSAGE } from '../../constants';
import { DescriptionItem } from '../index';
import { userRoleTagColor } from '../../utils';

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
          <DescriptionItem
            title="Region"
            content={user.region?.name || MESSAGE.NO_DATA}
          />
        </Col>
        <Col span={12}>
          <DescriptionItem
            title="Country"
            content={user.country?.name || MESSAGE.NO_DATA}
          />
        </Col>
      </Row>
      <Row>
        <Col span={12}>
          <DescriptionItem title="Email" content={user.email} />
        </Col>
        <Col span={12}>
          <DescriptionItem
            title="Role"
            content={<Tag color={userRoleTagColor(user.role)}>{user.role}</Tag>}
          />
        </Col>
      </Row>
    </div>
  );
};

export default UserDescription;
