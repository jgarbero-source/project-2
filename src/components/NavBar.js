import React from 'react';
import { NavLink } from 'react-router-dom';

function NavBar() {
  return (
    <>
      <NavLink exact to='/'>
        Home
      </NavLink>
      <NavLink exact to='/search'>
        Search
      </NavLink>
      <NavLink exact to='/favorites'>
        Favorites
      </NavLink>
    </>
  );
}

export default NavBar;
