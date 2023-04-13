import { Box } from '@mui/material';
import useLogin from '../../hooks/useLogin';
import { LoginForm } from '../../components/LoginForm';

const Login = () => {
  const { login } = useLogin();

  return (
    <Box sx={{
      height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center',
    }}>
      <LoginForm login={login} />
    </Box>
  );
};

export default Login;
