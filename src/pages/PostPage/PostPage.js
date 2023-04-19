import { useEffect, useState } from 'react';
import { Box, Button, Container } from '@mui/material';
import { useMutation } from '@apollo/client';
import { usePostBook } from '../../store/postStore';
import { PostDetail } from '../../components/PostDetail';
import { Navbar } from '../../components/Navbar';
import useUser from '../../hooks/useUser';
import { TextRichEditor } from '../../components/TextRichEditor';
import { ADD_COMMENTS } from '../../posts/graphql-mutations';

const PostPage = () => {
  const userLoggin = useUser();
  const [description, setDescription] = useState('');
  const [comments, results] = useMutation(ADD_COMMENTS);
  const [id, setId] = useState();
  console.log(id);
  const { post } = usePostBook();

  useEffect(() => {
    setId(post[0]?.id);
  }, []);

  const addMessage = () => {
    comments({ variables: { createCommentId: id, message: description } });
  };

  return (
    <Box>
      <Navbar userLoggin={userLoggin} />
      <Container sx={{
        border: '1px solid lightgray', cursor: 'pointer', mt: 5, ':hover': { border: '1px solid gray' },
      }}>
        {post.map(item => <PostDetail key={item.title} {...item} />)}
        <Box sx={{
          border: '1px solid lightgray', borderRadius: 1, my: 2, p: 1,
        }}>
          <form>
            <TextRichEditor setDescription={setDescription} placeholder='Create a message...' />
            <Button onClick={() => addMessage()}>asdsadsa</Button>
          </form>
        </Box>
      </Container>
    </Box>
  );
};

export default PostPage;
