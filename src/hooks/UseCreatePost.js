import { useMutation } from '@apollo/client';
import Swal from 'sweetalert2';
import { CREATE_POST } from '../posts/graphql-mutations';

const UseCreatePost = () => {
  const [posts, results] = useMutation(CREATE_POST, {
    onCompleted: () => {
      Swal.fire({
        zIndex: '1400',
        icon: 'success',
        title: 'Post created successfully',
        showConfirmButton: false,
        timer: 1500,
      });
    },
  });
  return { posts };
};

export default UseCreatePost;
