import { Container } from '@mui/material';
import { Navbar } from '../../components/Navbar';
import { PostContent } from '../../components/PostContent';
import UseUser from '../../hooks/UseUser';
import UseSweetAlert from '../../hooks/UseSweetAlert';

const Home = () => {
  const userLoggin = UseUser();
  const token = localStorage.getItem('token-user-login');
  UseSweetAlert(token);
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
