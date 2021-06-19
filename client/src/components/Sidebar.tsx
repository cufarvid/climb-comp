import React, { FC, useState } from 'react';
import { Link } from 'react-router-dom';
import { useReactiveVar } from '@apollo/client';
import { Layout, Menu } from 'antd';
import {
  CalendarOutlined,
  ContactsOutlined,
  EnvironmentOutlined,
  FundViewOutlined,
  UnorderedListOutlined,
  UserOutlined,
  TeamOutlined,
} from '@ant-design/icons';

import { ROUTE } from '../constants';
import { isAdministrator } from '../utils';
import { loggedUserInfo } from '../apollo/cache';

const Sidebar: FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const userInfo = useReactiveVar(loggedUserInfo);

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
        {/* Score */}
        <Menu.Item key={ROUTE.SCORE}>
          <FundViewOutlined />
          <span>Score</span>
          <Link to={ROUTE.SCORE} />
        </Menu.Item>

        {/* Routes */}
        <Menu.Item key={ROUTE.D_ROUTES}>
          <UnorderedListOutlined />
          <span>Routes</span>
          <Link to={ROUTE.D_ROUTES} />
        </Menu.Item>

        {/* Administrator section */}
        {isAdministrator(userInfo?.user) && (
          <>
            {/* Users */}
            <Menu.Item key={ROUTE.D_USERS}>
              <ContactsOutlined />
              <span>Users</span>
              <Link to={ROUTE.D_USERS} />
            </Menu.Item>

            {/* Competitions */}
            <Menu.Item key={ROUTE.D_COMPETITIONS}>
              <EnvironmentOutlined />
              <span>Competitions</span>
              <Link to={ROUTE.D_COMPETITIONS} />
            </Menu.Item>

            {/* Seasons */}
            <Menu.Item key={ROUTE.D_SEASONS}>
              <CalendarOutlined />
              <span>Seasons</span>
              <Link to={ROUTE.D_SEASONS} />
            </Menu.Item>

            {/* Competitors */}
            <Menu.Item key={ROUTE.D_COMPETITORS}>
              <UserOutlined />
              <span>Competitors</span>
              <Link to={ROUTE.D_COMPETITORS} />
            </Menu.Item>

            {/* Clubs */}
            <Menu.Item key={ROUTE.D_CLUBS}>
              <TeamOutlined />
              <span>Clubs</span>
              <Link to={ROUTE.D_CLUBS} />
            </Menu.Item>
          </>
        )}
      </Menu>
    </Layout.Sider>
  );
};

export default Sidebar;
