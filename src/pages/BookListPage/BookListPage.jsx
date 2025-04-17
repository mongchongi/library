import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import './BookListPage.css';

const BookListPage = () => {
  const getBooks = () => {
    return axios.get('https://openlibrary.org/subjects/love.json');
  };

  const { isLoading, error, data } = useQuery({
    queryKey: ['books'],
    queryFn: getBooks,
    select: (result) => result.data.works,
  });

  console.log(data);

  return (
    <div className='book-list-container'>
      <div className='book-list-container__title'>인기 도서</div>
      <div className='book-list'>
        {data?.map((book) => (
          <div className='book' key={book.key}>
            <img src='https://placehold.co/600' alt={book.title} className='book__image' />
            <div className='book__info'>
              <div className='book__title'>{book.title}</div>
              <div className='book__author'>{book.authors[0].name}</div>
            </div>
            <button className='book__like'>♥</button>
          </div>
        ))}
        <img src='OL38586477M' alt='' />
      </div>
    </div>
  );
};

export default BookListPage;
