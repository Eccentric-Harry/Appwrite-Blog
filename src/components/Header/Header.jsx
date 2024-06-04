import React from 'react';
import { LogoutBtn, Container, Logo } from '../index';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function Header() {
  const authStatus = useSelector((state) => state.auth.status);
  const navigate = useNavigate();

  const navItems = [
    {
      name: 'HOME',
      slug: '/',
      active: true
    },
    {
      name: 'LOGIN',
      slug: '/login',
      active: !authStatus
    },
    {
      name: 'REGISTER',
      slug: '/signup',
      active: !authStatus
    },
    {
      name: 'ALL BLOGS',
      slug: '/all-posts',
      active: authStatus
    },
    {
      name: 'ADD BLOG',
      slug: '/add-post',
      active: authStatus
    }
  ];

  return (
    <header className='py-3 shadow-sm bg-gray-900'>
      <Container>
        <nav className='flex items-center justify-between'>
          <div className='mr-4'>
            <Link to='/'>
              <Logo width='70px' />
            </Link>
          </div>
          <div className='flex-grow flex justify-end'>
            <ul className='flex space-x-4'>
              {navItems.map((item) =>
                item.active ? (
                  <li key={item.name}>
                    <button
                      onClick={() => navigate(item.slug)}
                      className='inline-block text-white bg-transparent duration-200 hover:bg-gray-700 rounded-md px-2 py-1 text-sm md:text-base md:px-4 md:py-2'
                    >
                      {item.name}
                    </button>
                  </li>
                ) : null
              )}
              {authStatus && (
                <li>
                  <LogoutBtn />
                </li>
              )}
            </ul>
          </div>
        </nav>
      </Container>
    </header>
  );
}

export default Header;
