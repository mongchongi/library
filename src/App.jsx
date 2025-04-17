import { Route, Routes } from 'react-router';
import BookListPage from './pages/BookListPage/BookListPage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import AppLayout from './layout/AppLayout/AppLayout';
import SignInPage from './pages/SIgnInPage/SignInPage';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<AppLayout />}>
        <Route index element={<BookListPage />} />
        <Route path='/sign-in' element={<SignInPage />} />
      </Route>

      <Route path='*' element={<NotFoundPage />} />
    </Routes>
  );
};

export default App;
