import React, { FC, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Layout } from 'antd';
import styled from '@emotion/styled';

import { BreadCrumbs, Sidebar } from '../components';
import { COLOR, HEADER_HEIGHT } from '../constants';
import { DashboardRoutes } from '../routes';
import { useCurrentUser } from '../hooks';
import { loggedUserInfo } from '../apollo/cache';

const Dashboard: FC = () => {
  const { userInfo } = useCurrentUser();
  const location = useLocation();

  useEffect(() => {
    // Update reactive variable on user info change
    loggedUserInfo(userInfo);
  }, [userInfo]);

  return (
    <Layout>
      <Sidebar />
      <StyledLayout>
        <Content>
          <BreadCrumbs pathName={location.pathname} />
          <Container>
            <DashboardRoutes />
          </Container>
        </Content>
      </StyledLayout>
    </Layout>
  );
};

export default Dashboard;

/*
 * Styled components
 */
const StyledLayout = styled(Layout)`
  min-height: calc(100vh - ${HEADER_HEIGHT}px);
`;

const Content = styled(Layout.Content)`
  margin: 0 16px;
`;

const Container = styled('div')`
  padding: 24px;
  height: calc(100% - (${HEADER_HEIGHT}px + 16px));
  background: ${COLOR.WHITE};
`;
