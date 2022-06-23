import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";

import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

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
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia component="img" src={image} alt={breed} height="250" />
        <CardContent>
          <Typography variant="subtitle1" gutterBottom component="div">
            {breed}
          </Typography>
          <Typography variant="subtitle2" gutterBottom component="div">
            {age} | {size} | {gender}
          </Typography>
        </CardContent>
        <CardActions>
          <Button onClick={handleFavorite}>
            {isFavorite ? "Unfavorite" : "Favorite"}
          </Button>
          <Button onClick={handleDelete}>Delete</Button>
        </CardActions>
      </Card>
    </Grid>
  );
}

export default CatItem;
