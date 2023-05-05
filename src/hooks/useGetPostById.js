import { useEffect, useState } from 'react';
import { useQuery } from '@apollo/client';
import { GET_POST_BY_ID } from '../posts/graphql-queries';

const useGetPostById = (id) => {
  const [post, setPost] = useState([]);
  const { data, loading } = useQuery(GET_POST_BY_ID, {
    variables: { id },
  });

  useEffect(() => {
    setPost(data?.getPostById);
  }, [data]);
  return { post, loading };
};

export default useGetPostById;
