import { Link, Outlet } from 'react-router';
import './AppLayout.css';

const AppLayout = () => {
  return (
    <>
      <header className='header'>
        <h1 className='header__title'>몽총이 도서</h1>
        <nav className='nav'>
          <ul className='nav__list'>
            <li>
              <Link to={'/'} className='nav__link'>
                홈
              </Link>
            </li>
            <li>
              <Link to={'/like'} className='nav__link'>
                내가 찜한 도서
              </Link>
            </li>
            <li>
              <Link to={'/sign-in'} className='nav__link'>
                로그인
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      <div className='search'>
        <h2 className='search__title'>몽총이 도서</h2>
        <form className='search__form'>
          <input type='text' className='search__input' placeholder='제목, 작가' />
          <button type='submit' className='search__button'>
            검색
          </button>
        </form>
      </div>
      <Outlet />
    </>
  );
};

export default AppLayout;
