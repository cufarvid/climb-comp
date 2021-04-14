import React, { FC, useState } from 'react';
import { Avatar, Col, Layout, Menu, Row } from 'antd';
import { HomeOutlined, UserOutlined } from '@ant-design/icons';
import { Link, Route } from 'react-router-dom';
import styled from '@emotion/styled';

import { Competitions, Home, Results } from './index';

import '../assets/styles/App.css';
import { COLOR, ROUTE } from '../constants';

const App: FC = () => {
  const [currentTab, setCurrentTab] = useState('home');

  return (
    <Container>
      <Layout.Header>
        <Row justify="space-between">
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
            <Link to={ROUTE.LOGIN}>
              <UserAvatar icon={<UserOutlined />} />
            </Link>
          </Col>
        </Row>
      </Layout.Header>
      <Content>
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
  flex-grow: 1;
  background: #fff;
`;

const Footer = styled(Layout.Footer)`
  flex-shrink: 0;
`;

const UserAvatar = styled(Avatar)`
  background: ${COLOR.LIGHT};
`;
