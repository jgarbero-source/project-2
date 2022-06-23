import React from "react";
import Typography from "@mui/material/Typography";

function Header() {
  return (
    <div className="header">
      <Typography variant="h2" gutterBottom component="div">
        <img
          src="https://www.pngall.com/wp-content/uploads/2016/03/Cat-PNG-13.png"
          alt="cat"
          width="90"
          height="64"
          title="MEOW"
          className="kitty"
        />
        The Kitty Collective
      </Typography>
    </div>
  );
}

export default Header;
