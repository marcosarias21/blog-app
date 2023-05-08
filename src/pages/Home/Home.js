import { Box, Container } from '@mui/material';
import { Navbar } from '../../components/Navbar';
import { PostContent } from '../../components/PostContent';
import useUser from '../../hooks/useUser';
import useCreatePost from '../../hooks/useCreatePost';
import { ModalForm } from '../../components/ModalForm';
import useModal from '../../hooks/useModal';
import { NavbarToLogin } from '../../components/NavbarToLogin';
import { Login } from '../../components/Login';

const Home = () => {
  const userLoggin = useUser();
  const { posts } = useCreatePost();
  const { openModal, open, closeModal } = useModal();

  return (
    <Box sx={{ backgroundColor: '#DAE0E6', height: '100vh' }}>
      {userLoggin ? <Navbar userLoggin={userLoggin} openModal={openModal} />
        : <NavbarToLogin openModal={openModal}/> }
      {
        userLoggin ? <ModalForm open={open} closeModal={closeModal} posts={posts} />
          : <Login open={open} closeModal={closeModal} />
      }
      <Container sx={{
        display: 'flex', flexDirection: 'column', gap: 2, mt: 3,
      }}>
        {
          userLoggin?.posts?.map((post, i) => (
          <PostContent key={i} {...post} userLoggin={userLoggin}/>))
        }
      </Container>
    </Box>
  );
};

export default Home;
