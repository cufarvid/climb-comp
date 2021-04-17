import React, { FC, useState } from 'react';
import { Avatar, Button, Col, Layout, Menu, Row } from 'antd';
import { HomeOutlined, UserOutlined } from '@ant-design/icons';
import { Link, Route } from 'react-router-dom';
import styled from '@emotion/styled';

import { useReactiveVar } from '@apollo/client';
import { isLoggedInVar } from '../apollo/cache';

import { Competitions, Home, UserDrawer, Results } from './index';
import { COLOR, ROUTE, FOOTER_HEIGHT, HEADER_HEIGHT } from '../constants';

const App: FC = () => {
  const [currentTab, setCurrentTab] = useState('home');
  const [drawerVisible, setDrawerVisible] = useState(false);

  const isLoggedIn = useReactiveVar(isLoggedInVar);

  const showDrawer = (): void => setDrawerVisible(true);

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
            <Menu
              onClick={(e) => setCurrentTab(e.key.toString())}
              selectedKeys={[currentTab]}
              theme="dark"
              mode="horizontal"
            >
              <Menu.Item key="home" icon={<HomeOutlined />}>
                <Link to={ROUTE.HOME}>Home</Link>
              </Menu.Item>
              <Menu.Item key="competitions">
                <Link to={ROUTE.COMPETITIONS}>Competitions</Link>
              </Menu.Item>
              <Menu.Item key="results">
                <Link to={ROUTE.RESULTS}>Results</Link>
              </Menu.Item>
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
        <Route exact path={ROUTE.HOME} component={Home} />
        <Route path={ROUTE.COMPETITIONS} component={Competitions} />
        <Route path={ROUTE.RESULTS} component={Results} />
      </Content>

      <Footer>
        <div>Footer</div>
      </Footer>
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
