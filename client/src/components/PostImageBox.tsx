import React, { FC, ReactNode } from 'react';
import { Col, Row, Typography } from 'antd';
import styled from '@emotion/styled';

import { formatDate } from '../utils';
import { Post } from '../types/__generated__';

interface Props {
  post: Post;
  height?: number;
  children?: ReactNode;
}

const PostImageBox: FC<Props> = ({ post, height = 500, children }: Props) => {
  /*
   * Styled component
   */
  const StyledDiv = styled('div')`
    display: flex;
    justify-content: center;
    align-items: center;
    height: ${height}px;
    text-align: center;
    color: #fff;
    background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
      url('${post.image?.url}');
    background-size: cover;

    h1 {
      color: #fff;
    }
  `;

  return (
    <StyledDiv>
      <Col>
        <Row>
          <Typography.Title>{post.title}</Typography.Title>
        </Row>
        <Row>
          <strong>{formatDate(post.createdAt)}</strong>
        </Row>
        <Row>
          <p>{post.content}</p>
        </Row>
        <Row>{children}</Row>
      </Col>
    </StyledDiv>
  );
};

export default PostImageBox;
