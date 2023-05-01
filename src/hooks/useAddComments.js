import { useMutation } from '@apollo/client';
import { ADD_COMMENTS } from '../posts/graphql-mutations';

const useAddComments = () => {
  const [comments, results] = useMutation(ADD_COMMENTS);

  return { comments };
};

export default useAddComments;
