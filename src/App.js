import { Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';
import { Login } from './pages/Login';
import { RegisterPage } from './pages/RegisterPage';

const App = () => {
  return (
    <Routes>
      <Route path='' element={<Login />} />
      <Route path='/register' element={<RegisterPage />} />
      <Route path='/home' element={<Home />} />
    </Routes>
  );
};

export default App;
