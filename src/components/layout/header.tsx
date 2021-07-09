import Link from 'next/link';
import { _Header } from './header.style';
import { FiMenu, FiMessageSquare, FiSearch } from 'react-icons/fi';

const Header = () => (
  <_Header>
    <div className="wrapper">
      <div className="menu">
        <a href="#" onClick={(e) => e.preventDefault()}>
          <FiMenu size={'1.5rem'} color={'#000'} />
        </a>
      </div>
      <div className="logo">
        <h2>
          <Link href="/">
            <a>
              <FiMessageSquare size={'1.5rem'} color={'#000'} />
              쇼핑하기
            </a>
          </Link>
        </h2>
      </div>
      <div className="search">
        <Link href="/search">
          <a>
            <FiSearch size={'1.5rem'} color={'#000'} />
          </a>
        </Link>
      </div>
    </div>
  </_Header>
);

export default Header;
