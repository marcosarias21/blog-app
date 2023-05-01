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
      id
      username
      posts{
        id
        description
        title
        comments {
          message
        }
        likes{
          user
          id
        }
      }
    }
  }
`;
