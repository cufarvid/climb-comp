import { gql } from '@apollo/client';

export const USER_LOGIN = gql`
  mutation UserLogin($credentials: LoginInput!) {
    login(credentials: $credentials) {
      publicId
      token
    }
  }
`;

export const USER_ADD = gql`
  mutation UserAdd($credentials: RegisterInput!) {
    register(credentials: $credentials) {
      id
    }
  }
`;

export const USER_UPDATE = gql`
  mutation UserUpdate($data: UserUpdateInput!, $where: UserWhereUniqueInput!) {
    updateUser(data: $data, where: $where) {
      id
    }
  }
`;
