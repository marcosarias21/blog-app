import { gql } from '@apollo/client';

export const CREATE_POST = gql`
mutation($title: String!, $description: String!) {
  createPost(title: $title, description: $description) {
    title
    description
  }
}
`;

export const ADD_COMMENTS = gql`
mutation($createCommentId: ID!, $message: String!) {
  createComment(id: $createCommentId, message: $message) {
    message
  }
}
`;

export const ADD_LIKE = gql`
mutation($addLikePostId: ID!){
  addLikePost(id: $addLikePostId) {
    user
    id
  }
}`;
