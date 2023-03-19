import { Box } from '@mui/material';
import { LoginForm } from '../../components/LoginForm';
import UseLogin from '../../hooks/UseLogin';

const Login = () => {
  const { login } = UseLogin();

  return (
    <Box sx={{
      height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center',
    }}>
      <LoginForm login={login} />
    </Box>
  );
};

export default Login;
