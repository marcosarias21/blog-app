import { Route, Routes } from 'react-router-dom';
import { Login } from './pages/Login';
import { RegisterPage } from './pages/RegisterPage';

const App = () => {
  return (
    <Routes>
      <Route path='' element={<Login />} />
      <Route path='/register' element={<RegisterPage />} />
    </Routes>
  );
};

export default App;
