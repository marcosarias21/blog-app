import { gql } from '@apollo/client';

export const ALL_USERS = gql`
  query{
    allUser {
      username
    }
  }
`;

export const USER_LOGGIN = gql`
  query{
    me {
      username
      posts{
        description
        title
        comments {
          message
        }
      }
    }
  }
`;
