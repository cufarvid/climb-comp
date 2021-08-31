import { gql } from '@apollo/client/core';

export const LIST_POSTS = gql`
  query ListPosts($take: Int = 3) {
    posts(take: $take) {
      createdAt
      title
      content
      image {
        url
        description
      }
    }
  }
`;
