import React from "react";
import CatItem from "./CatItem";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

function CatContainer({ catData, handleCatUpdate, deleteCat }) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={1}>
        {catData.map((cat) => (
          <CatItem
            key={cat.id}
            id={cat.id}
            isFavorite={cat.isFavorite}
            age={cat.age}
            gender={cat.gender}
            size={cat.size}
            image={cat.image}
            breed={cat.breed}
            handleCatUpdate={handleCatUpdate}
            deleteCat={deleteCat}
          />
        ))}
      </Grid>
    </Box>
  );
}

export default CatContainer;
