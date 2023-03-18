import { Box } from '@mui/material';
import { LoginForm } from '../../components/LoginForm';

const Login = () => {
  return (
    <Box sx={{
      height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center',
    }}>
      <LoginForm />
    </Box>
  );
};

export default Login;
