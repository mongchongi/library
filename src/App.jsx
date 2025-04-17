import { Route, Routes } from 'react-router';
import BookListPage from './pages/BookListPage/BookListPage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import AppLayout from './layout/AppLayout/AppLayout';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<AppLayout />}>
        <Route index element={<BookListPage />} />
      </Route>

      <Route path='*' element={<NotFoundPage />} />
    </Routes>
  );
};

export default App;
