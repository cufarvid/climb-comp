import React, { FC, ReactNode } from 'react';
import styled from '@emotion/styled';

interface Props {
  url: string;
  height?: number;
  children?: ReactNode;
}

const ImageBox: FC<Props> = ({ url, height = 500, children }: Props) => {
  /*
   * Styled component
   */
  const StyledDiv = styled('div')`
    height: ${height}px;
    text-align: center;
    color: #fff;
    background-image: url('${url}');
    background-size: cover;
  `;

  return <StyledDiv>{children}</StyledDiv>;
};

export default ImageBox;
