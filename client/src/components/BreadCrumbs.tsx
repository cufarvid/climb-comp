import React, { FC } from 'react';
import styled from '@emotion/styled';
import { Breadcrumb } from 'antd';
import { urlPathToArray } from '../utils';

interface Props {
  pathName: string;
}

const BreadCrumbs: FC<Props> = ({ pathName }: Props) => {
  return (
    <>
      {urlPathToArray(pathName).map((item, index) => (
        <BreadCrumbItem key={index} href={`/${item}`}>
          {item}
        </BreadCrumbItem>
      ))}
    </>
  );
};

export default BreadCrumbs;

/*
 * Styled components
 */
const BreadCrumbItem = styled(Breadcrumb.Item)`
  text-transform: capitalize;
`;
