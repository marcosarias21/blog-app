import { useEffect, useState } from 'react';
import { useQuery } from '@apollo/client';
import { GET_POST_BY_ID } from '../posts/graphql-queries';

const useGetPostById = (id) => {
  console.log(id);
  const [post, setPost] = useState([]);
  const { data } = useQuery(GET_POST_BY_ID, {
    variables: { id },
  });
  useEffect(() => {
    setPost(data?.getPostById);
  }, [data]);
  console.log(data);
  return { post };
};

export default useGetPostById;
