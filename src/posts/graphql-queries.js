import { gql } from '@apollo/client';

export const GET_POST_BY_ID = gql`
query($id: String){
  getPostById(id: $id) {
    id
    author
    title    
  }
}
`;
