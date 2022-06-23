import React from "react";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

function Home() {
  return (
    <Container maxWidth="lg">
      <Typography variant="h4" gutterBottom component="div">
        Welcome to our site!
      </Typography>
      <Typography variant="h4" gutterBottom component="div">
        Feel free to search our vast array of cats and choose your favorites!
      </Typography>
    </Container>
  );
}

export default Home;
