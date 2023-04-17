import { Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';
import { Login } from './pages/Login';
import { RegisterPage } from './pages/RegisterPage';
import { PostPage } from './pages/PostPage';

const App = () => {
  return (
    <Routes>
      <Route path='' element={<Login />} />
      <Route path='/register' element={<RegisterPage />} />
      <Route path='/home' element={<Home />} />
      <Route path='/post' element={<PostPage />} />
    </Routes>
  );
};

export default App;
