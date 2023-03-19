import { Box } from '@mui/material';
import { RegisterForm } from '../../components/RegisterForm';
import UseRegister from '../../hooks/UseRegister';

const RegisterPage = () => {
  const { register } = UseRegister();
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
