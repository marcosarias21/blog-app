import { Container } from '@mui/material';
import { Navbar } from '../../components/Navbar';
import { PostContent } from '../../components/PostContent';
import useUser from '../../hooks/useUser';
import useCreatePost from '../../hooks/useCreatePost';
import useSweetAlert from '../../hooks/useSweetAlert';
import { ModalForm } from '../../components/ModalForm';
import useModal from '../../hooks/useModal';

const Home = () => {
  const userLoggin = useUser();
  const { posts } = useCreatePost();
  const { openModal, open, closeModal } = useModal();
  const token = localStorage.getItem('token-user-login');
  useSweetAlert(token);
  return (
    <>
    <Navbar userLoggin={userLoggin} open={open} openModal={openModal} />
    <ModalForm open={open} closeModal={closeModal} posts={posts} />
    <Container sx={{
      display: 'flex', flexDirection: 'column', gap: 2, mt: 3,
    }}>
      {
        userLoggin?.posts?.map((post, i) => (
        <PostContent key={i} {...post} userLoggin={userLoggin}/>))
      }
    </Container>
    </>
  );
};

export default Home;
