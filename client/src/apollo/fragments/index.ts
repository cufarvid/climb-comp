import { gql } from '@apollo/client/core';

export const F_USER_NAME = gql`
  fragment UserName on User {
    firstName
    lastName
  }
`;
