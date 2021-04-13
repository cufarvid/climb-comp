import React, { FC } from 'react';
import { Carousel } from 'antd';
import styled from '@emotion/styled';

import { PageSection } from '../components';

const Home: FC = () => {
  return (
    <>
      <Carousel draggable>
        <CarouselPage>Page 1</CarouselPage>
        <CarouselPage>Page 2</CarouselPage>
        <CarouselPage>Page 3</CarouselPage>
      </Carousel>
      <PageSection title="Upcoming competitions">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet culpa
        dolorum earum eveniet exercitationem harum ipsum, iste libero mollitia
        qui quia, reiciendis sequi velit. Assumenda culpa dolores iste itaque
        laudantium libero mollitia natus nostrum. A debitis earum iure libero
        nesciunt, omnis sit temporibus. Aperiam magni maxime molestiae quisquam
        repudiandae. Neque.
        <a href="competitions">More...</a>
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
