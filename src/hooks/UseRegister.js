import { useMutation } from '@apollo/client';
import { useSnackbar } from 'notistack';
import { useEffect } from 'react';
import { REGISTER } from '../register/graphql-mutations';

const UseRegister = () => {
  const { enqueueSnackbar } = useSnackbar();
  const [register, result] = useMutation(REGISTER, {
    onError: () => {
      enqueueSnackbar('Username already used', {
        variant: 'error',
        anchorOrigin: {
          vertical: 'bottom',
          horizontal: 'right',
        },
      });
    },
  });

  useEffect(() => {
    const userName = result.data?.createUser?.username;
    if (result?.data?.createUser) {
      enqueueSnackbar(`Registered successfully ${userName}`, {
        variant: 'success',
        anchorOrigin: {
          vertical: 'bottom',
          horizontal: 'right',
        },
      });
      setTimeout(() => {
        window.location.href = '/';
      }, 1000);
    }
  }, [result.data]);

  return { register, result };
};

export default UseRegister;
