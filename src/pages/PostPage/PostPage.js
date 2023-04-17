import { Box } from '@mui/material';
import { usePostBook } from '../../store/postStore';
import { PostDetail } from '../../components/PostDetail';

const PostPage = () => {
  const { post } = usePostBook();
  console.log(post);
  return (
    <Box>{post.map(item => <PostDetail key={item.title} {...item} />)}</Box>
  );
};

export default PostPage;
