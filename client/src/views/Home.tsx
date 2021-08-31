import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { Carousel, Empty } from 'antd';
import dayjs from 'dayjs';

import { Query } from '../types/__generated__';
import { LIST_COMPETITIONS, LIST_POSTS } from '../apollo/queries';
import { ROUTE } from '../constants';
import { PageSection, CompetitionCard, PostImageBox } from '../components';
import { ResultsCompLive } from './index';

const Home: FC = () => {
  const { data: comps } = useQuery<Query>(LIST_COMPETITIONS, {
    variables: { date: dayjs(new Date()).format() },
  });

  const { data: posts } = useQuery<Query>(LIST_POSTS);

  return (
    <>
      <Carousel draggable>
        {posts?.posts ? (
          posts.posts.map((post) => (
            <PostImageBox post={post} key={post.title} />
          ))
        ) : (
          <Empty />
        )}
      </Carousel>

      {/* Upcoming competitions */}
      <PageSection
        title="Upcoming competitions"
        extra={<Link to={ROUTE.COMPETITIONS}>Show all</Link>}
      >
        {comps?.competitions ? (
          comps.competitions.map((comp, index) => (
            <CompetitionCard key={index} competition={comp} />
          ))
        ) : (
          <Empty />
        )}
      </PageSection>

      {/* News */}
      <PageSection title="Latest news" variant={'dark'}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad consectetur
        cum deserunt dignissimos distinctio dolorum eligendi esse nostrum odit,
        officia quibusdam quos repellat saepe sit soluta tempora totam ullam ut
        voluptate voluptatum. Ad adipisci cum dolore incidunt ipsam nulla
        perferendis sit tempore vero voluptas. Dolore eum excepturi facilis
        magnam molestiae?
        <a href="#">More...</a>
      </PageSection>

      {/* Live Results - only visible if there is a competition in progress*/}
      <ResultsCompLive />
    </>
  );
};

export default Home;
