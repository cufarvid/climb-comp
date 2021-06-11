import React, { FC, useEffect, useState } from 'react';
import { Avatar, Button, Col, Layout, Menu, Row } from 'antd';
import { HomeOutlined, UserOutlined } from '@ant-design/icons';
import { Link, useLocation } from 'react-router-dom';
import styled from '@emotion/styled';

import { useReactiveVar } from '@apollo/client';
import { isLoggedInVar } from '../apollo/cache';

import { COLOR, ROUTE, FOOTER_HEIGHT, HEADER_HEIGHT } from '../constants';
import { UserDrawer } from './index';
import { AppRoutes } from '../routes';

const App: FC = () => {
  const [currentTab, setCurrentTab] = useState(ROUTE.HOME);
  const [drawerVisible, setDrawerVisible] = useState(false);

  const isLoggedIn = useReactiveVar(isLoggedInVar);
  const location = useLocation();

  const showDrawer = (): void => setDrawerVisible(true);
  const isDashboard: boolean = location.pathname.includes(ROUTE.DASHBOARD);

  /**
   * Updates current tab on location/route change
   */
  const handleLocationChange = (): void => {
    const { pathname } = location;

    // Get index of last / occurence
    const lastIndex = pathname.lastIndexOf('/');

    // If last occurrence is at index 0, then we are at the first level
    // Else we substring the pathname to get the first part only
    const current =
      lastIndex === 0 ? pathname : pathname.substring(0, lastIndex);

    // Set current tab
    setCurrentTab(current);
  };

  useEffect(() => {
    handleLocationChange();
  }, [location]);

  return (
    <Container>
      <Header>
        <Row justify="space-between">
          <Col>
            <Link to={ROUTE.HOME}>
              <b>ClimbComp</b>
            </Link>
          </Col>
          <Col>
            <Menu selectedKeys={[currentTab]} theme="dark" mode="horizontal">
              <Menu.Item key={ROUTE.HOME} icon={<HomeOutlined />}>
                <Link to={ROUTE.HOME}>Home</Link>
              </Menu.Item>
              <Menu.Item key={ROUTE.COMPETITIONS}>
                <Link to={ROUTE.COMPETITIONS}>Competitions</Link>
              </Menu.Item>
              <Menu.Item key={ROUTE.RESULTS}>
                <Link to={ROUTE.RESULTS}>Results</Link>
              </Menu.Item>
              {isLoggedIn && (
                <Menu.Item key={ROUTE.DASHBOARD}>
                  <Link to={ROUTE.DASHBOARD}>Dashboard</Link>
                </Menu.Item>
              )}
            </Menu>
          </Col>
          <Col>
            {isLoggedIn ? (
              <a onClick={showDrawer}>
                <UserAvatar icon={<UserOutlined />} />
              </a>
            ) : (
              <Button type="primary" onClick={showDrawer}>
                Login
              </Button>
            )}
          </Col>
        </Row>
      </Header>

      <Content>
        <UserDrawer visible={drawerVisible} setVisible={setDrawerVisible} />
        {/* Routes */}
        <AppRoutes />
      </Content>

      {!isDashboard && (
        <Footer>
          <div>Footer</div>
        </Footer>
      )}
    </Container>
  );
};

export default App;

/*
 * Styled components
 */
const Container = styled(Layout)`
  min-height: 100vh;
`;

const Content = styled(Layout.Content)`
  min-height: calc(100vh - ${HEADER_HEIGHT + FOOTER_HEIGHT}px);
  flex-grow: 1;
  background: #fff;
`;

const Footer = styled(Layout.Footer)`
  height: ${FOOTER_HEIGHT}px;
  flex-shrink: 0;
`;

const Header = styled(Layout.Header)`
  height: ${FOOTER_HEIGHT}px;
`;

const UserAvatar = styled(Avatar)`
  background: ${COLOR.LIGHT};
`;
