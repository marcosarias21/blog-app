import { gql } from '@apollo/client';

export const CREATE_POST = gql`
mutation($title: String!, $description: String!) {
  createPost(title: $title, description: $description) {
    title
    description
  }
}
`;
