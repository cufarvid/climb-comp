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
  extra?: ReactNode | React.ReactChildren;
  align?: RowProps['align'];
  justify?: RowProps['justify'];
  variant?: ColorVariant;
}

const PageSection: FC<PageSectionProps> = ({
  title,
  children,
  extra,
  align = 'middle',
  justify = 'center',
  variant = 'light',
}: PageSectionProps) => {
  const [background, text] = colorFromVariant(variant);

  const sectionStyle = css`
    padding: 24px 50px;
    color: ${text};
    background: ${background};

    h1 {
      color: ${text};
    }
  `;

  return (
    <div css={sectionStyle}>
      {title && (
        <Row align={align} justify={justify}>
          <h1>{title}</h1>
        </Row>
      )}
      <Row align={align} justify={justify}>
        {children}
      </Row>
      {extra && (
        <Row align={align} justify={justify}>
          {extra}
        </Row>
      )}
    </div>
  );
};

export default PageSection;
