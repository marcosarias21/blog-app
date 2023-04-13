import { Container } from '@mui/material';
import { Navbar } from '../../components/Navbar';
import { PostContent } from '../../components/PostContent';
import UseUser from '../../hooks/UseUser';
import UseCreatePost from '../../hooks/UseCreatePost';
import UseSweetAlert from '../../hooks/UseSweetAlert';
import { ModalForm } from '../../components/ModalForm';
import UseModal from '../../hooks/UseModal';

const Home = () => {
  const userLoggin = UseUser();
  const { posts } = UseCreatePost();
  const { openModal, open, closeModal } = UseModal();
  const token = localStorage.getItem('token-user-login');
  UseSweetAlert(token);
  return (
    <>
    <Navbar userLoggin={userLoggin} open={open} openModal={openModal} />
    <ModalForm open={open} closeModal={closeModal} posts={posts} />
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
