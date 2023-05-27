import React from 'react';

const Header = ({ homeLink, contactsLink, aboutLink }) => {
  return (
    <header>
      <h1>SPA test </h1>
      <nav className='nav'>
          <div className='nav__item'>{homeLink}</div>
          <div className='nav__item'>{contactsLink}</div>
          <div className='nav__item'>{aboutLink}</div>

      </nav>
    </header>
  );
};

export default Header;
