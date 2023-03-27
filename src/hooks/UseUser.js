import { useQuery } from '@apollo/client';
import { useEffect, useState } from 'react';
import { USER_LOGGIN } from '../users/graphql-query';

const UseUser = () => {
  const [userLoggin, setUserLoggin] = useState();
  const { data } = useQuery(USER_LOGGIN);
  useEffect(() => {
    setUserLoggin(data?.me);
  }, [data]);
  return (userLoggin);
};

export default UseUser;
