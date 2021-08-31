import { gql } from '@apollo/client/core';

export const LIST_IMAGES = gql`
  query ListImages($take: Int = 3) {
    images(take: $take) {
      url
      description
    }
  }
`;
