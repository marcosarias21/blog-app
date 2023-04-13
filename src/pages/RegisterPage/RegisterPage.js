import { Box } from '@mui/material';
import { RegisterForm } from '../../components/RegisterForm';
import useRegister from '../../hooks/useRegister';

const RegisterPage = () => {
  const { register } = useRegister();
  console.log(register);
  return (
   <Box sx={{
     height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center',
   }}>
    <RegisterForm register={register} />
   </Box>
  );
};

export default RegisterPage;
