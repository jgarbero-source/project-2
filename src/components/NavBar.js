import React from "react";
import { NavLink } from "react-router-dom";
import Typography from "@mui/material/Typography";
function NavBar() {
  return (
    <nav>
      <NavLink exact to="/">
        <Typography variant="button" display="block" gutterBottom>
          Home
        </Typography>
      </NavLink>
      <NavLink exact to="/search">
        <Typography variant="button" display="block" gutterBottom>
          Search
        </Typography>
      </NavLink>
      <NavLink exact to="/form">
        <Typography variant="button" display="block" gutterBottom>
          Add Cat
        </Typography>
      </NavLink>
      <NavLink exact to="/favorites">
        <Typography variant="button" display="block" gutterBottom>
          Favorites
        </Typography>
      </NavLink>
    </nav>
  );
}

export default NavBar;
