import React, { useState } from "react";
import { SelectChangeEvent } from "@mui/material/Select";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import CatContainer from "./CatContainer";
import OptionPicker from "./OptionPicker";
import Card from "@mui/material/Card";

function Search({ catData, handleCatUpdate, deleteCat }) {
  const [filterChoice, setFilterChoice] = useState({
    age: "",
    size: "",
    gender: "",
    breed: "",
  });

  const handleSelection = (e: SelectChangeEvent) => {
    const { name, value } = e.target;
    setFilterChoice({ ...filterChoice, [name]: value });
  };

  const filterCats = () => {
    // Reducing copy of filter object to just key:value pairs where filter value has been set
    const asArray = Object.entries(filterChoice);
    const filtered = asArray.filter(([key, value]) => value !== "");
    const activeFilters = Object.fromEntries(filtered);

    let filteredCats = [];
    let remainingFilteredCats = [...catData];

    // Applying each of the active filters to the cat array
    for (let i in activeFilters) {
      filteredCats = remainingFilteredCats;
      remainingFilteredCats = filteredCats.filter(
        (cat) => cat[i] === filterChoice[i]
      );
    }
    return remainingFilteredCats;
  };

  return (
    <Container maxWidth="lg" sx={{ paddingTop: "5px" }}>
      <Typography variant="h4" gutterBottom component="div">
        Search
      </Typography>
      {/* <Stack spacing={2}> */}
      <Card
        sx={{
          position: "sticky",
          opacity: 1,
          top: "63px",
          marginBottom: "10px",
          maxWidth: "595px",
          paddingTop: "5px",
          backgroundColor: "#ffffff",
          zIndex: 1001,
        }}
      >
        <OptionPicker
          catData={catData}
          filterChoice={filterChoice}
          onSelection={handleSelection}
        />
      </Card>
      <CatContainer
        catData={filterCats()}
        handleCatUpdate={handleCatUpdate}
        deleteCat={deleteCat}
      />
      {/* </Stack> */}
    </Container>
  );
}

export default Search;
