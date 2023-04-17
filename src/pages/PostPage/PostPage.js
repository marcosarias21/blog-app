import { usePostBook } from '../../store/postStore';

const PostPage = () => {
  const { post } = usePostBook();
  console.log(post);
  return (
    <div>{post.descriptionRaw}</div>
  );
};

export default PostPage;
