import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { Carousel, Empty } from 'antd';
import styled from '@emotion/styled';
import dayjs from 'dayjs';

import { PageSection, CompetitionCard } from '../components';
import { Query } from '../types/__generated__';
import { LIST_COMPETITIONS } from '../apollo/queries';
import { ROUTE } from '../constants';

const Home: FC = () => {
  const { data } = useQuery<Query>(LIST_COMPETITIONS, {
    variables: { date: dayjs(new Date()).format() },
  });

  return (
    <>
      <Carousel draggable>
        <CarouselPage>Page 1</CarouselPage>
        <CarouselPage>Page 2</CarouselPage>
        <CarouselPage>Page 3</CarouselPage>
      </Carousel>
      <PageSection
        title="Upcoming competitions"
        extra={<Link to={ROUTE.COMPETITIONS}>Show all</Link>}
      >
        {data?.competitions ? (
          data.competitions.map((comp, index) => (
            <CompetitionCard
              key={index}
              competition={comp}
              extra={{ path: `competitions/${comp.id}` }}
            />
          ))
        ) : (
          <Empty />
        )}
      </PageSection>
      <PageSection title="Latest news" variant={'dark'}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad consectetur
        cum deserunt dignissimos distinctio dolorum eligendi esse nostrum odit,
        officia quibusdam quos repellat saepe sit soluta tempora totam ullam ut
        voluptate voluptatum. Ad adipisci cum dolore incidunt ipsam nulla
        perferendis sit tempore vero voluptas. Dolore eum excepturi facilis
        magnam molestiae?
        <a href="#">More...</a>
      </PageSection>
      <PageSection title="Latest results">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad consectetur
        cum deserunt dignissimos distinctio dolorum eligendi esse nostrum odit,
        officia quibusdam quos repellat saepe sit soluta tempora totam ullam ut
        voluptate voluptatum. Ad adipisci cum dolore incidunt ipsam nulla
        perferendis sit tempore vero voluptas. Dolore eum excepturi facilis
        magnam molestiae?
        <Link to={ROUTE.RESULTS}>More...</Link>
      </PageSection>
    </>
  );
};

export default Home;

/*
 * Styled components
 */
const CarouselPage = styled('div')`
  height: 500px;
  line-height: 500px;
  text-align: center;
  color: #fff;
  background: #364d79;
`;
