import {
  Box, Button, FormControl, TextField, Typography,
} from '@mui/material';
import { useState } from 'react';

const RegisterForm = ({ register }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    register({ variables: { username, password } });
    setUsername('');
    setPassword('');
  };

  return (
    <Box borderRadius='10px' sx={{ width: 600, border: '1px solid #E8E2E2', padding: 4 }}>
      <Typography variant='h4' textAlign='center' fontWeight='bold' mb={3}>Register</Typography>
      <form onSubmit={handleSubmit}>
        <FormControl sx={{ width: '100%', gap: 2 }} >
          <TextField
            label="Username"
            sx={{ width: '100%' }}
            value={username}
            required
            onChange={({ target }) => setUsername(target.value) }
          />
          <TextField
            label="Password"
            type="password"
            value={password}
            required
            onChange={({ target }) => setPassword(target.value) }
             />
          <Button type="submit" variant="contained" color="primary">
            Register
          </Button>
        </FormControl>
      </form>
    </Box>
  );
};

export default RegisterForm;
