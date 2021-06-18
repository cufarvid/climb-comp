import { gql } from '@apollo/client/core';
import { F_USER_NAME } from './User';

export const LIST_ROUTES = gql`
  ${F_USER_NAME}
  query {
    routes(orderBy: [{ id: desc }, { categoryId: asc }]) {
      id
      name
      round
      routeType
      category {
        name
      }
      competition {
        name
      }
      setter {
        ...UserName
      }
      judge {
        ...UserName
      }
    }
  }
`;
