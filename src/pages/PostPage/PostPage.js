import { useEffect, useState } from 'react';
import { Box, Button, Container } from '@mui/material';
import { usePostBook } from '../../store/postStore';
import { PostDetail } from '../../components/PostDetail';
import { Navbar } from '../../components/Navbar';
import useUser from '../../hooks/useUser';
import { TextRichEditor } from '../../components/TextRichEditor';
import useAddComments from '../../hooks/useAddComments';
import useLikePost from '../../hooks/useLikePost';

const PostPage = () => {
  const userLoggin = useUser();
  const [description, setDescription] = useState('');
  const [id, setId] = useState();
  const { post } = usePostBook();
  const { likePost } = useLikePost();
  const { comments } = useAddComments();

  useEffect(() => {
    setId(post[0]?.id);
  }, [id]);

  const addMessage = () => {
    comments({ variables: { createCommentId: id, message: description } });
  };

  const addLike = () => {
    likePost({ variables: { addLikePostId: id } });
  };

  return (
    <Box>
      <Navbar userLoggin={userLoggin} />
      <Container sx={{
        border: '1px solid lightgray', cursor: 'pointer', mt: 5, ':hover': { border: '1px solid gray' },
      }}>
        {post.map(item => <PostDetail key={item.title} {...item}
          addLike={addLike} />)}
        <Box sx={{
          border: '1px solid lightgray', borderRadius: 1, my: 2, p: 1,
        }}>
          <TextRichEditor setDescription={setDescription} placeholder='Create a message...' />
          <Box sx={{ display: 'flex', justifyContent: 'end' }}>
            <Button variant='contained' onClick={() => addMessage()}>Comment</Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default PostPage;
