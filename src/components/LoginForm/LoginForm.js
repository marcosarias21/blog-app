import { useMutation } from '@apollo/client';
import {
  Box, Button, FormControl, Link, TextField, Typography,
} from '@mui/material';
import { useEffect, useState } from 'react';
import { LOGIN } from '../../login/graphql-mutations';

const LoginForm = () => {
  const [login, result] = useMutation(LOGIN, {
    onError: (error) => {
      console.log(error.graphQLErrors[0].message);
    },
  });
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  console.log(password);

  const handleSubmit = (e) => {
    e.preventDefault();
    login({ variables: { username, password } });
    setUsername('');
    setPassword('');
  };

  useEffect(() => {
    if (result.data) {
      const token = result.data.login.value;
      if (token) window.location.href = '/home';
    }
  }, [result.data]);

  return (
    <Box borderRadius='10px' sx={{ width: 600, border: '1px solid #E8E2E2', padding: 4 }}>
      <Typography variant='h4' textAlign='center' fontWeight='bold' mb={3}>Login</Typography>
      <form onSubmit={handleSubmit}>
        <FormControl sx={{ width: '100%', gap: 2 }} >
          <TextField
            label="Username"
            sx={{ width: '100%' }}
            value={username}
            onChange={({ target }) => setUsername(target.value) }
          />
          <TextField
            label="Password"
            type="password"
            value={password}
            onChange={({ target }) => setPassword(target.value) }
             />
          <Button type="submit" variant="contained" color="primary">
            Login
          </Button>
          <Link textTransform='none'>Register Here!</Link>
        </FormControl>
      </form>
    </Box>
  );
};

export default LoginForm;
