import React, { FC, useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { Layout, Menu } from 'antd';
import { FundViewOutlined, UnorderedListOutlined } from '@ant-design/icons';

import { ROUTE } from '../constants';
import { isAdministrator } from '../utils';
import { DashboardContext } from '../context';

const Sidebar: FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const { userInfo } = useContext(DashboardContext);

  const onCollapse = (): void => setCollapsed((prevState) => !prevState);

  return (
    <Layout.Sider
      collapsible
      collapsed={collapsed}
      onCollapse={onCollapse}
      width={200}
      theme="light"
    >
      <Menu mode="inline" defaultSelectedKeys={[ROUTE.SCORE]}>
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
        {/* Administrator section */}
        {isAdministrator(userInfo?.user) && (
          <>
            <Menu.Item key={ROUTE.USERS}>
              <UnorderedListOutlined />
              <span>Users</span>
              <Link to={ROUTE.USERS} />
            </Menu.Item>
            <Menu.Item key={ROUTE.DASH_COMPS}>
              <UnorderedListOutlined />
              <span>Competitions</span>
              <Link to={ROUTE.DASH_COMPS} />
            </Menu.Item>
            <Menu.Item key={ROUTE.SEASONS}>
              <UnorderedListOutlined />
              <span>Seasons</span>
              <Link to={ROUTE.SEASONS} />
            </Menu.Item>
          </>
        )}
      </Menu>
    </Layout.Sider>
  );
};

export default Sidebar;
