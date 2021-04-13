import React, { FC } from 'react';
import { Layout, Menu } from 'antd';
import { Link, Route } from 'react-router-dom';

import { Competitions, Home, Results } from './index';
import '../assets/styles/App.css';

import { ROUTE } from '../constants';

const { Header, Content, Footer } = Layout;

const App: FC = () => {
  return (
    <Layout>
      <Header>
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
      </Header>
      <Content>
        <Route exact path={ROUTE.HOME} component={Home} />
        <Route path={ROUTE.COMPETITIONS} component={Competitions} />
        <Route path={ROUTE.RESULTS} component={Results} />
      </Content>
      <Footer>
        <div>Footer</div>
      </Footer>
    </Layout>
  );
};

export default App;
