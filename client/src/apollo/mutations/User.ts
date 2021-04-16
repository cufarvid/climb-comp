import { gql } from '@apollo/client';

export const USER_LOGIN = gql`
  mutation UserLogin($credentials: LoginInput!) {
    login(credentials: $credentials) {
      email
      token
    }
  }
`;
