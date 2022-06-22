import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

function CatItem({
  isFavorite,
  age,
  gender,
  size,
  image,
  breed,
  id,
  handleCatUpdate,
  deleteCat,
}) {
  function handleFavorite() {
    isFavorite = !isFavorite;
    console.log(isFavorite);
    console.log(id);

    fetch(`http://localhost:3000/cats/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ isFavorite: isFavorite }),
    })
      .then((r) => r.json())
      .then((favCat) => handleCatUpdate(favCat));
  }

  function handleDelete() {
    fetch(`http://localhost:3000/cats/${id}`, {
      method: "DELETE",
    });

    deleteCat(id);
  }
  //
  return (
    <Grid item xs={4}>
      <Box sx={{ width: 270, p: 2, border: "1px solid lightgrey" }}>
        <Typography variant="subtitle1" gutterBottom component="div">
          {breed}
        </Typography>
        <Typography variant="subtitle2" gutterBottom component="div">
          {age} | {size} | {gender}
        </Typography>
        <img src={image} alt={breed} width="250" height="250" />
        <ButtonGroup variant="text" aria-label="text button group">
          <Button onClick={handleFavorite}>
            {isFavorite ? "Unfavorite" : "Favorite"}
          </Button>
          <Button onClick={handleDelete}>Delete</Button>
        </ButtonGroup>
      </Box>
    </Grid>
  );
}

export default CatItem;
