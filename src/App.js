import { Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';
import { RegisterPage } from './pages/RegisterPage';
import { PostPage } from './pages/PostPage';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/register' element={<RegisterPage />} />
      <Route path='/post' element={<PostPage />} />
    </Routes>
  );
};

export default App;
