import { Box, Modal } from '@mui/material';
import useLogin from '../../hooks/useLogin';
import { LoginForm } from '../LoginForm';

const Login = ({ open, closeModal }) => {
  const { login } = useLogin();

  return (
      <Modal
        open={open}
        onClose={closeModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description">
        <Box sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          bgcolor: 'background.paper',
          border: '0px solid #000',
          borderRadius: 3,
          boxShadow: 20,
          p: 4,
        }}>
          <LoginForm login={login} />
        </Box>
      </Modal>
  );
};

export default Login;
