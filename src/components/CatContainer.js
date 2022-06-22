import React from "react";
import CatItem from "./CatItem";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

function CatContainer({ catData, handleCatUpdate, deleteCat }) {
  //create some if conditional that selects one div over the other? I don't think that's how this works.
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={1}>
        {catData.map((cat) => (
          <Grid item xs={4}>
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
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default CatContainer;
