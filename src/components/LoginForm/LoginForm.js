import {
  Box, Button, FormControl, Link, TextField, Typography,
} from '@mui/material';
import { useState } from 'react';

const LoginForm = ({ login }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    login({ variables: { username, password } });
    setUsername('');
    setPassword('');
  };

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
            required
          />
          <TextField
            label="Password"
            type="password"
            value={password}
            required
            onChange={({ target }) => setPassword(target.value) }
             />
          <Button type="submit" variant="contained" color="primary">
            Login
          </Button>
          <Link href='register' textAlign='center'>Register Here!</Link>
        </FormControl>
      </form>
    </Box>
  );
};

export default LoginForm;
