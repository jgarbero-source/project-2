import React from "react";
import Typography from "@mui/material/Typography";
import CatContainer from "./CatContainer";

function Favorites({ favoriteCats, handleCatUpdate, deleteCat }) {
  return (
    <div>
      <Typography variant="h4" gutterBottom component="div">
        Favorites
      </Typography>
      <CatContainer
        catData={favoriteCats}
        handleCatUpdate={handleCatUpdate}
        deleteCat={deleteCat}
      />
    </div>
  );
}

export default Favorites;
