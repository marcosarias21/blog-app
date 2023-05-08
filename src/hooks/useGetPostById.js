import { useEffect, useState } from 'react';
import { useQuery } from '@apollo/client';
import { GET_POST_BY_ID } from '../posts/graphql-queries';

const useGetPostById = (id) => {
  console.log(id);
  const [post, setPost] = useState([]);
  const data = useQuery(GET_POST_BY_ID, {
    variables: { id },
  });
  console.log(data);
  useEffect(() => {
    setPost(data?.getPostById);
  }, [id]);
  return { post };
};

export default useGetPostById;
