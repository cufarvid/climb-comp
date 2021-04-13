import React, { FC, ReactNode } from 'react';
/** @jsxImportSource @emotion/react */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { jsx, css } from '@emotion/react';
import { Row, RowProps } from 'antd';
import { ColorVariant } from '../types';
import { colorFromVariant } from '../utils';

interface PageSectionProps {
  title?: string;
  children: ReactNode | React.ReactChildren | React.ReactChildren[];
  align?: RowProps['align'];
  justify?: RowProps['justify'];
  variant?: ColorVariant;
}

const PageSection: FC<PageSectionProps> = ({
  title,
  children,
  align = 'middle',
  justify = 'center',
  variant = 'light',
}: PageSectionProps) => {
  const [background, text, link] = colorFromVariant(variant);

  const sectionStyle = css`
    padding: 24px 50px;
    color: ${text};
    background: ${background};

    h1 {
      color: ${text};
    }

    a {
      color: ${link};
    }
  `;

  return (
    <Row align={align} justify={justify} css={sectionStyle}>
      {title && <h1>{title}</h1>}
      {children}
    </Row>
  );
};

export default PageSection;
