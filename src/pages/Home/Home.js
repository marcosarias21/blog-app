import { Container } from '@mui/material';
import { useEffect } from 'react';
import { Navbar } from '../../components/Navbar';
import { PostContent } from '../../components/PostContent';
import UseUser from '../../hooks/UseUser';

const Home = () => {
  const userLoggin = UseUser();
  const token = localStorage.getItem('token-user-login');

  useEffect(() => {
    if (!token) window.location.href = '/';
  }, [token]);

  return (
    <>
    <Navbar userLoggin={userLoggin} />
    <Container sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
      {
        userLoggin?.posts?.map((post, i) => (
        <PostContent key={i} {...post} userLoggin={userLoggin}/>))
      }
    </Container>
    </>
  );
};

export default Home;
