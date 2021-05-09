import React, { FC, ReactNode } from 'react';

interface Props {
  title: string;
  content: ReactNode;
}

const DescriptionItem: FC<Props> = ({ title, content }: Props) => (
  <div>
    <b>{title}: </b>
    {content}
  </div>
);

export default DescriptionItem;
