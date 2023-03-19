import { gql } from '@apollo/client';

export const REGISTER = gql`
mutation($username: String!, $password: String!){
  createUser(username: $username, password: $password) {
    username
  }
}
`;
