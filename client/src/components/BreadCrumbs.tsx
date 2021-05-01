import React, { FC } from 'react';
import styled from '@emotion/styled';
import { Breadcrumb } from 'antd';
import { capitalize, urlPathToArray } from '../utils';
import { Link } from 'react-router-dom';

interface Props {
  pathName: string;
}

const BreadCrumbs: FC<Props> = ({ pathName }: Props) => {
  const pathArray = urlPathToArray(pathName);

  return (
    <BreadCrumb>
      {pathArray.map((item, index) => {
        if (!item) return null;
        const url = pathArray.slice(0, index + 1).join('/');
        return (
          <Breadcrumb.Item key={index}>
            <Link to={url}>{capitalize(item)}</Link>
          </Breadcrumb.Item>
        );
      })}
    </BreadCrumb>
  );
};

export default BreadCrumbs;

/*
 * Styled components
 */
const BreadCrumb = styled(Breadcrumb)`
  margin: 16px 0;
`;
