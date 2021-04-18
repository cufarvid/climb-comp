import { gql } from '@apollo/client/core';

export const USER_INFO = gql`
  query {
    contextUserInfo {
      user {
        email
        firstName
        lastName
        role
        location {
          region {
            name
          }
          country {
            name
          }
        }
      }
      route {
        id
        name
        description
        competition {
          id
          name
          description
        }
      }
    }
  }
`;
