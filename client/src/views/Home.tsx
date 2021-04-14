import React, { FC } from 'react';
import { Carousel } from 'antd';
import styled from '@emotion/styled';

import { PageSection, CompetitionCard } from '../components';

import { LIST_COMPETITIONS } from '../constants';

const Home: FC = () => {
  return (
    <>
      <Carousel draggable>
        <CarouselPage>Page 1</CarouselPage>
        <CarouselPage>Page 2</CarouselPage>
        <CarouselPage>Page 3</CarouselPage>
      </Carousel>
      <PageSection
        title="Upcoming competitions"
        extra={
          <a href="competitions">
            <b>Show all</b>
          </a>
        }
      >
        {LIST_COMPETITIONS.map((comp, index) => (
          <CompetitionCard
            key={index}
            title={comp.title}
            compType={comp.compType}
            startDate={comp.startDate}
            location={comp.location}
            extra={{ path: `competitions/${index}` }}
          />
        ))}
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
        <a href="results">More...</a>
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
