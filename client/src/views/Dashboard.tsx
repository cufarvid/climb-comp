import React, { FC } from 'react';
import { useLocation } from 'react-router-dom';
import { Breadcrumb, Layout } from 'antd';
import styled from '@emotion/styled';

import { Sidebar } from '../components';
import { COLOR, HEADER_HEIGHT } from '../constants';
import { urlPathToArray } from '../utils';

const Dashboard: FC = () => {
  const location = useLocation();

  return (
    <Layout>
      <Sidebar />
      <StyledLayout>
        <Content>
          <BreadCrumb>
            {urlPathToArray(location.pathname).map((item, index) => (
              <BreadCrumbItem key={index}>{item}</BreadCrumbItem>
            ))}
          </BreadCrumb>
          <Container>Score athlete 1001</Container>
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

const BreadCrumb = styled(Breadcrumb)`
  margin: 16px 0;
`;

const BreadCrumbItem = styled(Breadcrumb.Item)`
  text-transform: capitalize;
`;

const Container = styled('div')`
  padding: 24px;
  height: calc(100% - (${HEADER_HEIGHT}px + 16px));
  background: ${COLOR.WHITE};
`;
