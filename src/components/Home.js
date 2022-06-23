import React from "react";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";

function Home() {

  const gifURL = "https://media3.giphy.com/media/GeimqsH0TLDt4tScGw/giphy.gif"

  return (
    <Container maxWidth="lg">
      <Typography variant="h4" gutterBottom component="div">
        Welcome to the Kitty Collective!
      </Typography>
      <Typography variant="h4" gutterBottom component="div">
        Feel free to search our vast array of cats, choose your favorites, and add to our collection!
      </Typography>
      <Grid 
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justify="center">
        <Card sx={{ maxWidth: 500 }}>
          <CardMedia component="img" src={gifURL} height="400" width="500"/>
        </Card>
      </Grid>
    </Container>
  );
}

export default Home;
