import React from "react";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import CatContainer from "./CatContainer";

function Favorites({ favoriteCats, handleCatUpdate, deleteCat }) {
  return (
    <Container maxWidth="lg">
      <Typography variant="h4" gutterBottom component="div">
        Favorites
      </Typography>
      <CatContainer
        catData={favoriteCats}
        handleCatUpdate={handleCatUpdate}
        deleteCat={deleteCat}
      />
    </Container>
  );
}

export default Favorites;
