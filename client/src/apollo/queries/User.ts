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
        number
        description
        routeType
        competition {
          id
          name
          description
        }
        category {
          name
        }
      }
    }
  }
`;

export const LIST_USERS = gql`
  query {
    users {
      id
      firstName
      lastName
      email
      role
      location {
        country {
          name
        }
      }
    }
  }
`;

export const F_USER_NAME = gql`
  fragment UserName on User {
    firstName
    lastName
  }
`;
