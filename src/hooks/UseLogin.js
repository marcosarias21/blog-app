import { useMutation } from '@apollo/client';
import { useSnackbar } from 'notistack';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { LOGIN } from '../login/graphql-mutations';

const UseLogin = () => {
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();
  const [login, result] = useMutation(LOGIN, {
    onError: () => {
      enqueueSnackbar('User or Password invalid', {
        variant: 'error',
        anchorOrigin: {
          vertical: 'bottom',
          horizontal: 'right',
        },
      });
    },
  });

  useEffect(() => {
    if (result.data) {
      const token = result.data.login.value;
      enqueueSnackbar('Successfully login', {
        variant: 'success',
        anchorOrigin: {
          vertical: 'bottom',
          horizontal: 'right',
        },
      });
      setTimeout(() => {
        if (token) navigate('/home');
      }, 1000);
    }
  }, [result.data]);
  return { login, result };
};

export default UseLogin;
