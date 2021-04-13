import React, { FC } from 'react';
import { Layout, Menu } from 'antd';
import { Link, Route } from 'react-router-dom';
import styled from '@emotion/styled';

import { Competitions, Home, Results } from './index';

import '../assets/styles/App.css';
import { ROUTE } from '../constants';

const App: FC = () => {
  return (
    <Container>
      <Layout.Header>
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
          <Menu.Item key={1}>
            <Link to={ROUTE.HOME}>Home</Link>
          </Menu.Item>
          <Menu.Item key={2}>
            <Link to={ROUTE.COMPETITIONS}>Competitions</Link>
          </Menu.Item>
          <Menu.Item key={3}>
            <Link to={ROUTE.RESULTS}>Results</Link>
          </Menu.Item>
        </Menu>
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
