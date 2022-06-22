import React from "react";
import Typography from "@mui/material/Typography";

function Home() {
  return (
    <div>
      <Typography variant="h4" gutterBottom component="div">
        Welcome to our site!
      </Typography>
      <Typography variant="h4" gutterBottom component="div">
        Feel free to search our vast array of cats and choose your favorites!
      </Typography>
    </div>
  );
}

export default Home;
