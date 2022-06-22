import React from 'react';
import { NavLink } from 'react-router-dom';

function NavBar() {
  return (
    <nav>
      <NavLink exact to='/'>
        Home
      </NavLink>
      <NavLink exact to='/search'>
        Search
      </NavLink>
      <NavLink exact to='/form'>
        Add Cat
      </NavLink>
      <NavLink exact to='/favorites'>
        Favorites
      </NavLink>
    </nav>
  );
}

export default NavBar;
