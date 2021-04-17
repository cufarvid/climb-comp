import React, { FC, useState } from 'react';
import { Link } from 'react-router-dom';
import { Layout, Menu } from 'antd';
import { FundViewOutlined, UnorderedListOutlined } from '@ant-design/icons';

import { ROUTE } from '../constants';

const Sidebar: FC = () => {
  const [collapsed, setCollapsed] = useState(false);

  const onCollapse = (): void => setCollapsed((prevState) => !prevState);

  return (
    <Layout.Sider
      collapsible
      collapsed={collapsed}
      onCollapse={onCollapse}
      width={200}
      theme="light"
    >
      <Menu mode="inline" selectedKeys={[ROUTE.SCORE]}>
        <Menu.Item key={ROUTE.SCORE}>
          <FundViewOutlined />
          <span>Score</span>
          <Link to={ROUTE.SCORE} />
        </Menu.Item>
        <Menu.Item key={ROUTE.ROUTES}>
          <UnorderedListOutlined />
          <span>Routes</span>
          <Link to={ROUTE.ROUTES} />
        </Menu.Item>
      </Menu>
    </Layout.Sider>
  );
};

export default Sidebar;
