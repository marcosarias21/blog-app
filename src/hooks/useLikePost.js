import { useMutation } from '@apollo/client';
import { ADD_LIKE } from '../posts/graphql-mutations';

const useLikePost = () => {
  const [likePost, results] = useMutation(ADD_LIKE);

  return { likePost };
};

export default useLikePost;
