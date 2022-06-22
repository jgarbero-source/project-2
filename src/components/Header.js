import React from 'react';

function Header() {
  return (
    <div className='header'>
      <h2>
        <img
          src='https://www.pngall.com/wp-content/uploads/2016/03/Cat-PNG-13.png'
          alt='cat'
          width='90'
          height='64'
          title='MEOW'
          className='kitty'
        />
        Welcome to the Kitty Collective!
      </h2>
    </div>
  );
}

export default Header;
